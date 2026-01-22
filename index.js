// Smash counter (stored in memory)
let smashes = 0;

// POST /api/smash -> increases counter and returns the updated value
app.post("/api/smash", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

// GET /api/smashes -> returns current counter
app.get("/api/smashes", (req, res) => {
  res.json({ smashes });
});
