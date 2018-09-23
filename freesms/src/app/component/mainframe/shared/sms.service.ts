import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Sms } from './sms.model';
@Injectable({
  providedIn: 'root'
})
export class SmsService {
smsList: AngularFireList<any>;
selectsms: Sms = new Sms();
  constructor(private firebase: AngularFireDatabase ) {}
  getData() {
    this.smsList = this.firebase.list('sms');
    return this.smsList;
    }

    insertSms(sms: Sms) {
      this.smsList.push({
        mobileumber: sms.mobileumber,
        message: sms.message
      });
    }
}
