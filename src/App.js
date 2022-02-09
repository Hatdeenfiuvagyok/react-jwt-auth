import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import Megjegyzesek from "./sajatOsztalyok/Megjegyzesek";

import Gyakorlatok from "./Gyakorlatok/Gyakorlatok";
import Mell from "./sajatOsztalyok/Mell";
import Bicepsz from "./sajatOsztalyok/Bicepsz";
import Tricepsz from "./sajatOsztalyok/Tricepsz";
import Vall from "./sajatOsztalyok/Vall";
import Hat from "./sajatOsztalyok/Hat";
import HasTorzs from "./sajatOsztalyok/HasTorzs";
import Vadli from "./sajatOsztalyok/Vadli";
import CombFar from "./sajatOsztalyok/CombFar";
import Alkar from "./sajatOsztalyok/Alkar";


import BevitelTorol from "./AdminFolder/BevitelTorol";
import MegjegyzesTorol from "./AdminFolder/MegjegyzesTorol";
import AdatokTorlese from "./AdminFolder/AdatokTorlese";



import AdatokFelvitele from "./AdatokFelvitele/AdatokFelvitele";
import PickerMenu from "./AdatokFelvitele/PickerMenu";
import FileUpload from "./AdatokFelvitele/FileUpload";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>






    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Dice Roller
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="Megjegyzesek">Megjegyzések</Nav.Link>
          <Nav.Link href="Gyakorlatok">Gyakorlatok</Nav.Link>
          {showAdminBoard && (
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/AdatokTorlese">Adatok törlése</NavDropdown.Item>
            <NavDropdown.Item href="/AdatokFelvitele">
              Adatok felvitel
            </NavDropdown.Item>
            <NavDropdown.Item href="/AdatModositas">
              Adatok módosítása
            </NavDropdown.Item>
            
            <NavDropdown.Divider />
          </NavDropdown>
          )}
        </Nav>
        <Nav>


        {currentUser ? (
          <Nav className="mr-auto">
          <Nav.Link href="/profile">
            {currentUser.username}
            </Nav.Link>
            <Nav.Link href="/login" onClick={this.logOut}>
            Kijelentkezés
            </Nav.Link>
            </Nav>
          ) : (
            
            <Nav className="mr-auto">
            <Nav.Link href="/login">
            Bejelentkezés
              </Nav.Link>
              <Nav.Link href="/register">
              Regisztráció
              </Nav.Link>
              </Nav>
          )}


        </Nav>
      </Navbar.Collapse>
    </Navbar>







{/*
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li> 
            <li className="nav-item">
              <Link to={"/Megjegyzesek"} className="nav-link">
                Megjegyzések
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Gyakorlatok"} className="nav-link">
                Gyakorlatok
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Lap
                </Link>
              </li>,
               <li className="nav-item">
               <Link to={"/Sidebar"} className="nav-link">
                  Adatok Törlése
               </Link>
             </li>
            )}

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Kijelentkezés
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Bejelentkezés
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Regisztráció
                </Link>
              </li>
            </div>
          )}
          </nav>*/}
          
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

            <Route path="/Megjegyzesek" component={Megjegyzesek}/>

            <Route path="/Gyakorlatok" component={Gyakorlatok}/>

            <Route path="/Mell" component={Mell}/>
            <Route path="/Bicepsz" component={Bicepsz}/>
            <Route path="/Tricepsz" component={Tricepsz}/>
            <Route path="/Vall" component={Vall}/>
            <Route path="/Hat" component={Hat}/>
            <Route path="/HasTorzs" component={HasTorzs}/>
            <Route path="/Vadli" component={Vadli}/>
            <Route path="/CombFar" component={CombFar}/>
            <Route path="/Alkar" component={Alkar}/>


            <Route path="/AdatokTorlese" component={AdatokTorlese}/>
            <Route path="/BevitelTorol" component={BevitelTorol}/>
            <Route path="/MegjegyzesTorol" component={MegjegyzesTorol}/>


            <Route path="/AdatokFelvitele" component={AdatokFelvitele}/>
            <Route path="/PickerMenu" component={PickerMenu}/>
            <Route path="FileUpload" component={FileUpload}/>

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
