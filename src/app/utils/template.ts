
export function todoTpl(todo: any): string {
  return `<li>
    <input id="${todo.id}" class="complete-todo" type="checkbox" ${todo.completed ? 'checked' : ''} />
    <label for="${todo.id}" ${todo.completed ? 'style="text-decoration: line-through"' : ''}>${todo.title}</label>
  </li>`
}

export function todoListTpl(todos: Array<any>): string {
  return todos.map((t: any) => todoTpl(t)).join('');
}
