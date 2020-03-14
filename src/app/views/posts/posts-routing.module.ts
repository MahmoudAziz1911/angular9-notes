import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


const routes: Routes = [
  {
    path: '',
    component: ListPostComponent
  },
  {
    path: 'add',
    component: AddPostComponent
  },
  {
    path: 'show/:id',
    component: ShowPostComponent
  },
  {
    path: 'edit/:id',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
