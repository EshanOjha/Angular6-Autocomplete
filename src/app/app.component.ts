import { Component } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl } from '@angular/forms';
import get from 'lodash/get'
import $ from "jquery";
import { Injectable, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    @ViewChild('places') places: GooglePlaceDirective;
    @ViewChild('search' ) public searchElement: ElementRef;
    lat: number = 12.972442;
    lng: number = 77.580643;
    zoom: number = 5;
    userSettings2: any = {
      showRecentSearch: false,
      geoCountryRestriction: ['in'],
    };

    locations = [{location:'15.852792,74.498703', place:'Belgaum', state:'Karnataka'},
            {location:'12.972442,77.580643', place:'Bangalore', state:'Karnataka'},
          {location:'17.387140,78.491684' , place:'Hyderabad', state:'Telangana'},
          {location:'16.314209,80.435028' , place:'Guntur', state:'Andhra Pradesh'},
          {location:'16.515099,80.632095', place:'Vijayawada', state:'Andhra Pradesh'},
          {location:'13.067439, 80.237617', place:'Chennai', state:'Tamil Nadu'},
          {location:'12.9172, 74.8560', place:'Mangalore', state:'Karnataka'},
          {location:'18.516726, 73.856255', place:'Pune', state:'Maharashtra'},
          {location:'9.383452, 76.574059', place:'Thiruvalla', state:'Kerala'},
          {location:'20.296059, 85.824539', place:'Bhubaneswar', state:'Odisha'}];

    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    }

    ngOnInit() {
    }


    autoCompleteCallback1(selectedData:any) {
        //do any necessery stuff.
        const geo = get(selectedData,'data.geometry.location') || {}
        const placeId = get(selectedData,'data.id') || ''
        const address = get(selectedData,'data.description') || ''
        this.lat = geo && geo.lat;
        this.lng = geo && geo.lng;
        this.zoom = 10;
    }

    clickedMarker(ele,i){
      let data = ele.place +"," +ele.state
      alert(data)
    }

    onSearch(term: string){
       //this.searchTerm = term;
       //if (this.searchTerm === '') return;
       //this.results$ = this.placePredictionService.getPlacePredictions(term);
     }

}
