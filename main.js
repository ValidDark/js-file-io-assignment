'use strict'

const util = require('util')
const path = require('path')
const fs = require('fs')
const { Employee } = require('./Employee')


const filePath = (path.resolve(__dirname, 'employee.json'))








const empArray = (JSON.parse(fs.readFileSync( filePath , 'utf8'))).employees

  empArray.forEach( emp => {


    let employee = new Employee(emp)

    console.log(`is Employee? ${employee instanceof Employee}`)
    console.log(`parsed: ${util.inspect(employee)}`)

    employee.promote('chief petty grunt', 10)

    console.log(`after promotion: ${util.inspect(employee)}`)


    }

  )
