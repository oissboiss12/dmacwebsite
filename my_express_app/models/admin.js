//Initialise the mongoDB and bcrypt library
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//create the Admin database collection
const AdminCollection = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    email: { type: String, required: true},
    password: {type: String, required: true},
});

//Hash password before saving
AdminCollection.pre('save', async function (next) {
    //if the password field is modified
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10); //Use bcrypt to hash the password
    }
    next();
});

//Export this model to mongoDB
module.exports = mongoose.model('Admin', AdminCollection);