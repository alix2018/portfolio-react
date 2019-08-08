import React from 'react';
import './ModalLoyaltyApplication.css';
import Modal from './Modal';

function LoyaltyApplication({closeModal, showModal}) {
  return (
    <Modal show={showModal} handleClose={closeModal}>
      <div className="modal1 box">
        <section className="page-one">
          <h1>Loyalty Application</h1>
          <h2>From WEB app to PWA using Web Components</h2>
        </section>
      </div>
      <div className="modal1 box">
        <section className="page-two half-page">
          2
        </section>
      </div>
    </Modal>
  );
}

export default LoyaltyApplication;
