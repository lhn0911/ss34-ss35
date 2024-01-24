let button = document.getElementById("demo-id");

button.onclick = function(){
    document.querySelector('h1').textContent = "Text after change";
}

button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.borderRadius = "4px";
