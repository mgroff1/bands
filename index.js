const express = require("express");
const server = express();
server.use(express.json());

server.get("/", (req,res) => {
    const bands = [{id:"1"}, {name:"pantera"}];
    res.status(200).json(bands);
 
});


const port = process.env.PORT||5200;
server.listen(port, () => {
    console.log(`\n*** Server running on http://localhost:${port} ***\n`);
});