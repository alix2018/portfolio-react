import React from 'react';
import './Modal.css';
import ModalStructure from './ModalStructure';
import Paragraph from './Paragraph';

function Modal({showModal, closeModal, listSubtitles, modalInfo, paragraphInfo, children}) {
  return (
    <ModalStructure show={showModal} handleClose={closeModal}>
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
            <Paragraph>
              {paragraphInfo}
            </Paragraph>
          </div>
        </section>
      </div>
      {children}
    </ModalStructure>
  );
}

export default Modal;