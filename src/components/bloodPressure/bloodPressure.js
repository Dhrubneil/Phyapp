/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { faHeartbeat, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
// import { getUserLog } from '../api/api';
// import Bplog from '../bpLog/bpLog';
import BpLogCont from '../bpLogCont/bpLogCont';
import Modal from '../modal/modal';
import Navbar from '../navbar/navbar';

// eslint-disable-next-line react/prop-types
function BloodPressure() {
  const [active, setActive] = useState([false, false, false, false, false, false]);
  // const [logs, setLogs] = useState([]);
  // const [users, setUsers] = useState([1, 0, 0]);
  const [username, setUserName] = useState('');
  const [bpdate, setBpDate] = useState('');
  const [count, setCount] = useState(0);

  const [modal, setModal] = useState({ modalFor: '', showModal: false });
  // eslint-disable-next-line no-unused-vars
  const [modin, setModin] = useState([]);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const loading = () => {
    setShow(true);
  };
  const uploadSecceed = () => {
    setTimeout(() => {
      setSuccess(true);
    }, 1001);
  };
  const dismiss = () => {
    setTimeout(() => {
      setShow(false);
      setSuccess(false);
    }, 2200);
  };

  const toggleModal = (modalForLog) => {
    console.log(modalForLog);
    const arr = [modalForLog.morning.sys, modalForLog.morning.dia, modalForLog.evening.sys, modalForLog.evening.dia, modalForLog.night.sys, modalForLog.night.dia];
    console.log(arr);

    setModin(arr);
    console.log('modin', modin);
    setModal({
      modalFor: modalForLog,
      showModal: !modal.showModal,
    });
    console.log('modal toggled', modal.showModal);
  };

  const [state, setState] = useState(
    {
      morning: {
        sys: '',
        dia: '',
      },
      evening: {
        sys: '',
        dia: '',
      },
      night: {
        sys: '',
        dia: '',
      },
    },
  );

  // console.log(active);
  // eslint-disable-next-line max-len
  // console.log(state.morning.sys, state.morning.dia, state.evening.sys, state.evening.dia, state.night.sys, state.night.dia);
  const handleChange = (e, index) => {
    active[index] = true;
    setActive([...active]);
    setState({
      morning: {
        sys: active[0] && index === 0 ? e.target.value : state.morning.sys,
        dia: active[1] && index === 1 ? e.target.value : state.morning.dia,
      },
      evening: {
        sys: active[2] && index === 2 ? e.target.value : state.evening.sys,
        dia: active[3] && index === 3 ? e.target.value : state.evening.dia,
      },
      night: {
        sys: active[4] && index === 4 ? e.target.value : state.night.sys,
        dia: active[5] && index === 5 ? e.target.value : state.night.dia,
      },
    // eslint-disable-next-line max-len
    });
  };

  const handleSubmit = () => {
    loading();
    const data = {
      date: new Date(bpdate).toDateString(),
      time: new Date().toTimeString(),
      user: username,
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
    fetch('http://localhost:8000/bp-logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    }).then(() => { setCount((c) => c + 1); });
    uploadSecceed();
    dismiss();
  };

  const logUpdated = () => {
    setCount((c) => c + 1);
    console.log(count);
  };

  // const handleUpdate = (modalLog) => {
  //   const data = {
  //     date: modalLog.date,
  //     time: modalLog.time,
  //     user: modalLog.user,
  //     morning: {
  //       sys: modalLogState.morning.sys,
  //       dia: modalLogState.morning.dia,
  //     },
  //     evening: {
  //       sys: modalLogState.evening.sys,
  //       dia: modalLogState.evening.dia,
  //     },
  //     night: {
  //       sys: modalLogState.night.sys,
  //       dia: modalLogState.night.dia,
  //     },
  //   };
  //   updateBpLog(modalLog.id, data);
  // };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="bp-log-page">
        <div className="bp-input-cont">
          <div className="bp-icon">
            <FontAwesomeIcon icon={faSave} className="save-icon" />
          </div>
          <form action="">
            <div className="bp-header">
              <div className="bp-header-input">

                <input type="text" value={username} placeholder="username" id="username" className="bp" onChange={(e) => setUserName(e.target.value)} />
                <input type="date" value={bpdate} id="bp-date" className="bp" onChange={(e) => setBpDate(e.target.value)} />
              </div>
              <h1 className="bp-header-text"><label htmlFor="bp-date" id="bp-label">Input Today&apos;s BP Data</label></h1>
              <FontAwesomeIcon icon={faHeartbeat} className="fa" />
            </div>

            <div className="bp-row">
              <div className="bp-name"><h3><label htmlFor="bp-morning-sys" className="bp-text">Morning BP</label></h3></div>
              <input type="text" id="bp-morning-sys" className="bp " placeholder="systolic" value={state.morning.sys} onChange={(e) => handleChange(e, 0)} />

              <input type="text" id="bp-morning-dia" className="bp " placeholder="diastolic" value={state.morning.dia} onChange={(e) => handleChange(e, 1)} />
            </div>
            <div className="bp-row">
              <div className="bp-name">
                <h3><label htmlFor="bp-evening-sys" className="bp-text">Evening BP</label></h3>

              </div>

              {// <label htmlFor="bp-evening-sys">Systolic</label>
          }
              <input type="text" id="bp-evening-sys" className="bp" placeholder="systolic" value={state.evening.sys} onChange={(e) => handleChange(e, 2)} />
              {// <label htmlFor="bp-evening-dia">Diastolic</label>
          }
              <input type="text" id="bp-evening-dia" className="bp" placeholder="diastolic" value={state.evening.dia} onChange={(e) => handleChange(e, 3)} />
            </div>
            <div className="bp-row">
              <div className="bp-name">
                <h3><label htmlFor="bp-night-sys" className="bp-text">Night BP</label></h3>

              </div>

              <input type="text" id="bp-night-sys" className="bp" placeholder="systolic" value={state.night.sys} onChange={(e) => handleChange(e, 4)} />
              <input type="text" id="bp-night-dia" className="bp" placeholder="diastolic" value={state.night.dia} onChange={(e) => handleChange(e, 5)} />
            </div>
          </form>
          {
              show ? (
                <div className="save-bp-gray">
                  <div className="save-bp-green" />
                  {success
                    ? <span className="abs-text-2">Record Uploaded Successfully</span>
                    : <span className="abs-text">Uploading Record</span>}

                </div>
              )
                : <button type="submit" className="save-bp" onClick={handleSubmit}>Write and Save</button>
          }

          {// <button type="submit" className="save-bp" onClick={handleSubmit}>Write and Save</button>
          }
        </div>
        <BpLogCont count={count} showModal={toggleModal} />
      </div>
      {modal.showModal && (
      <Modal log={modal.modalFor} tog={toggleModal} update={logUpdated} />
      )}
    </div>
  );
}

export default BloodPressure;
