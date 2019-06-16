import React, {useState, useEffect} from 'react';
import './MenuBar.css';

function MenuBar() {
  const [menuItems, setMenuItems] = useState([]);

  function handleClick(e, className) {
    e.preventDefault();
    const currentAnchor = document.querySelector(className);
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  useEffect(() => {
    setMenuItems([
      {id: 1, name: 'Home', className: '.home'},
      {id: 2, name: 'Portfolio', className: '.portfolio'},
      {id: 3, name: 'About Me', className: '.about-me'},
      {id: 4, name: 'Contact', className: '.contact'}
    ]);
  });

  return (
    <ul className="menu-effect animated fadeInUp">
      {menuItems.map(({id, name, className}) => (
        <li key={id}>
          <a key={id} href={`${name}`} onClick={e => {handleClick(e, className)}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuBar;