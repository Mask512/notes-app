import React from 'react';

export default class AddNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      limit: 50,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onTitleChange(event) {
    const { value } = event.target;
    if (value.length <= this.state.limit) {
      this.setState({ title: value });
    }
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSave(event) {
    event.preventDefault();
    const { title, body } = this.state;
    console.log(body);
    this.props.onSaveNote({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    });
    this.setState(() => ({ title: '', body: '' }));
  }
  render() {
    const { title, body, limit } = this.state;
    const charLeftColor = () =>
      limit - title.length <= 0 ? 'text-red-800 font-bold' : 'text-gray-500';

    return (
      <form className="p-4 bg-white shadow rounded" onSubmit={this.onSave}>
        <h2 className="text-2xl font-bold text-gray-600">Buat Catatan</h2>
        <div className="mt-4">
          <label htmlFor="title" className="block mb-1 text-gray-600">
            Judul
            <p className={`float-right text-sm ${charLeftColor()}`}>
              Karakter Tersisa : <span>{limit - title.length}</span> Karakter
            </p>
          </label>

          <input
            type="text"
            id="title"
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={title}
            onChange={this.onTitleChange}
          />
        </div>

        <div>
          <label htmlFor="body" className="block my-1 text-gray-600">
            Catatan
          </label>
          <textarea
            id="body"
            rows="4"
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={body}
            onChange={this.onBodyChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-sky-500 text-white rounded hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Simpan
        </button>
      </form>
    );
  }
}
