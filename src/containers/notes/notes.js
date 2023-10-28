import React from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { HiViewColumns } from 'react-icons/hi2';
import { LiaNotesMedicalSolid } from 'react-icons/lia';
import Navbar from '../../components/navbar/navbar';
import Note from '../../components/note/note';

// eslint-disable-next-line react/prop-types
function Notes() {
  const notes = ['Start BP medicine', 'Visit doctor at CKDUH, Shyamoli on 18.10.2023', 'Start BP medicine', 'Visit doctor at CKDUH, Shyamoli on 18.10.2023', 'Start BP medicine', 'Visit doctor at CKDUH, Shyamoli on 18.10.2023', 'Start BP medicine', 'Visit doctor at CKDUH, Shyamoli on 18.10.2023', 'Start BP medicine', 'Visit doctor at CKDUH, Shyamoli on 18.10.2023', 'Start BP medicine', 'Visit doctor at CKDUH, Shyamoli on 18.10.2023', 'Start BP medicine', 'Visit doctor at CKDUH, Shyamoli on 18.10.2023'];

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="note-page">

        <div className="note-page-header">
          <div id="note-header-text" className="note-header-item">
            <h2 id="notes-text">Notes</h2>
            <h3 id="new-note-text"> + New Note</h3>
            <div id="note-page-icon">
              <LiaNotesMedicalSolid className="pr-note-icon-2" />

            </div>
            {// <h3 className="plus">+</h3>
            }

          </div>
          <div className="note-search">
            <input className="search" id="note-header-search" type="search" placeholder="Search by Date" />
            <div className="note-by">

              <small>Search by</small>
              <small>Name</small>
              <small>Date</small>
            </div>
          </div>
          <div className="note-header-item" id="views">
            <BsFillGridFill className="view-icon" />

            <p id="views-grid">Grid View</p>
            <HiViewColumns className="view-icon" />
            <p id="views-column">Column View</p>
          </div>

        </div>
        <div className="note-cont">

          {
          notes.map((note) => (
            <Note text={note} />
          ))
        }
        </div>
      </div>

    </div>
  );
}

export default Notes;
