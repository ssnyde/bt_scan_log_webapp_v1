import { Component, OnInit, Input, AfterContentChecked, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { Auth, input } from 'aws-amplify';
import { APIService } from '../API.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Input() isVisible: Boolean = true;
  scanner_id_box: string = '';

  constructor(private api: APIService) { }

  addScanner(): void {
    console.log("Box has value: " + this.scanner_id_box);
    console.log("Clicked add scanner button");
    Auth.currentSession().then((info) => {
      console.log("currentSession info: " + JSON.stringify(info.getIdToken()));
      var func_arg = {'jwtToken': info.getIdToken().getJwtToken(),
                      'scannerThingName': this.scanner_id_box};
      //func_arg['thing_name'] = 
      this.api.Echo(JSON.stringify(func_arg)).then((resp) => {
        console.log("Echo responded with: " + resp);
      })
    });
  }

}
