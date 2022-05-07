import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import NavBar from './components/NavBar';
//import carrito from './image/icono_carrito.jpg';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';


function App() {
  return (
    <div className="App">
      <NavBar><CartWidget></CartWidget></NavBar>
      <h1>Tienda Online</h1>
      <ItemListContainer greeting="Lista de articulos"></ItemListContainer>
    </div>
  );
}

export default App;
