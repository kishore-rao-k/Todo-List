const inputItem = document.getElementById("item");
const itemList = document.getElementById("itemList");

let allTodos = [];

inputItem.addEventListener("keyup", handleInput);

function handleInput(e) {
  let inputText = inputItem.value.trim();
//   console.log(e.keyCode);
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
  itemList.innerHTML = ""; // Clear list before re-rendering

  allTodos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-gray-200",
      "p-2",
      "rounded",
      "shadow"
    );

    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;
    input.classList.add("mr-2", "cursor-pointer");
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
      p.classList.add("line-through"); // ✅ Fix: Apply conditionally
    }

    let span = document.createElement("span");
    span.innerText = "X";
    span.classList.add(
      "ml-2",
      "px-2",
      "py-1",
      "bg-red-500",
      "text-white",
      "rounded",
      "cursor-pointer",
      "hover:bg-red-700"
    );
    span.addEventListener("click", () => {
      allTodos.splice(index, 1); // Remove todo
      createUI(); // Re-render UI
    });

    li.append(input, p, span);
    itemList.append(li);
  });
}
