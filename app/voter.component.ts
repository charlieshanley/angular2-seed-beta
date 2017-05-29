import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div>
            <i
                class="glyphicon glyphicon-menu-up"
                [class.voted]="myVote==1"
                (click)="upVote()">
            </i>
            <span>{{ voteCount }}</span>
            <i
                class="glyphicon glyphicon-menu-down"
                [class.voted]="myVote==-1"
                (click)="downVote()">
            </i>
        </div>
    `,
    styles: [`
        div {
            width: 20px;
            text-align: center;
            color: #ccc;
        }
        i {
            cursor: pointer;
        }
        .voted {
            color: orange;
        }
    `]
})
export class VoterComponent {
    @Input() voteCount: number;
    @Input() myVote: number;
    @Output() vote = new EventEmitter();

    emitVote() : void {
        this.vote.emit({myVote: this.myVote, voteCount: this.voteCount})
    }

    upVote() : void {
        if (this.myVote <= 0){
            this.myVote++;
            this.voteCount++;
            this.emitVote();
        }
    }

    downVote() : void {
        if (this.myVote >= 0){
            this.myVote--;
            this.voteCount--;
            this.emitVote();
        }
    }

    constructor(){
        this.voteCount = 0;
        this.myVote = 0;
    }
}