import { Injectable } from '@angular/core';
import { AuthService } from './auth.service'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { goods } from '../components/interfaces/goods.interface';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private as : AuthService , private fs : AngularFirestore) { }

  addCart(data : goods){
    return this.fs.collection(`users/${this.as.userUID}/cart`).add(data)
  }

  getCart(){
    return this.fs.collection(`users/${this.as.userUID}/cart`).snapshotChanges()
  }

  delete(id : any){
    return this.fs.doc(`users/${this.as.userUID}/cart/${id}`).delete()

  }

  save(id : any , amount : any){
    return this.fs.doc(`users/${this.as.userUID}/cart/${id}`).update({
      amount
    })
  }
}
