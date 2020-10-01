import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  text: string;
  @Output() addEvent = new EventEmitter();
  generateUUID() { // Public Domain/MIT
    let d = new Date().getTime(); // Timestamp
    // tslint:disable-next-line:max-line-length
    let d2 = (performance && performance.now && (performance.now() * 1000)) || 0; // Time in microseconds since page-load or 0 if unsupported
    // tslint:disable-next-line:only-arrow-functions
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16; // random number between 0 and 16
        if (d > 0) { // Use timestamp until depleted
            // tslint:disable-next-line:no-bitwise
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {// Use microseconds since page-load if supported
            // tslint:disable-next-line:no-bitwise
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        // tslint:disable-next-line:no-bitwise
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

  constructor() { }

  addTodo() {
    const todo = new Todo(
      this.text,
      false
    );
    this.addEvent.emit(todo);
    this.text = '';
  }
  ngOnInit() {
  }

}
