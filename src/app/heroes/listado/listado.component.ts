import { Component } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
})
export class ListadoComponent {

    public heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
    public heroesBorrados: string[] = []

    borrarHeroe(): void {
        if (this.heroes.length) {
            const heroeBorrado = this.heroes.pop() || '';
            this.heroesBorrados.push(heroeBorrado)
        }


    }

}
