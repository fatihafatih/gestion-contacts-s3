import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact';
import { ContactService } from '../contact';
import { SurvolDirective } from '../survol';
import { HighlightDirective } from '../highlight';
import { InitialesPipe } from '../initiales-pipe';
import { MentionPipe } from '../mention-pipe';

@Component({
  selector: 'app-liste-contacts',
  standalone: true,
  imports: [CommonModule, SurvolDirective, HighlightDirective, InitialesPipe, MentionPipe],
  templateUrl: './liste-contacts.html',
  styleUrls: ['./liste-contacts.css']
})
export class ListeContacts implements OnInit {
  today = new Date();
  contacts: Contact[] = [];
  filtreActif: boolean | null = null;

  get contactsFiltres(): Contact[] {
    if (this.filtreActif === null) return this.contacts;
    return this.contacts.filter(c => c.actif === this.filtreActif);
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
  }

  supprimer(email: string): void {
    this.contactService.supprimer(email);
    this.contacts = this.contactService.getAll();
  }

  toggleActif(email: string): void {
    this.contactService.toggleActif(email);
    this.contacts = this.contactService.getAll();
  }
}