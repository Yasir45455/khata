<<<<<<< HEAD
const Khata = require("../models/Khata");

// Add a new Khata entry
const addKhata = async (khataData) => {
  return await new Khata(khataData).save();
};

// Get Khata by User ID
const getKhataByUserId = async (clientId) => {
  return await Khata.find({ clientId }).populate("clientId", "name");
};

// Delete Khata by ID
const deleteKhata = async (id) => {
  return await Khata.findByIdAndDelete(id);
};

=======
const Khata = require("../models/Khata");

// Add a new Khata entry
const addKhata = async (khataData) => {
  return await new Khata(khataData).save();
};

// Get Khata by User ID
const getKhataByUserId = async (clientId) => {
  return await Khata.find({ clientId }).populate("clientId", "name");
};

// Delete Khata by ID
const deleteKhata = async (id) => {
  return await Khata.findByIdAndDelete(id);
};

>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
module.exports = { addKhata, getKhataByUserId, deleteKhata };