import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    DetailsModalComponent,
    ContactFormComponent
  ],
  exports: [
    DetailsModalComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
