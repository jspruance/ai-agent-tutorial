"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAgent = async () => {
    setLoading(true);
    setAnswer("");
    const res = await fetch("/api/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setAnswer(data.answer || "No response");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-slate-700">
        <h1 className="text-3xl font-bold mb-4 text-center">
          🤖 AI Agent Demo
        </h1>
        <p className="text-slate-300 text-center mb-6">
          Ask me math questions, check the weather, or even get a programming
          joke!
        </p>

        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your question here..."
          />
          <button
            onClick={askAgent}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-colors"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </div>

        {answer && (
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
            <p className="text-slate-200 whitespace-pre-wrap">{answer}</p>
          </div>
        )}
      </div>
    </main>
  );
}
