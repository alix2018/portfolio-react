import React from 'react';
import './ModalLoyaltyApplication.css';
import Modal from './Modal';
import Paragraph from './Paragraph';

function LoyaltyApplication({closeModal, showModal}) {
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
  const modalTexts = {
    firstTitle: 'Loyalty',
    secondTitle: 'Application',
    firstSubtitle: 'From WEB app to PWA using',
    secondSubtitle: 'Web Components'
  };
  const paragraphInfo = {
    context: 'Introduction',
    text: 'Stamps is a digital solution that informs the customers about the current loyalty program. They can find the number of stamps they have, see the rewards they can redeem or check the promotions that will make them earn more points.',
    keywords: 'digital solution'
  };

  const imageName = 'loyalty-application';
  const modalName = 'modal-loyalty';
  return (
    <Modal show={showModal} handleClose={closeModal}>
      <div className={`${modalName} box`}>
        <section className="page-one">
          <div className="main-info">
            <h1>{modalTexts.firstTitle}<br/>{modalTexts.secondTitle}</h1>
            <h2>{modalTexts.firstSubtitle}<br/>{modalTexts.secondSubtitle}</h2>
            {listSubtitles.map(item => {
              return (
                <section key={item.category}>
                  <div className="container-categories">
                    <div className="line-categories"/>
                    <div className="categories">{item.category}</div>
                  </div>
                  <div className="details">{item.details}</div>
                </section>
              );
            })}
          </div>
          <img className="flat" src={`../../../public/images/${imageName}.png`}/>
          <Paragraph information={paragraphInfo}/>
        </section>
      </div>
      <div className={`${modalName} box`}>
        <section className="page-two half-page">
          2
        </section>
      </div>
    </Modal>
  );
}

export default LoyaltyApplication;
