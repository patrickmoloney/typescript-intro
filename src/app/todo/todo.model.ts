import { guid } from "../utils/helpers";

export interface ITodo {
  id?: string;
  title: string;
  completed?: boolean;
}

export class Todo {
  public title: string;
  public completed: boolean;
  private _id!: string;

  // These get/set methods are a bit random,
  // but illustrate that we could use the if we wanted
  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  constructor(todo: ITodo) {
    // Generate an ID for our Todo if there isn't one already
    this.id = todo.id || guid();
    this.title = todo.title;
    // Set complete to false by default
    this.completed = todo.completed || false;
  }

  public toggle() {
    this.completed = !this.completed;
  }

  public asObject(): ITodo {
    // Return a normal object instead of an instance of this class, used for persisting in storage
    return {
      completed: this.completed,
      id: this.id,
      title: this.title
    };
  }
}
