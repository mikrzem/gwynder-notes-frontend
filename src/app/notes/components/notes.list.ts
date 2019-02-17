import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Note} from '../services/data';
import {NoteService} from '../services/service';

@Component({
    selector: 'notes-list',
    templateUrl: 'notes.list.html'
})
export class NotesList implements OnInit, OnDestroy {

    public request: Promise<Note[]>;

    private subscription: Subscription;

    constructor(
        private service: NoteService
    ) { }

    public ngOnInit(): void {
        this.loadList();
        this.subscription = this.service.changes.subscribe(
            () => this.loadList()
        );
    }

    public ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    private loadList() {
        this.request = this.service.select();
    }

}
