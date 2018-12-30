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
}
