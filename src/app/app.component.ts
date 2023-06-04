import { Component, OnInit } from '@angular/core';
import Amplify, { PubSub, Auth } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bt_scan_log_webapp_v1';
  liveTableVisible: Boolean = true;
  settingsVisible: Boolean = false;
  
  constructor() {

  }

  cognitoIdentityId: string = '';

  async ngOnInit() {
    Auth.currentCredentials().then((info) => {
      //this.cognitoIdentityId = info.identityId;
      //console.log(info.identityId);
    });
    Amplify.addPluggable(
      new AWSIoTProvider({
        aws_pubsub_region: 'us-east-1',
        aws_pubsub_endpoint:
          'wss://al9jms4pkzeur-ats.iot.us-east-1.amazonaws.com/mqtt'
      })
    );
  }

  showTable() {
    this.settingsVisible = false;
    this.liveTableVisible = true;
  }

  showSettings() {
    this.liveTableVisible = false;
    this.settingsVisible = true;
  }

}
