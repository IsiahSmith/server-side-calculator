console.log('JS');
$(onReady)
function onReady () {
    console.log('JQ');
    
    $(`#equals`).on(`click`, sendCalc);
};

function sendCalc() {
    $.ajax({
        method: "POST",
        url: "/calculate",
        data: {
            firstNumber: $(`#firstInput`).val(),
            secondNumber: $(`#secondInput`).val(),
        }
    }).then(function (response) {
        // render function called here
        $(`#firstInput`).val(``);
        $(`#secondInput`).val(``);
    });
};