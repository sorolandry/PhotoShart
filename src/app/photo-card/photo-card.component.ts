import { Component, Input, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-card';


@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss'
})
export class PhotoCardComponent implements OnInit {
  // title!: string;
  // description!:string;
  // created_at!: Date;
  // like!: number;
  // imageUrl!:string;
  @Input() photocart!:PhotoCard;
  textLikeButton!:string;
  isLiked!:boolean;

  ngOnInit():void{
   
    // this.title = "Chaton joueur";
    // this.description = "Un adorable chaton gris jouant avec une pelote de laine.";
    // this.created_at = new Date;
    // this.like=0;
    // this.imageUrl = "https://img.lovepik.com/bg/20231220/Background-stock-photo-of-adorable-tiny-kitten-playing-with-a_2654441_wh860.jpg!/fw/860";
    this.textLikeButton = 'Like';
    this.isLiked = true;
  }

  onLike():void{
    if(this.isLiked){
      this.photocart.like--;
      this.isLiked=false;
      this.textLikeButton = "UNLIKE";
    }
    else{
      this.photocart.like++;
      this.isLiked = true;
      this.textLikeButton = "LIKE";
    }

  }
}


