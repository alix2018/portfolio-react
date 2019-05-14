import React from 'react';
import './App.css';
import HomePage from'./components/HomePage/HomePage';
import MenuBar from'./components/MenuBar/MenuBar';


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HomePage/>
        <MenuBar/>
      </React.Fragment> 
    )
  }
}

export default App;