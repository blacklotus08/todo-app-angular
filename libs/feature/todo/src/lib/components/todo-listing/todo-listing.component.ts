import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'webapp-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrl: './todo-listing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListingComponent {}
