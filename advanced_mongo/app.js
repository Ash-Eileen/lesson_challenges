const express = require( 'express' )
const fetch = require('node-fetch')
const fs = require('fs')
const cors = require('cors')
const mongoose = require('mongoose')
const commentsRouter = require('./routes/comments_routes');

const port = process.env.port || 3000;

const app = express();

app.use(cors());
app.use(express.json());

const dbConn = "mongodb://localhost:27017/comments_app"

// Connect to mongo db
mongoose.connect(
  dbConn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) {
      console.log("Error connecting to database", err)
    } else {
      console.log("Connected to database!")
    }
  }
)

app.get('/', (req, res) => {
  console.log('get on /');
  res.send(`It's alive`);
})

app.use('/comments', commentsRouter);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});