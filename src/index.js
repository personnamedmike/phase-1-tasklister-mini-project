document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // extract inputted value
    const task = e.target["new-task-description"].value;

    // append x button as childElement to ul
    const button = document.createElement("button");
    button.textContent = "x";

    const li = document.createElement("li");
    li.textContent = `${task} `;
    li.appendChild(button);

    button.addEventListener("click", removeTask);
    const ul = document.querySelector("ul");
    ul.append(li);

    form.reset();
  });
});

function removeTask() {
  this.parentNode.remove();
}
