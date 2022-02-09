const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(showData(data.results))
    }
}


function showData(arr) {
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = "Catch me if you can! "
        const h2 = document.createElement('h2')
        h2.textContent = arr[i].name
        document.body.appendChild(h1)
        document.body.appendChild(h2)
    }
}