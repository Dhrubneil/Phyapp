import React from 'react';
import BpLogCont from '../../components/bpLogCont/bpLogCont';
import Navbar from '../../components/navbar/navbar';

function Logs() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <h2 className="page-header">Logs Page. Currently showing BP Log</h2>
      <BpLogCont />
    </div>
  );
}

export default Logs;
