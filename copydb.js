const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const models = require('./db-import.js')
const fs = require('fs')

mongoose.connect('mongodb://localhost/blogtest', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const static_url = './static/data/'
function copyCategoryData() {
  console.log(" ---- writing category data")
  models.Category.find({})
  .select('id name url -_id')
  .exec((err, res) => {
    fs.writeFileSync(static_url + 'categoryData.js','module.exports =' + JSON.stringify(res))
  })
  console.log("finished!")
}

copyCategoryData()

