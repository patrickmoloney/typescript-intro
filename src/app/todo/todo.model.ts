import { guid } from "../utils/helpers";

// Create a Todo Class to define what a TODO is.

interface TodoConfig {
  id?: string;
  title: string;
  completed?: boolean;
}

export class Todo {
  id: string;
  title: string;
  completed: boolean;

  constructor(todo: TodoConfig) {
    this.id = guid();
    this.title = todo.title;
    this.completed = todo.completed || false;
  }

  toggle() {
    this.completed = !this.completed;
  }

}