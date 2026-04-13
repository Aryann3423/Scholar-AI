# ✦ ScholarAI — AI College Counselor

A polished, AI-powered college counseling platform with interactive onboarding, personalized recommendations, chatbot, and voice input.

## 🚀 Deploy to Vercel in 3 Steps

### Step 1 — Push to GitHub
1. Go to [github.com/new](https://github.com/new)
2. Create a new repo called `scholar-ai`
3. Upload all these files (drag & drop the folder), or use:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/scholar-ai.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click **"Add New Project"**
3. Import your `scholar-ai` GitHub repo
4. Vercel auto-detects React — just click **"Deploy"**
5. ✅ Your site is live in ~60 seconds!

### Step 3 — Get your link
- Vercel gives you a free URL like: `https://scholar-ai-xyz.vercel.app`
- Share it with anyone!

---

## 💻 Run Locally

```bash
npm install
npm start
```
Opens at http://localhost:3000

## 📁 Project Structure

```
scholar-ai/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Auth.js          # Login + OTP signup
│   │   ├── Onboarding.js    # 5-step profile setup
│   │   ├── ScenarioGame.js  # Interest discovery game
│   │   ├── Dashboard.js     # Main app shell + navigation
│   │   ├── CollegeCard.js   # Reusable college card
│   │   ├── CollegeDetail.js # Full college page
│   │   └── Chat.js          # AI chat + voice input
│   ├── data/
│   │   └── index.js         # Colleges, scenarios, AI responses
│   ├── App.js               # Root component + routing
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── vercel.json              # Vercel config
└── package.json
```

## ✨ Features

- 🔐 Auth (Login + OTP Signup)
- 🎮 Interactive onboarding (5 steps + interest game)
- 🎓 8 global college recommendations with match scores
- 💬 AI chat counselor (context-aware responses)
- 🎙️ Voice input (browser Speech API)
- 🔖 Save/bookmark colleges
- 📊 Dashboard with stats & activity
- 🔔 Deadline & scholarship notifications
- 👤 Profile page with interest tags
- 📱 Fully responsive

## 🔮 To Add Real AI (Optional)

Replace the `getAIResponse` function in `src/data/index.js` with an OpenAI API call:

```js
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: 'gpt-4', messages: [{ role: 'user', content: msg }] })
});
```

Add `REACT_APP_OPENAI_KEY=your_key` to Vercel environment variables.
