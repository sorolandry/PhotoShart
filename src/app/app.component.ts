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


photocards!:PhotoCard[];
  ngOnInit(): void {
    this.photocards = [
      new PhotoCard(
        "Chaton joueur",
        "Un adorable chaton gris jouant avec une pelote de laine.",
        "https://img.lovepik.com/bg/20231220/Background-stock-photo-of-adorable-tiny-kitten-playing-with-a_2654441_wh860.jpg!/fw/860",
        new Date,
        0
      ),
      new PhotoCard(
        "Paysage d'automne",
        "Des arbres aux feuilles rouges et oranges dans un parc.",
        "https://img.freepik.com/photos-premium/paysage-colore-journee-automne-dans-parc-reflet-arbres-rouges-verts-oranges-jaunes-dans-lac-arbres-lac-marche-pique-nique-feuilles-eau-ciel-bleu-reflete-dans-eau_245580-582.jpg",
        new Date,
        0
      ),
      new PhotoCard(
        "Tour Eiffel la nuit",
        "La Tour Eiffel illuminée vue de la Seine.",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbr8SfEEcMoEo1OJkgVrbcRlvEA1FuK3JLg&s",
        new Date,
        0
      ),
      new PhotoCard(
        "Plats succulents",
        "Une table remplie de plats colorés et appétissants.",
        "https://www.mutuellebleue.fr/app/uploads/sites/2/2020/07/des-plats-%C3%A9quiliobr%C3%A9s-et-color%C3%A9s.jpg",
        new Date,
        0
      ),
      new PhotoCard(
        "Ondes à la plage",
        "Des vagues qui se brisent sur le sable blanc.",
        "https://img.freepik.com/photos-premium/vue-vagues-qui-se-brisent-rochers_1048944-5047550.jpg",
        new Date,
        0
      )
    ]
    
    this.photocards[2].setLocation('Paris');
  }
}
