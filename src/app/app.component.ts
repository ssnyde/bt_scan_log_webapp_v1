import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService, ScanEntry } from './API.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import Amplify, { PubSub, Auth } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['user', 'home', 'scanner', 'name', 'timestamp', 'rssi'];
  dataSource = new MatTableDataSource<ScanEntry>();
  title = 'bt_scan_log_webapp_v1';

  /* declare restaurants variable */
  public scan_entries: Array<ScanEntry> = [];

  
  constructor(private api: APIService) {

  }

  private subscription: Subscription | null = null;

  cognitoIdentityId: string = '';

  async ngOnInit() {
    /* Apply plugin with configuration */
    Amplify.addPluggable(
      new AWSIoTProvider({
        aws_pubsub_region: 'us-east-1',
        aws_pubsub_endpoint:
          'wss://al9jms4pkzeur-ats.iot.us-east-1.amazonaws.com/mqtt'
      })
    );

    Auth.currentCredentials().then((info) => {
      this.cognitoIdentityId = info.identityId;
      //console.log(info.identityId);
    });
  }

  ngAfterContentInit() {
    PubSub.subscribe('dt/bt_scan_log_v1/scanner1', { provider: 'AWSIoTProvider' }).subscribe({
      next: data => console.log('Message received', data),
      error: error => console.error(error),
      complete: () => console.log('Done'),
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
