import {Component, Input} from '@angular/core';
import {NoteSegmentChecklistEntry} from '../../services/data';
import {Note} from '../../../notes/services/data';
import {NoteService} from '../../../notes/services/service';

@Component({
    selector: 'segments-view-checklist-entry',
    templateUrl: 'segments.view.checklist.entry.html'
})
export class SegmentsViewChecklistEntry {

    @Input()
    public entry: NoteSegmentChecklistEntry;

    @Input()
    public note: Note;

    constructor(
        private service: NoteService
    ) { }

    get checked() {
        return this.entry.checked;
    }

    set checked(checked: boolean) {
        this.entry.checked = checked;
        this.service.update(this.note.id, this.note);
    }

}
