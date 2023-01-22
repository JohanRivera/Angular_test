import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { ShowDataComponent } from './show-data/show-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowDataComponent,
    AddDataComponent,
    UpdateDataComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
