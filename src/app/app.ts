import { TodoControl } from "./todo/todo.control";

// Defined how the application is Initialised

export class AppView{
  control = new TodoControl();

  constructor(){
    console.log('AppView Started');
  }

  initialise(){
    this.control.initialise();
  }
}

