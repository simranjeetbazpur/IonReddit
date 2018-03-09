import { Injectable }from '@angular/core';
import{ Http }from'@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
http:any;
baseUrl: String;
bs2:String;
 proxyurl = "https://cors-anywhere.herokuapp.com/";
constructor(http:Http){
    this.http=http;
    this.baseUrl='https://www.reddit.com/r';
this.bs2="http://192.168.43.127/php1.php";
}
getPosts(category,limit){
    return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
    .map(res=> res.json())
    
}
getTest(){
    console.log("in getTest");
    return this.http.get(this.bs2).map(res => res.json());
}
}
