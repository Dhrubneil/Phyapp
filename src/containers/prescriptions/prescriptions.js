/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { LiaNotesMedicalSolid } from 'react-icons/lia';
import Message from '../../components/message/message';
import Navbar from '../../components/navbar/navbar';

function Prescriptions() {
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);

  // const uploadSucceed = () => {
  //   setTimeout(() => {
  //     setSuccess(true);
  //   }, 1500);
  // };

  // const dismiss = () => {
  //   setLoading(false);
  //   setSuccess(false);
  // };

  // const load = () => {
  //   setLoading(true);
  //   uploadSucceed();
  // };

  return (
    <div>
      <Navbar />
      <div className="presc-cont">
        <div className="prescriptions-cont">
          <div className="log-header">
            <div className="log-icon">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
            <div className="header">
              <h2 className="base-text">Prescriptions</h2>
            </div>
            <p id="date-today">
              Search by Anomaly/Date/Doctor
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="add-presc">
          <div id="medical-book-icon">

            <LiaNotesMedicalSolid className="pr-note-icon" />
          </div>
          {// <button type="button" className="presc-btn"><p>Add Prescription</p></button>
          }
          <div className="bp-header">

            <h1 className="bp-header-text"><label htmlFor="pr-date" id="bp-label">Input Prescription Data</label></h1>
            <input type="date" id="pr-date" />

          </div>
          <div className="new-presc-info">

            <div className="pr-inputs">

              <div className="pr-row">
                <input type="text" id="doctor-name" className="presc-input" placeholder="doctor's name" />
                <div className="pr-name"><h3><label htmlFor="doctor-name" className="bp-text">Doctor&apos;s Name</label></h3></div>
              </div>

              <div className="pr-row">

                <input type="text" id="pr-add-input" className="presc-input" placeholder="address" />
                <div className="pr-name"><h3><label htmlFor="pr-add-input" className="bp-text">Address</label></h3></div>
              </div>

              <div className="pr-row">
                <input type="text" id="anomaly" className="presc-input" placeholder="anomaly" />
                <div className="pr-name"><h3><label htmlFor="anomaly" className="bp-text">Anomaly</label></h3></div>
              </div>

              {// <input type="text" name="doctor" id="doctor-name" placeholder="doctor" className="presc-input" />
              // <label htmlFor="doctor-name">Doctor&apos;s Name</label>
              }
              {// <input type="date" name="address" id="pr-add-input" className="presc-input" />
              // <label htmlFor="pr-add-input"> Date</label>
              // <input type="text" name="anomaly" id="pr-anomaly" placeholder="anomaly" className="presc-input" />
              // <label htmlFor="pr-anomaly">Anomaly</label>
              }
              {//               {
//               loading ? (
//                 <div className="presc-footer">

//                   <div className="presc-input-gray">
//                     <div className="presc-input-green" />
//                     {
//                       success ? <span className="abs-text-2">Record Uploaded Successfully</span>
//                         : <span className="abs-text">Uploading Record</span>
//                     }

//                   </div>
//                   {
//                     success && (
//                     <div className="dismiss" onClick={dismiss}>
//                       Dismiss Massage
//                     </div>
//                     )
// }
//                 </div>
//               )
//                 : (
//                   <div className="presc-footer">
//                     <button type="submit" className="save-bp" id="save-pr-btn" onClick={load}>Write and Save</button>

//                   </div>
//                 )
//
}
              <Message code={1} />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Prescriptions;
