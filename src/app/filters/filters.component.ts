import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../shared/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  imports: [CommonModule]
})
export class FiltersComponent implements OnInit {

  @Input()
  categories: Category[] = [];

  @Input()
  customFilters: any[] = [];

  @Input()
  priceFilters: any[] = [];

  @Input()
  filter: any = {};

  @Output()
  filterChange = new EventEmitter<any>();


  showFilters = true;

  sideShown = false;

  constructor() { }

  ngOnInit() {
  }

  reset(customFilters: any, priceFilters: any) {
    this.customFilters = customFilters;
    this.priceFilters = priceFilters;
    this.showFilters = false;
    setTimeout(() => {
      this.showFilters = true;
    });
  }

  onInputChange($event: any, filter: any, type: any) {
    const change = $event.target.checked ? 1 : -1;
    this.filterChange.emit({
      type: type,
      filter: filter,
      isChecked: $event.target.checked,
      change: change
    });
  }
}
