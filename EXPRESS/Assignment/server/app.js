const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const authRoute = require('./src/routes/question1');
const employeeRoute = require('./src/routes/question2');
const salaryRoute = require('./src/routes/question3');
const employeeHandlerRoute = require('./src/routes/question4');

app.get('/', function (req, res) {
  res.send('Hello World !!')
})

app.use(bodyParser.json())
app.use('/api', authRoute);
app.use('/api', employeeRoute);
app.use('/api', salaryRoute);
app.use('/api', employeeHandlerRoute);

app.listen(8000, () => {
    console.log('listening on http://localhost:8000');
})

