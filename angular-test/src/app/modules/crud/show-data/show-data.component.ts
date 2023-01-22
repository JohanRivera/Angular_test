import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DataJson } from 'src/app/core/models/data.model';
import Swal from 'sweetalert2';

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

  constructor(private crudService: CrudService){}
  
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
        name: 'userId',
        maxWidth: 70
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
        console.log(response)
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

}
