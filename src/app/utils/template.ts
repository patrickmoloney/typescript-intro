import { Todo } from "../todo/todo.model";

export function todoTpl(todo: Todo): string {
  return `<li data-id="${todo.id}">
    <input class="complete-todo" type="checkbox" ${todo.completed ? 'checked' : ''} />
    <label ${todo.completed ? 'style="text-decoration: line-through"' : ''}>${todo.title}</label>
    <button class="remove-todo">X</button>
  </li>`
}

export function todoListTpl(todos: Array<Todo>): string {
  return todos.map((t: Todo) => todoTpl(t)).join('');
}
