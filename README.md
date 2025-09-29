# 🚀 OpenAI Agent Tutorial – Starter Repo

This is the **starter code** for my YouTube tutorial:  
👉 _“Your First AI Agent (Next.js + OpenAI Tool Calling)”_

We’ll start from a fresh **Next.js 15 project** with:

- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ App Router
- ✅ `@/*` import alias

In the tutorial, we’ll add the code that turns this into a working **AI Agent**.

---

## 📦 Setup

Clone this repo:

```bash
git clone https://github.com/jspruance/ai-agent-tutorial.git
cd openai-agent-tutorial-starter
```

Install dependencies:

```bash
npm install
```

Add your OpenAI API key (not yet used, but needed later):

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

You should see a **blank Next.js app** with Tailwind installed.

---

## 🗂️ Project Structure

```
src/
 └── app/
      ├── page.tsx       # Simple placeholder page
      └── api/           # Agent code will go here in the tutorial
```

---

## 📚 References

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/guides/nextjs)
- [OpenAI Docs](https://platform.openai.com/docs/guides/function-calling)

---

👉 This repo is just the **starting point**.  
Follow the tutorial to build out your **first AI Agent** step by step!
