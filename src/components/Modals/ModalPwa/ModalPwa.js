import React from 'react';
import './ModalPwa.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

function Pwa({showModal, closeModal, isMobile}) {
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
    modalName: 'modal-pwa',
    firstTitle: 'Progressive',
    secondTitle: 'Web Apps',
    firstSubtitle: 'Reducing the gap',
    secondSubtitle: 'between Web and native',
    imageName: 'pwa'
  };
  const paragraphIntro = {
    context: 'Introduction',
    text: 'In 2018, my company started to migrate our web applications to <span>progressive web apps solutions</span>. One of the solution I\'ve worked on, is the <span>Stamps application</span> that informs the customers about the current <span>loyalty program</span>. They can find their number of stamps, see the rewards they can redeem or check the promotions that will make them earn more points.'
  };
  const paragraphBeforePwa = {
    context: 'Before PWA',
    text: 'The first implementation was with Polymer 1.0 and <span>web components</span>. Web components allowed us to reuse them from one application to another and do efficient customizations for the different costumers.'
  };
  const paragraphAfterPwa = {
    context: 'After',
    text: 'With the Web evolving towards a more user engaging way, especially with the <span>PWAs and their native-like experience</span>, we decided to take this path too. We implemented a new stack using the <span>latest technologies</span> and the PWA features that could help us make a difference for the user experience. The app was shown <span>way more performant</span> thanks to the service workers and the new efficient architecture.'
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
      modalInfo={modalInfo} isMobile={isMobile}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two full-page">
          <div className="pwa-top-left">
            <Paragraph>
              {paragraphIntro}
            </Paragraph>
          </div>
          <div className="quote">
            <img src="../../../../public/assets/quotation-mark.svg" alt="quote image"/>
            {pwaQuote.mainText}<br/>
            {pwaQuote.line1}<br/>
            {pwaQuote.line2}<br/>
            {pwaQuote.line3}<br/>
            <div className="source-quote">
              <div className="line-source"/>
              <a href="https://developers.google.com" title="Google developers website" target="_blank" rel="noopener noreferrer">Source: {pwaQuote.source}</a>
            </div>
          </div>
          <div className="pwa-top-right">
            <Paragraph>
              {paragraphBeforePwa}
            </Paragraph>
          </div>
          <div className="bottom-right">
            <Paragraph>
              {paragraphAfterPwa}
            </Paragraph>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default Pwa;
