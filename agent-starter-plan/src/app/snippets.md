# 📄 Code Snippets for AI Agent Demo

```ts
// 🔹 Tools
// Calculator tool
{
  type: "function",
  function: {
    name: "calculator",
    description: "Evaluate basic math expressions",
    parameters: {
      type: "object",
      properties: {
        expression: { type: "string" },
      },
      required: ["expression"],
    },
  },
}

// Calculator tool implementation
if (name === "calculator") {
  try {
    // ⚠️ demo only — eval is unsafe in production
    // eslint-disable-next-line no-eval
    return eval(args.expression);
  } catch {
    return "Error evaluating expression";
  }
}


// Weather Tool Definition
{
  type: "function",
  function: {
    name: "getWeather",
    description: "Get the weather for a given location and date",
    parameters: {
      type: "object",
      properties: {
        location: { type: "string" },
        date: { type: "string" },
      },
      required: ["location", "date"],
    },
  },
}

// Joke Tool Definition
{
  type: "function",
  function: {
    name: "tellJoke",
    description: "Return a random programming joke",
    parameters: {
      type: "object",
      properties: {},
    },
  },
}

// Weather + Joke Implementations
if (name === "getWeather") {
  return { forecast: "Rainy", temperature: "15°C" };
}

if (name === "tellJoke") {
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "There are 10 types of people in the world: those who understand binary and those who don’t.",
    "I would tell you a UDP joke, but you might not get it.",
  ];
  return jokes[Math.floor(Math.random() * jokes.length)];
}

// 🔹 API Route Logic (replace placeholder in route.ts)

// 1) First request: ask GPT with tools
const first = await client.chat.completions.create({
  model: "gpt-4.1",
  messages: [{ role: "user", content: query }],
  tools,
});

const msg = first.choices[0].message;
// optional logging
console.log("Tool calls:", msg.tool_calls);

// 2) If GPT decides to call a tool
if (msg.tool_calls?.length) {
  const results = await Promise.all(
    msg.tool_calls.map(async (call: any) => {
      const args = JSON.parse(call.function.arguments || "{}");
      const result = await runTool(call.function.name, args);
      return { tool_call_id: call.id, result };
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

// 🔹 Frontend Fetch Logic (replace placeholder in page.tsx)
const askAgent = async () => {
  setAnswer("");
  setLoading(true);
  try {
    const res = await fetch("/api/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setAnswer(data.answer || data.error || "(no answer)");
  } catch (err) {
    console.error(err);
    setAnswer("❌ Something went wrong");
  } finally {
    setLoading(false);
  }
};


// 🔹 Input + Button (UI in page.tsx)

<input
  className="border p-2 w-full mb-2"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Ask me something..."
/>
<button
  onClick={askAgent}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Ask
</button>
{answer && <p className="mt-4">🤖 {answer}</p>}
```
