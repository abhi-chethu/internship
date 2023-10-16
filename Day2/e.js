function checkOddOrEven() {
    var number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
    } else {
        if (number % 2 === 0) {
            document.getElementById("result").innerText = number + " is even.";
        } else {
            document.getElementById("result").innerText = number + " is odd.";
        }
    }
}
