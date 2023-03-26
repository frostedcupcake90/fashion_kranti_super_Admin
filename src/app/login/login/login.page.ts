import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  type = 'signin'
  options:any
  auth:any
  emailPattern = /^[A-Za-z0-9]+([._-]{0,1}[A-Za-z0-9])+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    username: string = '';
    password: any;
    fullname: string = '';
    email: string = '';
    otp!: number;
    mobileNo: number | undefined;
    set_password: any;
    confirm_password: any;
    passwordIcon1: string = 'eye-off';
    show: boolean = false;
    ey1: any = false;
    incorrectPassword:any = false
    constructor(
      public navCtrl : NavController, public alert:AlertController) { }
  
    ngOnInit() {
  
    }
  
    hideShowPassword() {
      this.show = !this.show;
      this.passwordIcon1 = this.passwordIcon1 === 'eye-off' ? 'eye-on' : 'eye-off';
    }
  
    btnCheck = false
    checkEvent() {
      if (this.password && this.password.length > 0) {
        this.ey1 = true;
      }
      else {
        this.ey1 = false;
      }
      if (this.password && this.password.length > 0) {
        this.btnCheck = true
        return true;
      }
      else {
        this.btnCheck = false
        return false;
      }
    }
  

  errorText = false
    signupFunc(){
      if(this.set_password != this.confirm_password)
      {
        this.errorText = true
      }else{
        this.errorText = false
        let cred= { "user": { "email": this.email, 
        "password": this.set_password,
      "name" : this.fullname } }
      // this.commonService.signUp(cred).subscribe((response: any) => {
      //   if(response.status.code == 200){
      //     this.commonService.userData = response.data
      //     this.type = 'signin'
      //     this.presentAlert('Sign Up successful. Please sign in!');
          
      //   }
      //   console.log('signup success',response)
      // },err =>{
      //   if(err.status == 422){
      //     this.presentAlert('Email is already Used');
      //   }
      // })
    }
    }
    async presentAlert(message: string) {
      const alert = await this.alert.create({
        // header: header,
        message: message,
        buttons: ['OK'],
        cssClass: 'ieco-alert',
        mode: 'ios',
      });
    
      await alert.present();
      alert.onDidDismiss().then(() => {
      })
    }
    signinFunc(){
      this.incorrectPassword = false
      let cred= { "user": { 
        "email": this.username, 
      "password": this.password
    }}
    this.navCtrl.navigateForward('/dashboard')
      // this.commonService.signin(cred).subscribe((response: any) => {
      //   console.log('signin success',response)
      //   console.log(response.headers.get('Authorization'))
      //   if(response.body?.status?.code == 200){
      //     this.commonService.userData = response.body.data
      //     this.commonService.auth = response.headers.get('Authorization')
      //     this.commonService.isAdmin = response.body.data.is_admin
      //     this.navCtrl.navigateForward('/my-dashboard')
      //   }else{
      //     this.incorrectPassword = true
      //   }
      // },err=>{
      //   this.incorrectPassword = true
      // })
    }
  
    // userTypeCheck(userType:any){
    //   if(userType == 'user'){
    //     this.userType = 'user'
    //   }else if(userType == 'admin'){
    //     this.userType = 'admin'
    //   }
    // }
  
    checkevent(btnName:any){
      if(this.type == 'signin'){
        if(this.username && this.password)
        {
          return true
        }else{
          return false
        }
    }else if(btnName == 'signup'){
      if(this.fullname && this.email && this.set_password)
      {
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

  validateLength(event:any){
    if (event.target.value.length > 50){
      this.email = event.target.value.substring(0, 49);
    }
  }

  onEmailChange() {
    if (!this.emailPattern.test(this.email.trim())) {
     // this.emailError = errorMessage.invalidEmail
    } else {
     // this.emailError = ''
    }
  }
  }
