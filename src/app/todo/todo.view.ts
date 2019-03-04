import { todoListTpl } from "../utils/template";
import { Todo } from "./todo.model";
import $ from "jquery";

export class TodoView {
  private $todoListNode = $("#todo-list");
  private $addInput = $("#todo-add-input");
  private $addButton = $("#todo-add-button");

  constructor() {
    console.log("Todo View create.");
  }

  public render(todoes: Todo[]) {
    this.$todoListNode.html(todoListTpl(todoes));
  }

  public onAddClick(callback: (element: JQuery<HTMLElement>) => void) {
    this.$addButton.on("click", (event) => {
      callback(this.$addInput);
    });
  }

  public onButtonClick(callback: (id: string) => void) {
    this.$todoListNode.on("click", (event) => {
      if ($(event.target).hasClass("remove-todo")) {
        callback($(event.target).siblings("input").attr("id") as string);
      }
    });
  }

  public onCheckboxClick(callback: (input: string) => void) {
    this.$todoListNode.on("click", (event) => {
      if ($(event.target).hasClass("complete-todo")) {
        callback($(event.target).attr("id") as string);
      }
    });
  }
}
