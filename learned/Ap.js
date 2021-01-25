import React,{useState} from 'react';
import './App.css';
import Main from './components/Main'
import List from './learning/List';
import Add ,{Sub,Div,Mul} from './learning/Cal';
import { FiChevronRight } from "react-icons/fi";
import './index.css';

function App(){
  return(
    <NavBar>
      <NavItem icon="😸">
        <DropdownMenu >
          <DropdownItem name="my profile1">
          </DropdownItem>
          <DropdownItem name="my profile2"></DropdownItem>
          <DropdownItem name="my profile3"></DropdownItem>
        </DropdownMenu>
      </NavItem>
      <NavItem icon="🚯"/>
      <NavItem icon="🌔"/>
      <NavItem icon="🤑"/>
    </NavBar>
  );
}

  function DropdownMenu(props){
    return(
      <div className="dropdown">
        {props.children}
      </div>
    )
  }

  function DropdownItem(props)
  {
    const[open,setOpen] = useState(false);
    return(
      <>
        <a href="#" className="menu-item" onClick={() => setOpen(!open)}>
          {props.name}
          <span className="icon-right" >
          <FiChevronRight/>
          </span>
        </a>
        {open && props.children}
        </>
    );
  }

  function NavBar(props){
    return(
      <nav className="navbar" >
        <ul className="navbar-nav" >
          {props.children}
        </ul>
      </nav>
    );
  }

  function NavItem(props)
  {
    const[open,setOpen] = useState(false);

    return(
      <li className="nav-item">
        <a href="#" className="icon-button" onMouseEnter={() => setOpen(!open)} >
          {props.icon}
        </a>
        {open && props.children}
      </li>
    )
  }

export default App;