import { prepareMessage } from './validation/messaging';

function main() {
    const input = document.getElementById('input')! as HTMLInputElement;
    const validateBtn = document.getElementById('button')!;
    const clearBtn = document.getElementById('button2')!;
    const result = document.getElementById('result')!;


    validateBtn.addEventListener('click', () => {
        const message = prepareMessage(input.value);
        setResultMessage(message);
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        result.innerHTML = '';
    });

    function setResultMessage(message: string) {
        result.innerHTML = message;
    }

}

main();