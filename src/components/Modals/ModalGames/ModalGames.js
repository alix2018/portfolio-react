import React from 'react';
import './ModalGames.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

function Games({showModal, closeModal}) {
  const listSubtitles = [
    {
      category: 'technologies',
      details: 'C#, Javascript, C'
    },
    {
      category: 'date',
      details: 'February - July 2018'
    }
  ];
  const modalInfo = {
    modalName: 'modal-games',
    firstTitle: '2D games',
    secondTitle: '',
    firstSubtitle: 'Unity, PixiJS and',
    secondSubtitle: 'WebAssembly micro-games',
    imageName: 'games'
  };
  const paragraphIntro = {
    context: 'Introduction',
    text: 'The goal of my 6 months internship was to integrate microgames on web applications and find the best way to develop them.'
  };
  const paragraphUnity = {
    context: 'Unity',
    text: 'I started to implement a 2D game platform with the <span>game engine <a href="https:// unity.com" target="_blank" rel="noopener noreferrer">Unity</a></span>. With this first game, I could learn the process of developing video games but also all the mechanics. The Unity interface makes it way easier.'
  };
  const paragraphPixijs = {
    context: 'PixiJS',
    text: 'I implemented the same 2D platform game with the <span>2D WebGL renderer <a href="https:// unity.com" target="_blank" rel="noopener noreferrer">PixiJS</a></span>. There was no interface but only Javascript code. I wrapped the game into a web component to be easily reusable. All the options of the game could be decided while importing the component: number of coins, speed, space between platforms...'
  };
  const paragraphWebAssembly = {
    context: 'webassembly',
    text: '<span>WebAssembly</span> is near-native performances and really low level compare to the two previous ones. I wanted to give it a try even if it was quite new at this time. I made a <span>snake</span> with Javascript and WebAssembly. It was really <span>performant</span> but the time of development was too long for the result.'
  };
  const paragraphResult = {
    context: 'Result',
    text: 'After checking all the criteria (cross browsers, loading time, performances, integration, development time), <span>PixiJS</span> was the most suitable solution.'
  };
  const textPlayGame = 'Play the game';
  return (
    <Modal showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphIntro}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two full-page">
          <div className="games-top-left">
            <a href="https://pwa-test-1bec3.web.app" className="play-game unity" target="_blank" rel="noopener noreferrer">
              <p>{textPlayGame}</p>
              <img src="../../../../public/images/play-game.svg"/>
            </a>
            <Paragraph>
              {paragraphUnity}
            </Paragraph>
          </div>
          <div className="games-bottom-left">
            <a href="https://jumpy-component.web.app/demo" className="play-game pixi" target="_blank" rel="noopener noreferrer">
              <p>{textPlayGame}</p>
              <img src="../../../../public/images/play-game.svg"/>
            </a>
            <Paragraph>
              {paragraphPixijs}
            </Paragraph>
          </div>
          <div className="games-bottom-right">
            <Paragraph>
              {paragraphResult}
            </Paragraph>
          </div>
          <div className="games-top-right">
            <Paragraph>
              {paragraphWebAssembly}
            </Paragraph>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default Games;
