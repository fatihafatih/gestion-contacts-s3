// initiales.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'initiales', // Nom utilisé dans le template
standalone: true
})
export class InitialesPipe implements PipeTransform {
// valeur : la chaîne à transformer
// sep : séparateur optionnel (défaut '.')
transform(valeur: string, sep: string = '.'): string {
if (!valeur || valeur.trim() === '') return '';
return valeur
.trim()
.split(' ') // ['Ahmed', 'Benali']
.filter(mot => mot.length > 0) // Ignorer espaces doubles
.map(mot => mot[0].toUpperCase()) // ['A', 'B']
.join(sep); // 'A.B'
}
}