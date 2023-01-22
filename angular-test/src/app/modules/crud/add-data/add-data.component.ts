import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SendDataJson } from 'src/app/core/models/data.model';
import { CrudService } from 'src/app/core/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit{

  public dataJson!: SendDataJson;

  constructor(private router: Router, private crudService: CrudService){
    this.dataJson = new SendDataJson();
  }

  ngOnInit(): void {  }

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
    this.addData();
  }

  addData(){
    this.dataJson.userId = 1;
    this.crudService.addData(this.dataJson).subscribe(response =>{
      Swal.fire({
        icon: 'success',
        text: 'Información agregada con exito.',
      })
      this.cancelAdd();
    });
  }

  cancelAdd(){
    this.router.navigate(['/'])
  }
}
