// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.static('public'));  // Serve static files

// Route for the root page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Backend Server!</h1>');  // Simple message for root route
});

// Route for Hello
app.get('/api/hello', (req, res) => {
  console.log("Received request for /api/hello");
  res.json({ message: 'Hello from the backend!' });
});

// Route for Goodbye
app.get('/api/goodbye', (req, res) => {
  console.log("Received request for /api/goodbye");
  res.json({ message: 'Goodbye from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
