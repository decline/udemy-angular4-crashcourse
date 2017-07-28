import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

    @Input('isFavorite') isFavorite = false;
    @Output('change') change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ isFavorite: this.isFavorite });
    }

}

export interface FavoriteChangedEvent {
    isFavorite: boolean;
}