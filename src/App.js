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

import Gyakorlatok from "./SidebarGyakorlatok/Gyakorlatok";

import Mell from "./sajatOsztalyok/Mell";
import Bicepsz from "./sajatOsztalyok/Bicepsz";
import Tricepsz from "./sajatOsztalyok/Tricepsz";
import Vall from "./sajatOsztalyok/Vall";
import Hat from "./sajatOsztalyok/Hat";
import HasTorzs from "./sajatOsztalyok/HasTorzs";
import Vadli from "./sajatOsztalyok/Vadli";
import CombFar from "./sajatOsztalyok/CombFar";
import Alkar from "./sajatOsztalyok/Alkar";

import BevitelTorol from "./SidebarTorles/BevitelTorol";
import MegjegyzesTorol from "./SidebarTorles/MegjegyzesTorol";

import Sidebar from "./SidebarTorles/Sidebar";

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
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>





        </Nav>
      </Navbar.Collapse>
    </Navbar>










{/*Régi navbar */}
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
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
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
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
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

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


            <Route path="/Sidebar" component={Sidebar}/>
            <Route path="/BevitelTorol" component={BevitelTorol}/>
            <Route path="/MegjegyzesTorol" component={MegjegyzesTorol}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
