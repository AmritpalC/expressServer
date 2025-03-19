const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // allows handling of JSON request bodies for POST & PUT requests

const port = 3000;

app.listen(port, () => {
  console.log("Now listening on port", port);
});

// GET "/cats"
app.get("/cats", (req, res) => {
  const data = { catsArray: ["Ragdoll", "Moggie", "Siamese"] };
  res.send(data);
});

// ? Challenge
// GET "/me"
app.get("/me", (req, res) => {
  const data = { name: "Amritpal Chahal" };
  res.send(data);
});

// GET "/cities"
app.get("/cities", (req, res) => {
  const data = { cityList: ["Nairobi", "Tokyo", "Helsinki", "Berlin"] };
  res.send(data);
});

app.get("/countries", (req, res) => {
  const data = {
    countriesList: [
      {
        country: "France",
        language: "French",
        id: 1,
      },
      {
        country: "Spain",
        language: "Spanish",
        id: 2,
      },
    ],
  };

  res.send(data);
});

// ? Challenges Extension - Dynamic Endpoints
// GET "/count" -> increment every time it is visited
let count = 0;

app.get("/count", (req, res) => {
  count++;
  const data = { endPointHitCount: count };
  res.send(data);
});

// Get "/time" -> time since endpoint was last hit
let lastHitTime = Date.now();

app.get("/time", (req, res) => {
  const timeNow = Date.now();
  const timeDiff = (timeNow - lastHitTime) / 1000;

  const data = { timeSinceEndpointHitInSeconds: timeDiff };

  res.send(data);
  lastHitTime = timeNow;
});
