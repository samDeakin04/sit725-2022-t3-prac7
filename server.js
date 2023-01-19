var express = require("express")
var app = express()
var cors= require("cors")
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}));
app.use(cors())
app.use('/api/projects', projectRoutes)

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })

//mongoDb connection...
//const MongoClient = require('mongodb').MongoClient;

//add database connections...
//const uri = 'mongodb+srv://Sam:Hello123@cluster0.ppvmpe6.mongodb.net/?retryWrites=true&w=majority'
//const client = new MongoClient(uri, {useNewUrlParser: true})

// insert project...​

// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }

// // get project...​

// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

// app.get('/api/projects',(req,res) => {
//     getProjects((err,result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Success", data: result})
//         }
//     })
// })

// //post api...
// app.post('/api/projects',(req,res) => {
//     console.log("New Project added", req.body)
//     var newProject = req.body;
//     insertProjects(newProject,(err,result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Project Successfully added", data: result})
//         }
//     })
// })

var port = process.env.port || 8080;

app.listen(port,()=>{

 console.log("App listening to: http://localhost:"+port)
 //createCollection("Sea")
})