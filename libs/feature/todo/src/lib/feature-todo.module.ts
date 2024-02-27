import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureTodoRoutes } from './lib.routes';
import { PanelModule } from 'primeng/panel';


import { TodoListingComponent } from './components/todo-listing/todo-listing.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, 
    RouterModule.forChild(featureTodoRoutes),    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule
  ],
  declarations: [TodoListingComponent, CreateTodoComponent],
})
export class FeatureTodoModule {}
