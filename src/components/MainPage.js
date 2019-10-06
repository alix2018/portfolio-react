import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import PageHome from './PageHome/PageHome';
import PagePortfolio from './PagePortfolio/PagePortfolio';
import PageAboutMe from './PageAboutMe/PageAboutMe';
import PageContact from './PageContact/PageContact';
import './MainPage.css';
import '../scroll-snap-polyfill';

function MainPage() {
  return (
    <>
      <MenuBar/>
      <div id="vertical-snapping">
        <div className="page home">
          <PageHome/>
        </div>
        <div className="page portfolio">
          <PagePortfolio/>
        </div>
        <div className="page about-me">
          <PageAboutMe/>
        </div>
        <div className="page contact">
          <PageContact/>
        </div>
      </div>
    </>
  );
}

export default MainPage;