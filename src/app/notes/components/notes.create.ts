import {Component} from '@angular/core';
import {NoteService} from '../services/service';

@Component({
    selector: 'notes-create',
    templateUrl: 'notes.create.html'
})
export class NotesCreate {

    constructor(
        private service: NoteService
    ) { }

}
