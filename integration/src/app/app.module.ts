import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DatePickerModule } from 'angularx-date-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'date-picker' }),
    DatePickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
