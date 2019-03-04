import { guid } from "../utils/helpers";

interface ITodo {
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
    this.id = guid();
    this.title = todo.title;
    this.completed = todo.completed || false;
  }

  public toggle() {
    this.completed = !this.completed;
  }
}
