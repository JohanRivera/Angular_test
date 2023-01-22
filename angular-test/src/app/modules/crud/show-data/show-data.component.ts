import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DataJson } from 'src/app/core/models/data.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})

export class ShowDataComponent implements OnInit {

  /*Variables para visualizar la tabla con opciones inicial*/
  @ViewChild('dataTmpl', { static: true }) dataTmpl!: TemplateRef<any>;
  @ViewChild('titleTpl', { static: true }) titleTpl!: TemplateRef<any>;

  ColumnMode = ColumnMode;
  public dataList: any = [];
  public columns: any = [];

  // Id para eliminar
  public idDelete: any;

  constructor(private crudService: CrudService, private router: Router){}
  
  ngOnInit(): void {
    // Ordenar tabla
    this.columns = [
      {
        cellTemplate: this.dataTmpl,
        headerTemplate: this.titleTpl,
        name: 'id',
        maxWidth:70
      },
      {
        cellTemplate: this.dataTmpl,
        headerTemplate: this.titleTpl,
        name: 'title',
        minWidth: 300
      },
      {
        cellTemplate: this.dataTmpl,
        headerTemplate: this.titleTpl,
        name: 'body',
        minWidth: 500
      },
      {
        cellTemplate: this.dataTmpl,
        headerTemplate: this.titleTpl,
        name: 'userId',
        maxWidth:150
      }
    ]
    
    // Obtener datos completos para tabla
    this.getData('');
  }

  getData(id: string)
  {
    if(id !== '')
      id = '/' + id;

    this.crudService.getData(id).subscribe(response => {
      if(response){
        this.dataList = response;
      }
      else
        Swal.fire({
          icon: 'info',
          text: 'No se han encontrado registros.',
        })
    }, error => {
      Swal.fire({
        icon: 'info',
        text: 'Es necesario recargar la pagina.',
      })
    });
  }

  obteinId(data: DataJson){
    this.idDelete = data.id
  }

  deleteData(data: any){
    this.crudService.deleteData('/' + data).subscribe(response => {
      Swal.fire({
        icon: 'success',
        text: 'Eliminación exitosa',
      })
      this.dataList = this.dataList.filter((item: { id: number; }) => item.id !== data)
    }, error =>{
      Swal.fire({
        icon: 'error',
        text: error
      })
    })
  }

  addData(){
    this.router.navigate(['/add'])
  }
}
