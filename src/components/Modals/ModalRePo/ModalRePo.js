import React from 'react';
import './ModalRePo.css';
import ModalContent from '../ModalContent';

function RetailerPortal({showModal, closeModal}) {
  const listSubtitles = [
    {
      category: 'technologies',
      details: 'Bootstrap, JQuery'
    },
    {
      category: 'date',
      details: 'From September 2018'
    }
  ];
  const modalInfo = {
    modalName: 'modal-repo',
    firstTitle: 'Retailer',
    secondTitle: 'Portal',
    firstSubtitle: 'Card and loyalty programs',
    secondSubtitle: 'management interface',
    imageName: 'retailer-portal'
  };
  const paragraphInfo = {
    context: 'Introduction',
    text: 'The Retailer Portal is an interface for cashiers and managers to handle customers cards and loyalty campaigns.'
  };

  return (
    <ModalContent showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphInfo}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two half-page">
          2
        </section>
      </div>
    </ModalContent>
  );
}

export default RetailerPortal;
