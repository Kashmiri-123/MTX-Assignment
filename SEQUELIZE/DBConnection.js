var Sequelize = require('sequelize');
var dbConfig = require('./db.config');

//connection: 
// To connect to the database, we must create a Sequelize instance.
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

//Answer 2
//table 
let studentSequelize = sequelize.define('StudentSequelize', {
    studentId: Sequelize.STRING,
    name: Sequelize.STRING,
    stream: Sequelize.STRING,
    marks: Sequelize.INTEGER
},{
    timestamps: false,
    freezeTableName: true
})

//create the table
studentSequelize.sync().then(() => {
    console.log("Student table created")
}).finally(() => {
    // sequelize.close();
})

// answer 17
studentSequelize.bulkCreate([
    {studentId: 1, name:"Kashmiri", stream: "CS", marks:90},
    {studentId: 2, name:"Mainu", stream: "MEC", marks:70},
    {studentId: 3, name:"Mitu", stream: "CS", marks:50}
]).then((data) => {
    console.log("Data inserted.." + JSON.stringify(data));
}).catch((error) => {
    console.log("Error inserting data " + error)
})

// Answer4
let movieSequelize = sequelize.define('MovieSequelize', {
    movieId: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    movieName: Sequelize.STRING,
    typeOfMovie: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
})

movieSequelize.sync({}).then(() => {
    console.log("Movie table created")
}).catch((error) => {
    console.log("Error creating table " + error)
})
.finally(() => {
    // sequelize.close();
})

movieSequelize.bulkCreate([
    {movieId: 11, movieName:"ABC", typeOfMovie: "Action"},
    {movieId: 12, movieName:"ABC1", typeOfMovie: "Comedy"},
    {movieId: 13, movieName:"ABC2", typeOfMovie: "Action"},
]).then((data) => {
    console.log("Data inserted.." + data.dataValues);
}).catch((error) => {
    console.log("Error inserting data " + error)
})

movieSequelize.findAll({raw: true}).then((data) => {
    console.log("Movie table " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})

movieSequelize.findByPk(11).then((data) => {
    console.log("Movie data " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})


//Answer 5
let employee = sequelize.define('Employee', {
    empId: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: Sequelize.STRING,
    dept: Sequelize.STRING,
    designation: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
})

employee.sync({}).then(() => {
    console.log("Employee table created")
}).catch((error) => {
    console.log("Error creating table " + error)
})
.finally(() => {
    sequelize.close();
})

employee.bulkCreate([
    {empId: 1200, name:"Rimjhim Mahanta", dept: "IT", designation:"FDE"},
    {empId: 22, name:"kakumon Bhuyan", dept: "IT", designation:"SDE"},
]).then((data) => {
    console.log("Data inserted.." + data.dataValues);
}).catch((error) => {
    console.log("Error inserting data in employee " + error)
})

employee.findAll({raw: true}).then((data) => {
    console.log("Employee table.... " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})


// Answer 6
employee.findByPk(1200).then((data) => {
    console.log("Employee data by Id " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})


// answer 7
employee.findAll({where: {name: 'Kashmiri'}}).then((data) => {
    console.log("Employee data by name..... " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})

// answer 8
employee.findAll({attributes: ['name', 'dept'], raw: true}).then(
    (data) => {
        console.log("Name and dept of employee " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})

// answer 9
employee.findAll({attributes: ['name', 'dept'],where:{dept: 'IT'}, raw: true}).then(
    (data) => {
        console.log("Name and dept of employee of IT " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})

//answer 10
employee.findAndCountAll().then(
    (data) => {
        console.log("Nnumber of records in employee table " + data.count);
}).catch((error) => {
    console.log("Error fetching data" + error)
})


// answer 11
employee.findAll({order: ['name', 'ASC'], raw: true}).then(
    (data) => {
        console.log("employee in sorted order " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})


const op = Sequelize.Op;

employe.findAll({where: {
    name: {
        [Op.and] : ["KAku", "Kashmiri"]
    },
    [Op.or]: [{dept:"IT"}, {city: "ABC"}, {State: "ABC"}]
}})

// answer 12
employee.findAll({where : {
    name : {
        [op.like] : '%kashmiri%'
    }
}, raw: true}).then(
    (data) => {
        console.log("Name like kashmiri from employee " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data" + error)
})


// answer 13
sequelize.query("SELECT * FROM `studentSequelize`", {
    type: sequelize.QueryTypes.SELECT
}).then((data) => {
    console.log("SQL query using sequelize ..." + JSON.stringify(data))
}).catch((error) => {
    console.log(error)
})


sequelize.query("SELECT * FROM `employee`", {
    type: sequelize.QueryTypes.SELECT
}).then((data) => {
    console.log("SQL query using sequelize " + JSON.stringify(data))
}).catch((error) => {
    console.log(error)
})

sequelize.query("SELECT * FROM `employee` where name like '%Kashmiri%'", {
    type: sequelize.QueryTypes.SELECT
}).then((data) => {
    console.log("SQL query using sequelize " + JSON.stringify(data))
}).catch((error) => {
    console.log(error)
})



// answer 14
studentSequelize.findAll({
    where: {
        [op.and]: [{stream: 'CS'}, {marks: {
            [op.gte]: 75
        }}]
    }
    , raw: true})
.then((data) => {
        console.log("And operator " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error fetching data ..... " + error)
})


// answer 15
employee.create({
    empId : 111,
    name : 'Mitale',
    dept: 'IT',
    designation: 'SDE'
}).then((data) => {
        console.log("Data added to employee " + JSON.stringify(data));
}).catch((error) => {
    console.log("Error inserting data ..... " + error)
})

// answer 16
let empObj = employee.build({
    empId : 112,
    name : 'Sheetal',
    dept: 'IT',
    designation: 'SDE'
});
empObj.save()
    .then((data) => {
            console.log("Data added to employee " + JSON.stringify(data));
    }).catch((error) => {
        console.log("Error inserting data ..... " + error)
    })


// answer 18
employee.update(
    {name: "Kashmiri"},
    {
        where : {name: 'Kashmiri'}
    }).then((data) => {
                    console.log("Data updated to employee ");
            }).catch((error) => {
                console.log("Error updating data ..... " + error)
            })

// answer 19
employee.destroy({
    where: {name: "Kashmiri Mahanta"}
    }).then((data) => {
        console.log("Data deleted from employee ");
    }).catch((error) => {
        console.log("Error deleting data ..... " + error)
    })

// answer 20
employee.drop().then((data) => {
        console.log("Table dropped");
    }).catch((error) => {
        console.log("Error dropping table ..... " + error)
    })

// answer 21
const Customer = sequelize.define("Customer",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      location: Sequelize.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  
const Products = sequelize.define("Product",
    {
      product_number: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: Sequelize.STRING,
      cost: Sequelize.INTEGER,
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Customer",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

Customer.sync().then(() => {
        console.log("Customer table created")
    }).finally(() => {
        // sequelize.close();
    })
Products.sync().then(() => {
        console.log("Product table created")
    }).finally(() => {
        // sequelize.close();
    })

sequelize.query("SELECT Product.description, Customer.name FROM `Product` INNER JOIN `Customer` ON Customer.id=Product.id", {
    type: sequelize.QueryTypes.SELECT
}).then((data) => {
    console.log("SQL query using sequelize " + JSON.stringify(data))
}).catch((error) => {
    console.log(error)
})

//We can use the .authenticate() function to test if the connection is OK
sequelize.authenticate().then(() => {
    console.log("Connected to database.");
}).catch(error => {
    console.log("Unable to connect to database." + error.message);
}).finally(() => {
    // sequelize.close();
})