// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.AC6e86adae5a8472d4241290d8f16c63dd;
const authToken = process.env.ded620b30d718dd27fcaf7aa4a9e84da;
const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "Hi there",
    from: "+15557122661",
    to: "+15558675310",
  });

  console.log(message.body);
}

createMessage();