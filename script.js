let display = document.getElementById("display");
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        let result = new Function("return " + display.value)();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", (event) => {
    let key = event.key;

    if ("0123456789+-*/.%".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});


