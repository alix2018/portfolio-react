import React from 'react';
import './ModalGames.css';
import ModalContent from '../ModalContent';

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
  const paragraphInfo = {
    context: 'Introduction',
    text: 'The goal of my 6 months internship was to integrate microgames on web applications was to find the best way to develop them.'
  };

  return (
    <ModalContent showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphInfo}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two full-page">
          2
        </section>
      </div>
    </ModalContent>
  );
}

export default Games;
