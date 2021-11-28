import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs : AngularFirestore ,private store : AngularFireStorage) { }

  getAllGoods(){
    return this.fs.collection('goods').snapshotChanges()
  }

  addGood(name : string | any, price : number| any, img : File | any){
  let ref =  this.store.ref('goods/' + img.name)
    return new Promise((res, rej)=>{

      ref.put(img).then(()=>{
        ref.getDownloadURL().subscribe(photoUrl=> {
          this.fs.collection('goods').add({
            name,
            price,
            photoUrl
          })
        })
      }).then(()=>res('Done'))
    
    })
  }
}
