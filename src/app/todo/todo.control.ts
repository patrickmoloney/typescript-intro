import { Todo, ITodo } from "./todo.model";
import { TodoStore } from "./todo.store";
import { TodoView } from "./todo.view";

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
  private store: TodoStore<ITodo[]>;

  constructor() {
    // Initialise or view and store classes
    this.todoView = new TodoView();
    this.store = new TodoStore();
  }

  public initialise() {
    // Get Todo list from storage
    const todos = this.store.getStore("todo-store");
    // Use Default todo list if nothing in storage
    this.setTo(todos.length ? todos.map((todo: ITodo) => new Todo(todo)) : DefaultTodoConfigs.map((todo) => new Todo(todo)));
    // Setup click event handlers
    this.setEventHandles();
  }

  public completed(): Todo[] {
    return this.todos.filter((t) => t.completed);
  }

  private setTo(todos: Todo[]) {
    // Sort Todo by is completed
    this.todos = todos.sort((a, b) => (a.completed) ? 1 : (b.completed) ? - 1 : 0);
    // Render Todo list into the html
    this.todoView.render(this.todos);
    // Store the todo list in sessionStorage
    this.store.setStore({
      key: "todo-store",
      value: this.todos.map((todo) => todo.asObject())
    });
  }

  private setEventHandles() {
    // Add Todo
    this.todoView.onAddClick((input: JQuery<HTMLElement>) => {
      // push the new todo into out list
      this.todos.push(new Todo({ title: input.val() as string }));
      this.setTo(this.todos);
      // clear the input so we can add another
      input.val("");
    });
    // Remove Todo
    this.todoView.onButtonClick((id: string) => {
      // filter out the todo with the id returned.
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.setTo(this.todos);
    });
    // Complete Todo
    this.todoView.onCheckboxClick((id: string) => {
      // find the checked todo and set to complete
      const checkedTodo = this.todos.find((todo: Todo) => todo.id === id);
      if (checkedTodo) {
        checkedTodo.toggle();
        this.setTo(this.todos);
      }
    });
  }

}
