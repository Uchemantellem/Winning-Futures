import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export class Students extends React.Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config.firebase);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
   }else {
      Firebase.app(); // if already initialized, use that one
   }
    this.mentorsRef = Firebase.firestore().collection('mentors');
    this.studentsRef = Firebase.firestore().collection('students');

    // TODO: Find a better way to handle this w/ the getStudents function
    this.students = [];
    this.state = {
      students: []
    };

  }

  componentDidMount() {
    this.getStudents();
  };

  getMentorByKey = async (mentorKey) => {
    let mentorRef = await this.mentorsRef.doc(mentorKey);

    if (!mentorRef.exists) {
      console.log("No such mentor!");
      return {}
    } else {
      console.log("Found a mentor");
      let mentor = mentorRef.data();
      return mentor;
    };
  }

  getStudents = async () => {
    let querySnap = await this.studentsRef.get();
    querySnap.forEach(qDocSnap => {
      let data = qDocSnap.data();
      data.mentor = this.getMentorByKey(data.mentorKey); // TODO: Get this working
      this.students.push(data);
      console.log(data);
    })
    console.log("Students data", this.students);
    this.setState({students: this.students});
  }

  render() {

    console.log(this.state);
    console.log(this.students);


    return (
     
      <React.Fragment>
        
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Add a Student</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {this.students.map(developer => (
                <>
                <div
                //key not needed with react.fragment
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">First Name: {developer.firstName}</h5>
                    <h5 className="card-title">Last Name: {developer.lastName}</h5>
                    <h5 className="card-title">School: {developer.school}</h5>
                    <h5 className="card-title">Session: {developer.session}</h5>
                    <h5 className="card-title">Mentor Key: {developer.mentorKey}</h5>
                    {/*<p className="card-text">Mentor: {developer.mentor}</p>*/}
                    <button
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                </>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Add new team member here</h1>
              <form>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>School</label>
                    <input
                      type="text"
                      ref="school"
                      className="form-control"
                      placeholder="Session"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Session</label>
                    <input
                      type="text"
                      ref="session"
                      className="form-control"
                      placeholder="Session"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Mentor</label>
                    <input
                      type="text"
                      ref="mentor"
                      className="form-control"
                      placeholder="Mentor"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h3>
                Tutorial{" "}
                <a href="https://sebhastian.com/react-firebase-real-time-database-guide">
                  here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


//export default App;
