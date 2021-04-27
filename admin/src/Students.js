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
import './style/main.css'

import { Table  } from 'react-bootstrap';

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
    // this.formsRef = Firebase.firestore().collection("formInfo");
    // this.forms = [];
    this.mentors = [];
    this.students = [];
    this.state = {
      students: [],
      // forms: []
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
  //getForms = async () => {
    //   let querySnap = await this.formsRef.get();
    //   querySnap.forEach(async qDocSnap => {
    //     let data = qDocSnap.data();
    //     // console.log("this is data form, ",data);
    //     for (let i = 0; i < data.names.length; i++) {
    //       this.forms.push(data.names[i]);
    //     }
    //   })
    //   this.setState({forms: this.forms});
    // }
  // absent checker logic for more than 2 absenses
  // absentCheck = async () => {
  //   this.getForms();
  //   let formsRef = Firebase.firestore().collection(formz);
  //   let querySnap = await formsRef.get();
  //   if (1==1) {
  //     return <td className="card-title" style={{color: "green"}}>NO</td>
  //   }
  //   else {
  //     return <td className="card-title" style={{color: "red"}}>YES</td>
  //   }
  // }

  render() {
    console.log(this.state);
    return (

      <React.Fragment>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className={'page-title marginL0'}>Students</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Table className={'simple-table'}>
                <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>School</th>
                  <th>Session</th>
                  {/* <th>Absence</th> */}
                  <th>Mentor</th>
                  <th> </th>
                </tr>
                </thead>
                <tbody>
                {this.state.students.map(student => (
                  <tr
                    //key not needed with react.fragment
                    key={student.id}
                    className="card float-left"
                    style={{ width: "18rem", marginRight: "1rem" }}
                  >
                    {/*<div className="card-body">*/}
                      <td className="card-title"> {student.firstName}</td>
                      <td className="card-title">{student.lastName}</td>
                      <td className="card-title">{student.school}</td>
                      <td className="card-title"> {student.session}</td>
                      {/* <td className="card-title">{this.absentCheck()}</td> */}
                      <td>{this.rendorMentor(student)}</td>
                      <td className={'center-align'}>
                        <div>
                          <button onClick={() => this.deleteStudent(student)} className="btn btn-link">
                            Delete
                          </button>
                        </div>
                        <div>
                          <Link to={"/AddStudents?id=" + student.id}>
                            Edit
                          </Link>
                        </div>

                      </td>
                    {/*</div>*/}
                  </tr>

                ))}

                </tbody>
              </Table>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default withRouter(Students);
