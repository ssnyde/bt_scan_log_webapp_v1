import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService, ScanEntry } from './API.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

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

  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListScanEntries().then((event) => {
      this.scan_entries = event.items as ScanEntry[];
      this.dataSource.data = this.scan_entries;
    });

    /* subscribe to new restaurants being created */
    this.dataSource.data = this.scan_entries;
    this.subscription = <Subscription>(
      this.api.OnCreateScanEntryListener.subscribe((event: any) => {
        this.scan_entries = [event.value.data.onCreateScanEntry, ...this.scan_entries];
        this.dataSource.data = this.scan_entries;
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
