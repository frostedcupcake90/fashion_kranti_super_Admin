import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ValidatorsService } from 'src/app/service/validators.service';

@Component({
  selector: 'app-forgot-email-password',
  templateUrl: './forgot-email-password.page.html',
  styleUrls: ['./forgot-email-password.page.scss'],
})
export class ForgotEmailPasswordPage implements OnInit {
  username: string = '';
  password: any;
  dob: any;
  mobileNo: any;
  constructor(private navCtrl: NavController, private menuCtrl: MenuController, public validatorService: ValidatorsService) { 

    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }



  showCredentials(){
    if(this.checkevent()){
      this.username = 'text'
    }
  }
  loginRedirection(){
    this.navCtrl.navigateBack('/login')
  }

  checkevent(){
if(this.mobileNo && this.dob){
  return true
}else{
  return false
}
  }

}
