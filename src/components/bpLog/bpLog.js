/* eslint-disable no-nested-ternary */
/* xxxeslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import React, { useState } from 'react';

import { BiSolidPencil } from 'react-icons/bi';
import { BsTrash3Fill } from 'react-icons/bs';

function Bplog({log, showModal}) {
  const [iconHover, setIconHover] = useState([false, false]);

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
    <div className={!iconHover[0] && !iconHover[1] ? 'bp-single-log' : (iconHover[0] ? 'bp-single-log-edit' : 'bp-single-log-trash')}>
      <div
        className="bp-log-date"
        id="bp-username"
      >
        {log.user}

      </div>
      <div className="bp-log-date">{log.date}</div>

      <div className="bp-single-record">

        <div className="bp-log-daytime">Morning</div>
        <div className={log.morning.sys >= 130 ? 'bp-record-value-red' : 'bp-record-value'}>
          {log.morning.sys}
          {' '}
          -
          {' '}
          {log.morning.dia}
        </div>
      </div>
      <div className="bp-single-record">

        <div className="bp-log-daytime">Evening</div>
        <div className={log.evening.sys >= 130 ? 'bp-record-value-red' : (log.evening.sys < 120 ? 'bp-record-value-purple' : 'bp-record-value')}>
          {log.evening.sys}
          {' '}
          -
          {' '}
          {log.evening.dia}
        </div>
      </div>
      <div className="bp-single-record">

        <div className="bp-log-daytime">Night</div>
        <div className={log.night.sys >= 130 ? 'bp-record-value-red' : (log.night.sys < 120 ? 'bp-record-value-purple' : 'bp-record-value')}>
          {log.night.sys}
          {' '}
          -
          {' '}
          {log.night.dia}

        </div>
      </div>

      {
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      }
      <div className="bp-edit">
        <div className="bp-edit-icon" onClick={() => { showModal({...log}); }} onMouseEnter={() => enter(0)} onMouseLeave={() => leave(0)}>

          <BiSolidPencil />
        </div>
        {// <HiOutlineTrash className="bp-trash-icon" />
        }
        <div className="bp-trash-icon" onMouseEnter={() => enter(1)} onMouseLeave={() => leave(1)}>

          <BsTrash3Fill />
        </div>
      </div>

    </div>
  );
}

export default Bplog;
