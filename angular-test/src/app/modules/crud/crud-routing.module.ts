import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  {
    path: '',
    component: ShowDataComponent
  },
  {
    path: 'add',
    component: AddDataComponent
  },
  {
    path: 'edit',
    component: UpdateDataComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
