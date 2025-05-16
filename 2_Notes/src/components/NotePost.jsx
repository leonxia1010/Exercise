import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const NotePost = ({ id, content, onDelete }) => {
  return (
    <div className='card'>
      <p className='content'>{content}</p>
      <div className='delete-container'>
        <button>
          <DeleteOutlineIcon
            style={{ fontSize: '2rem' }}
            onClick={() => {
              onDelete(id);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default NotePost;
