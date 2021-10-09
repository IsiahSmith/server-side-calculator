console.log('JS');
$(onReady)

let operator = ``;

function onReady() {
    console.log('JQ');

    $(`#equals`).on(`click`, sendCalc);
    $(`#add`).on(`click`, assignOpAdd);
    $(`#subtract`).on(`click`, assignOpSubtract);
    $(`#multiply`).on(`click`, assignOpMultiply);
    $(`#divide`).on(`click`, assignOpDivide);
};

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
    })
}


