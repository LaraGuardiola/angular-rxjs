import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>(`https://api.unsplash.com/photos/random`, {
      headers: {
        Authorization: 'Client-ID ' + 'T5vBWWjRjLWHR5LJEBC0ELEZFt-J2HIPaC8d6HlixfY'
      }
    });
  }
}

//we ensure the response has an structure with the interface