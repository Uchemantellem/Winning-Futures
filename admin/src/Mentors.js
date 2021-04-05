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

    this.mentors = [];
    this.state = {
      mentors: []
    };

  }

  componentDidMount() {
    this.getMentors();
  };

  getMentors = async () => {
      let querySnap = await this.mentorsRef.get();
      querySnap.forEach(async qDocSnap => {
          let data = qDocSnap.data();
          let thisMentor = {
              id: qDocSnap.id,
              displayName: data.displayName,
              email: data.email,
              password: data.password
          }
          this.mentors.push(thisMentor);
      })
      console.log("Mentors data", this.mentors);
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

  render() {
    console.log(this.state);
    return (
     
      <React.Fragment>
        
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Mentors</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {this.state.mentors.map(mentor => (
                <>
                <div
                //key not needed with react.fragment
                  key={mentor.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Name: {mentor.displayName}</h5>
                    <h5 className="card-title">Email: {mentor.email}</h5>
                    <h5 className="card-title">Password: {mentor.password}</h5>
                    {/* <h5 className="card-title">StudentCount: {mentor.session}</h5> */}
                    <button onClick={() => this.deleteMentor(mentor)} className="btn btn-link">
                      Delete
                    </button>
                      <Link to={"/AddMentors?id=" + mentor.id}>
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


export default withRouter(Mentors);