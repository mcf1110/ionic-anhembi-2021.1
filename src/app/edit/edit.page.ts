import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../home/home.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  private contacts: Contact[] = [
    { name: 'Matheus', user: 'mcf1110' },
    { name: 'Carolina', user: 'sushiland' },
    { name: 'Karine', user: 'kaf135' },
    { name: 'João Pedro', user: 'jpssantiago' },
    { name: 'Beatriz', user: 'BeatrizMarcos' },
    { name: 'Luiz', user: 'luizreisn' },
    { name: 'Luccas', user: 'itsLuccas' },
    { name: 'Nícolas', user: 'NicolasRMarques' },
    { name: 'Leonardo Ap', user: 'LeonardoAp96' },
    { name: 'Sophia', user: 'sophiafmartins' },
    { name: 'Pedro', user: 'PedroCastro-UAM' },
  ];

  public contact: Contact;

  constructor(private route: ActivatedRoute) {
    const username = route.snapshot.paramMap.get('username');
    this.contact = this.contacts.find(c => c.user === username);
  }

  updateContact() {
    console.log('Atualizando', this.contact);
  }

}
