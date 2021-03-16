const app = require('./index.js');

const port = 3000;

app.listen(port, () => {
  console.log(`Bowling app listening at http://localhost${port}`)
});