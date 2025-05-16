import { LinearProgress } from '@mui/material';
import React from 'react';

const CreateNote = ({ onChange, onSubmit, textInput }) => {
  const charLimit = 100;
  const charLeft = charLimit - textInput.content.length;
  return (
    <>
      <div className='post-creation-container'>
        <form onSubmit={onSubmit}>
          <textarea
            name='content'
            id='content'
            className='note-input'
            placeholder='Type....'
            onChange={onChange}
            value={textInput.content}
          ></textarea>
          <div className='editor-tool-bar'>
            <span>
              <strong style={{ fontSize: '1.5rem', marginRight: '5px' }}>
                {charLeft}
              </strong>
              Left
            </span>
            <button type='submit' className='save'>
              Save
            </button>
          </div>
          <LinearProgress
            variant='determinate'
            value={charLeft}
          ></LinearProgress>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
