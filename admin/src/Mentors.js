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


var form = "form1";
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
    this.mentors = [];
    this.students =[];
    this.form = "form1";
    this.student = "";
    this.state = {
      mentors: [],
      data: [],
      students: [],
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

  renderMentorStudentForms = async (mentor, form, student) => {
    let formsRef = Firebase.firestore().collection(form);
    let querySnap = await formsRef.get();
    var info = [];
    querySnap.forEach(async qDocSnap => {
        let data = qDocSnap.data();
        // Ensures correct info is the selected mentors form
        if (data.YourEmail.toLowerCase() == mentor.email.toLowerCase() && data.menteeName.toLowerCase() == student.toLowerCase()) {
        //  if (data.YourEmail.toLowerCase() == mentor.email.toLowerCase()) {
          console.log("the mentor name is ", mentor.displayName);
          console.log("the student", student);
          // most up to date form
          info = data;
          // for filename purposes
          info["menteeName"] = info["menteeName"].replace(/\s+/g, '_');
          // console.log("data!@#!@", data, "form number!", form);
        }
        // let thisMentor = {
        //     id: qDocSnap.id,
        //     displayName: data.displayName,
        //     email: data.email,
        //     password: data.password,

        // }
    })
    console.log(info);
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
  }

  onChangeValue = (event) => {
    console.log(event.target.value);
    form = event.target.value;
    // this.form = event.target.value;
    try {
      this.setState({form: event.target.value});
      form = event.target.value;
    } catch (error) {
      console.log(error);
    }
  }
  handleChange = (event, mentor, form) => {
    event.preventDefault();
    let target = event.target;
    let value = target.value;
    let name = target.name;

    console.log(value);
    console.log(form);

    // console.log(name);

    this.setState(
        {
            [name]: value
        });
  this.renderMentorStudentForms(mentor, form, value);
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
                        <select name="selectedMentor" className={'blue-select'} value={this.state.form} onChange={this.onChangeValue}>
                          <option value="form1">Form 1</option>
                          <option value="form2">Form 2</option>
                          <option value="form3">Form 3</option>
                          <option value="form4">Form 4</option>
                          <option value="form5">Form 5</option>
                          <option value="form6">Form 6</option>
                          <option value="form7">Form 7</option>
                          <option value="form8">Form 8</option>
                        </select>
                      </td>
                      <td className="card-title">
                        <select name="selectedMentor" className={'blue-select'} value={this.state.selectedMentor} onChange={(e) => this.handleChange(e, mentor, form)}>
                          <option value="">Select Student</option>
                          {this.students.filter(student => student.mentorKey == mentor.id).map(student => (
                            <option key={student.key} value={student.key}>{student.firstName + " " + student.lastName}</option>

                          ))}
                        </select>
                      </td>
                    <td>
                      <CsvDownload class={'download-btn'} filename={mentor.displayName + "_" + this.state.data.menteeName + "_" + form + ".csv"}
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


                      {/*<div onChange={this.onChangeValue} >*/}
                      {/*<input type = "radio" value="form1" checked={this.state.form} name="form1"/> Form 1*/}
                      {/*<input type = "radio" value="form2" checked={this.state.form} name="form2"/> Form 2*/}
                      {/*<input type = "radio" value="form3" checked={this.state.form} name="form3"/> Form 3*/}
                      {/*<input type = "radio" value="form4" checked={this.state.form} name="form4"/> Form 4*/}
                      {/*<input type = "radio" value="form5" checked={this.state.form} name="form5"/> Form 5*/}
                      {/*<input type = "radio" value="form6" checked={this.state.form} name="form6"/> Form 6*/}
                      {/*<input type = "radio" value="form7" checked={this.state.form} name="form7"/> Form 7*/}
                      {/*<input type = "radio" value="form8" checked={this.state.form} name="form8"/> Form 8*/}
                      {/*</div>*/}


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


export default withRouter(Mentors);
