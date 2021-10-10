const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("server/public"));
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

// array to store the history of all calculations made
let calcHistory = [];

// POST that receives sent over object runs it through the calculator function
app.post("/calculate", (req, res) => {
    console.log(`from POST on server`);
    calculator(req.body);
    res.sendStatus(201);
});

// function that gives out a new answer key and pushes req.body to the calcHistory array
function calculator (data) {
        if (data.op === `+`) {
            data.answer = Number(data.firstNumber) + Number(data.secondNumber);
        } else if (data.op === `-`) {
            data.answer = data.firstNumber - data.secondNumber;
        } else if (data.op === `*`) {
            data.answer = data.firstNumber * data.secondNumber;
        } else if (data.op === `/`) {
            data.answer = data.firstNumber / data.secondNumber;
        }
        calcHistory.push(data);
        console.log(calcHistory);
        console.log('answer is', data.answer);
};

// GET to send the updated object back to the client
app.get("/calculate", (req, res) => {
    console.log('From GET on server');
    res.send(calcHistory)
});