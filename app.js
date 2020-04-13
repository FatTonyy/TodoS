const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search");

const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between alight-items-center">
        <span>${todo}</span>
        <!-- <i class="far fa-trash-alt delete"></i> -->
        <ion-icon name="trash" class="delete"></ion-icon>
      </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); // resets input field after submitting
  }
});

// delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter todos function
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

// listen for keyup event for search
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
