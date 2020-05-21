let operationButtons = document.getElementsByClassName('operation-button');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result;

    if ( operationCode === '+' ){
        result = number1 + number2;
    } else if (operationCode === '-' ){
        result = number1 - number2;
    }else if( operationCode === '*' ){
        result = number1 * number2;
    } else if ( operationCode === '/' ){
        result = number1 / number2;
    }else {
        window.alert('operation is unknown');
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for(let i = 0; i<operationButtons.length; i++){
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}

