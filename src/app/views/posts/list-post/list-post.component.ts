import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostsService, private modalService: NgbModal, private toastr: ToastrService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllPosts().subscribe(res => {
      this.posts = res;
    });
  }

  deletePost(model, id) {
    this.modalService.open(model).result.then(result => {
      this.service.delete(id).subscribe(data => {
        this.toastr.success('post deleted Successfuly', 'success', {timeOut: 3000, progressBar: true, closeButton: true});
        this.getAll();
      },
      err => {
        this.toastr.error(err.statusText, 'error!!', {timeOut: 3000, progressBar: true, closeButton: true});
      });
    },
    reason => {
      // tslint:disable-next-line:max-line-length
      this.toastr.info(reason, '' , {timeOut: 3000, progressBar: true, easing: 'ease-in', positionClass: 'toast-center-center' , closeButton: true});
    });
  }

}
