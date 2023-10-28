/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Message({ code }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // code -> 1,4,7
  const messages = ['Write and Save', 'Uploading Record', 'Record Uploaded Successfully', 'Update Record', 'Updating Record', 'Record Updated Sucessfully', 'Delete Record', 'Deleting Record', 'Record Deleted Successfylly'];
  const uploadSucceed = () => {
    setTimeout(() => {
      setSuccess(true);
    }, 1500);
  };

  const dismiss = () => {
    setLoading(false);
    setSuccess(false);
  };

  const load = () => {
    setLoading(true);
    uploadSucceed();
  };
  return (
    <div>
      {
              loading ? (
                <div className="presc-footer">

                  <div className="presc-input-gray">
                    <div className="presc-input-green" />
                    {
                     success ? messages.filter((msg) => msg === messages[code]) && <span className="abs-text-2">{messages[code + 1]}</span>
                       : <span className="abs-text">{messages[code]}</span>

                  }

                  </div>
                  {
                    success && (
                    <div className="dismiss" onClick={dismiss}>
                      Dismiss Massage
                    </div>
                    )
}
                </div>
              )
                : (
                  <div className="presc-footer">
                    <button type="submit" className="save-bp" id="save-pr-btn" onClick={load}>{messages[code - 1]}</button>

                  </div>
                )
            }
    </div>
  );
}

export default Message;
