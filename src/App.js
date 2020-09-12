import React from 'react';
// import logo from './logo.svg';
import {Navbar, NavbarBrand} from "react-bootstrap";
import Menu from "./components/MenuComponent";
import './App.css';

function App() {
  return (
    <div>
      <Navbar className={"bg-danger navbar-dark"}>
        <div className="container">
          <NavbarBrand href={"/"}>
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>

      <Menu />

    </div>
  );
}

export default App;
