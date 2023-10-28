/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

// import { getUserLog } from '../api/api';
import Bplog from '../bpLog/bpLog';

// eslint-disable-next-line react/prop-types
function BpLogCont({ count, showModal }) {
  const [logs, setLogs] = useState([]);
  const [users, setUsers] = useState([1, 0, 0]);

  // eslint-disable-next-line no-unused-vars
  const [filteredLog, setfilteredLog] = useState([]);
  const [logDateFrom, setlogDateFrom] = useState('');
  const [logDateTo, setlogDateTo] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/bp-logs/')
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
      });
  }, [count]);
  const allUsers = ['maa', 'baba'];

  const filterLog = (code) => (code === 0 ? logs : logs.filter((log) => log.user === allUsers[code - 1]));
  const toggleUser = (code) => {
    const temp = [...users];

    if (users[code] === 0) {
      temp[code] = 1;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < temp.length; i++) {
        if (i !== code) {
          temp[i] = 0;
        }
      }
      const filtered = filterLog(code);
      setfilteredLog(filtered);
      setUsers(temp);
    }
  };

  return (
    <div className="bp-log-cont">
      <div className="bp-log-header">
        <h1>BP Log</h1>
        <label htmlFor="bp-from" className="bp-dt-text">from</label>
        <input
          type="date"
          className="bp bp-log-search"
          value={logDateFrom}
          id="bp-from"
          onChange={(e) => {
            // should check if not '' and less than 'to' date
            console.log(e.target.value);
            setlogDateFrom(e.target.value);
          }}
        />
        <label htmlFor="bp-to" className="bp-dt-text">to</label>
        <input
          type="date"
          className="bp bp-log-search"
          id="bp-to"
          value={logDateTo}
          onChange={(e) => {
            // should check if not '' and greater than 'from' date

            console.log(e.target.value);
            setlogDateTo(e.target.value);
          }}
        />

      </div>
      <div className="bp-row-user">
        <div className={users[0] === 1 ? 'user-active' : 'user'} onClick={() => toggleUser(0)}>
          All (
          {logs.length}
          )
        </div>
        <div className={users[1] === 1 ? 'user-active' : 'user'} onClick={() => toggleUser(1)}>
          Maa (
          {logs.filter((log) => log.user === 'maa').length}
          )
        </div>
        <div className={users[2] === 1 ? 'user-active' : 'user'} onClick={() => toggleUser(2)}>
          Baba (
          {logs.filter((log) => log.user === 'baba').length}
          )
        </div>
      </div>
      <div className="bp-single-log-cont">

        {logs && users[0] === 1 ? logs.map((log) => <Bplog key={log.id} log={log} showModal={showModal} />)
          : filteredLog.map((log) => <Bplog key={log.id} log={log} showModal={showModal} />)}
        {// filteredLog.map((log) => <Bplog key={log.id} log={log} showModal={showModal} />)
        }
      </div>
    </div>
  );
}

export default BpLogCont;
