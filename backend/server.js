// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const cors = require('cors');
// const app = express();
// const port = 5000;
// const filePath = './users.json';

// app.use(bodyParser.json());
// app.use(cors({origin: '*'}));

// // Read users
// app.get('/users', (req, res) => {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error reading user data' });
//     }
//     res.json(JSON.parse(data));
//   });
// });

// // Save users
// app.post('/users', (req, res) => {
//   const users = req.body;
//   fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error saving user data' });
//     }
//     res.json({ message: 'User data saved successfully' });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const filePath = './users.json';

// Middleware
app.use(bodyParser.json());

// Secure CORS setup for production
const allowedOrigins = ['http://localhost:3000', 'https://espressoamore.vercel.app'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Read users
app.get('/users', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading user data:', err);
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
      console.error('Error saving user data:', err);
      return res.status(500).json({ error: 'Error saving user data' });
    }
    res.json({ message: 'User data saved successfully' });
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
