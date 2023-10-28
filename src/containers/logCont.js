/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import Log from '../components/log.js/log';
import NotFound from '../components/notFound/notFound';

const monthArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
function LogCont() {
  const [logs, setlogs] = useState(null);
  const [showLog, setshowLog] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({ value: '', data: [] });

  useEffect(() => {
    fetch('http://localhost:8000/logs')
      .then((res) => res.json())
      .then((data) => {
        setlogs(data);
      });
  }, []);

  const handleShow = () => {
    setshowLog(!showLog);
  };

  const handleChange = (e) => {
    const filteredData = logs.filter((log) => {
      if (e.target.value === '') return null;
      const searchDate = e.target.value;

      let newSearchDate = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < searchDate.length; i++) {
        newSearchDate += searchDate[i];
      }
      newSearchDate = newSearchDate.replaceAll('-', ' ');
      if (newSearchDate[3] === '0') {
        newSearchDate = `${newSearchDate.substring(0, 3)}${newSearchDate.substring(4, 10)}`;
        console.log('Search Date : ', newSearchDate);
      }

      const logDate = new Date(log.date).toDateString().substring(4, 15).toLocaleLowerCase();

      const newLogDate = `${logDate.substring(4, 6)} ${monthArray.indexOf(logDate.substring(0, 3)) + 1} ${logDate.substring(7, 11)} `;
      console.log('Log Date : ', newLogDate);
      // const newLogDate = `${logDate.substring(4, 6)} ${logDate.substring(0, 2)} ${logDate.substring(7, 11)}`;

      // if (searchString === logDate) {
      //   console.log(log);
      // }

      // eslint-disable-next-line max-len
      // return new Date(log.date).toDateString().substring(4, 15).toLocaleLowerCase()
      // .includes(e.target.value.replaceAll('-', ' '));
      return newLogDate.includes(newSearchDate);
    });
    setState({
      value: e.target.value,
      data: filteredData,
    });
  };

  return (
    <div className="logCont">
      <div className="log-header">
        <div className="log-icon" onClick={handleShow}>

          <div className="line" />
          <div className="line" />
          <div className="line" />

        </div>
        <div className="header" onClick={handleShow}>
          {
          showLog
            ? <h2 className="base-text">Hide Log</h2> : <h2 className="base-text">Show Log</h2>
        }
        </div>
        <div className="searchDate">

          <input className={showLog ? 'search' : 'hide-search'} type="search" id="sbd" value={state.value} onChange={(e) => handleChange(e)} placeholder="Search by Date" />
          <ul className="show-searched-log">
            {
        (state.value.length === 0 ? '' : state.data.map((data) => (
          <div className="med-desc">
            <p className="med-name">{data.date}</p>
          </div>
        )))
      }

          </ul>
        </div>
      </div>
      <div className={showLog ? 'slider-i' : 'rev-slider-i'}>
        {logs && (state.value.length === 0 ? (logs.map((log) => <Log log={log} />)) : (state.data.length > 0 ? state.data.map((log) => <Log log={log} />) : <NotFound />))}
      </div>
    </div>
  );
}

export default LogCont;
