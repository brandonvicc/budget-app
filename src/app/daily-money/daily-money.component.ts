import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-money',
  templateUrl: './daily-money.component.html',
  styleUrls: ['./daily-money.component.scss']
})
export class DailyMoneyComponent implements OnInit {

  @Input() dailyAmount:number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
