import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import PageHome from './PageHome/PageHome';
import PagePortfolio from './PagePortfolio/PagePortfolio';
import PageAboutMe from './PageAboutMe/PageAboutMe';
import PageContact from './PageContact/PageContact';

function MainPage() {
  return (
    <>
      <MenuBar/>
      <PageHome/>
      <PagePortfolio/>
      <PageAboutMe/>
      <PageContact/>
    </>
  );
}

export default MainPage;