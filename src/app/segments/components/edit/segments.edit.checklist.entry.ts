import {Component, Input} from '@angular/core';
import {NoteSegmentChecklistEntry} from '../../services/data';

@Component({
    selector: 'segments-edit-checklist-entry',
    templateUrl: 'segments.edit.checklist.entry.html'
})
export class SegmentsEditChecklistEntry {

    @Input()
    public entry: NoteSegmentChecklistEntry;

    @Input()
    public entryList: NoteSegmentChecklistEntry[] = [];

    @Input()
    public index: number = 0;

    public remove() {
        this.entryList.splice(this.index, 1);
    }

    public addChild() {
        this.entry.entries.push({
            text: null,
            checked: false,
            entries: []
        });
    }

}
