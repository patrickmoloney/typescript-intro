import { TodoControl } from "./todo/todo.control";

// Defined how the application is Initialised

export class AppView {
  private control = new TodoControl();

  constructor() {
    console.log("AppView Started");
  }

  public initialise() {
    // Starts up a new control.
    this.control.initialise();
  }
}

