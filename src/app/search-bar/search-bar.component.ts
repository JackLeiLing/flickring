import { PhotoService } from '../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term;
  photos;
  constructor(private ps: PhotoService) { }

  ngOnInit() {
    this.ps.getPhotos('river, mountain, beach').subscribe(d => {
      console.log(d.items);
      this.photos = d.items;
    });
  }
  onSubmit() {
    this.ps.getPhotos(this.term).subscribe(d => {
      this.photos = d.items;
    });
  }

}
