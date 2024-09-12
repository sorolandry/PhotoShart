export class PhotoCard{
    constructor(
        public title:string,
        public description:string,
        public imageUrl:string,
        public created_at: Date,
        public like: number,
    ) { }
  }