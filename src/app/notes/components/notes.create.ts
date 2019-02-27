import {Component} from '@angular/core';
import {Note} from '../services/data';
import {NoteService} from '../services/service';

@Component({
    selector: 'notes-create',
    templateUrl: 'notes.create.html'
})
export class NotesCreate {

    public note: Note = this.newNote();

    constructor(
        private service: NoteService
    ) { }

    public async save() {
        await this.service.create(this.note);
        this.note = this.newNote();
    }

    private newNote(): Note {
        return {
            title: null,
            segments: []
        };
    }
}
