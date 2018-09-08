import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photoUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';
  constructor(
    private http: HttpClient
  ) { }

  getPhotos (tag: string) {
    return this.http.jsonp(`${this.photoUrl}${tag}`, 'jsoncallback');
  }

}
