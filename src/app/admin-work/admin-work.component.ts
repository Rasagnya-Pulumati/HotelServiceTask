import { Component } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __hotelService:HotelOperationService ;

  constructor(hotelService:HotelOperationService )
  {
    this.__hotelService = hotelService;
  }

  readHotel(hotelId:string,hotelName:string,duration:string,location:string,manager:string,price:string,discount:string,about:string,image:string)
  {
      console.log(hotelId+" "+hotelName+" "+duration+" "+location+" "+manager+" "+price+" "+discount+" "+manager+" "+about+" "+image);
      let courseFromUser:Hotel = new Hotel(parseInt(hotelId),hotelName,parseInt(duration),location,manager,image,about,parseInt(discount),parseInt(price));
      this.__hotelService.addHotel(courseFromUser);
  }


}