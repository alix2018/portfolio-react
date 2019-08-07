import React from 'react';
import './LoyaltyApplication.css';
import Modal from './Modal';

function LoyaltyApplication({closeModal, showModal}) {
  return (
    <Modal show={showModal} handleClose={closeModal}>
      <section className="modal-loyalty">
        <p>Loyalty Application details</p>
      </section>
    </Modal>
  );
}

export default LoyaltyApplication;
