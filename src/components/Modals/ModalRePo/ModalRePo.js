import React from 'react';
import './ModalRePo.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

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
  const paragraphIntro = {
    context: 'Introduction',
    text: 'The Retailer Portal is an <span>interface for cashiers and managers</span>. Its goal is to manage the loyalty cards of the shoppers and the campaign of the current loyalty program.'
  };
  const paragraphDetails = {
    context: 'Details',
    text: 'Every actions possible for the users is represented by a module. These modules are displayed using the template engine <span>Handlebars</span>. The javascript code is based on <span>JQuery</span> and we complete it by implementing our own helpers and plugins. The project exists for few years already and the Front-End Framework chosen at this time was <span>Bootstrap 3</span>. The whole application is built using <span>Gulp</span> and its tasks system.'
  };
  return (
    <Modal showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphIntro}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two half-page">
          <div className="bottom-right">
            <Paragraph>
              {paragraphDetails}
            </Paragraph>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default RetailerPortal;
