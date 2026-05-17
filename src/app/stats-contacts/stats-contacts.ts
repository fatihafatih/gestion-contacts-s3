import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact';

@Component({
  selector: 'app-stats-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-contacts.html',
})
export class StatsContacts {

  // ❌ Supprimé : @Input() contacts et ngOnInit()
  // ✅ Le service est la seule source de vérité

  constructor(private contactService: ContactService) {}

  // Getters : recalculés automatiquement à chaque détection de changement
  get contacts() {
    return this.contactService.getAll();
  }

  get totalActifs(): number {
    return this.contactService.getActifs().length;
  }

  get scoreMoyen(): number {
    return this.contactService.getScoreMoyen();
  }

  get tauxActivite(): number {
    if (this.contacts.length === 0) return 0;
    return Math.round((this.totalActifs / this.contacts.length) * 100);
  }

  get couleurBarre(): string {
    if (this.tauxActivite >= 70) return '#4CAF50';
    if (this.tauxActivite >= 40) return '#FF9800';
    return '#F44336';
  }
}