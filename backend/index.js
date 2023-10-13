const express = require("express");
const app = express();

app.get("/", function (req, res) {
  return res.json({ success: true, message: "Hello there :)" });
});

app.post("/", function (req, res) {
  return res.json({ message: "Welcome :>", success: true });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mycustomframe-93aef-default-rtdb.firebaseio.com"
});
