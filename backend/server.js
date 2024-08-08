const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;
const filePath = './users.json';

app.use(bodyParser.json());
app.use(cors());

// Read users
app.get('/users', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading user data' });
    }
    res.json(JSON.parse(data));
  });
});

// Save users
app.post('/users', (req, res) => {
  const users = req.body;
  fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving user data' });
    }
    res.json({ message: 'User data saved successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
