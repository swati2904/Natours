const express = require('express');
const app = express();

//define route - how application reposone for particular http method req.

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
