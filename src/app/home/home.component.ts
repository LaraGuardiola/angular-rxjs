import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photoUrl: string = ''

  constructor(private photoService: UnsplashService){ 
    this.getRandomPhoto()
  }

  onClick(){
    this.getRandomPhoto()
  }

  getRandomPhoto(){
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular
    })
  }

  ngOnInit(): void {
  }

}

//getPhoto returns an observable that emits events we subscribe to, and since we are console log in the exact structure TS is not annoying