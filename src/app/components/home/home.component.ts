import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';
import { goods } from '../interfaces/goods.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{
  add : number = -1
  // goods : goods[] = []
  goods : goods[] = []
  goodsObservable? : Subscription
  
  
  constructor(private gs : GoodsService, private cs : CartService, private router :Router , private as : AuthService) { }

  ngOnInit(): void {
  this.goodsObservable =  this.gs.getAllGoods().subscribe(data =>{
     this.goods= data.map((el:any) => {
        return { 
          id:el.payload.doc.id,
          ...el.payload.doc.data()

        }
      })
    })

    
  }

  ngOnDestroy(){
    this.goodsObservable?.unsubscribe() 
  }

  addToCart(i:any | undefined){
    // console.log(i);
    if(this.as.userUID){
      this.add = +i
    } else {
      this.router.navigate(['/login'])
    }
    
  }
  buy(amount : any){
    console.log(amount);
    let selectedGood = this.goods[this.add]
    let data = {
      name:selectedGood.name,
      amount:+amount,
      price:selectedGood.price,
      photoUrl:selectedGood.photoUrl
    }
    this.cs.addCart(data).then(_=>this.add=-1)
  }
}
