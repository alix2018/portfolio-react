import React from 'react';
import './ModalStructure.css';

const ModalStructure = ({handleClose, show, children}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="close" onClick={handleClose}/>
        <div id="container1">
          <div id="container2">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalStructure;
