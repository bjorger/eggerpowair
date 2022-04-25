require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
var cors = require('cors')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/verify-captcha", function (req, res) {
    if (req.body["g-recaptcha-response"] === undefined || req.body["g-recaptcha-response"] === "" || req.body["g-recaptcha-response"] === null) {
        return res.json({ responseCode: 1, responseDesc: "Please select captcha" });
    }
    console.info('Verifying captcha')
    var verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${req.body["g-recaptcha-response"]}&remoteip=${req.socket.remoteAddress}`;

    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
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

app.listen(process.env.PORT);
console.info(`Running on port ${process.env.PORT}`);