import React from 'react';
import NewNote from '../components/NewNote';
import Note from '../components/Note';

const Notes = ({ data, toDayObj }) => {
  const pinned = data.filter(d => (d.pinned ? d : undefined));
  const others = data.filter(d => (!d.pinned ? d : undefined));

  const sectionStyle = {
    fontWeight: 500,
    color: '#5f6368',
    margin: '21px 8px',
    fontSize: '0.725rem',
    letterSpacing: '0.07272727em'
  };

  const buildNotes = (noteArr, isPinned) => {
    const fill = isPinned ? 'pinned' : 'others';
    return (
      <div className={`${fill}`}>
        <div className={`${fill}__header`} style={sectionStyle}>
          {isPinned ? 'PINNED' : 'OTHERS'}
        </div>
        <div className={`${fill}__content`}>
          {noteArr.map((d, k) => (
            <Note
              pinned={isPinned}
              title={d.title}
              content={d.content}
              key={`${k}-${d.title}`}
              editedDay={d.editedDay}
              toDayObj={toDayObj}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <NewNote />
      {pinned.length ? buildNotes(pinned, true) : undefined}
      {others.length ? buildNotes(others, false) : undefined}
    </div>
  );
};
export default Notes;
