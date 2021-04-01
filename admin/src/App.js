import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Forms} from './Forms';
import Home from './Home';
import {AddMentors} from './AddMentors';
import {Mentors} from './Mentors';
import {Students} from './Students';
import {Sessions} from './Sessions';
import {AddStudent} from "./AddStudent";
import AdminLogin from "./AdminLogin";

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

  componentDidMount() {
      this.authListener();
  }

  render() {

    return (
      <div>
        {this.state.user ? (

    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">AdminLogin</Link>
            </li> */}
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/AddMentors">Add Mentors</Link>
            </li>
            <li>
            <Link to="/AddStudents">Add Students</Link>
              
            </li>
            <li>
            <Link to="/Mentors">Mentors</Link>
            </li>
            <li>
            <Link to="/Students">Students</Link>
            </li>
              <li>
              <Link to="/Forms">Forms</Link>
              </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    </Router>
    ) : (<AdminLogin/>)}
    </div>
    );
  }
}


export default App;
