import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  submitted = false;

  public product: any = []
  public grandTotal !: number;

  constructor(private cartservice : CartService){}

  ngOnInit(): void{
    this.cartservice.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice()

  })
}
  removeItem(item: any){
    this.cartservice.removeCartItem(item);
  }
     
    
  }
  
  


