# VibeCheck-Activity3SeanChristian1


# VibeCheck 411L (CPE 411L Activity #3)

## Description
VibeCheck is a simple Node.js + Express backend API with a frontend page that allows users to fetch fortunes, jokes, mood vibes, and interact with a smash counter. The project demonstrates API development, fetch requests in frontend, and GitHub workflow with feature branches and Pull Requests.

---

## Folder Structure

VibeCheck-Activity3SeanChristian1/
├─ backend/
│ ├─ index.js
│ └─ package.json
├─ frontend/
│ ├─ index.html
│ └─ app.js


---

## How to Run

### 1. Backend
1. Open terminal → go to backend folder:


cd backend

2. Install dependencies:


npm install

3. Run server:


node index.js

4. Server runs at:


http://localhost:3000


### 2. Frontend
1. Open `frontend/index.html` in your browser.
2. Make sure backend is running first.
3. Click buttons to fetch API data and see output.

---

## API Endpoints

### GET /api/fortune
Returns a random fortune.
```json
{ "fortune": "Your next commit will be clean and meaningful." }

GET /api/joke

Returns a random joke.

{ "joke": "Why did the developer go broke? Because they used up all their cache." }

GET /api/vibe?mood=happy|tired|stressed

Returns mood emoji and message.

{ "mood": "happy", "emoji": "😄", "message": "Keep going - you're shipping greatness!" }

POST /api/smash

Increments smash counter.

{ "smashes": 1 }

GET /api/smashes

Returns current smash counter.

{ "smashes": 1 }

GET /api/secret?code=411L

Returns a secret message if correct code.

{ "message": "🎉 Secret unlocked: +10 luck on your next merge!" }
