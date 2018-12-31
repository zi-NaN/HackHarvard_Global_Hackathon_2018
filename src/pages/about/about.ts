<<<<<<< HEAD
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }

=======
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

  constructor(public navCtrl: NavController, public service: AboutService) { }
>>>>>>> 7d2529b097f75d57b9e8768408af5bfc8a07bbb2
}
