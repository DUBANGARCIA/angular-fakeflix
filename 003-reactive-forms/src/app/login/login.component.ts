import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  textLogin: string = '';
  // username = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [Validators.required]);
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    if (this.loginForm.value.username  === 'usuario@email.com' && this.loginForm.value.password.value === 'password') {
      this.textLogin = 'Has logrado entrar!!!';
    } else {
      this.textLogin = 'No estás autorizado para ingresar';
    }
  }
}
