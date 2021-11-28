import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {path:'' , component:HomeComponent,data:{index:0}} , 
  {path:'signup' , component:SignupComponent} , 
  {path:'login' , component:LoginComponent} , 
  {path:'cart' , component:CartComponent , canActivate:[AuthGuard] , data:{index:1}} , 
  {path:'admin' , component:GoodsComponent} , 
  {path:'**' , component:NotFoundComponent} , 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
