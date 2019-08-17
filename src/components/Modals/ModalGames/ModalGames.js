import React from 'react';
import './ModalGames.css';
import ModalContent from '../ModalContent';
import Paragraph from '../Paragraph';

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
    text: 'The goal of my 6 months internship was to integrate microgames on web applications was to find the best way to develop them.'
  };
  const paragraphUnity = {
    context: 'Unity',
    text: 'I started to implement a 2D game platform with the game engine Unity (linked to https:// unity.com). With that first game I could learn the process to develop a video games but also all the mechanics, and that was easier thanks to Unity interface.'
  };
  const paragraphPixijs = {
    context: 'PixiJS',
    text: 'I implemented the same 2D platform game with the 2D WebGL renderer PixiJS (linked to https://www.pixijs.com/). There was no interface but only Javascript code. I wrapped the game into a web component to be easily reusable. All the options of the game can be decided while importing the component: number of coins, speed, space between platforms...'
  };
  const paragraphWebAssembly = {
    context: 'webassembly',
    text: 'WebAssembly is near native performances and really low level compare to the two previous ones. I wanted to give it a try even if it was quite new at this time. I made a snake with Javascript and WebAssembly. It was quite performant but the time of development was way longer.'
  };
  const paragraphResult = {
    context: 'Result',
    text: 'After checking all the criteria (cross browsers, loading time, performances, integration, development time), PixiJS was the most suitable solution.'
  };

  return (
    <ModalContent showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphIntro}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two full-page">
          <div className="games-bottom-left">
            <Paragraph>
              {paragraphPixijs}
            </Paragraph>
          </div>
          <div className="games-top-left">
            <Paragraph>
              {paragraphUnity}
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
    </ModalContent>
  );
}

export default Games;
