import type { ChatCompletionTool } from "openai/resources/chat/completions";

// Tool definitions (what GPT sees)
export const tools: ChatCompletionTool[] = [
  // 👇 LIVE-CODE THIS PART on screen
  /*
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
  */
  // 👇 COPY/PASTE THESE LATER
  /*
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
  },
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
  },
  */
];

// Tool implementations (how they actually work)
export async function runTool(name: string, args: any) {
  // 👇 LIVE-CODE THIS PART
  /*
  if (name === "calculator") {
    try {
      // ⚠️ demo only — eval is unsafe in production
      // eslint-disable-next-line no-eval
      return eval(args.expression);
    } catch {
      return "Error evaluating expression";
    }
  }
  */

  // 👇 COPY/PASTE THESE LATER
  /*
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
  */

  return "Unknown tool";
}
