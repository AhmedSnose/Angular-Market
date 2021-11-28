import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoodsService } from 'src/app/services/goods.service';
import { goods } from '../interfaces/goods.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  constructor(private gs : GoodsService) { }
  @ViewChild('img') img? : ElementRef

  ngOnInit(): void {
  }

  addGood(form : NgForm){
    let name = (<goods>form.value).name,
        price = (<goods>form.value).price,
        photo  = (<HTMLInputElement | any>this.img?.nativeElement).files[0];
    this.gs.addGood(name , price , photo).then(resMess => {
      console.log(resMess)
      form.reset()
      
    })
    console.log(form.value);
    console.log(photo);
    
  }

}
