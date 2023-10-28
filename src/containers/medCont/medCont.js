/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Medicine from '../../components/medicine/medicine';

export default function MedCont() {
  const [showStatus, setshowStatus] = useState(true);
  const [medicines, setMedicines] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/medicines')
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data);
      });
  }, []);

  const handleStatus = () => {
    setshowStatus(!showStatus);
    // document.querySelector('.wrapper').toggleClassName('slider');
  };
  return (

    <div className="medCont">
      <div className="log-header">
        <div className="log-icon" onClick={handleStatus}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <div className="header" onClick={handleStatus}>
          {showStatus
            ? <h2 className="base-text">Hide Status</h2>
            : <h2 className="base-text">Show Status</h2>}
        </div>
        <p id="date-today">
          {new Date().toDateString()}
          {' '}
        </p>
      </div>
      <div className={showStatus ? 'slider' : 'rev-slider'}>
        {
        (medicines)
        //     // eslint-disable-next-line max-len
        && medicines.map((med, index) => (

          <Medicine id={med.id} name={med.name} status={med.status} />

        ))

        }
      </div>

    </div>
  );
}
