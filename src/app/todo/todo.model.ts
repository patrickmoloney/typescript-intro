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

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  constructor(todo: ITodo) {
    this.id = todo.id || guid();
    this.title = todo.title;
    this.completed = todo.completed || false;
  }

  public toggle() {
    this.completed = !this.completed;
  }

  public asObject(): ITodo {
    return {
      completed: this.completed,
      id: this.id,
      title: this.title
    };
  }
}
