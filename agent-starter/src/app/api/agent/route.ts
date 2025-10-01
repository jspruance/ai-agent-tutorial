// app/api/agent/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { tools, runTool } from "./tools";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    // TODO: Call OpenAI with tools
    // Step 1: Ask GPT with tools
    // Step 2: If GPT calls a tool → run it
    // Step 3: Send result back for reasoning
    // Step 4: Return final answer

    // Placeholder response until the agent logic is implemented
    return NextResponse.json({ answer: "Agent not implemented yet" });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
