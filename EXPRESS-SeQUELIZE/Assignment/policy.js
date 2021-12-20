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
var Insurance = sequelize.define('insurance', {
    policyNo : {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    policyHoldername: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    matirutyAmount: Sequelize.INTEGER,
    nominee: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
})


// Insurance.sync().then(() => {
//     console.log("Insurance table created")
// }).finally(() => {
//     // sequelize.close();
// })


app.get("/getAllPolicies", function(req, res) {
    Insurance.findAll({raw: true}).then((data) => {
        console.log("Insurance table......" + data)
        res.status(200).send(data)
    }).catch(error => {
        console.log("Error ...." + error)
        res.status(400).send(error)
    })
})

app.get("/getPolicyById/:id", function(req, res) {
    var id = req.params.id;
    Insurance.findByPk(id, {raw: true}).then((data) => {
        console.log("Insurance table by id....." + data)
        res.status(200).send(data)
    }).catch(error => {
        console.log("Error")
        res.status(400).send(error)
    })
})

app.post("/insertData", function(req, res) {
    var policyNo = req.body.policyNo;
    var policyHoldername = req.body.policyHoldername;
    var amount = req.body.amount;
    var matirutyAmount = req.body.matirutyAmount;
    var nominee = req.body.nominee;

    var insIbj = Insurance.build({
        policyNo:policyNo,
        policyHoldername: policyHoldername,
        amount: amount,
        matirutyAmount: matirutyAmount,
        nominee: nominee
    })
    insIbj.save().then((data) => {
        var strMsg = "Record insertted";
        res.status(201).send(strMsg)
    }).catch(error => 
        console.log("error inserting record "+ error )
        )
})

app.put("/updateData", function(req, res){
    var policyNo = req.body.policyNo;
    var policyHoldername = req.body.policyHoldername;
    var amount = req.body.amount;
    var matirutyAmount = req.body.matirutyAmount;
    var nominee = req.body.nominee;

    Insurance.update(
        {
        policyNo:policyNo,
        policyHoldername: policyHoldername,
        amount: amount,
        matirutyAmount: matirutyAmount,
        nominee: nominee
    },
        {where: {policyNo: policyNo}}
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

    Insurance.destroy({where: 
        {policyNo: id}
    }).then((data) => {
        console.log(data);
        res.status(200).send("Data deleted")
    }).catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
})



app.get("/", function(req, res) {
    console.log("Hello world!");
    res.send("Connection done")
})


app.listen(8000, function() {
    console.log("Port is running at 8000")
})




