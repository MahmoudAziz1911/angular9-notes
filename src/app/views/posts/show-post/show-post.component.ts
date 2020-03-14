import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {
  postDetails: any = {};
  postId;
  constructor(private services: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.postId = param.id;
      this.services.getPostById(param.id).subscribe(response => {
        this.postDetails = response;
      });
    });
  }

}
