import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import Amplify, { PubSub, Auth } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.css']
})
export class LiveTableComponent implements OnInit, OnDestroy {

  dataSourceI: Array<any> = [];
  dataSource = new MatTableDataSource(this.dataSourceI);
  columnSelect = new FormControl('');
  columnList: string[] = [];
  columnSelected: string[] = [];
  private subscription: Subscription | null = null;
  @ViewChild(MatTable) table!: MatTable<any>;
  @Input() isVisible: Boolean = true;

  constructor() { }

  ngOnInit(): void {
    /* Apply plugin with configuration */
    Amplify.addPluggable(
      new AWSIoTProvider({
        aws_pubsub_region: 'us-east-1',
        aws_pubsub_endpoint:
          'wss://al9jms4pkzeur-ats.iot.us-east-1.amazonaws.com/mqtt'
      })
    );
  }

  handle_data(data: any) {
    console.log(data.value);
    for (let new_column in data.value) {
      if (!this.columnList.includes(new_column)) {
        this.columnList.push(new_column);
        console.log("Added column " + new_column);
      }
    }
    this.dataSourceI.push(data.value);
    this.table.renderRows();
  }

  ngAfterContentInit() {
    console.log("Subscribe!");
    PubSub.subscribe('dt/bt_scan_log_v1/BS12K00000').subscribe({
      next: data => this.handle_data(data),
      error: error => console.error(error),
      complete: () => console.log('Done'),
    });
  }

  ngOnDestroy() {
    console.log("Destroyed!");
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  clear() {
    this.dataSourceI.length = 0;
    this.table.renderRows();
    this.columnList.length = 0;
    this.columnSelected = [];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
