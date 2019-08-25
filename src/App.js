import React, {useEffect} from 'react';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import PageHome from './components/PageHome/PageHome';
import PagePortfolio from './components/PagePortfolio/PagePortfolio';
import PageAboutMe from './components/PageAboutMe/PageAboutMe';
import PageContact from './components/PageContact/PageContact';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default App;