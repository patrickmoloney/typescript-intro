import { guid } from "../utils/helpers";

// Create a Todo Class to define what a TODO is.

enum Type {
  MEETING,
  ACTIVITY
}

interface Config {
  id?: string;
  title: string;
  type?: Type;
  completed?: boolean;
}

export class Todo {
  id: string;
  title: string;
  type: Type;
  completed: boolean;

  constructor(todo: Config) {
    this.id = guid();
    this.title = todo.title;
    this.type = todo.type || Type.ACTIVITY;
    this.completed = todo.completed || false;
  }

  toggle() {
    this.completed = !this.completed;
  }

}