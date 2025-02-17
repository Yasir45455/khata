const khataService = require("../services/khataService");

// Add a new Khata entry
const addKhata = async (req, res) => {

 

  try {
    const { clientId, type, detail, weight, price, vehicleNo, gas11_8Kg, gas15Kg, gas45_4Kg, gasRate, totalPayment, received, remainingTotal } = req.body;

    if (type.toLowerCase() === 'rubber') {
      req.body.type = 'Rubber';
    } else if (type.toLowerCase() === 'gas') {
      req.body.type = 'Gas';
    } else if (type.toLowerCase() === 'carbon') {
      req.body.type = 'Carbon';
    } else {
      req.body.type = 'Unknown';
    }
    
    console.log(req.body);
    
    if (!["Rubber", "Carbon", "Gas"].includes(req.body.type)) {
      return res.status(400).json({ message: "Invalid type. Allowed: Rubber, Carbon, Gas" });
    }
    

    // Validation for Gas type
    if (type === "Gas" && (!vehicleNo || (!gas11_8Kg && !gas15Kg && !gas45_4Kg) || !gasRate)) {
      return res.status(400).json({ message: "Missing required Gas fields" });
    }

    // Validation for Rubber & Carbon
    if ((type === "Rubber" || type === "Carbon") && (!detail || !weight || !price)) {
      return res.status(400).json({ message: "Missing required Rubber/Carbon fields" });
    }

    const khata = await khataService.addKhata({
      clientId,
      type,
      detail,
      weight,
      price,
      vehicleNo,
      gas11_8Kg,
      gas15Kg,
      gas45_4Kg,
      gasRate,
      totalPayment,
      received,
      remainingTotal
    });

    res.status(201).json(khata);
  } catch (error) {
    res.status(500).json({ message: "Error adding Khata entry", error });
  }
};

// Get Khata by User ID
const getKhataByUserId = async (req, res) => {
  try {
    const khata = await khataService.getKhataByUserId(req.params.clientId);
    if (!khata.length) return res.status(404).json({ message: "No Khata found for this client" });
    res.status(200).json(khata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Khata entries", error });
  }
};

// Delete Khata by ID
const deleteKhata = async (req, res) => {
  try {
    const khata = await khataService.deleteKhata(req.params.id);
    if (!khata) return res.status(404).json({ message: "Khata entry not found" });
    res.status(200).json({ message: "Khata entry deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Khata entry", error });
  }
};

module.exports = { addKhata, getKhataByUserId, deleteKhata };
