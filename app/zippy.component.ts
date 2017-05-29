import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div
                class="panel-heading"
                (click)="toggle()">
                {{ title }}
                <i [ngClass]="{
                    'glyphicon glyphicon-chevron-down': !open,
                    'glyphicon glyphicon-chevron-up': open
                }"></i>
            </div>
            <div *ngIf="open" class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        i {
            float: right;
        }
        .panel-heading {
            cursor: pointer;
        }
    `]
})
export class ZippyComponent {
    @Input() title: string;
    open: boolean;

    private toggle() : void {
        this.open = !this.open;
    }

    constructor() {
        this.open = false;
    }
}