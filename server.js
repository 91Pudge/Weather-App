const express = require("express");
const app = express();
require("dotenv").config();
process.env.API_KEY;

app.get("/", (req, res) => {
	res.sendFile("/Users/josh/Desktop/Weather App/public/app.html");
});

// serve any HTML files located in /Users/name/Desktop/Weather App/public
app.use(express.static("/Users/josh/Desktop/Weather App/public"));

app.listen(3000, () => {
	console.log("listening at 3000");
});
