import { Todo } from "../todo/todo.model";

export function todoTpl(todo: Todo): string {
  return `<li>
    <input id="${todo.id}" class="complete-todo" type="checkbox" ${todo.completed ? "checked" : ""} />
    <label for="${todo.id}" ${todo.completed ? 'style="text-decoration: line-through"' : ""}>${todo.title}</label>
    <button class="remove-todo">X</button>
  </li>`;
}

export function todoListTpl(todos: Todo[]): string {
  // Maps a todo array to the above template and joins them in one long string
  return todos.map((t: Todo) => todoTpl(t)).join("");
}
