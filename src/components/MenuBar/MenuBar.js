import React, {useState, useEffect} from 'react';
import './MenuBar.css';

function MenuBar() {
  const [menuItems, setMenuItems] = useState([]);

  function handleClick(e, page) {
    e.preventDefault();
    const currentAnchor = document.querySelector('.' + page);
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    const previousActiveLink = document.querySelectorAll('.active');
    if (previousActiveLink && previousActiveLink[0] && previousActiveLink[0].classList) {
      previousActiveLink[0].classList.remove('active');
    }

    const activeLink = document.querySelector(`#${page}`);
    activeLink.classList.add('active');
  }

  useEffect(() => {
    setMenuItems([
      {key: 1, name: 'Home', page: 'home'},
      {key: 2, name: 'Portfolio', page: 'portfolio'},
      {key: 3, name: 'About Me', page: 'about-me'},
      {key: 4, name: 'Contact', page: 'contact'}
    ]);
  });

  return (
    <ul className="menu-effect animated fadeInUp">
      {menuItems.map(({key, name, page}) => (
        <li key={key} id={page}>
          <a href={`${name}`} onClick={e => {handleClick(e, page)}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuBar;