import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ RedditService } from '../../app/services/reddit.service';
import{DetailsPage} from'../details/details';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
items: any;
items1:any;
category:any;
limit:any
  constructor(public navCtrl: NavController, public redditservice:RedditService) {
  this.getDefaults();
  }
  ngOnInit(){
    console.log('it ran..');
    this.getPosts(this.category,this.limit);
    console.log('it ran2..');
    this.redditservice.getTest().subscribe(response =>{
      console.log(response.record);
      this.items1=response.record;

      
    })
    console.log('it ran3..');
  }
  
getDefaults(){
  if(localStorage.getItem('category')!=null)
  this.category=localStorage.getItem('category');
  else
  this.category='Food'
  if(localStorage.getItem('limit')!=null)
  this.limit=localStorage.getItem('limit');
  else
  this.limit='5';

}
  getPosts(category,limit){
    this.redditservice.getPosts(category,limit).subscribe(response =>{
      this.items=response.data.children;
    })
  }
  onView(item){
    this.navCtrl.push(DetailsPage,{
      item:item
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getPosts(this.category,this.limit);
  }
  ionViewWillEnter(){
    console.log('ionViewWillLoad HomePage');
    this.getDefaults();
    //this.getPosts(this.category,this.limit);
  }
  chngcat(){
    this.getPosts(this.category,this.limit)
  }

}
