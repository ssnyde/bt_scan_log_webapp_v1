import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Auth } from 'aws-amplify';
import { APIService } from '../API.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, AfterContentChecked {

  @Input() isVisible: Boolean = true;
  cognitoIdentityId: string = '';

  constructor(private api: APIService) { }

  ngOnInit(): void {
    Auth.currentCredentials().then((info) => {
      this.cognitoIdentityId = info.identityId;
      console.log("Identity ID:" + info.identityId);
    });
    Auth.currentAuthenticatedUser().then((info) => {
      console.log("User ID (Sub): " + info.attributes.sub);
    });
    this.api.Echo("donkey").then((resp) => {
      console.log("Echo responded with: " + resp);
    })
  }



  ngAfterContentChecked(): void {
    if (this.isVisible == true) {
      console.log("Settings became visible");
    }
  }

}
