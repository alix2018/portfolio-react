import React from 'react';
import './ModalChatbot.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

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
    text: 'The goal was to <span>retrieve information about the customers</span> during a loyalty program campaign. They could answer the bot questions and the flow was be updated depending on their answers. I also made some tests with <span>Telegram</span> and <span>Wechat</span> chatbots before implementing the <span>Facebook</span> one.'
  };
  const paragraphFeature = {
    context: 'Chatbot feature',
    text: 'The user can log in with his loyalty card number and then answer the onboarding questions. The questions are mostly about his shopping habits, his diet preferences, his basket size or the frequency he visits the store. After the survey, he was also able to check the rewards he could redeem at the store.'
  };
  const paragraphCode = {
    context: 'Code details',
    text: 'The webviews design was realized with <span>Bootstrap</span> and <span>Materialize</span>. The backend side was handled with <span>NodeJS</span>. I chose <span>Dialogflow</span> for the text recognition because of his easy integration with lots of platforms and his natural language processing.'
  };

  return (
    <Modal showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphIntro}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two half-page">
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
