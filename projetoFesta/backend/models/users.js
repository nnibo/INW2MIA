const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {type : String},
    email: {type: String, required: true}, //o required faz com que seja obrigatorio ter o dado
    password: {type: String, required: true}
})

const User = mongoose.model("User", UserSchema);
module.exports = User;