import React from 'react';
import getInitialData from '../data/data.js';
import SearchBar from './SearchBar.jsx';
import AddNotes from './AddNotes.jsx';
import Notes from './Notes.jsx';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };
  }

  handleSaveNote = (newNote) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  };

  handleSearch = (value) => {
    const searchTerm = value.toLowerCase().trim();
    this.setState({ search: searchTerm });
  };

  handleDelete = (id) => {
    const { notes } = this.state;
    this.setState({
      notes: notes.filter((note) => note.id !== id),
    });
  };

  handleArchive = (id) => {
    const { notes } = this.state;
    const targetNote = (notes.filter(
      (note) => note.id === id,
    )[0].archived = true);
    this.setState({
      targetNote,
    });
  };

  handleActive = (id) => {
    const { notes } = this.state;
    const targetNote = (notes.filter(
      (note) => note.id === id,
    )[0].archived = false);
    this.setState({
      targetNote,
    });
  };

  render() {
    const { notes, search } = this.state;
    const filteredActiveNotes = notes.filter(
      (note) => !note.archived && note.title.toLowerCase().includes(search),
    );
    const filteredArchivedNotes = notes.filter(
      (note) => note.archived && note.title.toLowerCase().includes(search),
    );

    return (
      <>
        <h1 className="text-4xl uppercase font-bold leading-relaxed tracking-wide text-sky-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <img
            src="/icon.png"
            alt="Icon image"
            className="max-w-[56px] inline-block mr-4"
          />
          Catatanku
        </h1>
        <AddNotes onSaveNote={this.handleSaveNote} />
        <SearchBar onSearch={this.handleSearch} />
        <Notes
          header="Catatan"
          notes={filteredActiveNotes}
          onDelete={this.handleDelete}
          onArchive={this.handleArchive}
        />
        <Notes
          header="Arsip Catatan"
          notes={filteredArchivedNotes}
          onDelete={this.handleDelete}
          onActivate={this.handleActive}
        />
      </>
    );
  }
}
