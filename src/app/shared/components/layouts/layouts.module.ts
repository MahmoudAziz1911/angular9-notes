import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { BlankComponent } from './blank/blank.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminComponent, UserComponent, AuthComponent, BlankComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
