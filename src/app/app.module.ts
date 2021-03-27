import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyMoneyComponent } from './daily-money/daily-money.component';
import { TotalMoneyComponent } from './total-money/total-money.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyMoneyComponent,
    TotalMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
