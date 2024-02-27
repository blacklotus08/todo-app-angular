import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureTodoRoutes } from './lib.routes';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

import { TodoListingComponent } from './components/todo-listing/todo-listing.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, 
    RouterModule.forChild(featureTodoRoutes),    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    CalendarModule,
    ToastModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule
  ],
  declarations: [TodoListingComponent, CreateTodoComponent],
})
export class FeatureTodoModule {}
