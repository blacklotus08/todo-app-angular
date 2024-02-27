import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/';

  getAllTodo() { 
    return this.http.get<Todo[]>(this.baseUrl + 'todos').pipe(
      map((result)=> {
        return result.map((todo)=> {
          return {
            ...todo
          } as Todo;
        })
      })
    )
  }

  createNewTodo(payload: any) {
    return this.http.post<any>(this.baseUrl + 'todos', payload)
  }
}
