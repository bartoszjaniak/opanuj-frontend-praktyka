
const input = document.getElementById('input');
const validateBtn = document.getElementById('button');
const clearBtn = document.getElementById('button2');
const result = document.getElementById('result');

const checkLogic = (value) => Number(value) > 0 && Number(value) < 100 && Number(value) % 2 === 0;

validateBtn.addEventListener('click', () => {
    console.log(input.value, Number.isInteger(input.value), checkLogic(input.value)); // <- 20, false(?), true
    if (!input.value || !Number.isInteger(input.value) || !checkLogic(input.value)) {
        setResultMessage('Invalid');

        return;
    }

    setResultMessage('Valid');

    return;

});

clearBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
});

function setResultMessage(message) {
    result.innerHTML = message;
}

