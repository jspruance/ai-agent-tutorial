import { NextResponse } from "next/server";
import OpenAI from "openai";
import { tools, runTool } from "./tools";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const { query } = await req.json();
    console.log("Incoming query:", query);

    // 1) First request: ask GPT with tools available
    const first = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [{ role: "user", content: query }],
      tools,
    });

    const msg = first.choices[0].message;

    // 2) If GPT decides to call a tool
    if (msg.tool_calls?.length) {
      const results = await Promise.all(
        msg.tool_calls.map(async (call: any) => {
          const args = JSON.parse(call.function.arguments || "{}");
          const result = await runTool(call.function.name, args);
          return {
            tool_call_id: call.id,
            name: call.function.name,
            result,
          };
        })
      );

      // 3) Send tool outputs back for final reasoning
      const final = await client.chat.completions.create({
        model: "gpt-4.1",
        messages: [
          { role: "user", content: query },
          msg,
          ...results.map((r) => ({
            role: "tool" as const,
            tool_call_id: r.tool_call_id,
            content: JSON.stringify(r.result),
          })),
        ],
      });

      return NextResponse.json({
        answer: final.choices[0].message?.content || "(no answer)",
      });
    }

    // 4) If no tools needed
    return NextResponse.json({ answer: msg.content });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
