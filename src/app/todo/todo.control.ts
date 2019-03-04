import { Todo } from './todo.model';
import { TodoStore } from './todo.store';
import { TodoView } from './todo.view';

const DefaultTodoConfigs = [
  {
    title: "Todo 1"
  },
  {
    title: "Todo 2"
  },
];

export class TodoControl {
  private todos: Todo[] = [];
  private todoView: TodoView;
  private store: TodoStore<Todo[]>;

  constructor() {
    this.todoView = new TodoView();
    this.store = new TodoStore();
  }

  public initialise() {
    const todos = this.store.getStore("todo-store");
    this.setTo(todos.length ? todos : DefaultTodoConfigs.map((todo) => new Todo(todo)));
    this.setEventHandles();
  }

  public completed(): Todo[] {
    return this.todos.filter((t) => t.completed);
  }

  private setTo(todos: Todo[]) {
    this.todos = todos;
    this.todoView.render(this.todos);
    this.store.setStore({ key: "todo-store", value: this.todos });
  }

  private setEventHandles() {
    // Add Todo
    this.todoView.onAddClick((input: JQuery<HTMLElement>) => {
      this.todos.push(new Todo({ title: input.val() as string }));
      this.setTo(this.todos);
      input.val("");
    });
    // Remove Todo
    this.todoView.onButtonClick((id: string) => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.setTo(this.todos);
    });
    // Complete Todo
    this.todoView.onCheckboxClick((id: string) => {
      const checkedTodo = this.todos.find((todo: Todo) => todo.id === id);
      if (checkedTodo) {
        checkedTodo.toggle();
        this.setTo(this.todos);
      }
    });
  }

}
