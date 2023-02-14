export class Hotel {
    hotelId:number;
    hotelName:string;
   duration:number;
   location:string;
   manager:string;
   imageName:string;
   about:string;
   discount:number;
   price:number;

    

    constructor(
        hotelId:number,
        hotelName:string,
        duration:number,
        location:string,
        manager:string,
        imageName:string,
        about:string,
        discount:number,
        price:number
    )
    {
          this.hotelId = hotelId;
          this.hotelName = hotelName;
          this.duration = duration;
          this.location = location;
          this.manager = manager;
          this.imageName = imageName;
          this.about = about;
          this.discount = discount;
          this.price = price;
    }
}//end of class
