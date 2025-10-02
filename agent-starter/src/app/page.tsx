// app/page.tsx
"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const askAgent = async () => {
    // TODO: Call our /api/agent endpoint
    setAnswer("Agent not connected yet");
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-xl border p-6">
        <h1 className="text-2xl font-bold mb-4">🤖 AI Agent Demo</h1>

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
      </div>
    </main>
  );
}
