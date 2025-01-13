const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
let message = "Would't you like to be a pepper too?";

function tellTheMessage() {
  console.log(message);
}

//tellTheMessage();

//This is an example of a route
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname,'Week 1', "public", "index.html"));
});


app.get("/todo", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "todo.json"));
    });

app.get("*", (req, res) => {
        res.redirect("/");
});

//Creates listener for the port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});