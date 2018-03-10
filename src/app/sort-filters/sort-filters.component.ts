import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-filters',
  templateUrl: './sort-filters.component.html',
  styleUrls: ['./sort-filters.component.scss']
})
export class SortFiltersComponent implements OnInit {

  @Input()
  filters: any[];

  @Output()
  sortChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectChange($event) {
    this.sortChange.emit($event.target.value);
  }

}
