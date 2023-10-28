/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { updateStatus } from './api/api';

function Checkbox({ id, status }) {
  const [checked, setChecked] = useState(status);
  const [med, setMed] = useState(null);
  const toogle = () => {
    let medId = id.split('-')[0];
    const code = id.split('-')[1];
    medId = parseInt(medId, 10);

    fetch(`http://localhost:8000/medicines/${medId}`)
      .then((res) => res.json())
      .then((data) => {
        updateStatus(data, medId, code, status);
        setMed(med);
      });

    // updateStatus();
    setChecked(!checked);
  };
  return (
    <div>
      {checked
        ? <input className="check" type="checkbox" onChange={toogle} checked />
        : <input className="check" type="checkbox" onChange={toogle} unchecked />}
    </div>
  );
}

export default Checkbox;
