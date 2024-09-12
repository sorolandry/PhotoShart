import { Component, OnInit } from '@angular/core';

import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoCard } from './models/photo-card';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PhotoCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myPhotoCard!:PhotoCard;
  ngOnInit(): void {
    this.myPhotoCard = new PhotoCard(
      "Chaton joueur",
      "Un adorable chaton gris jouant avec une pelote de laine.",
      "https://img.lovepik.com/bg/20231220/Background-stock-photo-of-adorable-tiny-kitten-playing-with-a_2654441_wh860.jpg!/fw/860",
      new Date,
      0
    )
  }
}
