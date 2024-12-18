const input = document.getElementById('numberInput');
const errorText = document.getElementById('errorText');


const realNumberRegex = /^-?\d+([.,]\d+)?$/;

input.addEventListener('input', () => {
    const value = input.value.trim();
    const normalizedValue = value.replace(',', '.');

    if (value === "") {
        errorText.textContent = "";
    } else if (!realNumberRegex.test(value) || isNaN(Number(normalizedValue))) {
        errorText.textContent = "Помилка: введіть коректне дійсне число!";
    } else {
        errorText.textContent = "";
    }
});