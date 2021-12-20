const { v4: uuidv4 } = require('uuid');
const _ = require('lodash');

class Employee{
    constructor(id, name, email, dept, designation, createdAt){
        this.id = id;
        this.name = name;
        this.email = email;
        this.dept = dept;
        this.designation = designation;
        this.createdAt = createdAt;
    }
}

let employeeContainer = [];

exports.getAllEmployees = (req, res) => {
    if(employeeContainer.length > 0 ) {
        return res.status(200).json({
            "employee" : employeeContainer
        })
    }
    else{
        return res.status(404).json({
            "error" : "No such employee !!"
        })
    }
}


exports.getEmployeeById = (req, res) => {
    console.log(req.params.id)
    let employee = employeeContainer.find(emp => emp.id === req.params.id);
    if(employee) {
        return res.status(200).json({
            "employee" : employee
        })
    }
    return res.status(404).json({
        "error" : "No such employee !!"
    })
}

exports.getEmployeeByName = (req, res) => {
    let employeeName = req.params.name;
    let employees = employeeContainer.find(emp => emp.name === employeeName);
    if(employees){
        return res.status(200).json({
            "employees" : employees
        })
    }
    else{
        return res.status(404).json({
            "error" : "No such employee !!"
        })
    }
}


exports.addEmployee = (req, res) => {
    const { name, email, dept, designation } = req.body;
    const employee = new Employee(uuidv4(), name, email, dept, designation, new Date().toLocaleTimeString());
    employeeContainer.push(employee);
    return res.status(200).json({
        "message" : employee
    })
}

exports.updateEmployee = (req, res) => {
    const id = req.params.id;
    let employee = employeeContainer.find(emp => emp.id === id)
    employee = _.merge(employee, req.body)//objet array manipulation
    return res.status(200).json({
        "employee" : employeeContainer
    })
}


exports.deleteEmployee = (req, res) => {
    const index = employeeContainer.find(emp => emp.id === req.params.id);
    employeeContainer.splice(index, 1);
    return res.status(200).json({
        "status" : "deleted successfully !!",
        "employees" : employeeContainer
    })
}