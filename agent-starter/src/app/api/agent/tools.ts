// app/api/agent/tools.ts

import type { ChatCompletionTool } from "openai/resources/chat/completions";

// Tools available to the AI agent
export const tools: ChatCompletionTool[] = [
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
  },
];

// Tool implementations (to be added later)
export async function runTool(name: string, args: any) {
  if (name === "calculator") {
    try {
      // ⚠️ demo only — eval is unsafe in production
      // eslint-disable-next-line no-eval
      return eval(args.expression);
    } catch {
      return "Error evaluating expression";
    }
  }

  return "Unknown tool";
}
