import React, {useState, useEffect} from 'react';
import './BurgerMenu.css';
import ReactGA from 'react-ga';
import LinkedinIcon from '../Icons/LinkedinIcon';
import GithubIcon from '../Icons/GithubIcon';
import SkypeIcon from '../Icons/SkypeIcon';
import useScroll from './useScroll';

function BurgerMenu() {
  const activePage = useScroll(['home', 'portfolio', 'about-me', 'contact']);
  const [hideBurgerMenu, setHideBurgerMenu] = useState(true);
  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState('display-block');

  const menuItems = [
    {name: 'Home', page: 'home'},
    {name: 'Portfolio', page: 'portfolio'},
    {name: 'About Me', page: 'about-me'},
    {name: 'Contact', page: 'contact'}
  ];

  function onBurgerMenuClicked() {
    if (hideBurgerMenu) {
      setHideBurgerMenu(!hideBurgerMenu);
    } else {
      setTimeout(() => {
        setHideBurgerMenu(!hideBurgerMenu);
      }, 250);
    }
  }

  function onPageClicked(page) {
    setHideBurgerMenu(!hideBurgerMenu);
    document.querySelector('#checkbox').checked = false;
    const currentAnchor = document.querySelector('.' + page);
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  function onIconClick(iconName) {
    ReactGA.event({
      category: 'Click',
      action: `Click on icon ${iconName}`,
      label: 'In burger menu'
    });
  }

  useEffect(() => {
    const burgerMenuDisplayValue = hideBurgerMenu ? 'display-none' : 'display-block';
    setBurgerMenuDisplay(burgerMenuDisplayValue);
  }, [hideBurgerMenu]);

  return (
    <nav role="navigation">
      <div id="menuToggle" className="animated fadeInUp">
        <input type="checkbox" id="checkbox" className={`${burgerMenuDisplay}`} onClick={onBurgerMenuClicked}/>
        <label value="checkbox"/>
        <span/>
        <span/>
        <span/>
        <ul id="menu" className={`${burgerMenuDisplay}`}>
          <li className="top">
            <nav className="menu-items-container">
              {menuItems.map(item => {
                return (
                  <ul key={item.name} className="list" title={`${item.name}`} onClick={() => {onPageClicked(item.page);}}>
                    <li className={`list ${item.page === activePage ? 'active' : ''}`}>{item.name}</li>
                  </ul>
                );
              })}
            </nav>
          </li>
          <li className="bottom">
            <p>Available for new web projects, contact me!</p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/stephanie-alix/" target="_blank" rel="noopener noreferrer" title="linkedin logo" onClick={() => {onIconClick('Linkedin');}}>
                <LinkedinIcon/>
              </a>
              <a href="https://github.com/alix2018" target="_blank" rel="noopener noreferrer" title="github logo" onClick={() => {onIconClick('Github');}}>
                <GithubIcon/>
              </a>
              <a href="https://join.skype.com/invite/ljzSCwTgKRyX" target="_blank" rel="noopener noreferrer" title="skype logo" onClick={() => {onIconClick('Skype');}}>
                <SkypeIcon/>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BurgerMenu;