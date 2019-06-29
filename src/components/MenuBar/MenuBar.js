import React, {useState, useEffect} from 'react';
import './MenuBar.css';

function MenuBar() {
  const [activePage, setActivePage] = useState('');

  const menuItems = [
    {name: 'Home', page: 'home'},
    {name: 'Portfolio', page: 'portfolio'},
    {name: 'About Me', page: 'about-me'},
    {name: 'Contact', page: 'contact'}
  ];
  
  function handleClick(e, page) {
    e.preventDefault();
    setActivePage(page);
  }

  useEffect(() => {
    if (activePage.length !== 0) {
      const currentAnchor = document.querySelector('.' + activePage);
      currentAnchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activePage]);

  return (
    <ul className="menu-effect animated fadeInUp">
      {menuItems.map(({name, page}) => (
        <li key={page} className={`${page === activePage ? "active" : ""}`} id={page}>
          <a href={`${name}`} onClick={e => {handleClick(e, page)}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuBar;