const {db} = require("../firebase");

const postComments = async (req, res) => {
  const {idImg} = req.params;
  const {qualify, comment, date, user, uid} = req.body;
  try {
    await db
      .collection("comment/")
      .add({qualify, comment, date, user, uid, idImg});
    return res.json({ ok: true });
  } catch (error) {
    return res
      .status(500)
      .json({mgs: "Por Favor Comuniquese con el Administrador"});
  }
};

const getComments = async (req, res) => {
  try {
    const result = await db.collection("comment").get();
    const comment = result.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.json({
      ok: true,
      comment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({mgs: "Por Favor Comuniquese con el Administrador"});
  }
};
const putCalificacion = async (req, res) => {
  try {
    const {category, idImg} = req.params;
    const {commentcalificacion} = req.body;
    const result = db
      .collection(`categories/xl0h1gpsMPgIcEDd9bcu/${category}`)
      .doc(idImg);
    const resp = await result.update({calificacion: commentcalificacion});

    return res.json({
      ok: true,
      resp,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ mgs: "Por Favor Comuniquese con el Administrador" });
  }
};
const getCommentsImg = async (req, res) => {
  const {idImg} = req.params;

  try {
    const result = db.collection("comment");
    const snapshot = await result.where("idImg", "==", idImg).get();

    const commentImg = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.json({
      ok: true,
      commentImg,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ mgs: "Por Favor Comuniquese con el Administrador" });
  }
};
module.exports = {
  postComments,
  getComments,
  putCalificacion,
  getCommentsImg,
};
