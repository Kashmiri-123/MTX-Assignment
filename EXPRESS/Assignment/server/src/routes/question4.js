const { 
    addEmployee, 
    getEmployeeById, 
    getEmployeeByName, 
    getAllEmployees, 
    updateEmployee, 
    deleteEmployee 
}= require('../controller/question4');

const router = require('express').Router();

router.post('/employee/add',  addEmployee);

router.get('/employee/:id', getEmployeeById);
router.get('/employee/name/:name', getEmployeeByName);
router.get('/employee-all', getAllEmployees);

router.put('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);


module.exports = router;