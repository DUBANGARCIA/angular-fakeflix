import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  textLogin: string = '';
  username = '';
  password = '';

  login() {
    if (this.username === 'usuario' && this.password === 'password') {
      this.textLogin = 'Has logrado entrar!!!';
    } else {
      this.textLogin = 'No estás autorizado para ingresar';
    }
  }

  ngOnInit() {
    console.log('He iniciado');
  }
}
