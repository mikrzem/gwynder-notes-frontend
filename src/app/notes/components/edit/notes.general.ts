import {Component, Input} from '@angular/core';
import {Note} from '../../services/data';
import {NoteService} from '../../services/service';

@Component({
    selector: 'notes-general',
    templateUrl: 'notes.general.html'
})
export class NotesEditGeneral {

    @Input()
    public note: Note;

    public saved = false;

    constructor(
        private service: NoteService
    ) { }

    public async save() {
        await this.service.update(this.note.id, this.note);
        this.saved = true;
    }

}
