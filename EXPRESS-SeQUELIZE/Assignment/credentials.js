var express = require('express');
var dbConfig = require('./db.config')
var Sequelize = require('sequelize')

const app = express();

app.use(express.json());

// connect to database
var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST, 
    dialect: dbConfig.dialect,
    pool: {
        min: dbConfig.min,
        max: dbConfig.max,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle,
    }
});

// define the structureof employee
var User = sequelize.define('users', {
    userId : {
        primaryKey: true,
        type: Sequelize.STRING,
    },
    password : Sequelize.STRING,
    role: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
})


// User.sync().then(() => {
//     console.log("Users table created")
// }).finally(() => {
//     // sequelize.close();
// })


app.get("/getAllUsers", function(req, res) {
    User.findAll({raw: true}).then((data) => {
        console.log("User table......" + data)
        res.status(200).send(data)
    }).catch(error => {
        console.log("Error ...." + error)
        res.status(400).send(error)
    })
})

app.post("/register", function(req, res) {
    var userId = req.body.userId;
    var password = req.body.password;
    var role = req.body.role;

    var userObj = User.build({
        userId: userId,
        password: password,
        role: role
    })
    userObj.save().then((data) => {
        var strMsg = "Registration done";
        res.status(201).send(strMsg)
    }).catch(error => 
        console.log("error in registration"+ error )
        )
})

const op = Sequelize.Op;

app.post("/login", function(req, res) {
    var userId = req.body.userId;
    var password = req.body.password;

    User.findOne({where: {
        [op.and]: [{userId: userId}, {password: password}]
    }, raw: true}).then(data => {
        res.status(200).send(JSON.stringify(data));
    }).catch(error => {
        res.status(401).json("Login failed " + error)
    })
})



app.get("/", function(req, res) {
    console.log("Hello world!");
    res.send("Connection done")
})


app.listen(8000, function() {
    console.log("Port running at 8000")
})




