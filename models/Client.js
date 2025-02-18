<<<<<<< HEAD
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Client", clientSchema);
=======
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Client", clientSchema);
>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
