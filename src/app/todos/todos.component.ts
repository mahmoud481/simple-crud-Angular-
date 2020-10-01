import { Todo } from './../models/todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(item => {
      this.todos = item;
    });
  }
  toggleTodo(todo) {
    this.todos = this.todos.map(item => {
      if (todo.id === item.id) {
        item.completed = !item.completed;
        this.todoService.update(todo).subscribe(() => {});
      }
      return  item;
    });
  }
  deleteTodo(todo) {
    this.todoService.delete(todo.id).subscribe(() => {
    this.todos = this.todos.filter(item => {
       return item !== todo;
    });
  });
  }
  addTodo(todo) {
    this.todoService.add(todo).subscribe((newItem) => {
      console.log(todo, newItem);
      this.todos.push(newItem);
    });
  }

}
