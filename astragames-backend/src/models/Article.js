const { model, Schema } = require("mongoose");

const ArticleSchema = new Schema({
    nameArticle:{
        type: String,
        required: true,
    },
    priceUnit:{
        type: Number,
        required: true,
    },
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true,
    },
    descArticle:{
        type: String,
        required: true
    }
});

module.exports = model('Article', ArticleSchema);
