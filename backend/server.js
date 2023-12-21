const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000; // Define your desired port

// Define routes or API endpoints here
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Serve React frontend (build) - Example for serving static files
app.use(express.static('build')); // Replace 'build' with your React build folder

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
