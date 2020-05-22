import React from 'react';
import './MenuBar.css';
import useScroll from './useScroll';

function MenuBar() {
  const activePage = useScroll(['home', 'portfolio', 'about-me', 'contact']);

  const menuItems = [
    {name: 'Home', page: 'home'},
    {name: 'Portfolio', page: 'portfolio'},
    {name: 'About Me', page: 'about-me'},
    {name: 'Contact', page: 'contact'}
  ];

  function handleClick(e, page) {
    e.preventDefault();
    const currentAnchor = document.querySelector('.' + page);
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <nav>
      <ul className="menu-effect fadeInUp">
        {menuItems.map(({name, page, index}) => (
          <li key={page} className={`${page === activePage ? 'active' : ''}`} id={index}>
            <a href={`${name}`} title={`menu item ${name}`} onClick={e => {handleClick(e, page);}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuBar;