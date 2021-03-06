import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";


export class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config.firebase);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    } else {
      Firebase.app(); // if already initialized, use that one
    }
    this.studentsRef = Firebase.firestore().collection('students');
    this.mentorsRef = Firebase.firestore().collection('mentors');
    this.mentors = [];
    this.state = {
      firstName: "",
      lastName: "",
      school: "",
      session: "",
      selectedMentor: "",
      studentKey: ""
    }
      ;

    console.log(this.state);
  };

  componentDidMount() {
    this.getMentors();

    let params = new URLSearchParams(window.location.search); // TODO: FIND A BETTER WAY TO DO THIS
    let studentKey = params.get("id");
    if (studentKey) {
      this.getStudentByKey(studentKey);
    }
  }


  writeStudentData = async (studentKey, firstName, lastName, school, session, mentorKey) => {

    if (studentKey) {
      this.studentsRef.doc(studentKey).set({
        firstName: firstName,
        lastName: lastName,
        school: school,
        session: session,
        mentorKey: mentorKey
      })
    } else {

      let newStudent = {
        firstName: firstName,
        lastName: lastName,
        school: school,
        session: session,
        mentorKey: mentorKey
      };
      let newStudentDocRef = await this.studentsRef.add(newStudent);
      newStudent.key = newStudentDocRef.id;
      return newStudent;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    let studentKey = this.state.studentKey;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let school = this.state.school;
    let session = this.state.session;
    let selectedMentor = this.state.selectedMentor;

    this.writeStudentData(studentKey, firstName, lastName, school, session, selectedMentor);
    console.log("Submitted", studentKey, firstName, lastName, school, session, selectedMentor);

    this.setState({
      firstName: "",
      lastName: "",
      school: "",
      session: "",
      selectedMentor: "",
      studentKey: ""
    })
  };

  handleChange = event => {
    event.preventDefault();
    let target = event.target;
    let value = target.value;
    let name = target.name;

    console.log(value);
    console.log(name);

    this.setState(
      {
        [name]: value
      });
  };

  getMentors = async () => {
    let querySnap = await this.mentorsRef.get();
    querySnap.forEach(qDocSnap => {
      let key = qDocSnap.id;
      let data = qDocSnap.data();
      data.key = key;
      this.mentors.push(data);
    })
  };

  getMentorByKey = (mentorKey) => {
    for (const mentor of this.mentors) {
      if (mentor.key === mentorKey) {
        return mentor;
      }
    }
  }

  getStudentByKey = async (studentKey) => {
    let querySnap = await this.studentsRef.get();
    querySnap.forEach(qDocSnap => {
      let studentData = qDocSnap.data();
      if (qDocSnap.id === studentKey) {
        studentData.mentor = this.getMentorByKey(studentData.mentorKey);
        console.log(studentData);

        this.setState(
          {
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            school: studentData.school,
            session: studentData.session,
            selectedMentor: studentData.mentor == undefined ? "" : studentData.mentor.key,
            studentKey: studentKey
          }
        )
      }
    }
    )
  }


  render() {
    console.log("hello render", this.state);
    console.log(this.mentors);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="page-title">{this.state.studentKey ? "Edit" : "Add New"} Student Here</h1>
              {/* <button className="btn btn-primary" onClick={this.handleSubmit}>
                Save
              </button> */}
              <div className='save-btn'>
                <span onClick={this.handleSubmit}>
                  SAVE
                </span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label><span className='require'>* </span>First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      value={this.state.firstName}
                      ref={this.state.firstName}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label><span className='require'>* </span>Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      value={this.state.lastName}
                      ref={this.state.lastName}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label><span className='require'>* </span>School</label>
                    <input
                      name="school"
                      type="text"
                      value={this.state.school}
                      ref={this.state.school}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="School"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label><span className='require'>* </span>Session</label>
                    <input
                      name="session"
                      type="text"
                      value={this.state.session}
                      ref={this.state.session}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Session"
                    />
                  </div>
                  <div className="foobar form-group col-md-6">
                    <select name="selectedMentor" className={'blue-select'} value={this.state.selectedMentor} onChange={this.handleChange}>
                      <option value="">No Mentor</option>
                      {this.mentors.map(mentor => (
                        mentor.displayName && <option key={mentor.key} value={mentor.key}>{mentor.displayName}</option>
                      ))}
                    </select>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(AddStudent);