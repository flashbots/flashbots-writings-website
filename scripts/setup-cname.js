require('dotenv').config()

var fs = require('fs');

fs.writeFile('./static/CNAME', process.env.REACT_APP_TARGET_URL, function (err) {
  if (err) throw err;
  console.log('CNAME created ');
}); 
