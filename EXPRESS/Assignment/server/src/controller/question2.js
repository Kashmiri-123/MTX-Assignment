class Employee{
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

const employeeContainer = [new Employee("John", "john@gmail.com", 23), new Employee("Frank", "frank@gmail.com", 25)];

exports.getAllEmployee = (req, res) => {
    return res.status(200).json({
        "employee" : employeeContainer
    })
}