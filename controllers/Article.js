const Article = require("../models/Article");

/**creation d'un article */
const addArticle = async (req, res) => {
  try {
    data = req.body;
    article = new Article(data);
    savedArticle = await article.save();
    res.status(200).send(savedArticle);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**affichage des articles */
const getArticles = async (req, res) => {
  try {
    article = await Article.find();
    res.status(200).send(article);
  } catch (error) {
    console.log("error while getting articles " + error);
    res.status(500).send(error);
  }
};

/**modification d'un article */
const updateArticle = async (req, res) => {
  try {
    myId = req.params.id;
    data = req.body;
    updatedarticle = await Article.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(updatedarticle);
  } catch (error) {
    console.log("error while updating an article " + error);

    res.status(500).send(error);
  }
};

/**affichage d'un article selon leur ID */
const getArticleId = async (req, res) => {
  try {
    myId = req.params.id;
    article = await Article.findById({ _id: myId });
    res.status(200).send(article);
  } catch (error) {
    console.log("error while getting article by ID " + error);

    res.status(500).send(error);
  }
};

/**effacer un article selon leur ID */
const deleteArticle = async (req, res) => {
  try {
    myId = req.params.id;
    article = await Article.findByIdAndDelete({ _id: myId });
    res.status(200).send(article);
  } catch (error) {
    console.log("error while deleting an article " + error);

    res.status(500).send(error);
  }
};

module.exports = {
  getArticles,
  addArticle,
  updateArticle,
  getArticleId,
  deleteArticle,
};
