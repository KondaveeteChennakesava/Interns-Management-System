const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://chennak993:Intern@ims.9tagfvr.mongodb.net/?retryWrites=true&w=majority&appName=IMS"
const connectToMongo = () => {
    mongoose.connect(mongoUrl)
    .then(() => console.log("Mongo Connected Successfully"))
    .catch(err => console.log(err))
};

module.exports = connectToMongo;