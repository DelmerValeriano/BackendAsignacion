const {db} = require("../firebase");

const getmice = async (req, res) => {
  try {
      const result = await db
        .collection("categories/xl0h1gpsMPgIcEDd9bcu/mice")
        .get();
  
      const productos = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return res.status(202).json({
        ok: true,
        productos,
      });
      
    
  } catch (error) {
    return res
      .status(500)
      .json({ mgs: "Por Favor Comuniquese con el Administrador" });
  }
};
const getKeyboards = async (req, res) => {

  try {

   
      const result = await db
        .collection("categories/xl0h1gpsMPgIcEDd9bcu/keyboards")
        .get();
  
      const productos = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return res.status(202).json({
        ok: true,
        productos,
      });
      
    
  } catch (error) {
    return res
      .status(500)
      .json({ mgs: "Por Favor Comuniquese con el Administrador" });
  }
};

const getmonitors = async (req, res) => {

  try {

   
      const result = await db
        .collection("categories/xl0h1gpsMPgIcEDd9bcu/monitors")
        .get();
  
      const productos = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return res.status(202).json({
        ok: true,
        productos,
      });
      
    
  } catch (error) {
    return res
      .status(500)
      .json({ mgs: "Por Favor Comuniquese con el Administrador" });
  }
};

module.exports = {
  getmice,
  getKeyboards,
  getmonitors,

};
