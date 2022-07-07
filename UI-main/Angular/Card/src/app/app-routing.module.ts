import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CarddetailComponent } from './carddetail/carddetail.component';

const routes: Routes = [
  {path:'card',component:CardComponent},
  {path:'carddetail',component:CarddetailComponent},
  {path:'carddetail/id:',component:CarddetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
