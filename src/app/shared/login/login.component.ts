import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginValid = true;

  constructor(private formB: FormBuilder, private router: Router) {
    this.loginForm = this.formB.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(data: any){
    this.loginValid = true;
    if(this.loginForm.invalid === false){      
      let user: any = {};
      const { email, pass } = data;
      if(email == 'prueba@gmail.com' && pass == '123456'){
        user = {
          id: '001',
          name: 'prueba',
          email: 'prueba@gmail.com',
          uid: '001_prueba@56'
        }
      localStorage.setItem('login', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
      }else if(email == 'lorem@gmail.com' && pass == '123456'){
        user = {
          id: '003',
          name: 'lorem',
          email: 'lorem@gmail.com',
          uid: '003_lorem@56'
        }
      localStorage.setItem('login', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
      }else if(email == 'javascript@gmail.com' && pass == '123456'){
        user = {
          id: '006',
          name: 'java',
          email: 'javascript@gmail.com',
          uid: '006_java@56'
        }
      localStorage.setItem('login', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
      }else {
        this.loginValid = false;
        alert("correo o contraseña incorrecta")
      }
    }else {
      this.loginValid = false;
    }
  }

}
