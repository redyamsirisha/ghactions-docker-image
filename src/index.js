const express = require('express');
const app = express();
const port = 3000;

// Import routes from other-files.js
const otherRoutes = require('./other-files');

// Use the imported routes
app.use('/api', otherRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
