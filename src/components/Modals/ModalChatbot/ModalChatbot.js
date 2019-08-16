import React from 'react';
import './ModalChatbot.css';
import ModalContent from '../ModalContent';
import Paragraph from '../Paragraph';

function Chatbot({showModal, closeModal}) {
  const listSubtitles = [
    {
      category: 'technologies',
      details: 'Javascript, Dialogflow, NodeJS'
    },
    {
      category: 'Application',
      details: 'Facebook Messenger'
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
  const paragraphIntro = {
    context: 'Introduction',
    text: 'The goal of the chatbot is to retrieve information about the customers during a loyalty program campaign. They answer the bot questions an the flow is be updated depending on their answer. I also made some chatbot tests with Telegram and Wechat before implementing the Facebook one.'
  };
  const paragraphCode = {
    context: 'Code details',
    text: 'The webviews design are realized with Bootstrap and Materialize. The backend side was handled with NodeJS with the template engine Pug that is used to send data from the server to the client side. I finally chose Dialogflow for the text recognition because of his easy integration to lots of platforms, his natural language processing and its user friendly interface.'
  };
  const paragraphFeature = {
    context: 'Chatbot feature',
    text: 'The user has to log in with his loyalty card number and then answer the onboarding questions about his shopping habits. For example his diet preferences, his basket size or the frequency he visits the store. After the survey he can also check the rewards he is able to redeem at the store.'
  };

  return (
    <ModalContent showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphIntro}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two half-page">
          <div className="chatbot-top-right">
            <Paragraph information={paragraphFeature}/>
          </div>
          <div className="bottom-right">
            <Paragraph information={paragraphCode}/>
          </div>
        </section>
      </div>
    </ModalContent>
  );
}

export default Chatbot;
