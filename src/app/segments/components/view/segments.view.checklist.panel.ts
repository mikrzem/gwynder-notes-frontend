import {Component, Input} from '@angular/core';
import {NoteSegmentChecklist} from '../../services/data';
import {Note} from '../../../notes/services/data';

@Component({
    selector: 'segments-view-checklist',
    templateUrl: 'segments.view.checklist.panel.html'
})
export class SegmentsViewChecklistPanel {

    @Input()
    public checklist: NoteSegmentChecklist;

    @Input()
    public note: Note;


}
