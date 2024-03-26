// Retrieved The Element with their id
const item = document.querySelector('#item');
const todobox = document.querySelector('#to-do-box');

item.addEventListener("keyup", (evt) => {
  if (evt.key === "Enter") {
    addToDo(evt.currentTarget.value);
    evt.currentTarget.value = "";
  }
});

const addToDo = (item) => {
  if (item === "") {
    alert("Enter valid input");
    return false;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `${item} <i class="bi bi-trash"></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  todobox.appendChild(listItem);
};
