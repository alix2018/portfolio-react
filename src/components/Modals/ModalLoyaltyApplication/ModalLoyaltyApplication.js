import React from 'react';
import './ModalLoyaltyApplication.css';
import ModalContent from '../ModalContent';

function LoyaltyApplication({showModal, closeModal}) {
  const listSubtitles = [
    {
      category: 'technologies',
      details: 'Web components, Polymer, Webpack'
    },
    {
      category: 'date',
      details: 'From September 2018'
    }
  ];
  const modalInfo = {
    modalName: 'modal-loyalty',
    firstTitle: 'Loyalty',
    secondTitle: 'Application',
    firstSubtitle: 'From WEB app to PWA using',
    secondSubtitle: 'Web Components',
    imageName: 'loyalty-application'
  };
  const paragraphInfo = {
    context: 'Introduction',
    text: 'Stamps is a digital solution that informs the customers about the current loyalty program. They can find the number of stamps they have, see the rewards they can redeem or check the promotions that will make them earn more points.',
    keywords: 'digital solution'
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

export default LoyaltyApplication;
