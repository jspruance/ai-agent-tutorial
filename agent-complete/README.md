# 🤖 OpenAI Agent Tutorial – Final Project

This is the **completed code** from my YouTube tutorial:  
👉 _“Your First AI Agent (Next.js + OpenAI Tool Calling)”_

We built a simple AI Agent that can:

- Answer normal chat questions
- Call a **calculator tool** for math
- Call a **weather tool** for forecasts
- Combine results into a final smart answer

---

## 📦 Setup

Clone this repo:

```bash
git clone https://github.com/jspruance/ai-agent-tutorial.git
cd openai-agent-tutorial-final
```

Install dependencies:

```bash
npm install
```

Add your OpenAI API key:

```bash
# .env.local
OPENAI_API_KEY=your_api_key_here
```

---

## ▶️ Run the Dev Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
src/
 └── app/
      ├── page.tsx          # Simple frontend UI
      └── api/
           └── agent/
                ├── tools.ts  # Tool definitions + implementations
                └── route.ts  # API route (calls OpenAI + tools)
```

---

## 🛠️ Tools Implemented

### 🔢 Calculator

- Evaluates basic math expressions
- Example: `25 * 17` → `425`

### 🌦️ Weather (Mock)

- Returns a fake forecast (replace with real API later)
- Example: `Paris tomorrow` → `{ forecast: "Rainy", temperature: "15°C" }`

---

## 🎮 Demo Scenarios

1. **Math Only**

   ```
   What is 25 times 17?
   ```

   ✅ Agent calls calculator tool

2. **Weather Only**

   ```
   What’s the weather tomorrow in Paris?
   ```

   ✅ Agent calls weather tool

3. **Multi-step Reasoning**
   ```
   If 25 * 17 is X, and it’s rainy tomorrow in Paris, should I bring an umbrella?
   ```
   ✅ Agent calls **both tools** and combines results

---

## 📚 References

- [OpenAI Tool Calling Docs](https://platform.openai.com/docs/guides/function-calling)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)

---

## 🌟 Extend the Agent

Want to keep going? Add new tools:

- 📈 Currency converter (exchange rates)
- 😂 Joke generator
- 🔍 Web search
- 🗂️ Knowledge base lookup

---

👉 By the end of the tutorial, you’ll have a **working AI Agent** you can extend into your own SaaS projects.
