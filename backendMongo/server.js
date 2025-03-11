import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    console.log("req came to server");
    let log = `New request came at${Date.now}`
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("file created");
        }

    })
    res.end("Hello.. hum server se baat kar raha hu.")
})

server.listen(8000, () => {
    console.log("server started");
})