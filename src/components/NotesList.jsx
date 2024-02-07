import NoteCard from './NoteCard.jsx';

export default function NotesList({ notes, onDelete, onArchive, onActivate }) { 
    if(notes.length) {
        return (
            <div className='flex gap-4 flex-wrap'>
            { notes.map(note => <NoteCard key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActivate={onActivate} />)}
            </div>
        )
    }

    return (
        <p className='italic font-semibold'>Tidak ada Catatan Ditemukan</p>
    )
    
}