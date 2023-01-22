import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataJson } from 'src/app/core/models/data.model';
import { CrudService } from 'src/app/core/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit{

  public dataJson!: DataJson;

  constructor(private router: Router, private crudService: CrudService, private route: ActivatedRoute){
    this.dataJson = new DataJson();
  }

  ngOnInit(): void {
    this.route.params.subscribe((queryParam: any) => {
      this.dataJson.id = queryParam.id;
      this.getData(this.dataJson.id);
    });
  }

  getData(data: any){
    this.crudService.getData('/' + data).subscribe(response => {
      this.dataJson = response;
    });
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      })
      Swal.fire({
        icon: 'info',
        text: 'Debe diligenciar los campos obligatorios marcados con un asterísco (*) en el formulario',
      })
      return;
    }
    this.putData();
  }

  putData(){
    this.crudService.updateData(this.dataJson, '/' + this.dataJson.id).subscribe(response =>{
      Swal.fire({
        icon: 'success',
        text: 'Información actualizada con exito.',
      })
      this.cancelAdd();
    });
  }

  cancelAdd(){
    this.router.navigate(['/'])
  }
}
