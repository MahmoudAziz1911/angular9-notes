import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [ListPostComponent, AddPostComponent, ShowPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModule { }
