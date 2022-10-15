import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Restaurant } from './API.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'description', 'city'];
  dataSource = new MatTableDataSource<Restaurant>();
  title = 'bt_scan_log_webapp_v1';

  public createForm: FormGroup;

  /* declare restaurants variable */
  public restaurants: Array<Restaurant> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  private subscription: Subscription | null = null;

  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListRestaurants().then((event) => {
      this.restaurants = event.items as Restaurant[];
      this.dataSource.data = this.restaurants;
    });

    /* subscribe to new restaurants being created */
    this.dataSource.data = this.restaurants;
    this.subscription = <Subscription>(
      this.api.OnCreateRestaurantListener.subscribe((event: any) => {
        this.restaurants = [event.value.data.onCreateRestaurant, ...this.restaurants];
        this.dataSource.data = this.restaurants;
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public onCreate(restaurant: Restaurant) {
    this.api
      .CreateRestaurant(restaurant)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
      });
  }
}
