// const express = require('express');
// const stripe = require('stripe')('sk_test_510n20SFTmBJ1pP5s7eIjHM22aakwXNFOGyZIwBmESRt46TudybY1WCTMhdNHV3naXK1MNN80MGH7p103AhzC6gew001P7JWSJn'); 
// const router = express.Router();

// // Endpoint to create a payment intent
// router.post('/create-payment-intent', async (req, res) => {
//   try {
//     const { amount } = req.body;

//     // Ensure amount is valid
//     if (!amount || amount <= 0) {
//       return res.status(400).send({ error: 'Invalid amount' });
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount, // Amount in cents (e.g., $10 would be 1000)
//       currency: 'usd', // Choose your currency
//     });

//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// });

// module.exports = router;

// const express = require("express");
// const Stripe = require("stripe");

// const router = express.Router();
// console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// router.post("/create-payment-intent", async (req, res) => {
//   try {
//     const { amount } = req.body;
//     console.log(amount)
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, 
//       currency: "usd",
//     });

//     res.status(200).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Export using CommonJS
// module.exports = router;

