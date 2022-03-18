import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
  console.log();
  console.log(`Listening on Port ${port}`);
});
