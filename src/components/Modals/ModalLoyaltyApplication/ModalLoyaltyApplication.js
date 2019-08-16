import React from 'react';
import './ModalLoyaltyApplication.css';
import ModalContent from '../ModalContent';
import Paragraph from '../Paragraph';

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
  const paragraphIntro = {
    context: 'Introduction',
    text: 'Stamps is a digital solution that informs the customers about the current loyalty program. They can find the number of stamps they have, see the rewards they can redeem or check the promotions that will make them earn more points.',
    keywords: 'digital solution'
  };
  const paragraphPwa = {
    context: 'Stamps PWA',
    text: 'In 2018, we started to develop the same application as a Progressive Web App (PWA) with Polymer 3 and still using web components. This includes the shell application, mobile app experience, offline mode and all the features that PWA provides.'
  };
  const paragraphStamps = {
    context: 'Stamps Application',
    text: 'The first implementation was with Polymer 1 and web components to be able to reuse them from one application to another and do efficient customization.'
  };

  return (
    <ModalContent showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphIntro}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two half-page">
          <Paragraph information={paragraphStamps} newClass="top-right-loyalty"/>
          <Paragraph information={paragraphPwa}/>
        </section>
      </div>
    </ModalContent>
  );
}

export default LoyaltyApplication;
