import {Component, Input} from '@angular/core';
import {NoteSegmentText} from '../../services/data';

@Component({
    selector: 'segments-view-text',
    templateUrl: 'segments.view.text.html'
})
export class SegmentsViewText {

    @Input()
    public text: NoteSegmentText;

}
