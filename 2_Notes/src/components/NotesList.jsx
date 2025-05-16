import React, { useEffect, useState } from 'react';
import CreateNote from './CreateNote';
import NotePost from './NotePost';

const NotesList = () => {
  const [textInput, setTextInput] = useState({ content: '' });
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesData = loadLocalStorage();
    console.log(notesData);
    setNotes(notesData);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (value.length > 100) return;
    setTextInput({ ...textInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.content.length === 0) return;
    const note = { id: Date.now(), ...textInput };
    const newNotes = [...notes, note];
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setTextInput({ content: '' });
    setNotes(newNotes);
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  function loadLocalStorage() {
    return JSON.parse(localStorage.getItem('notes'));
  }

  if (notes.length === 0 || !notes)
    return (
      <CreateNote
        onChange={handleInput}
        onSubmit={handleSubmit}
        textInput={textInput}
      />
    );

  return (
    <div className='notes-list'>
      <CreateNote
        onChange={handleInput}
        onSubmit={handleSubmit}
        textInput={textInput}
      />
      {notes.map(({ id, content }) => {
        return (
          <NotePost
            key={id}
            id={id}
            content={content}
            onDelete={handleDelete}
          />
        );
      })}
      <div className='transparent-card'></div>
      <div className='transparent-card'></div>
      <div className='transparent-card'></div>
      <div className='transparent-card'></div>
    </div>
  );
};

export default NotesList;
