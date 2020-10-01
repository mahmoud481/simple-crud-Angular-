import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {  }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
  }
  delete(id): Observable<Todo[]> {
    return this.http.delete<Todo[]>('https://jsonplaceholder.typicode.com/todos/' + id);
  }
  update(todo: Todo): Observable<Todo[]> {
    return this.http.put<Todo[]>('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo);
  }
  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos/', todo);
  }
}
