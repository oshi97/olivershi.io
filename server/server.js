const express = require('express')
const mongoose = require('mongoose')
// const models = require('./db-import.js')
// const fs = require('fs')
const helmet = require('helmet')
import renderRouterMiddleware from '../iso-middleware/renderRoute';

const app = express()
// const dev = process.env.NODE_ENV !== 'production'

mongoose.connect('mongodb://localhost/blogtest', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Server Code
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// server.use(require('./server/api'))

// app.use(express.static("./dist"));
const buildPath = path.join(__dirname, '../', 'build');
app.use('/', express.static(buildPath));
// app.use(express.static(__dirname));
app.get('*', renderRouterMiddleware);
// app.get('*', (req, res) => {
// 	res.sendFile( __dirname+'/dist/index.html')
// })

app.listen(3000, (err) => {
	if (err) throw err
	console.log('> Ready on http://localhost:3000')
})