import React from "react";
import Firebase from "firebase";
import config from "./config";
import CsvDownload from 'react-json-to-csv';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Table } from 'react-bootstrap';
import './style/main.css';
import Download from './img/download.png';

export class Mentors extends React.Component {
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
    this.formsRef = Firebase.firestore().collection("formInfo");
    this.forms = [];
    this.mentors = [];
    this.students =[];
    this.student = "";
    this.selectedform = '';
    this.state = {
      mentors: [],
      data: [],
      students: [],
      forms: [],
      form: '',
    };

  }

  componentDidMount() {
    this.getMentors();
    this.getStudents();
    this.getForms();
  };

  getForms = async () => {
    let querySnap = await this.formsRef.get();
    querySnap.forEach(async qDocSnap => {
      let data = qDocSnap.data();
      // console.log("this is data form, ",data);
      for (let i = 0; i < data.names.length; i++) {
        this.forms.push(data.names[i]);
      }
    })
    this.setState({forms: this.forms});
  }

  getMentors = async () => {
      let querySnap = await this.mentorsRef.get();
      querySnap.forEach(async qDocSnap => {
          let data = qDocSnap.data();
          let thisMentor = {
              id: qDocSnap.id,
              displayName: data.displayName,
              email: data.email,
              password: data.password,

          }
          this.mentors.push(thisMentor);
      })
      // console.log("Mentors data", this.mentors);
      this.setState({mentors: this.mentors});
  }

  getMentorByKey = (mentorKey) => {
      for (const mentor of this.mentors) {
          if (mentor.key === mentorKey) {
              return mentor;
          }
      }
  }

  deleteMentor = async (mentor) => {
    // need to delete all students under mentor too!
    console.log(mentor)
    // event.preventDefault();
    //delete from db
    let docRef = await this.mentorsRef.doc(mentor.id)
    await docRef.delete();

    //search and delete from thelist display
    let foundIndex = -1;
    for (let idx in this.mentors) {
      if (this.mentors[idx].id === mentor.id) {
        foundIndex = idx;
        break;
      }
    }
    if (foundIndex !== -1) { // silently fail if item not found
      this.mentors.splice(foundIndex, 1); // remove one element
    }
    this.setState({mentors: this.mentors});

  }



  onChangeValue = (event) => {
    this.selectedform = event.target.value;
    console.log(this.selectedform);
    this.setState({form: this.selectedform});

  }
  handleChange = async (event, mentor, formz) => {
    event.preventDefault();
    let target = event.target;
    let value = target.value;
    let name = target.name;

    // console.log(name);

    this.setState(
        {
            [name]: value
        });
    let formsRef = Firebase.firestore().collection(formz);
    let querySnap = await formsRef.get();
    var info = [];
    querySnap.forEach(async qDocSnap => {
        let data = qDocSnap.data();
        // if (Object.keys(data).length != 0) {
          // Ensures correct info is the selected mentors form
          if (data.YourEmail.toLowerCase() == mentor.email.toLowerCase() && data.MenteeName.toLowerCase() == value.toLowerCase()) {
          //  if (data.YourEmail.toLowerCase() == mentor.email.toLowerCase()) {
            console.log("the mentor name is ", mentor.displayName);
            console.log("the student", value);
            // most up to date form
            info = data;
            // for filename purposes
            info["MenteeName"] = info["MenteeName"].replace(/\s+/g, '_');
            // console.log("data!@#!@", data, "form number!", form);
          }
          // let thisMentor = {
          //     id: qDocSnap.id,
          //     displayName: data.displayName,
          //     email: data.email,
          //     password: data.password,

        // }
          // }
    });
    console.log("Exported Info", info);
    // let results = {}
    // for (let d in info) {
    //  console.log(info[d]);
    // console.log(d);
    // if (typeof info[d]["videoCall"] !== "undefined") {
    //   results["videoCall"] = info[d]["videoCall"];
    //   console.log("he");
    // }
    // else if (typeof info[d]["other"] !== "undefined") {
    //   results["other"] = info[d]["other"];
    //   console.log("he");
    // }
    // else if (typeof info[d]["email"] !== "undefined") {
    //   results["email"] = info[d]["email"];
    //   console.log("he");
    // }
    // else if (typeof info[d]["phoneCall"] !== "undefined") {
    //   results["phoneCall"] = info[d]["phoneCall"];
    //   console.log("he");
    // }
    // else if (typeof info[d]["textMessagingSystem"] !== "undefined") {
    //   results["textMessagingSystem"] = info[d]["textMessagingSystem"];
    //   console.log("he");
    // }
    // else{
      // results[d] = info[d]
    // }
    //  results["videoCall"] = typeof info[d]["videoCall"] !== "undefined" ? info[d]["videoCall"] : info[d];
    //  results["videoCall"] = typeof info[d]["videoCall"] !== "undefined" ? info[d]["videoCall"] : info[d];
    // }
    this.setState({data: info});
};

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
  // console.log("Students data", this.students);
  this.setState({students: this.students});
}


  render() {
    // console.log(this.state);
    return (

      <React.Fragment>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className={'page-title marginL0'}>Mentors</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Table className={'simple-table'} >
                <thead>
                <tr>
                  <th></th>
                  <th>Forms</th>
                  <th>Students</th>
                  <th></th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {this.state.mentors.map(mentor => (

                  <tr
                    //key not needed with react.fragment
                    key={mentor.uid}
                    className="card float-left"
                    style={{ width: "18rem", marginRight: "1rem" }}
                  >
                    {/*<div className="card-body">*/}
                      <td className="card-title">
                        <div><b>Name: {mentor.displayName}</b></div>
                        <div>Email: {mentor.email}</div>
                        <div>Password: {mentor.password}</div>
                        </td>
                      <td className="card-title">
                        <select name="selectedForm" className={'blue-select'} value={this.state.form} onChange={this.onChangeValue}>
                          {this.state.forms.map(form => (
                            <option value={form}>{form}</option>
                          ))}
                        </select>
                      </td>
                      <td className="card-title">
                        <select name="selectedStudent" className={'blue-select'} onChange={(e) => this.handleChange(e, mentor, this.state.form)}>
                          <option value="">Select Student</option>
                          {this.students.filter(student => student.mentorKey == mentor.id).map(student => (
                            <option key={student.key} value={student.key}>{student.firstName + " " + student.lastName}</option>

                          ))}
                        </select>
                      </td>
                    <td>
                      <CsvDownload class={'download-btn'} filename={mentor.displayName + "_" + this.state.data.MenteeName + "_" + this.state.form + ".csv"}
                        data={Object.entries(this.state.data)}><img src={Download}  /></CsvDownload>

                    </td>
                      {/* <h5 className="card-title">StudentCount: {mentor.session}</h5> */}
                    <td className={'center-align'}>
                      <div>
                        <button onClick={() => this.deleteMentor(mentor)} className="btn btn-link">
                          Delete
                        </button>
                      </div>
                      <div>
                        <Link to={"/AddMentors?id=" + mentor.id}>
                          Edit
                        </Link>
                      </div>
                    </td>

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


export default withRouter(Mentors);
