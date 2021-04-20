import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  @Input() contact;
  @Output() contactSaved = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onClick() {
    this.contactSaved.emit();
  }
}
