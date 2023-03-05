import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';

function App() {
  
  const [theme,setTheme]= useState <string> (`light`);
  const changeTheme =()=> {
    if(theme===`light`)
    {setTheme(`dark`)}
    else
    {setTheme(`light`)}

}
  return (

    <div className={`App ${theme}`}>
      
      
      <button onClick={changeTheme}>{(theme===`dark`)?"🌞" : "🌙"}</button>
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
