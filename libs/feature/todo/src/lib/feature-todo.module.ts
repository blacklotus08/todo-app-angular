import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureTodoRoutes } from './lib.routes';
import { TodoListingComponent } from './components/todo-listing/todo-listing.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureTodoRoutes)],
  declarations: [TodoListingComponent, CreateTodoComponent],
})
export class FeatureTodoModule {}
