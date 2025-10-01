// app/api/agent/tools.ts

import type { ChatCompletionTool } from "openai/resources/chat/completions";

// Tools available to the AI agent
export const tools: ChatCompletionTool[] = [];

// Tool implementations (to be added later)
export async function runTool(name: string, args: any) {
  return "Unknown tool";
}
