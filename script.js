function findMax() {
    let numberOne = Number(document.getElementById("numberOne").value);
    let numberTwo = Number(document.getElementById("numberTwo").value);
    let numberThree = Number(document.getElementById("numberThree").value);
    if (numberOne>numberTwo &&numberOne>numberThree) {
        max = numberOne;
    } else if (numberTwo>numberOne&&numberTwo>numberThree) {
        max = numberTwo;
    } else {
        max = numberThree;
    }
    document.getElementById("result").innerHTML = max;
}
function listen() {
    document.addEventListener('keydown', Check);
}
    function Check(e) {
        var keyCode = (event.key);
        if (keyCode == '+' || keyCode == '-' || keyCode == '.') {
            e.preventDefault()
        }
    }