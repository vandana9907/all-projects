var mysql = require('mysql');
let learn = function(){
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'Chinnu@143',
database : 'support',
insecureAuth : true
});
return connection;
};
module.exports.localConnect=learn;