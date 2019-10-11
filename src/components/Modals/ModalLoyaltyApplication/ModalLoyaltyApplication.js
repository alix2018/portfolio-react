import React from 'react';
import './ModalLoyaltyApplication.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

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
    text: 'The Stamps application is a <span>digital solution</span> which informs the customers about the current <span>loyalty program</span>. They can find their number of stamps, see the rewards they can redeem or check the promotions that will make them earn more points.'
  };
  const paragraphStamps = {
    context: 'Application',
    text: 'The first implementation was with Polymer 1.0 and <span>web components</span>. Web components allow us to reuse them from one application to another and do efficient customizations for the different costumers.'
  };
  const paragraphPwa = {
    context: 'Stamps PWA',
    text: 'In 2018, we started to develop the same application as a <span>Progressive Web App</span> (PWA) with Polymer 3.0 and still using <span>web components</span>. PWA includes a shell application, a mobile app experience, an offline mode and way more features.'
  };
  const pwaQuote = {
    mainText: 'Progressive Web Apps are user experiences that have the reach of the web, and are:',
    line1: '- Reliable,',
    line2: '- Fast,',
    line3: '- Engaging',
    source: 'Google Developers'
  };

  return (
    <Modal showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two full-page">
          <div className="loyalty-top-left">
            <Paragraph>
              {paragraphIntro}
            </Paragraph>
          </div>
          <div className="bottom-left">
            <Paragraph>
              {paragraphStamps}
            </Paragraph>
          </div>
          <div className="quote">
            <img src="../../../../public/assets/quotation-mark.svg"/>
            {pwaQuote.mainText}<br/>
            {pwaQuote.line1}<br/>
            {pwaQuote.line2}<br/>
            {pwaQuote.line3}<br/>
            <div className="source-quote">
              <div className="line-source"/>
              <a href="https://developers.google.com" target="_blank" rel="noopener noreferrer">Source: {pwaQuote.source}</a>
            </div>
          </div>
          <div className="bottom-right">
            <Paragraph>
              {paragraphPwa}
            </Paragraph>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default LoyaltyApplication;
