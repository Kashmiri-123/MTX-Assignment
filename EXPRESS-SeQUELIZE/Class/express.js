var express = require('express');
var Sequelize = require('sequelize');
var dbConfig = require('./db.config')

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
let Employee = sequelize.define('employee', {
    empId : {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
    dept: Sequelize.STRING,
    designation: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
})

// Employee.sync().then(() => {
//     console.log("Student table created")
// }).finally(() => {
//     // sequelize.close();
// })
    

app.get("/", function(req, res) {
    console.log("Hello world!");
    res.send("Connection done")
})

app.get("/getAllData", function(req, res) {
    Employee.findAll({raw: true}).then((data) => {
        console.log("employee table......" + data)
        res.status(200).send(data)
    }).catch(error => {
        console.log("Error ...." + error)
        res.status(400).send(error)
    })
})

app.get("/getDataById/:id", function(req, res) {
    var id = req.params.id;
    Employee.findByPk(id, {raw: true}).then((data) => {
        console.log("employee table......" + data)
        res.status(200).send(data)
    }).catch(error => {
        console.log("Error")
        res.status(400).send(error)
    })
})

app.post("/insertData", function(req, res) {
    var empId = req.body.empId;
    var name = req.body.name;
    var dept = req.body.dept;
    var designation = req.body.designation;

    var EmpObj = Employee.build({
        empId:empId, name:name, dept:dept, designation:designation
    })
    EmpObj.save().then((data) => {
        var strMsg = "Record insertted";
        res.status(200).send(strMsg)
    }).catch(error => 
        console.log("error inserting record "+ error )
        )
})

app.put("/updateData", function(req, res){
    var empId = req.body.empId;
    var name = req.body.name;
    var dept = req.body.dept;
    var designation = req.body.designation;

    Employee.update(
        {name:name, dept:dept, designation:designation},
        {where: {empId: empId}}
    ).then(data => {
        console.log("record updated successfully");
        res.status(201).send(data)
    }).catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
})

app.delete("/deleteDataById/:id", function(req, res){
    var id = req.params.id;
    console.log("Given id is " + id);

    Employee.destroy({where: 
        {empId: id}
    }).then((data) => {
        console.log(data);
        res.status(200).send("Data deleted")
    }).catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
})

app.listen(8000, function() {
    console.log("Port running at 8000")
})




