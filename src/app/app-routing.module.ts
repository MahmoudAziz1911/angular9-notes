import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './shared/components/layouts/admin/admin.component';
import { UserComponent } from './shared/components/layouts/user/user.component';
import { AuthComponent } from './shared/components/layouts/auth/auth.component';
import { BlankComponent } from './shared/components/layouts/blank/blank.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: 'posts',
      loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule)
    }]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [{
      path: 'notes',
      loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
