import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavstarComponent} from './favstar.component';

@Component({
    selector: 'my-app',
    template: `
    <likebutton></likebutton>

    <favstar
        [isFavorite]="post.isFavorite"
        (favorite-change)="onFavoriteChange($event)">
    </favstar>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavstarComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log($event);
    }
}