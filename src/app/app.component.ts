import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    trigger('router', [
      transition('0 => 1 , 1 => 0',[
        group([
          query(':enter' , [
            style({
              transform: 'translateX(100%)',
            }) , 
            animate(500,style({
              transform: 'translateX(0)',
            }))
          ]),
          query(':leave' , [
            style({
              transform: 'translateX(0)',
            }) , 
            animate(500,style({
              transform: 'translateX(-100%)',
            }))
          ]),
        ])

      ])
    ])
  ]
})
export class AppComponent  {

}
