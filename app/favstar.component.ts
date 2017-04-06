import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favstar',
    templateUrl: 'app/favstar.template.html',
    styles: [`
        .glyphicon-star {
            color: orange
        }
    `]
})
export class FavstarComponent {
    @Input() isFavorite: Boolean = false;
    @Output('favorite-change') change = new EventEmitter();

    update() : void {
        this.isFavorite = !(this.isFavorite);
        this.change.emit({ newValue: this.isFavorite });
    }
}