var square = document.getElementById("square");

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
})

square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
})

window.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange"
});

window.addEventListener("keyup", myFunction);

function myFunction(event) {
    var x = event.keyCode;
    if (x == 82) { //82 = 'r'
     square.style.backgroundColor = "red";
    } else if (x == 66) { //66 = 'b'
        square.style.backgroundColor = "blue";
    } else if (x == 89) { // 89 = 'y'
        square.style.backgroundColor = "yellow";
    } else if (x == 71) { // 71 = 'g'
        square.style.backgroundColor = "green";
    } else if (x == 79) { //79 = 'o'
        square.style.backgroundColor = "orange";
    }
};