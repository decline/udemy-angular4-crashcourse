import { Component } from '@angular/core';
import { FavoriteChangedEvent } from './favorite/favorite.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    post = {
        title: 'Title',
        isFavorite: true
    };

    onFavoriteChanged(event: FavoriteChangedEvent) {
        console.log('Favorite changed! Is favorite: ' + event.isFavorite);
    }
}
