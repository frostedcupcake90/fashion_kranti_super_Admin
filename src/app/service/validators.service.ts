import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  minDate(){
    var t = new Date();
    t.setFullYear(t.getFullYear() - 80);
    let split= (t.toISOString()).split('T')
   return split[0]
  }
  currentDate(){
    var d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    let split= (d.toISOString()).split('T')
   return split[0]
  }
}
