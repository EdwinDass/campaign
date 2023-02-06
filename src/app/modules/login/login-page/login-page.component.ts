import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginEmailerror = false;
  customControl = FormControl;
  loginPwderror = false;
  form!: FormGroup;
  pwdVisible = false;
  myusername: string = "";
  mypassword: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {

    // this.form = this.fb.group({ username: '',password:'' });
  }
    ngOnInit(): void {

      this.form = this.fb.group({
        email: ["", [Validators.pattern, Validators.required]],
        password: ["", [Validators.pattern, Validators.required]],
      });
    }
    onSubmit(){
      this.myusername = this.form.get('email')?.value;
      this.mypassword = this.form.get('password')?.value;

      if(this.myusername=="ritika.singh@xuriti.com" && this.mypassword=="test@123" ){
        this.router.navigate(["home"]);
      }else{
        this.router.navigate(["/login"]);
        alert("Please Enter Valid Credentials!");
      }

    }

}

