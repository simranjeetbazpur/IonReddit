import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{ RedditsPage} from '../reddits/reddits';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  category:any
  limit: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.getDefaults();
  }
getDefaults(){
  if(localStorage.getItem('category')!=null)
  this.category=localStorage.getItem('category');
  else
  this.category='ASOIAF'
  if(localStorage.getItem('limit')!=null)
  this.limit=localStorage.getItem('limit');
  else
  this.limit='15';

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  setDefaults(){
    localStorage.setItem('category',this.category);
    localStorage.setItem('limit',this.limit);
    
   //this.navCtrl.pop();
   this.navCtrl.push(RedditsPage);
    // this.navCtrl.popToRoot();
  }

}
