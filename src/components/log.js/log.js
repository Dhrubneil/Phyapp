/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React from 'react';
import Icon from '../icon';

export default function Log({ log }) {
    // console.log(JSON.stringify(log));
    const { date, array } = log;
    // console.log(log);
    // console.log(array);

  return (
    <div className="log">
      <Icon />
      <p className="logDate">{date}</p>

      <div className="log-med">
        {
            array.map((med) => (
              <div className="med-log">
                <p>{med.name}</p>
                <div className="status">
                  {
                med.status.map((stat) => (stat ? <input className="check inac" type="checkbox" checked readOnly /> : <input type="checkbox" className="check inac" unchecked disabled readOnly />))
               }

                </div>

              </div>
          ))
}
      </div>

    </div>
  );
}
