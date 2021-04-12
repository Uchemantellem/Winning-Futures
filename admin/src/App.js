import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {Forms} from './Forms';
import Home from './Home';
import {AddMentors} from './AddMentors';
import {Mentors} from './Mentors';
import {Students} from './Students';
import {Sessions} from './Sessions';
import {AddStudent} from "./AddStudent";
import AdminLogin from "./AdminLogin";
import './style/main.css';
import Icon from './img/icon.png';
import Logout from './img/logout.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    //test to see if needed
    // Firebase.initializeApp(config.firebase);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    }else {
      Firebase.app(); // if already initialized, use that one
    }
    this.state = {
      user: {}
    }
  }

  //checks state of user whether logged in or not
  authListener() {
    Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({user});
        }
        else {
            this.setState({user:null});
        }
    });
  }
  onLogout() {
    Firebase.auth().signOut();
  }
  componentDidMount() {
      this.authListener();
  }

  render() {

    return (
      <div style={{height:'100%'}}>
        {this.state.user ? (

    <Router>
      <div className={'main-page'}>
        <div className={'left'}>
          <div className={'box'}>
            <img src={Icon}  />Admin
            {/*<div className={'box-left'}></div>*/}
            {/*<div className={'box-right'}></div>*/}
          </div>
          <nav>
            <ul>
              {/* <li>
              <NavLink to="/">AdminLogin</NavLink>
            </li> */}
              {/* <li>
                <NavLink to="/Home" activeClassName={'activeClass'} >Home</NavLink>
              </li> */}
              <li>
                <NavLink to="/AddMentors" activeClassName={'activeClass'}>
                  <i className="material-icons">group_add</i>Add Mentors</NavLink>
              </li>
              <li>
                <NavLink to="/AddStudents" activeClassName={'activeClass'}><i className="material-icons">person_add</i>Add Students</NavLink>

              </li>
              <li>
                <NavLink to="/Mentors" activeClassName={'activeClass'}>
                  <i className="material-icons">group</i>Mentors</NavLink>
              </li>
              <li>
                <NavLink to="/Students" activeClassName={'activeClass'}>
                  <i className="material-icons">person</i>Students</NavLink>
              </li>
              <li>
                <NavLink to="/Forms" activeClassName={'activeClass'}><i className="material-icons">view_module</i>Forms</NavLink>
              </li>
            </ul>
          </nav>
          <div className={'nav-bottom'}>
            <div className={'box'} onClick={this.onLogout}>
              <img src={Logout} />logout
              {/*<div className={'box-left'}></div>*/}
              {/*<div className={'box-right'}></div>*/}
            </div>
          </div>
        </div>
        <div className={'right'}>
          <Switch>
            <Route path="/AddStudents">
              <AddStudent />
            </Route>
            <Route path="/Forms">
              <Forms />
            </Route>
            <Route path ="/Home">
              <Home/>
            </Route>
            <Route path ="/AddMentors">
              <AddMentors/>
            </Route>
            <Route path ="/Mentors">
              <Mentors/>
            </Route>
            <Route path ="/Students">
              <Students/>
            </Route>
            <Route path ="/Sessions">
              <Sessions/>
            </Route>
            {/* <Route path="/AdminLogin">
              <AdminLogin/>
            </Route> */}
          </Switch>
        </div>
      </div>


    </Router>
    ) : (<AdminLogin/>)}
    </div>
    );
  }
}


export default App;
