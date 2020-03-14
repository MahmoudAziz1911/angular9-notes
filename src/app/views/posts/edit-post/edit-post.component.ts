import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean;
  postId;
  postDetails: any = {};

  constructor(
    private services: PostsService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editFormBuild();

    this.route.params.subscribe(param => {
      this.postId = param.id;
      this.services.getPostById(param.id).subscribe(response => {
        this.postDetails = response;
      });
    });
   }

  ngOnInit() {

  }

        // convenience getter for easy access to form fields
        get f() { return this.editForm.controls; }

        onSubmit() {
          this.submitted = true;
          // stop here if form is invalid
          if (this.editForm.invalid) {
            return;
          }
          this.services.update(this.editForm.value, this.postId).subscribe(
            res => {
              this.toastr.success('post updated Successfuly', 'success', {
                timeOut: 3000,
                progressBar: true,
                closeButton: true
              });
              this.router.navigate(['../admin/posts']);
            },
            err => {
              this.toastr.error(err.statusText, 'error!!', {
                timeOut: 3000,
                progressBar: true,
                closeButton: true
              });
            }
          );
        }
  editFormBuild() {
    this.editForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }
}
