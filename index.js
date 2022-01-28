
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req,res) => {
	console.log("what");
	res.status(200).send("Hello World").end();
})


app.listen(PORT,() => {
	console.log(`App listening on port: ${PORT}`)
})
