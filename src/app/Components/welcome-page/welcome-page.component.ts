import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

displayCred = false;

loginUser = "Abhishek"
loginPass = 'upswing@123'

loginForm !: FormGroup;

constructor(private fb: FormBuilder , private route : Router ) {

  this.loginForm = this.fb.group({
    username : ['',[Validators.required]],
    password : ['' , [Validators.required]]
  })

}
 login(){

const user = this.loginForm.get('username')?.value;
const pass = this.loginForm.get('password')?.value;

if (this.loginForm.valid) {
  if (user == this.loginUser && pass == this.loginPass) {
    this.route.navigateByUrl('product-list')
  }else{
    alert('Invalid Credentials')
  }
}
 }

cred(){
  this.displayCred = true;
}
close(){
  this.displayCred = false;
}

}
