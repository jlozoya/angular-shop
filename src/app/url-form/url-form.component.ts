import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss']
})
export class UrlFormComponent implements OnInit {

  @Output()
  urlChange = new EventEmitter<string>();

  expanded = false;

  constructor() { }

  ngOnInit() {
  }

  onSend(url) {
      this.expanded = false;
      this.urlChange.emit(url);
  }

}
