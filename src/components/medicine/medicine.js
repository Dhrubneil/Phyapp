/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React from 'react';
import Checkbox from '../checkbox';
import Icon from '../icon';

export default function Medicine({ id, name, status }) {
  return (
    <div className="medicine">
      <Icon />
      <p className="medName">{name}</p>
      <div className="stat">

        {
          status.map((stat, index) => <Checkbox id={`${id}-${index}`} status={stat} />)
        }
      </div>
      <div className="util">
        <p className="lock">Lock</p>
        <p className="plog">Push to Log</p>
      </div>
    </div>
  );
}
