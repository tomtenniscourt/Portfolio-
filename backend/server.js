const express = require('express');
const app = express();

// Define your routes and middleware here

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
