/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { updateBpLog } from '../api/api';
import Message from '../message/message';

// eslint-disable-next-line react/prop-types
function Modal({ log, tog, update }) {
  const modin = [log.morning.sys, log.morning.dia, log.evening.sys, log.evening.dia, log.night.sys, log.night.dia];

  // const [active, setActive] = useState([false, false, false, false, false, false]);
  const [state, setState] = useState({
    morning: {
      sys: log.morning.sys,
      dia: log.morning.dia,
    },
    evening: {
      sys: log.evening.sys,
      dia: log.evening.dia,
    },
    night: {
      sys: log.night.sys,
      dia: log.night.dia,
    },
  });

  console.log(state.morning.sys, state.morning.dia, state.evening.sys, state.evening.dia, state.night.sys, state.night.dia);

  const handleChange = (e, index) => {
    setState({
      morning: {
        sys: index === 0 ? e.target.value : state.morning.sys,
        dia: index === 1 ? e.target.value : state.morning.dia,
      },
      evening: {
        sys: index === 2 ? e.target.value : state.evening.sys,
        dia: index === 3 ? e.target.value : state.evening.dia,
      },
      night: {
        sys: index === 4 ? e.target.value : state.night.sys,
        dia: index === 5 ? e.target.value : state.night.dia,
      },
    });
  };

  const handleUpdate = () => {
    const data = {
      date: log.date,
      time: log.time,
      user: log.user,
      morning: {
        sys: state.morning.sys,
        dia: state.morning.dia,
      },
      evening: {
        sys: state.evening.sys,
        dia: state.evening.dia,
      },
      night: {
        sys: state.night.sys,
        dia: state.night.dia,
      },
    };

    updateBpLog(log.id, data);
    update();
    // tog(log);
  };
  return (
    <div className="modal">
      <div className="overlay" />
      <div className="modal-content">
        <div className="modal-close">
          <p className="modal-close-btn" onClick={() => tog(log)}>+</p>
        </div>
        {log
            && (
              <div className="modal-header">
                <p className="modal-attr">{log.date}</p>
                <p className="modal-attr">{log.user}</p>
              </div>
            )}
        <div className="bp-row">
          <div className="bp-name"><h3><label htmlFor="modal-bp-morning-sys" className="bp-text">Morning BP</label></h3></div>
          <input type="text" id="modal-bp-morning-sys" className={modin[0] !== '' ? 'bp-input-active' : 'bp'} placeholder="systolic" value={state.morning.sys} onChange={(e) => handleChange(e, 0)} />

          <input type="text" id="modal-bp-morning-dia" className={modin[1] !== '' ? 'bp-input-active' : 'bp'} placeholder="diastolic" value={state.morning.dia} onChange={(e) => handleChange(e, 1)} />
        </div>
        <div className="bp-row">
          <div className="bp-name">
            <h3><label htmlFor="modal-bp-evening-sys" className="bp-text">Evening BP</label></h3>

          </div>

          {// <label htmlFor="bp-evening-sys">Systolic</label>
          }
          <input type="text" id="modal-bp-evening-sys" className={modin[2] !== '' ? 'bp-input-active' : 'bp'} placeholder="systolic" value={state.evening.sys} onChange={(e) => handleChange(e, 2)} />
          {// <label htmlFor="bp-evening-dia">Diastolic</label>
          }
          <input type="text" id="modal-bp-evening-dia" className={modin[3] !== '' ? 'bp-input-active' : 'bp'} placeholder="diastolic" value={state.evening.dia} onChange={(e) => handleChange(e, 3)} />
        </div>
        <div className="bp-row">
          <div className="bp-name">
            <h3><label htmlFor="modal-bp-night-sys" className="bp-text">Night BP</label></h3>

          </div>

          <input type="text" id="modal-bp-night-sys" className={modin[4] !== '' ? 'bp-input-active' : 'bp'} placeholder="systolic" value={state.night.sys} onChange={(e) => handleChange(e, 4)} />
          <input type="text" id="modal-bp-night-dia" className={modin[5] !== '' ? 'bp-input-active' : 'bp'} placeholder="diastolic" value={state.night.dia} onChange={(e) => handleChange(e, 5)} />
        </div>

        <span type="submit" onClick={() => handleUpdate({ log })}><Message code={4} /></span>
      </div>
    </div>

  );
}

export default Modal;
