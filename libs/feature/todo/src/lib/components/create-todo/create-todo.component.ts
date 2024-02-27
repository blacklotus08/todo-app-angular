import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'webapp-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoComponent {}
