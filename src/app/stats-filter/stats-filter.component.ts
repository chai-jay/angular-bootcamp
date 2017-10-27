import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { View } from './../data';
import { Subscription } from 'rxjs/Subscription';

export interface Filter {
  region: string;
  startDate: string;
  endDate: string;
  under18: boolean;
  '18to40': boolean;
  '40to60': boolean;
  '60plus': boolean;
}

@Component({
  selector: 'app-stats-filter',
  templateUrl: './stats-filter.component.html',
  styleUrls: ['./stats-filter.component.css']
})
export class StatsFilterComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public filterChangeSubscription: Subscription;
  @Output() onFilterChange = new EventEmitter<Filter>();
  @Input() set filter(value: Filter) {
    if (value) {
      this.form.setValue(value, {emitEvent: false});
    }
  }

  constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        region: ['All'],
        startDate: ['1990-01-01'],
        endDate: ['2018-01-01'],
        under18: [true],
        '18to40': [true],
        '40to60': [true],
        '60plus': [true]
      });

      this.filterChangeSubscription = this.form.valueChanges.startWith(this.form.value)
        .subscribe(f => this.onFilterChange.emit(f));
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.filterChangeSubscription.unsubscribe();
  }

}
