import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { APIService, ScanEntry } from './API.service';
import { Subscription } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import Amplify, { PubSub, Auth } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  dataSourceI: Array<any> = [];
  dataSource = new MatTableDataSource(this.dataSourceI);
  title = 'bt_scan_log_webapp_v1';
  columnSelect = new FormControl('');
  columnList: string[] = [];
  columnSelected: string[] = [];

  @ViewChild(MatTable) table!: MatTable<any>;
  
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
      //this.cognitoIdentityId = info.identityId;
      //console.log(info.identityId);
    });
  }

  handle_data(data: any) {
    //console.log(data.value);
    for (let new_column in data.value) {
      if (!this.columnList.includes(new_column)) {
        this.columnList.push(new_column);
        //console.log("Added column " + new_column);
      }
    }
    this.dataSourceI.push(data.value);
    this.table.renderRows();
  }

  ngAfterContentInit() {
    PubSub.subscribe('dt/bt_scan_log_v1/scanner_sim_1', { provider: 'AWSIoTProvider' }).subscribe({
      next: data => this.handle_data(data),
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

  clear() {
    this.dataSourceI.length = 0;
    this.table.renderRows();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
