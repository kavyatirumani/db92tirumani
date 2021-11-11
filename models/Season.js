const mongoose = require("mongoose") 
const SeasonSchema = mongoose.Schema({ Season_type: String, temperature: Number, Season_month: String }) 
 
module.exports = mongoose.model("Season", SeasonSchema) 