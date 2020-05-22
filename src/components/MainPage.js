import React from 'react';
import MenuBar from './Menu/MenuBar';
import BurgerMenu from './Menu/BurgerMenu';
import PageHome from './PageHome/PageHome';
import PagePortfolio from './PagePortfolio/PagePortfolio';
import PageAboutMe from './PageAboutMe/PageAboutMe';
import PageContact from './PageContact/PageContact';
import './MainPage.css';
import useScroll from './Menu/useScroll';
import '../scroll-snap-polyfill';

function MainPage() {
  const activePage = useScroll(['home', 'portfolio', 'about-me', 'contact']);
  console.log("MainPage:", activePage);
  return (
    <>
      <MenuBar/>
      <BurgerMenu/>
      <div id="vertical-snapping">
        <div className="page home">
          <PageHome activePage={activePage}/>
        </div>
        <div className="page portfolio">
          <PagePortfolio activePage={activePage}/>
        </div>
        <div className="page about-me">
          <PageAboutMe activePage={activePage}/>
        </div>
        <div className="page contact">
          <PageContact activePage={activePage}/>
        </div>
      </div>
    </>
  );
}

export default MainPage;