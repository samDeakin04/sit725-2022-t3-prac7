require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

//add database connections...
const uri = 'mongodb+srv://Sam:Hello123@cluster0.ppvmpe6.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect ((err,db) => {
    projectCollection = client.db().collection("Projects");
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})
module.exports = client;