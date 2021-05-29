import express from 'express';
import "dotenv/config";
// const env = dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!');
});

app.listen(3000, () =>
  console.log('Hello Proj. App listening on port 3000!'),
  console.log(process.env.MY_SECRET),
);

