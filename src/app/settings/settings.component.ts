import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Auth } from 'aws-amplify';
import { APIService } from '../API.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() isVisible: Boolean = true;
  cognitoIdentityId: string = '';

  constructor(private api: APIService) { }

  ngOnInit(): void {
    Auth.currentSession().then((info) => {
      console.log("currentSession info: " + JSON.stringify(info.getIdToken()));
      this.api.Echo(JSON.stringify(info.getIdToken())).then((resp) => {
        console.log("Echo responded with: " + resp);
      })
    });

  }

}
