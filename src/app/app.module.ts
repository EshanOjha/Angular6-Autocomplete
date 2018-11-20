import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AppComponent } from './app.component';
import {AgmCoreModule } from '@agm/core';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule,
    Ng4GeoautocompleteModule.forRoot(),
    AgmCoreModule.forRoot({
         apiKey:'AIzaSyCbH3ty6Z6iOWfu6hxrlgs4JRc6jYa0piI',
          libraries: ["places"]
      }),
      AgmJsMarkerClustererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
