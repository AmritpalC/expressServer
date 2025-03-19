const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log("Now listening on port", port);
});

// GET "/cats"
app.get("/cats", (req, res) => {
  const data = { catsArray: ["Ragdoll", "Moggie", "Siamese"] };

  res.send(data);
});
