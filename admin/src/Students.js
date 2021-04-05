import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
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

    this.mentors = [];
    this.students = [];
    this.state = {
      students: []
    };

  }

  componentDidMount() {
    this.getMentors();
    this.getStudents();
  };

  getMentors = async () => {
      let querySnap = await this.mentorsRef.get();
      querySnap.forEach(async qDocSnap => {
          let data = qDocSnap.data();
          let thisMentor = {
              key: qDocSnap.id,
              displayName: data.displayName
          }
          this.mentors.push(thisMentor);
      })
  }

  getMentorByKey = (mentorKey) => {
      for (const mentor of this.mentors) {
          if (mentor.key === mentorKey) {
              return mentor;
          }
      }
  }

  getStudents = async () => {
    let querySnap = await this.studentsRef.get();
    querySnap.forEach(qDocSnap => {
      let studentData = qDocSnap.data();
      studentData.id = qDocSnap.id;
      studentData.mentor = this.getMentorByKey(studentData.mentorKey);
      this.students.push(studentData);
    })
    console.log("Students data", this.students);
    this.setState({students: this.students});
  }

  deleteStudent = async (student) => {
    console.log(student)
    // event.preventDefault();
    //delete from db
    let docRef = await this.studentsRef.doc(student.id)
    await docRef.delete();

    //search and delete from thelist display
    let foundIndex = -1;
    for (let idx in this.students) {
      if (this.students[idx].id === student.id) {
        foundIndex = idx;
        break;
      }
    }
    if (foundIndex !== -1) { // silently fail if item not found
      this.students.splice(foundIndex, 1); // remove one element 
    }
    this.setState({students: this.students});

  }
  
  rendorMentor = (student) => {
    if (student.mentor == undefined) {
      return <h5 className="card-title">Mentor: No Mentor, Click edit to assign a Mentor</h5>
    }
    else {
      return <h5 className="card-title">Mentor: {student.mentor.displayName}</h5>
    }
  }

  render() {
    console.log(this.state);
    return (
     
      <React.Fragment>
        
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Students</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {this.state.students.map(student => (
                <>
                <div
                //key not needed with react.fragment
                  key={student.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">First Name: {student.firstName}</h5>
                    <h5 className="card-title">Last Name: {student.lastName}</h5>
                    <h5 className="card-title">School: {student.school}</h5>
                    <h5 className="card-title">Session: {student.session}</h5>
                    {this.rendorMentor(student)}
                    <button onClick={() => this.deleteStudent(student)} className="btn btn-link">
                      Delete
                    </button>
                      <Link to={"/AddStudents?id=" + student.id}>
                          Edit
                      </Link>
                  </div>
                </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default withRouter(Students);