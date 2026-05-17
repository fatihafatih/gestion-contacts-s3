import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [],
  templateUrl: './formulaire-contact.html',
  styleUrls: ['./formulaire-contact.css'],
})
export class FormulaireContact {

  @Output() contactAjoute = new EventEmitter<Contact>();

}