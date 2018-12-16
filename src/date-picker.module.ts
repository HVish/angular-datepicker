import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [CommonModule],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent],
  providers: [],
})
export class DatePickerModule { }
