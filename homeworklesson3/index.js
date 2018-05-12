var fs = require('fs');

var obj = 
{
    "first_name": "Abraham",
    "last_name": "Lincoln",
    "age": 30,
    "Us_president": true
}
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;