import { Component, OnInit } from '@angular/core';
import Amplify, { PubSub, Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bt_scan_log_webapp_v1';
  
  constructor() {

  }

  cognitoIdentityId: string = '';

  async ngOnInit() {
    Auth.currentCredentials().then((info) => {
      //this.cognitoIdentityId = info.identityId;
      //console.log(info.identityId);
    });
  }

  hide() {
    
  }

}
