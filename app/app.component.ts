import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavstarComponent} from './favstar.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {SubscriptionFormComponent} from './subscription-form.component';

@Component({
    selector: 'my-app',
    template: `
    <voter
        [myVote]="post.myVote"
        [voteCount]="post.voteCount"
        (vote)="onVote($event)">
    </voter>
    <likebutton
        [isLiked]="post.isLiked"
        [nLikes]="post.nLikes"
        (like-change)="onLikeChange($event)">
    </likebutton>

    <favstar
        [isFavorite]="post.isFavorite"
        (favorite-change)="onFavoriteChange($event)">
    </favstar>

    <zippy [title]="'Diospyros virginiana'">
        Compared with the kaki persimmon, the American persimmon is smaller and of richer flavor.
    </zippy>
    <zippy [title]="'Mespilus germanica'">
        The medlar was once a common garden fruit in Europe, but is not commonly grown today.
    </zippy>

    <contact-form></contact-form>

    <subscription-form></subscription-form>
    `,
    directives: [
        VoterComponent,
        LikeComponent,
        FavstarComponent,
        ZippyComponent,
        ContactFormComponent,
        SubscriptionFormComponent
    ]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true,
        isLiked: false,
        nLikes: 6,
        myVote: 0,
        voteCount: 8
    }

    onFavoriteChange($event){
        console.log($event);
    }
    onLikeChange($event){
        this.post.isLiked = $event.isLiked;
        this.post.nLikes = $event.nLikes;
    }
    onVote($event){
        this.post.myVote = $event.myVote;
        this.post.voteCount = $event.voteCount;
    }
}