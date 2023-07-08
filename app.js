let div = document.getElementById("ok")
let button = document.getElementById("haha")

button.addEventListener("click",(event) =>{
    if (button.innerHTML == "ẩn") {
        div.classList.add("hidden")
        button.innerHTML = "hiện"
    } else {
        div.classList.remove("hidden")
        button.innerHTML = "ẩn"
    }
})