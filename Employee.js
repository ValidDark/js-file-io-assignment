'use strict'

const fs = require('fs')

class Employee {
    constructor(newObj) {
      this.name = newObj.name
      this.title = newObj.title
      this.salary = newObj.salary
    }

    static parseFromFilePath(filePath) {

        return new Employee (JSON.parse(fs.readFileSync(filePath, 'utf8')))
    }

    promote (newTitle, newSalary) {
      this.title = newTitle
      this.salary = newSalary
    }
}



module.exports = {
    Employee
}


/*


"name": "peter",
"title": "grunt",
"salary": 5



Sync:

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('file', 'utf8'));
Async:

var fs = require('fs');
var obj;
fs.readFile('file', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

*/
