import {Component, Input} from '@angular/core';
import {NoteSegmentChecklist} from '../../services/data';

@Component({
    selector: 'segments-edit-checklist',
    templateUrl: 'segments.edit.checklist.panel.html'
})
export class SegmentsEditChecklistPanel {

    @Input()
    public checklist: NoteSegmentChecklist;

    public addEntry() {
        this.checklist.entries.push({
            text: null,
            checked: false,
            entries: []
        });
    }

}
