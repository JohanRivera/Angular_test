import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user: UserLogin;
  public fieldTextType: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new UserLogin();
  }

  ngOnInit(): void {}

  // Metodo que valida el form del login
  onSubmit(form: NgForm)
  {
    if (form.invalid) {
      return;
    }
    
    this.login(this.user); // Llamado de consumo de método de logeo
  }

  // Metodo para autenticar al usuario
  login(data: UserLogin)
  {
    this.authService.login(data).subscribe(response =>{
      if(response.accessToken !== '')
        this.router.navigate(['/'])
      else
        Swal.fire({
          icon: 'info',
          text: 'Usuario y/o contraseña invalida',
        })
    },(error) =>{
      Swal.fire({
        icon: 'error',
        text: 'Ha ocurrido un error al iniciar sesión',
      })
    });
  }

  rememberPassword(){
    Swal.fire({
      icon: 'info',
      text: 'Upss.. Sección aún en construcción',
    })
  }
}
