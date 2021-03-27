import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Budget Calculator';
  dailyAmount: number = 60;


  dailyChanged(newDaily:any):void{
    this.dailyAmount = newDaily;
  }
}
