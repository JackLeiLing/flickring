import { PhotoService } from '../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos;
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe( data => {
      console.log(data);
      this.photos = data.items;
    } );
  }

}
