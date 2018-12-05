
import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})

 export class HomePage {

 data:Observable<any>;
 city:any;
 citysearch = [];
 constructor(public navCtrl: NavController, public httpClient: HttpClient) {

   this.getData(null); 
   this.httpClient.get('assets/city.list.json').subscribe(data => {
     console.log(data);
     this.city = data;

   })
  
 }
getcity(event){
  var query = event.target.value;
  this.citysearch = this.city.filter((item) => {
    return (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  })
  console.log(this.citysearch)
  this.citysearch= this.citysearch.slice(0,5);
}
SearchCity(id){
  this.data = this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=metric" + "&APPID=44ae5b3958af46dd696552dcf64d9372");
   this.data.subscribe(data => {
     console.log('my data: ', data);
     console.log(data.temp);
     console.log(data.coord);
   })
   this.citysearch=[];
  }
 
  getData(place){
    //comments
      //var Place = event.target.value;
     //console.log(Place);
     this.data = this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=" + "San Francisco,us" + "&units=metric" + "&APPID=44ae5b3958af46dd696552dcf64d9372");
      this.data.subscribe(data => {
        console.log('my data: ', data);
        console.log(data.temp);
        console.log(data.coord);
      })
     }
   }
   

