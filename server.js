const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4600;
const routes = require('./server/routes/routes');

// Using Middleware
app.use(express.static(path.join(__dirname, 'dist/ang-node')));
app.use('/routes', routes);

// Catch all other routes request and return it to the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ang-node/index.html'))
});

// Listening the PORT of application
app.listen(PORT, (req, res) => console.log(`Server Running on ${PORT}`));
