import { Route } from '@angular/router';
import { TodoListingComponent } from './components/todo-listing/todo-listing.component';

export const featureTodoRoutes: Route[] = [
  {
    path: '',
    component: TodoListingComponent,
  },
];
