var express = require('express');
var router = express.Router();
let dbConnection = require('./../db/db').localConnect();
/* GET users listing. */
router.get('/', function(req, res, next) {
dbConnection.query('select * from user_profile',(error,resluts,fields) =>{
if (error) throw error;
res.send(resluts);
})
});


router.post('/profile', (req, res, next) => {
 let {
 username, email, password, first_name, last_name, job_title, salary, create_datetime
 } = req.body

 console.log(req.body);
 var insertcommand = `INSERT INTO user_profile (username,email,password,first_name,last_name,job_title,salary,create_datetime) VALUES ('${username}','${email}','${password}','${first_name}','${last_name}','${job_title}','${salary}','${create_datetime}')`;

dbConnection.query(insertcommand, (err, result) => {

if (err) throw err;
 res.send(result);
  });

})
router.get('/profile', function (req, res, next) {

    dbConnection.query('select * from user_profile', (error, results, fields) => {
   
    if (error) throw error;
    res.send(results)
   
     })
   
   });

module.exports = router;