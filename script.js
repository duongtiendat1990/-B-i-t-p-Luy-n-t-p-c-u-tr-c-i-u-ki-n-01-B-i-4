function findMax() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let numberThree = document.getElementById("numberThree").value;
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