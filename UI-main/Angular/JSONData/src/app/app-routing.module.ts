import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { PostsComponent } from './posts/posts.component';
import { ResultComponent } from './result/result.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"student",component:StudentComponent},
  {path:"result",component:ResultComponent},
  {path:"API",component:PostsComponent},
  {path:"form",component:FormComponent},
  {path:"parent",component:ParentComponent},
  {path:"**",component:NotfoundComponent},
  {path:"",redirectTo:"student",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
