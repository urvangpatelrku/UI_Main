import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  order:string='';

  sort(headername:string){
    this.order=headername;
  }

  p:number=1;

  posts:any = []

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getPost().subscribe((data:any)=>{this.posts=data
    })
        
  }

}
