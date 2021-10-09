console.log('JS');
$(onReady)

let operator = ``,

function onReady () {
    console.log('JQ');
    
    $(`#equals`).on(`click`, sendCalc);
    $(`#add`).on(`click`, assignOpAdd);
    $(`#subtract`).on(`click`, assignOpSubtract);
    $(`#multiply`).on(`click`, assignOpMultiply);
    $(`#assignOpDivide`).on(`click`, assignOpDivide);
};

function sendCalc() {
    $.ajax({
        method: "POST",
        url: "/calculate",
        data: {
            firstNumber: $(`#firstInput`).val(),
            secondNumber: $(`#secondInput`).val(),
            operator: operator,
        }
    }).then(function (response) {
        // render function called here
        $(`#firstInput`).val(``);
        $(`#secondInput`).val(``);
    });
};

function assignOpAdd () {
    operator = `+`;
}
function assignOpSubtract() {
    operator = `-`;
}
function assignOpMultiply() {
    operator = `*`;
}
function assignOpDivide() {
    operator = `/`;
}