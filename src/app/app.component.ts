import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  spaceScreens: Array<any>;

  constructor( private http: Http )
  {
    this.http.get( 'src/data.json' )
    .map( response => response.json().screenshots )
    .subscribe( res => this.spaceScreens = res );
  }

  public likeMe(i)
  {
    if( this.spaceScreens[i].liked == 0 )
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  public deleteMe(i)
  {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }
}
