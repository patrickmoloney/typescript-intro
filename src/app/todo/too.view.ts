import { todoListTpl } from "../utils/template";
import { Todo } from "./todo.model";
import $ from 'jquery';

export class TodoView {
  $todoListNode = $('#todo-list');
  $addInput = $('#todo-add-input');
  $addButton = $('#todo-add-button');

  constructor() {
    console.log('Todo View create.')
  }

  render(todoes: Todo[]) {
    this.$todoListNode.html(todoListTpl(todoes))
  }

  onAddClick(callback: (element: JQuery<HTMLElement>) => void) {
    this.$addButton.on('click', (event) => {
      console.log('assa', this.$addInput)
      callback(this.$addInput);
    });

  }

  onButtonClick(callback: Function) {
    this.$todoListNode.on('click', (event) => {
      if ($(event.currentTarget).hasClass('remove-todo')) {
        callback($(event.currentTarget).attr('id'));
      }
    })
  }

  onCheckboxClick(callback: Function) {
    this.$todoListNode.on('click', (event) => {
      if ($(event.currentTarget).hasClass('complete-todo')) {
        callback($(event.currentTarget).attr('id'));
      }
    })
  }

}