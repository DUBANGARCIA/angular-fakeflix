import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  textLogin: string = '';
  username: string = '';
  password: string = '';

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
