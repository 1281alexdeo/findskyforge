const express = require('express');
const bodyParser = require('body-parser');
const email = require('./Routes/api/email');
const path = require('path');
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use Routes
app.use('/api/email', email);

if (process.env.NODE_ENV === 'production') {
  //set a static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); //make sure bring in path module
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`your sever is now running on port ${port}`)
);
