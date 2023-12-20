const input = document.getElementById("add-box");
const addBtn = document.getElementById("add-todo");
const list = document.getElementById("list")

function addTodo() {
    if (input.value === "") {
        alert("Please enter in some text to the input box :)")
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = input.value.trim();

        let cancel = document.createElement("span");
        cancel.innerHTML = "\u00d7";

        listItem.appendChild(cancel);
        list.appendChild(listItem);

        cancel.addEventListener("click", removeTodo);
        listItem.addEventListener("click", toggleChecked);
    }
    input.value = "";
}

function removeTodo(event) {
    event.target.parentElement.remove();
}

function toggleChecked(event) {
    event.target.classList.toggle("checked")
}

addBtn.addEventListener("click", addTodo);

function handleKeyPress(event) {
    if (input.value.trim() === "" && event.keyCode === 13) {
        alert("Please enter in some text to the input box :)")
    }

    if (input.value.trim() !== "" && event.keyCode === 13) {
        addTodo();
    }
}

input.addEventListener("keypress", handleKeyPress)