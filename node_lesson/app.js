const http = require("http")

const hostname = "127.0.0.1"
const port = 3000


let students = [
	"Carlie",
	"Tony",
	"Sam",
	"Carl",
	"Sherine",
	"Lelani",
	"Aidan",
	"Jack",
	"Mark",
	"Rachel"
]

const server = http.createServer((req, res) => {
  const { method, url, headers } = req
  if (url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
  } else if (method === "GET" && url === '/') {
		res.setHeader("Content-Type", "text/plain")
		res.end("Matching students")
	} else if (method === 'GET' && url === '/students') {
    console.log("Getting a list of students");
    res.setHeader('Content-type', 'application/json');
		res.end(JSON.stringify(students));
	} else if (method === "POST" && url === "/students") {
		// Post request on '/students'
		console.log("received a POST request")
		res.setHeader("Content-Type", "application/json")
		// Handle data and send back updated student list with end
	} else {
		console.log('invalid route');
		throw('Route not found');
  }
  // Handle getting data from the client request (on POST)
let data = [] // Used to collect chunks of data
req.on("data", chunk => {
	// Make sure data was sent on the right url
	if(url === '/students') {
		// This event fires when we receive data in the request. The data comes in chunks
		console.log(`Data chunk available: ${chunk}`)
		// We need to parse the chunk, or we will store it as a stream object
		data.push(JSON.parse(chunk))
	}
})
req.on("end", () => {
	// The end event signifies the end of the request, and therfore the end of the data stream
	// We'll store any data we got from a post in our array, then send our response to the client
	// If we got data (for a post), add it to our array of students
	// In this case, we only expect to get a single chunk of data - just a student name to add to our array of students
	if (data.length > 0) {
		console.log("retrieved data", data[0])
		students.push(data[0].name)
		// Send the stringified list of students we've constructed according to the route and method
		res.statusCode = 201
		res.end(JSON.stringify(students))
	}

})
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})