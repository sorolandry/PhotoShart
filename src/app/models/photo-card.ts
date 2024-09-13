export class PhotoCard{
    location? : string;
    constructor(
        public title:string,
        public description:string,
        public imageUrl:string,
        public created_at: Date,
        public like: number,
  
    ) { }

    setLocation(location: string):void{
        this.location = location;
    }
  }

