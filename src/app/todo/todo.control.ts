import { Todo } from "./todo.model";
import { TodoView } from "./too.view";

// Add TODO's Core Logic / State Management Here

export class TodoControl {
  todos: Todo[] = [];
  todoView: TodoView = new TodoView();

  constructor() {
    console.log('initial TodoControl:')
    this.todos = [
      new Todo({
        title: 'Test 1'
      }),
      new Todo({
        title: 'Test 2'
      }),
      new Todo({
        title: 'Test 3'
      })
    ];
  }

  initialise() {
    console.log('initial too:');
    this.todoView.render(this.todos);
    this.todoView.onAddClick((input: JQuery<HTMLElement>) => {
      console.log('A input: ', input[0])
      this.todos.push(new Todo({ title: input.val() as string }));
      input.val('');
      this.todoView.render(this.todos);
    });
  }

  completed(): Todo[] {
    return this.todos.filter((t) => t.completed);
  }

}
