import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-filters',
  templateUrl: './sort-filters.component.html',
  styleUrls: ['./sort-filters.component.scss'],
  imports: [
    CommonModule
  ],
})
export class SortFiltersComponent implements OnInit {

  @Input()
  filter: any = {};

  @Input()
  filters: any[] = [];

  @Output()
  sortChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectChange($event: any) {
    this.sortChange.emit($event.target.value);
  }

}
