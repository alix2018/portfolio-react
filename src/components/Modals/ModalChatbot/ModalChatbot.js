import React from 'react';
import './ModalChatbot.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

function Chatbot({showModal, closeModal, isMobile}) {
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
    firstSubtitle: 'Collecting consumers details',
    secondSubtitle: 'during a campaign',
    imageName: 'facebook-chatbot'
  };
  const paragraphIntro = {
    context: 'Introduction',
    text: 'The goal of this project was to <span>retrieve information about the customers</span> during a loyalty program campaign. They could answer the bot questions and the flow was be updated depending on their answers. I also made test apps for <span>Telegram</span> and <span>Wechat</span> chatbots before implementing the <span>Facebook</span> one.'
  };
  const paragraphFeature = {
    context: 'Chatbot feature',
    text: 'The user can log in with his <span>loyalty card number</span> and then answer the onboarding questions. The questions are mostly about his shopping habits, his diet preferences, his basket size or the frequency he visits the store. After the survey, he was also able to check the <span>rewards</span> he could redeem at the store.'
  };
  const paragraphCode = {
    context: 'Code details',
    text: 'The webviews design was realized with <span>Bootstrap</span> and <span>Materialize</span>. The backend side was handled with <span>NodeJS</span>. I chose <span>Dialogflow</span> for the text recognition because of its easy integration with lots of platforms and its natural language processing.'
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
          <div className="chatbot-top-right">
            <Paragraph>
              {paragraphFeature}
            </Paragraph>
          </div>
          <div className="bottom-right">
            <Paragraph>
              {paragraphCode}
            </Paragraph>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default Chatbot;
