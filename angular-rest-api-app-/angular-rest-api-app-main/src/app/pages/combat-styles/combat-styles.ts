import { Component, OnInit, signal } from '@angular/core';
import { SecondaryCharacterCard } from '../../components/secondary-character-card/secondary-character-card';
import { CombatStyleModel } from '../../interfaces/combat-style-mode';

@Component({
  selector: 'app-combat-styles',
  imports: [SecondaryCharacterCard],
  templateUrl: './combat-styles.html',
  styleUrl: './combat-styles.css',
})
export class CombatStyles implements OnInit {
  combatStyles = signal<CombatStyleModel[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit() {
    this.loadCombatStyles();
  }

  async loadCombatStyles() {
    this.loading.set(true);
    this.error.set('');
    try {
      const response = await fetch('https://www.demonslayer-api.com/api/v1/combat-styles?limit=39');
      if (!response.ok) throw new Error('No se pudieron cargar los estilos.');
      const data = await response.json();
      const styles: CombatStyleModel[] = Array.isArray(data) ? data : data.content;
      if (!Array.isArray(styles)) throw new Error('La respuesta no contiene una lista de estilos.');
      this.combatStyles.set(styles);
    } catch {
      this.error.set('No se pudieron cargar los estilos. Revisa tu conexión y vuelve a intentarlo.');
    } finally {
      this.loading.set(false);
    }
  }
}
