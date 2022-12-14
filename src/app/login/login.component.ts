import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'
import {error} from "ajv/dist/vocabularies/jtd/properties";
import next from "ajv/dist/vocabularies/next";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    checkoutForm = this.formBuilder.group({
      login: '',
      password: '',
    });

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

      let userParam: string;
      let passParam: string;
      userParam = ''+this.checkoutForm.value.login;
      passParam = ''+this.checkoutForm.value.password;
      console.log('FormValue:', this.checkoutForm.value);
      console.log('Login:', this.checkoutForm.value.login);
      console.log('Password:', this.checkoutForm.value.password);
      this.loginService.login(userParam, passParam).subscribe({
                                  next: (data) => {
                                    console.log(data);
                                    this.loginService.setToken(data.token);
                                    this.router.navigateByUrl('/');
                                  },
                                  error: (err) => {
                                            alert("Datos incorrectos, revisalos por favor");
                                  },
  });
      this.checkoutForm.reset();
  }

}
