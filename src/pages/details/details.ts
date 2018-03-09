import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  
  templateUrl: 'details.html',
})
export class DetailsPage {
item:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.item=navParams.get('item');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
