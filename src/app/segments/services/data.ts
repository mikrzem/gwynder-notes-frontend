export interface NoteSegmentText {

    text: string;

}

export interface NoteSegmentChecklistEntry {

    text: string;
    checked: boolean;
    entries: NoteSegmentChecklistEntry[];

}

export interface NoteSegmentChecklist {

    entries: NoteSegmentChecklistEntry[];

}

export interface NoteSegment {

    text?: NoteSegmentText;
    checklist?: NoteSegmentChecklist;

}
