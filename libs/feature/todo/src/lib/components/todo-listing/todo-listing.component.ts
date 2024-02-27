import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { take, tap } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'webapp-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrl: './todo-listing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListingComponent implements OnInit {
  constructor(private todoService: TodoService, private cdf: ChangeDetectorRef) {
  }

  //#region Private Variables
  private _todoList:Todo[] = [];
  //#endregion

  //#region
  get todoList():Todo[] {
    return this._todoList;
  }
  //#endregion 

  ngOnInit(): void {
      this.todoService.getAllTodo().pipe(
        take(1),
        tap((result)=> this._todoList = result)
      ).subscribe(()=> this.cdf.detectChanges());
  }
  
}
