import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Note} from '../../services/data';
import {NoteService} from '../../services/service';

@Component({
    selector: 'notes-edit',
    templateUrl: 'notes.edit.html'
})
export class NotesEdit implements OnInit, OnDestroy {

    public request: Promise<Note>;

    private subscription: Subscription;

    constructor(
        private service: NoteService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            const id = parseInt(params['id'], 10);
            this.request = this.service.get(id);
        });
    }

    public ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}


