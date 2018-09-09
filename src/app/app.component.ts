import { PhotoService } from './photo.service';
import { Component, OnInit, Input } from '@angular/core';
import FlickrAPI from './shared/flickrAPI.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'flickring';
  photos;
  constructor(private ps: PhotoService) {}

  ngOnInit() {
    this.ps.getPhotos('mountains, lakes, beach').subscribe((d: FlickrAPI) => {
      this.photos = d.items;
    });
  }

  onTermChange(e) {
    this.ps.getPhotos(e).subscribe((d: FlickrAPI) => {
      this.photos = d.items;
    });
  }
}
