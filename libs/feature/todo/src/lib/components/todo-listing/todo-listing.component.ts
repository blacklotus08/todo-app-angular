import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { take, tap } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'webapp-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrl: './todo-listing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListingComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  constructor(
    private todoService: TodoService, 
    private cdf: ChangeDetectorRef, 
    private dialogService: DialogService
  ) {}

  //#region Private Variables
  private _todoList:Todo[] = [];
  //#endregion

  //#region
  get todoList():Todo[] {
    return this._todoList;
  }
  //#endregion 

  ngOnInit(): void {
    // Get List of Todo List
    this.fetchTodoList();
  }

    //#region Public Methods
  addNewTodo() {
      this.ref = this.dialogService.open(CreateTodoComponent, {
        header: 'Create New Todo',
        width: '50%',
        contentStyle: { overflow: 'visible' },
        baseZIndex: 10000,
        data: null
      });
  
      this.ref.onClose.subscribe((data) => {
        if (data) {
          this.todoService.createNewTodo(data).subscribe((result)=>{
            if (result && result.id) {
              this.fetchTodoList();
            }
          });
        }
      });
  }
  
  fetchTodoList() {
    this.todoService.getAllTodo().pipe(
      take(1),
      tap((result)=> this._todoList = result)
    ).subscribe(()=> this.cdf.detectChanges());
  }
  
}
