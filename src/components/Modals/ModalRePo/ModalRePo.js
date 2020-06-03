import React from 'react';
import './ModalRePo.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

function RetailerPortal({showModal, closeModal, isMobile}) {
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
  const paragraphIntro = {
    context: 'Introduction',
    text: 'The Retailer Portal is a web based application oriented towards cashiers and managers. This <span>internal tool</span> allows managers to handle the promotions of the different loyalty programs and cashiers to manage consumers account at the store.'
  };
  const paragraphDetails = {
    context: 'Details',
    text: 'The interface is displayed using the template engine <span>Handlebars</span>. The javascript code is based on <span>JQuery</span>. The project exists for few years already and the Front-End Framework chosen at this time was <span>Bootstrap 3</span> and the whole application is built with <span>Gulp</span> and its tasks system.'
  };
  const paragraphSci = {
    context: 'Cashier interface',
    text: 'This module helps the <span>cashiers</span> see the user details using their card number. They can have access to their balance and <span>execute actions</span> on it such as redeeming a reward for instance.'
  };
  return (
    <Modal showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} isMobile={isMobile}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two full-page">
          <div className="bottom-left">
            <Paragraph>
              {paragraphIntro}
            </Paragraph>
          </div>
          <div className="repo-top-right">
            <Paragraph>
              {paragraphDetails}
            </Paragraph>
          </div>
          <div className="bottom-right">
            <Paragraph>
              {paragraphSci}
            </Paragraph>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default RetailerPortal;
