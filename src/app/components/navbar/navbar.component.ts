import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen : Boolean = false
  isUser : Boolean = false

  constructor(private as : AuthService) { }

  ngOnInit(): void {
    this.as.user?.subscribe(user=>{
      console.log(user , "Form Nav")
      if(user){
        this.isUser = true
        this.as.userUID = user.uid
        
      }else {
        this.isUser = false
        this.as.userUID = ''

      }
  })
  }

  toggleNavbar(){
    this.isOpen = !this.isOpen
  }

  logOut(){
    this.as.logOut().then(()=>console.log('out'))
  }

}
