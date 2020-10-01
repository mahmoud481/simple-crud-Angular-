import { Todo } from '../models/todo';
import { Output } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() toggleEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() { }


  onChange(todo: Todo) {
    this.toggleEvent.emit(todo);
  }
  ondelete(todo: Todo) {
      this.deleteEvent.emit(todo);
  }
}
