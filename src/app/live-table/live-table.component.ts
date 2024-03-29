import { Component, OnInit, OnDestroy, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.css']
})
export class LiveTableComponent implements OnInit, OnDestroy, AfterViewInit {

  dataSourceI: Array<any> = [];
  dataSource = new MatTableDataSource(this.dataSourceI);
  columnSelect = new FormControl('');
  columnList: string[] = [];
  columnSelected: string[] = [];
  //could not figure out what type this should be or how to initialize it
  subscription: any = null;
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
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
    //test code for adding some data to see if sorting works
    //this.columnList.push("name");
    //this.columnList.push("id")
    //this.dataSourceI.push({"name":"steve","id":"01"})
    //this.dataSourceI.push({"name":"jeve","id":"03"})
    console.log("Subscribe!");
    this.subscription = PubSub.subscribe('dt/bt_scan_log_v1/BS12K00000').subscribe({
      next: data => this.handle_data(data),
      error: error => console.error(error),
      complete: () => console.log('Done'),
    });
  }

  handle_data(data: any) {
    console.log(data.value);
    for (let new_column in data.value) {
      if (!this.columnList.includes(new_column)) {
        this.columnList.push(new_column);
        console.log("Added column " + new_column);
      }
    }
    this.dataSourceI.unshift(data.value);
    this.table.renderRows();
    //renderRows seems to not work after implementing sorting, needed this call
    //https://stackoverflow.com/questions/68619461/angular-material-table-renderrows-does-not-work-with-matsort?noredirect=1&lq=1
    this.dataSource._updateChangeSubscription();
  }

  ngAfterContentInit() {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    console.log("Destroyed!");
    if (this.subscription) {
      console.log("Unsubscribe!");
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
