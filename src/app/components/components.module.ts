import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';

@NgModule({
  declarations: [ContactFormComponent, DetailsModalComponent],
  exports: [ContactFormComponent, DetailsModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
