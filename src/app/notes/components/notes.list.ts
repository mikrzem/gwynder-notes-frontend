import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PageRequest, PageResponse} from '../../common/services/paging';
import {Note} from '../services/data';
import {NoteService} from '../services/service';

@Component({
    selector: 'notes-list',
    templateUrl: 'notes.list.html'
})
export class NotesList implements OnInit, OnDestroy {

    public request: Promise<PageResponse<Note>>;

    private subscription: Subscription;

    constructor(
        private service: NoteService
    ) { }

    public _page: PageRequest = {
        page: 0,
        pageSize: 10,
        oldestFirst: false
    };

    get page() {
        return this._page;
    }

    set page(page: PageRequest) {
        this._page = page;
        this.loadList();
    }

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

    public async remove(note: Note) {
        await this.service.delete(note.id);
    }

    private loadList() {
        this.request = this.service.select(this.page);
    }
}
