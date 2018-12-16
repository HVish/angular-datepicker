import { Component, OnInit } from '@angular/core';

import { TimeUnit } from '../utils/date';

@Component({
  selector: 'adp-date-picker',
  templateUrl: 'date-picker.component.html'
})

export class DatePickerComponent implements OnInit {
  today = (new Date()).endOf(TimeUnit.DAY);

  constructor() { }
  ngOnInit() { }
}
