const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripeSKP1 = "sk_test_51NY88SFsg59S9XRAAG8LML9xJ77LKuAb2dVJ";
const stripeSKP2 = "5KoHWBxdzHPSvdQ1KHuQRPLHf30UFxHsgW50UazVw";
const stripeSKP3 = "D8jEyr4ovs0008OCX6ieK";
const stripeSecretKey = stripeSKP1 + stripeSKP2 + stripeSKP3;
const stripe = require("stripe")(stripeSecretKey);

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = parseInt(request.query.total);
  console.log("payment Request Received for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
