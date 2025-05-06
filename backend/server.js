const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const port = 5001;

require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());

app.post('/send-text', (req, res) => {
    const { phoneNumber, date } = req.body;

    console.log("📦 Received request body:", req.body); 

    twilioClient.messages
        .create({
            body: `Thanks for signing up for the food recovery route on ${date}!`,
            from: twilioPhoneNumber,
            to: phoneNumber
        })
        .then(message => {
            console.log("Message sent:", message.sid);
            res.status(200).send({ success: true });
        })
        .catch(error => {
            console.error("Twilio error:", error); 
            res.status(500).send({ success: false, message: error.message });
        });
});

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});