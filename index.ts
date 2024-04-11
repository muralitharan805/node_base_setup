import express = require("express");

const app = express();
const port = 3000;

app.get("/", (request: express.Request, response: express.Response) => {
  response.send("hell0s");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
console.log("heloss");
