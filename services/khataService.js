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

module.exports = { addKhata, getKhataByUserId, deleteKhata };