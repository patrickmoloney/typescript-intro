import { Todo } from './todo.model';
import { TodoView } from './too.view';
import { TodoStore } from './todo.store';

// Add TODO's Core Logic / State Management Here

export class TodoControl {
  todos: Array<Todo> = [];
  todoView: TodoView = new TodoView();
  store: TodoStore<Todo[]>;

  constructor() {
    this.store = new TodoStore();
  }

  initialise() {
    this.setTo([
      new Todo({
        title: 'Test 2'
      }),
      new Todo({
        title: 'Test 3'
      })
    ]);
    this.setEventHandles();
  }

  setTo(todos: Todo[]){
    this.todos = todos;
    this.todoView.render(this.todos);
    this.store.setStore({key: 'store', value: this.todos});
  }

  setEventHandles(){
    this.todoView.onAddClick((input: JQuery<HTMLElement>) => {
      this.todos.push(new Todo({ title: input.val() as string }));
      input.val('');
    });
  }

  completed(): Array<Todo> {
    return this.todos.filter((t) => t.completed);
  }

}
