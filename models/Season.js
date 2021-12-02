const mongoose = require("mongoose") 
const SeasonSchema = mongoose.Schema({ Season_type: {type: String,maxlength: 9}, temperature: {type: Number,min:2,max:40}, Season_month: String }) 
 
module.exports = mongoose.model("Season", SeasonSchema) 