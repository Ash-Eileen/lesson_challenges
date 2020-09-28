
const express = require("express")
const exphbs = require('express-handlebars');

const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// Use body-parser to parse application/json
app.use(bodyParser.json())

const fs = require("fs")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())


const readStudentData = file => {
	let students = fs.readFileSync(file, "utf8").split("\n")
	return students
}

const persistStudentData = (file, students) => {
	fs.writeFileSync(file, students.join("\n"))
	console.log("updated students:", students)
	return students
}

function randomPair(req, res, next) {
	let s1Ind = Math.floor(Math.random() * students.length)
	let s2Ind = Math.floor(Math.random() * students.length)
	req.pair = {
		pair: [students[s1Ind], students[s2Ind]]
	}
	next()
}

// Custom logging middleware
function logReqBody(req, res, next) {
	console.log(req.body)
	next()
}

let students = []

students = readStudentData("students.txt")

// render html template
app.get("/", randomPair, (req, res) => {
    res.render('home', req.pair );
});


app.get("/students", (req, res) => {
	res.send(students)
})

app.post("/students", logReqBody, (req, res) => {
	students.push(req.body.name)
	res.status(201)
	res.send(students)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))