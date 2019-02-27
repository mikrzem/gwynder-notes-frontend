import {Component, Input} from '@angular/core';
import {NoteSegment} from '../services/data';
import {Note} from '../../notes/services/data';
import {NoteService} from '../../notes/services/service';

@Component({
    selector: 'segments-panel',
    templateUrl: 'segments.panel.html'
})
export class SegmentsPanel {

    @Input()
    public segment: NoteSegment;

    @Input()
    public note: Note;

    @Input()
    public index: number = 0;

    public editMode = false;

    constructor(
        private service: NoteService
    ) { }

    public async save() {
        await this.service.update(this.note.id, this.note);
        this.editMode = false;
    }

    public async remove() {
        this.note.segments.splice(this.index, 1);
        await this.service.update(this.note.id, this.note);
    }
}
