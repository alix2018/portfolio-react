import React from 'react';
import './ModalGames.css';
import Modal from '../Modal';
import Paragraph from '../../Paragraph/Paragraph';

function Games({showModal, closeModal, isMobile}) {
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
    text: 'The goal of my 6 months internship was to <span>integrate microgames</span> on web applications and find the best way to develop them depending on a list of parameters and expectations: development time, performances, reusability, integration to name the main ones.'
  };
  const paragraphUnity = {
    context: 'Unity',
    text: 'I started to implement a 2D game platform with the <span>game engine</span> <a href="https:// unity.com" title="Unity Official Website" target="_blank" rel="noopener noreferrer">Unity</a>. With this first game, I could learn the process of developing video games but also all the mechanics. The Unity interface really helps for these kinds of projects.'
  };
  const paragraphPixijs = {
    context: 'PixiJS',
    text: 'I implemented the same 2D game with the <span>2D WebGL renderer</span> <a href="https://www.pixijs.com" title="PixiJS Official Website" target="_blank" rel="noopener noreferrer">PixiJS</a>. I wrapped the game into a web component to be more easily reusable. All the options of the game could be decided while importing the component: number of coins, speed, space between platforms...'
  };
  const paragraphWebAssembly = {
    context: 'webassembly',
    text: '<span>WebAssembly</span> is near-native performances and really low level compare to the two previous ones. I wanted to give it a try even if it was quite new at this time. I made a <span>snake</span> with Javascript and WebAssembly. It was really <span>performant</span> but the time of development was too long for the result we were looking for.'
  };
  const textPlayGame = 'Play the game';
  return (
    <Modal showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} isMobile={isMobile}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two full-page">
          <div className="games-top-left">
            <Paragraph>
              {paragraphIntro}
            </Paragraph>
          </div>
          <div className="games-bottom-left">
            <a href="https://pwa-test-1bec3.web.app" className="play-game unity" title="play custom Unity 2D game" target="_blank" rel="noopener noreferrer">
              <p>{textPlayGame}</p>
              <img src="../../../../public/assets/icons/play-game.svg" alt="play game image"/>
            </a>
            <Paragraph>
              {paragraphUnity}
            </Paragraph>
          </div>
          <div className="games-top-right">
            <a href="https://jumpy-component.web.app/demo" title="play custom PixiJS 2D game" className="play-game pixi" target="_blank" rel="noopener noreferrer">
              <p>{textPlayGame}</p>
              <img src="../../../../public/assets/icons/play-game.svg" alt="play game image"/>
            </a>
            <Paragraph>
              {paragraphPixijs}
            </Paragraph>
          </div>
          <div className="bottom-right">
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
