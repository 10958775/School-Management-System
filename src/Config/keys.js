require("dotenv").config();

const password = process.env.PASSWORD
module.exports = {
    mongoURI: `mongodb+srv://Odoom21:${password}@cluster0.unttjhi.mongodb.net/?retryWrites=true&w=majority`
}