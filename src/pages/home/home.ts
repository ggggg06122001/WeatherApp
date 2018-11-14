import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: Observable<any>;

  constructor(public navCtrl: NavController,  public httpClient: HttpClient) {
   this.getData(null);
  }

  getData(event){
    //comment
    //var place = event.target.value;
    //console.log(place);
    this.data = this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=" + "san francisco,us" + "&units=metric" + "&appid=44ae5b3958af46dd696552dcf64d9372");
    this.data.subscribe(data => {
      console.log('my data: ', data);
      console.log(data.temp);
      console.log(data.coord);
    })
  }

}