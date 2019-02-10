/**
 * Created by Anastasiia Kostiv on 09.02.2019.
 */

const crypto = require('crypto').randomBytes(256).toString('hex');


module.exports = {
    apiKey: "AIzaSyAH9_TJEpc8_BOkButgNiy2GeRzEm-iAnU",
    authDomain: "radiolag-68cae.firebaseapp.com",
    databaseURL: "https://radiolag-68cae.firebaseio.com",
    projectId: "radiolag-68cae",
    storageBucket: "radiolag-68cae.appspot.com",
    messagingSenderId: "620256854718",
    secret: crypto
}
