const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("server/public"));
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

let calcHistory = [];

app.post("/calculate", (req, res) => {
    console.log(`from POST on server`);
    calculator(req.body);
    res.sendStatus(201);
});

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

app.get("/calculate", (req, res) => {
    console.log('From GET on server');
    res.send(calcHistory)
});