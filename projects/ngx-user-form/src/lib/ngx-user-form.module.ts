import { NgModule } from '@angular/core';
import { NgxUserFormComponent } from './ngx-user-form.component';
import { UserFormComponent } from './component/user-form/user-form.component';
 
@NgModule({
  declarations: [NgxUserFormComponent, UserFormComponent],
  imports: [
  ],
  exports: [NgxUserFormComponent, UserFormComponent]
})
export class NgxUserFormModule { }
