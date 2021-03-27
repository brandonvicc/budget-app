import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Funds } from './../funds'

@Component({
  selector: 'app-total-money',
  templateUrl: './total-money.component.html',
  styleUrls: ['./total-money.component.scss']
})
export class TotalMoneyComponent implements OnInit {
  @Input() dailyAmount:number | undefined;
  @Output() changedDaily = new EventEmitter<number>()

  submitted:boolean = false;
  today:Date = new Date();
  model = new Funds(400,100)

  remainder:number | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
  }

  dailyChanged():void{
    this.remainder = this.getRemainingDays()


    if (this.remainder){
      this.onSubmit()
      this.dailyAmount = (this.model.totalMoney - this.model.totalExpenses) / this.remainder;
      this.changedDaily.emit(this.dailyAmount)
    }
  }

  getRemainingDays():any{
    if ((this.today.getMonth()+1) == 1 || 3 || 5 || 7 || 8 || 10 || 12){
      return 31 - this.today.getDate()
    } 
    else if((this.today.getMonth()+1) == 4 || 6 || 9 || 11){
      return 30 - this.today.getDate()
    } else {
      return 28 - this.today.getDate()
    }
  }

}

