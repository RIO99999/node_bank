const mongoose =require("mongoose")


const AccountSchema = new mongoose.Schema({
    accountNumber: {type: "string",required: true, unique: true}
    
}, { strict: "throw", timestamps: true })


const AccountModel = mongoose.model("Account", AccountSchema)


module.exports = AccountModel