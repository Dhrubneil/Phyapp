/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { BsTrash3Fill } from 'react-icons/bs';

function Note({ text }) {
  const [iconHover, setIconHover] = useState([false, false]);
  const [textValue, setTextValue] = useState(text);
  const [activeInput, setActiveInput] = useState(false);

  const enter = (iconIndex) => {
    const tempState = iconHover;
    tempState[iconIndex] = true;
    setIconHover([...tempState]);
    console.log('mouse in');
  };
  const leave = (iconIndex) => {
    const tempState = iconHover;
    tempState[iconIndex] = false;
    setIconHover([...tempState]);
    console.log('mouse out');
  };
  return (
    <div className="single-note">

      <div className="note">

        {activeInput
          ? (
            <div className="edit-note">
              <textarea type="text" className="note-input" value={textValue} onChange={(e) => setTextValue(e.target.value)} autoFocus />
              <div className="note-btns">

                <button type="submit" id="note-btn-green" className="note-btn">Update</button>
                <button type="button" id="note-btn-red" className="note-btn" onClick={() => setActiveInput(false)}>Cancel</button>
              </div>

            </div>
          )
          : (
            <div className="edit-note">
              <textarea type="text" className="inactive-input" value={text} disabled />

            </div>
          )}
        {' '}
        <div className="bp-edit">
          <div className="bp-edit-icon" onClick={() => setActiveInput(true)} onMouseEnter={() => enter(0)} onMouseLeave={() => leave(0)}>

            <BiSolidPencil />
          </div>
          {// <HiOutlineTrash className="bp-trash-icon" />
    }
          <div className="bp-trash-icon" onMouseEnter={() => enter(1)} onMouseLeave={() => leave(1)}>

            <BsTrash3Fill />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Note;
