const {initializeApp, applicationDefault} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const credential = require("./credential");
initializeApp({
  credential: applicationDefault(credential),
  baseUrl: "https://prueba-dfa34.firebaseio.com",
});
const db = getFirestore();
module.exports = {
  db,
};
