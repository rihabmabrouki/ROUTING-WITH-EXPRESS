const express = require("express");
const contactrouter = require("./contact");
const app = express();

let hour = new Date().getHours();

app.get("/", (req, res) => {
  if (hour > 8 && hour < 17)
   res.sendFile(__dirname + "/public/home.html");
  else res.send("<h1> Our office is not open now </h1>");
});

app.use(express.static(__dirname + '/public'));

app.get("/home", (req, res) => {
    res.send("<h1> hello from HOME page </h1>");
  });

app.get("/ourservice", (req, res) => {
  res.send("<h1> hello from OURSERVISE page </h1>");
});

app.use(contactrouter);

app.use((req, res) => {
  res.send("404 not found");
});

app.listen(3000, err => {
  if (err) console.log("server is not runnig");
  else console.log("server is runnig");
});
