import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from '../interfaces/shopping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
// cart? : Shopping[] = [] error
cart? : any = []

totalPriceitem? : any;
  constructor(private cs : CartService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe(data => {
       this.cart = data.map((shopping : any) => {
        return {
          id:shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
     this.totalPriceitem = this.cart?.map((v:any)=>{
        return v.amount * v.price
      })
      
      console.log(this.cart ,this.totalPriceitem , "cart");

    })
    
  }

  delete(i : any){
    this.cs.delete(this.cart[i].id)
  }

  save(i : any){
    this.cs.save(this.cart[i].id , this.cart[i].amount)
  }

}
