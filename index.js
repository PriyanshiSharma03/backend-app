const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // This allows our server to read JSON in requests

// POST endpoint
app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));

  res.json({
    is_success: true,
    user_id: "your_name_01012000",
    email: "your_email@example.com",
    roll_number: "123456",
    numbers,
    alphabets,
    highest_alphabet: alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : []
  });
});

// GET endpoint
app.get('/bfhl', (_req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
