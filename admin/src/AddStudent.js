import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        // Firebase.initializeApp(config.firebase);
        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
        }else {
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
            selectedMentor: ""
        }
        ;

        console.log(this.state);
    };

    componentDidMount() {
        this.getMentorsData();
    }

    writeStudentData = async (firstName, lastName, school, session, mentorKey) => {
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
    };

    handleSubmit = event => {
        event.preventDefault();
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let school = this.state.school;
        let session = this.state.session;
        let selectedMentor = this.state.selectedMentor;

        this.writeStudentData(firstName, lastName, school, session, selectedMentor);
        console.log("Submitted", firstName, lastName, school, session, selectedMentor);

        this.setState({
            firstName: "",
            lastName: "",
            school: "",
            session: "",
            selectedMentor: ""
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

    getMentorsData = async () => {
        let querySnap = await this.mentorsRef.get();
        querySnap.forEach(qDocSnap => {
            let key = qDocSnap.id;
            let data = qDocSnap.data();
            data.key = key;
            this.mentors.push(data);
        })
        console.log("Mentors data", this.mentors);
        this.setState({mentors: this.mentors})
    };

    render() {
        console.log("hello render", this.state);
        console.log(this.mentors);
        return (
        <React.Fragment>
            <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <h1>Add New Student Here</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>First Name</label>
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
                                <label>Last Name</label>
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
                                <label>School</label>
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
                                <label>Session</label>
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
                            <div className="foobar">
                                <select name="selectedMentor" value={this.state.selectedMentor} onChange={this.handleChange}>
                                    <option value="">No Mentor</option>
                                    {this.mentors.map(mentor => (
                                        <option key={mentor.key} value={mentor.key}>{mentor.displayName}</option>

                                    ))}
                                </select>
                            </div>
                            </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            </div>
    </React.Fragment>
        );
    }
}


//export default App;