import {Component, Input} from '@angular/core';
import {NoteSegmentText} from '../../services/data';

@Component({
    selector: 'segments-edit-text',
    templateUrl: 'segments.edit.text.html'
})
export class SegmentsEditText {

    @Input()
    public text: NoteSegmentText;

}
