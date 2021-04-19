import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Table  } from 'react-bootstrap';

export class AddMentors extends React.Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config.firebase);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    } else {
      Firebase.app(); // if already initialized, use that one
    }
    this.mentorRef = Firebase.firestore().collection('mentors');
    this.mentors = [];
    this.state = {
      displayName: "",
      email: "",
      password: ""
    };

  };

  componentDidMount() {
    this.getUserData();

    let params = new URLSearchParams(window.location.search); // TODO: FIND A BETTER WAY TO DO THIS
    let mentorKey = params.get("id");
    if (mentorKey) {
      this.getMentorByKey(mentorKey);
    }
  }

  writeMentorData = async (mentorKey, displayName, email, password) => {

    if (mentorKey) {
      this.mentorRef.doc(mentorKey).set({
        displayName: displayName,
        email: email,
        password: password
      })
    } else
    {
      let newMentor = {
        displayName: displayName,
        email: email,
        password: password
      };
      let newMentorDocRef = await this.mentorRef.add(newMentor);
      newMentor.key = newMentorDocRef.id;
      return newMentor
    }
  };

  getUserData = async () => {
    // let ref = this.usersRef.get();
    let querySnap = await this.mentorRef.get();
    querySnap.forEach(qDocSnap => {
      let key = qDocSnap.id;
      let data = qDocSnap.data();
      data.key = key;
      this.mentors.push(data);
      //this.setState({developers: data});
    });
    console.log("getuser data", this.mentors);
  };

  handleSubmit = event => {
    event.preventDefault();
    let mentorKey = this.state.mentorKey;
    let displayName = this.state.displayName;
    let email = this.state.email;
    let password = this.state.password;


    this.writeMentorData(mentorKey, displayName, email, password);
    console.log("submitted", mentorKey, displayName, email, password);

    this.setState({
      displayName: "",
      email: "",
      password: "",
      mentorKey: ""
    });
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

  getMentorByKey = async (mentorKey) => {
    let querySnap = await this.mentorRef.get();
    querySnap.forEach(qDocSnap => {
          let mentorData = qDocSnap.data();
          if (qDocSnap.id === mentorKey) {

            this.setState(
                {
                  displayName: mentorData.displayName,
                  email: mentorData.email,
                  password: mentorData.password,
                  mentorKey: mentorKey

                }
            )
          }
        }
    )
  }


  render() {
    const { developers } = this.state;
    console.log("hello render", developers);
    
    return (

      <React.Fragment>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="page-title">{this.state.mentorKey ? "Edit" : "Add New" } Mentor Here</h1>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-12">
            {
              this.mentors.length ? <Table className={'simple-table'}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.mentors.map(mentor => (
                  mentor.displayName ? <tr
                    key={mentor.displayName}
                    className="card float-left"
                    style={{ width: "18rem", marginRight: "1rem" }}
                  >
                    <td className="card-title"> {mentor.displayName}</td>
                    <td className="card-title">{mentor.email}</td>
                  </tr> : null
                ))}
              </tbody>
            </Table>:null
            }
            </div>
          </div> */}
          
          <div className="row">
            <div className="col-xl-12">
              <div className='save-btn'>
                <span onClick={this.handleSubmit}>
                  SAVE
                </span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>
                      <span className='require'>* </span>
                      Name</label>
                    <input
                      name="displayName"
                      type="text"
                      value={this.state.displayName}
                      ref={this.state.displayName}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label><span className='require'>* </span>Email</label>
                    <input
                      name="email"
                      type="text"
                      value={this.state.email}
                      ref={this.state.email}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label><span className='require'>* </span>Password</label>
                    <input
                      name="password"
                      type="text"
                      value={this.state.password}
                      ref={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Password"
                    />
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


//export default App;