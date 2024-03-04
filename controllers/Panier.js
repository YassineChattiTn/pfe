const Panier = require("../models/Panier");

/**creation du panier */

const addPanier = async (req, res) => {
  try {
    data = req.body;
    panier = new Panier(data);
    savedPanier = await panier.save();
    res.status(200).send(savedPanier);
  } catch (error) {
    console.log(error);
    console.log("error while creating the panier");
    res.status(400).send(error);
  }
};

/**afficher du panier */
const getPanier = async (req, res) => {
  try {
    panier = await Panier.find();
    res.status(200).send(panier);
  } catch (error) {
    console.log(error);
    console.log("error while getting panier");
  }
};

/** afficher panier selon id */
const getOnePanier = async (req, res) => {
  try {
    myId = req.params.id;
    panier = await Panier.findById({ _id: myId });
    res.status(200).send(panier);
  } catch (error) {
    console.log(error);
    console.log("error while getting panier");
  }
};

/**effacer une panier */
const deletePanier = async (req, res) => {
  try {
    myId = req.params.id;
    panierToDelete = await Panier.findByIdAndDelete({ _id: myId });
    res.status(200).send(panierToDelete);
  } catch (error) {
    console.log(error);
    console.log("error while deleting panier...");
    res.status(400).send(error);
  }
};

module.exports = {
  addPanier,
  getPanier,
  getOnePanier,
  deletePanier,
};
