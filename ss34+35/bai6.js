
document.getElementById("add-button").onclick = function() {
    let newItemValue = document.getElementById("new-item-input").value;

    if (newItemValue.trim() !== "") {
        let newListItem = document.createElement("li");
        newListItem.textContent = newItemValue;
        document.getElementById("item-list").appendChild(newListItem);
        document.getElementById("new-item-input").value = "";
    }
};
