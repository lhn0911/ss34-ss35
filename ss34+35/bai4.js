let button = document.getElementById("click");
let h1 = document.getElementById("demo-id")
button.onclick = function(){
    h1.style.backgroundColor = "yellow"
    h1.style.color = "red"
}

button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.borderRadius = "4px";
