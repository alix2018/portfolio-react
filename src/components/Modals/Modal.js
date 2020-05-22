import React from 'react';
import ReactGA from 'react-ga';
import './Modal.css';

function Modal({showModal, closeModal, listSubtitles, modalInfo, isMobile, children}) {
  const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';
  const menuBar = document.querySelector('ul.menu-effect');
  if (menuBar && showModal) {
    menuBar.style.pointerEvents = 'none';
  }

  setTimeout(() => {
    if (!isMobile) {
      const pageOneClass = '#container2 .' + modalInfo.modalName + '.box .page-one';
      const currentAnchor = document.querySelector(pageOneClass);
      currentAnchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 1);

  function onRightArrowClicked() {
    console.log("modalInfo.modalName", modalInfo.modalName);
    ReactGA.event({
      category: 'Click',
      action: 'Click on right arrow',
      label: `${modalInfo.modalName}`
    });
    const pageTwoClass = '#container2 .' + modalInfo.modalName + '.box .page-two';
    const currentAnchor = document.querySelector(pageTwoClass);
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img alt="close cross" className="close" src="../../../public/assets/icons/cross.svg" onClick={closeModal}/>
        {isMobile &&
          <div className="main-info">
            <section className="page-one-mobile">
              <img className={`${modalInfo.imageName}`}
                src={`../../../public/assets/${modalInfo.imageName}-mobile.png`}
                alt={`${modalInfo.firstTitle} ${modalInfo.secondTitle}`}/>
              <div className="modal-titles">
                <h1>{modalInfo.firstTitle}<br/>
                  {modalInfo.secondTitle}
                </h1>
                <h2>{modalInfo.firstSubtitle}<br/>
                  {modalInfo.secondSubtitle}
                </h2>
              </div>
            </section>
            <section className="page-two-mobile">
              <div className="categories-list">
                {listSubtitles.map(item => {
                  return (
                    <div key={item.category} className="map-categories">
                      <div className="container-categories">
                        <div className="line-categories"/>
                        <div className="categories">{item.category}</div>
                      </div>
                      <div className="details">{item.details}</div>
                    </div>
                  );
                })}
              </div>
              {children}
            </section>
          </div>
        }
        {!isMobile &&
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
                        <div key={item.category} className="map-categories">
                          <div className="container-categories">
                            <div className="line-categories"/>
                            <div className="categories">{item.category}</div>
                          </div>
                          <div className="details">{item.details}</div>
                        </div>
                      );
                    })}
                  </div>
                  <img className={`${modalInfo.imageName}`}
                    src={`../../../public/assets/${modalInfo.imageName}-desktop.png`}
                    alt={`${modalInfo.firstTitle} ${modalInfo.secondTitle}`}/>
                </section>
                <img className="arrow bouncing-animation" src="../../../public/assets/icons/arrow.svg" alt="arrow to the right" onClick={onRightArrowClicked}/>
              </div>
              {children}
            </div>
          </div>
        }
      </section>
    </div>
  );
}

export default Modal;