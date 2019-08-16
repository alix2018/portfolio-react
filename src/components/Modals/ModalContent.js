import React from 'react';
import './ModalContent.css';
import Modal from './Modal';
import Paragraph from './Paragraph';

function ModalContent({showModal, closeModal, listSubtitles, modalInfo, paragraphInfo, children}) {
  return (
    <Modal show={showModal} handleClose={closeModal}>
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-one">
          <div className="main-info">
            <h1>{modalInfo.firstTitle}<br/>{modalInfo.secondTitle}</h1>
            <h2>{modalInfo.firstSubtitle}<br/>{modalInfo.secondSubtitle}</h2>
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
          <img className="flat" src={`../../../public/images/${modalInfo.imageName}.png`}/>
          <div className="bottom-right">
            <Paragraph information={paragraphInfo}/>
          </div>
        </section>
      </div>
      {children}
    </Modal>
  );
}

export default ModalContent;