import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;
  constructor(
    private services: PostsService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.addFormBuild();
  }

      // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    this.services.add(this.addForm.value).subscribe(
      res => {
        this.toastr.success('post added Successfuly', 'success', {
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


  addFormBuild() {
    this.addForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }
}
