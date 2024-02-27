import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'todo',
    },
    {
        path: '',
        loadChildren: () =>
          import('@webapp/feature/todo').then((m) => m.FeatureTodoModule),
    },
    {
        path: 'todo',
        loadChildren: () =>
        import('@webapp/feature/todo').then((m) => m.FeatureTodoModule),
      },
  ];
