const inputItem = document.getElementById("item");
const itemList = document.getElementById("itemList");

let allTodos = [];

inputItem.addEventListener("keyup", handleInput);

function handleInput(e) {
  let inputText = inputItem.value.trim();

  if (e.keyCode === 13 && inputText !== "") {
    let todo = {
      name: inputText,
      isDone: false,
    };
    allTodos.push(todo);
    inputItem.value = "";
    createUI();
  }
}

function createUI() {
  itemList.innerHTML = "";

  allTodos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-gray-100",
      "p-2"
    );

    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;
   
    input.addEventListener("change", () => {
      todo.isDone = input.checked;
      if (todo.isDone) {
        p.classList.add("line-through");
      } else {
        p.classList.remove("line-through");
      }
    });

    let p = document.createElement("p");
    p.innerText = todo.name;
    if (todo.isDone) {
      p.classList.add("line-through");
    }

    let span = document.createElement("span");
    span.innerText = "X";
    span.classList.add("p-2", "bg-red-500", "text-white");
    span.addEventListener("click", () => {
      allTodos.splice(index, 1);
      createUI();
    });

    li.append(input, p, span);
    itemList.append(li);
  });
}
