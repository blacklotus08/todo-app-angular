import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureTodoRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureTodoRoutes)],
})
export class FeatureTodoModule {}
