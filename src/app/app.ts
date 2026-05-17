import { Component, OnInit } from '@angular/core';
import { ListeContacts } from './liste-contacts/liste-contacts';
import { StatsContacts } from './stats-contacts/stats-contacts';
import { FormulaireContact } from './formulaire-contact/formulaire-contact';
import { Contact } from './contact';
import { ContactService } from './contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListeContacts, FormulaireContact, StatsContacts],
  template: `
    <h1>📈 Gestionnaire de Contacts Angular 20</h1>
    <app-stats-contacts></app-stats-contacts>
    <app-formulaire-contact
      (contactAjoute)="onContactAjoute($event)">
    </app-formulaire-contact>
    <app-liste-contacts></app-liste-contacts>
  `
})
export class App implements OnInit {  // ✅ implements OnInit ajouté

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    console.log('App initialisée. Contacts :', this.contactService.getAll().length);
  }

  onContactAjoute(contact: Contact): void {
    this.contactService.ajouter(contact);
  }
}