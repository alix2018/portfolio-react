import React from 'react';
import './MenuBar.css';

class MenuBar extends React.Component {
  render() {
    return (
      <ul className="menu-effect">
        <li className="current"><a href="#">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About me</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    )
  }
}

export default MenuBar;