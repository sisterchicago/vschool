let img = document.getElementById("button")
img.addEventListener("click", clickCount)

let count = 0
localStorage.getItem("numberOfClicks")       
if ("numberOfClicks" === 0) {              
    document.getElementById("clicks").innerHTML = 0
} else {                               
    document.getElementById("clicks").innerHTML = localStorage.getItem("numberOfClicks")   
}
function clickCount() {
    count += 1
    localStorage.setItem("numberOfClicks", count)
    document.getElementById("clicks").innerHTML = localStorage.getItem("numberOfClicks")
    console.log(count)
}