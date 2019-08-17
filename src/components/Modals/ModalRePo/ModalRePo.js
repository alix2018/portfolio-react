import React from 'react';
import './ModalRePo.css';
import Modal from '../Modal';
import Paragraph from '../Paragraph';

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
    text: 'The Retailer Portal is an interface for cashiers and managers to handle customers cards and loyalty campaigns.'
  };
  const paragraphDetails = {
    context: 'Details',
    text: 'Every actions possible for the users is represented by a module. These modules are displayed using the template engine Handlebars. The javascript code is based on JQuery and we complete it by implementing our own helpers and plugins. The project exists for few years already and the Front- End Framework chosen at this time to design the entire the website was Bootstrap 3. The whole application is built using Gulpfile and its tasks system.'
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
