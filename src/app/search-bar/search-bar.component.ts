import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term;
  @Output() termChanged: EventEmitter<string> = new EventEmitter();
  onSubmit() {
   this.termChanged.emit(this.term);
  }

}
