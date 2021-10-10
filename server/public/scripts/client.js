console.log('JS');
$(onReady)

// empty variable for the desired operator, will be reassigned
let operator = ``;

function onReady() {
    console.log('JQ');

    // click listeners for every button on DOM
    $(`#equals`).on(`click`, sendCalc);
    $(`#add`).on(`click`, assignOpAdd);
    $(`#subtract`).on(`click`, assignOpSubtract);
    $(`#multiply`).on(`click`, assignOpMultiply);
    $(`#divide`).on(`click`, assignOpDivide);
    $(`#clear`).on(`click`, clearInputs)
};

// group of functions that reassign the operator
function assignOpAdd() {
    operator = `+`;
    console.log('operator is:',operator);
}
function assignOpSubtract() {
    operator = `-`;
    console.log('operator is:',operator);
}
function assignOpMultiply() {
    operator = `*`;
    console.log('operator is:',operator);
}
function assignOpDivide() {
    operator = `/`;
    console.log('operator is:',operator);
}

function clearInputs() {
    $(`#firstInput`).val(``);
    $(`#secondInput`).val(``);
}

// POST that sends object of the operator and both input fields to server
function sendCalc() {
    $.ajax({
        method: "POST",
        url: "/calculate",
        data: {
            firstNumber: $(`#firstInput`).val(),
            secondNumber: $(`#secondInput`).val(),
            op: operator,
        }
    }).then(function (response) {
        renderAnswer();
        $(`#firstInput`).val(``);
        $(`#secondInput`).val(``);
    });
};

// GET that receives updated object and puts it on the DOM
function renderAnswer() {
    $.ajax({
        method: "GET",
        url: "/calculate",
    }).then(function (response) {
        console.log(response);
        $(`#answerDrop`).empty();
        for(let i=0; i<response.length; i++) {
        $(`#answerDrop`).html(`<span>${response[i].answer}</span>`)
        }
        $(`#historyDrop`).empty();
        for(let j=0; j<response.length; j++) {
            $(`#historyDrop`).append(`<li>${response[j].firstNumber} ${response[j].op} ${response[j].secondNumber} = ${response[j].answer}</li>`)
        }
    })
}


