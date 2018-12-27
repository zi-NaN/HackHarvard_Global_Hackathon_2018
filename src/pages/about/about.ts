import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutService } from './about.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [AboutService]
})
export class AboutPage {

  constructor(public navCtrl: NavController, public service: AboutService) {
    // today 
    const today: Date = new Date();
    let dd: string = ""+today.getDate();
    let mm: string = ""+(today.getMonth()+1); //January is 0!
    let yyyy: string = ""+today.getFullYear();

    if (parseInt(dd)<10) { dd = '0'+dd; } 
    if (parseInt(mm)<10) { mm = '0'+mm; } 

    let todayStr: string = yyyy+ '-' + mm + '-' + dd;
    console.log(todayStr);

    // date before one week
    var beforeStr: string;

    if (parseInt(dd) > 7) {
      beforeStr = yyyy + '-' + mm + '-' + (parseInt(dd)-7);

    } else if (parseInt(mm) == 1) {
      beforeStr = yyyy + '-12-' + (parseInt(dd)-7+31);

    } else if (parseInt(mm) == 4 || parseInt(mm) == 6 || parseInt(mm) == 8 ||
              parseInt(mm) == 11 || parseInt(mm) == 10 || parseInt(mm) == 2) {
      beforeStr = yyyy + '-' + (parseInt(mm)-1) + '-' + (parseInt(mm)-7+31);
    } else if (parseInt(mm) == 5 || parseInt(mm) == 7 || parseInt(mm) == 9 || parseInt(mm) == 12) {
      beforeStr = yyyy + '-' + (parseInt(mm)-1) + '-' + (parseInt(mm)-7+30);

    } else if (parseInt(mm) == 3) {
      let year:number = parseInt(yyyy);
      if (year%400 != 0 && year%4 == 0) {
        beforeStr = yyyy + '-' + (parseInt(mm)-1) + '-' + (parseInt(mm)-7+29);
      } else {
        beforeStr = yyyy + '-' + (parseInt(mm)-1) + '-' + (parseInt(mm)-7+28);
      }
    }

    console.log(beforeStr);

    // fetch data within one week
    this.fetchData(todayStr, beforeStr);
  }

  fetchData(end: string, begin:string) {
    let tableEmotionName: string;
    
    // this.fetchData.sqlite
    // select * from test where date between todayStr and beforeStr;

    this.service.setScore(0.4);
    // this.events.publish('emotion-data-week', data);
  }
}
