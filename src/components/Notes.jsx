import NotesList from './NotesList.jsx';

export default function Notes({ header, notes, onDelete, onArchive, onActivate }) {
  return (
    <div className='bg-white p-4 rounded'>
      <h3 className="text-2xl font-bold mb-4 ">{header}</h3>
      <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} onActivate={onActivate}/>
    </div>
  );
}