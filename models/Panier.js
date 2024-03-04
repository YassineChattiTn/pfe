const mongoose = require("mongoose");

const panierSchema = mongoose.Schema({
  referencePanier: {
    type: String,
    required: [true, "panier must have a reference"],
  },
  clientId: {
    type: String,
  },
  articleId: {
    type: String,
  },
});

const Panier = mongoose.model("Panier", panierSchema);

module.exports = Panier;
