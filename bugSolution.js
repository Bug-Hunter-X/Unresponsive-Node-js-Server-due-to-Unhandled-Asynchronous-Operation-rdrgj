const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 5000)); // Use Promise for asynchronous operation
    res.send('Hello World!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});