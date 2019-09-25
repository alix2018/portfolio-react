import React from 'react';
import './Modal.css';

function Modal({showModal, closeModal, listSubtitles, modalInfo, children}) {
  const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';
  const menuBar = document.querySelector('ul.menu-effect');
  if (menuBar && showModal) {
    menuBar.style.pointerEvents = 'none';
  }

  setTimeout(() => {
    const pageOneClass = '#container2 .' + modalInfo.modalName + '.box .page-one';
    const currentAnchor = document.querySelector(pageOneClass);
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 1);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="close" onClick={closeModal}/>
        <div id="container1">
          <div id="container2">
            <div className={`${modalInfo.modalName} box`}>
              <section className="page-one">
                <div className="main-info">
                  <h1>{modalInfo.firstTitle}<br/>
                    {modalInfo.secondTitle}
                  </h1>
                  <h2>{modalInfo.firstSubtitle}<br/>
                    {modalInfo.secondSubtitle}
                  </h2>
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
                <img className="flat" src={`../../../public/images/flat/${modalInfo.imageName}.png`}/>
              </section>
              <img className="arrow" src="../../../public/images/arrow.svg"/>
            </div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Modal;