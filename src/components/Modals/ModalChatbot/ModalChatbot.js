import React from 'react';
import './ModalChatbot.css';
import ModalContent from '../ModalContent';

function Chatbot({showModal, closeModal}) {
  const listSubtitles = [
    {
      category: 'technologies',
      details: 'Javascript, Dialogflow, NodeJS'
    },
    {
      category: 'date',
      details: 'June - August 2017'
    }
  ];
  const modalInfo = {
    modalName: 'modal-chatbot',
    firstTitle: 'Facebook',
    secondTitle: 'Chatbot',
    firstSubtitle: 'Collecting consumers information',
    secondSubtitle: 'during the campaign',
    imageName: 'facebook-chatbot'
  };
  const paragraphInfo = {
    context: 'Introduction',
    text: 'The goal of the chatbot is to retrieve information about the customers during a loyalty program campaign. They answer the bot questions an the flow is be updated depending on their answer. I also made some chatbot tests with Telegram and Wechat before implementing the Facebook one.'
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

export default Chatbot;
