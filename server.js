const express = require("express");
const fs = require("fs");

const server = express();

server.use(express.static(__dirname + "/dist"));

server.get("/", (req, res) => {
    const stream = fs.createReadStream(__dirname+"/dist/index.html");
    stream.pipe(res);
});

server.get("/api/tasks", (req, res) => {
    let tasksJSON = "";
    const stream = fs.createReadStream('./db/tasks.json', {encoding : "utf-8"});

    stream.on('data', (chunk) => {
        tasksJSON += chunk;
    });

    stream.on('end', () => {
        const json = JSON.parse(tasksJSON);
        res.json(json);
    });
});

server.post("/api/tasks", (req, res)=>{
    fs.readFile('./db/tasks.json', (error, data)=>{
        if(error) return console.error(error);

        let tasks = JSON.parse(data);
        
        tasks.unshift(JSON.parse(req.headers.body));
        const tasksJSON = JSON.stringify(tasks); 

        fs.writeFile('./db/tasks.json', tasksJSON, (error) => console.error(error));
    });
    
});

server.delete("/api/tasks",(req, res)=>{
    fs.readFile('./db/tasks.json', (error, data)=>{
        if(error) return console.error(error);

        let tasks = JSON.parse(data);
        const filterTasks = JSON.parse(req.headers.body).map(item => + item);

        tasks = tasks.filter(item => !filterTasks.includes(item.id));

        const tasksJSON = JSON.stringify(tasks); 

        fs.writeFile('./db/tasks.json', tasksJSON, (error) => console.error(error));
    });
    
});

server.put("/api/tasks", (req, res)=>{
    fs.readFile('./db/tasks.json', (error, data)=>{
        if(error) return console.error(error);

        let tasks = JSON.parse(data);

        const updateItem = JSON.parse(req.headers.body);

        tasks = tasks.map(item => {
            if(item.id === updateItem.id)
                return updateItem;
            return item;
        });

        const tasksJSON = JSON.stringify(tasks); 

        fs.writeFile('./db/tasks.json', tasksJSON, (error) => console.error(error));
    });
});

server.put("/api/tasks/complete", (req, res) => {
    fs.readFile('./db/tasks.json', (error, data)=>{
        if(error) return console.error(error);

        let tasks = JSON.parse(data);

        const completeItem = JSON.parse(req.headers.body);

        tasks = tasks.map(item => {
            if(completeItem.includes(item.id))
                item.complete = true;
            return item;
        });

        const tasksJSON = JSON.stringify(tasks); 

        fs.writeFile('./db/tasks.json', tasksJSON, (error) => console.error(error));
    });
});

server.put("/api/tasks/missed", (req, res) => {
    fs.readFile('./db/tasks.json', (error, data)=>{
        if(error) return console.error(error);

        let tasks = JSON.parse(data);

        const missedItem = JSON.parse(req.headers.body);

        tasks = tasks.map(item => {
            if(missedItem.includes(item.id))
                item.missed = true;
            return item;
        });

        const tasksJSON = JSON.stringify(tasks); 

        fs.writeFile('./db/tasks.json', tasksJSON, (error) => console.error(error));
    });
});

server.listen(80, () => console.log("Run..."));
