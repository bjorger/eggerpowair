require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
var cors = require('cors')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
    // Sending our HTML file to browser.
    res.sendFile(__dirname + "/index.html");
});

app.post("/verify-captcha", function (req, res) {
    // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if (req.body["g-recaptcha-response"] === undefined || req.body["g-recaptcha-response"] === "" || req.body["g-recaptcha-response"] === null) {
        return res.json({ responseCode: 1, responseDesc: "Please select captcha" });
    }
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${req.body["g-recaptcha-response"]}&remoteip=${req.socket.remoteAddress}`;

    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            return res.json({ responseCode: 1, responseDesc: "Failed captcha verification" });
        }
        res.json({ responseCode: 0, responseDesc: "Sucess" });
    });
});

// This will handle 404 requests.
app.use("*", function (req, res) {
    res.status(404).send("404");
});

// lifting the app on port 3000.
app.listen(process.env.PORT);
console.info(`Running on port ${process.env.PORT}`);