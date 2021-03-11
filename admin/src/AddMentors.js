import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export class AddMentors extends React.Component {
    constructor(props) {
        super(props);
        // Firebase.initializeApp(config.firebase);
        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
        }else {
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
    }

    writeMentorData = async (displayName, email, password) => {
        let newMentor = {
            displayName: displayName,
            email: email,
            password: password
        };
        let newMentorDocRef = await this.mentorRef.add(newMentor);
        //newMentor.key = newMentorDocRef.id;
        return newMentor
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
        let displayName = this.state.displayName;
        let email = this.state.email;
        let password = this.state.password;


        this.writeMentorData(displayName, email, password);
        console.log("submitted", displayName, email, password);

        this.setState({
            displayName: "",
            email: "",
            password: ""
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


    render() {
        const { developers } = this.state;
        console.log("hello render", developers);
        return (

            <React.Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1>Create a mentor</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            {this.mentors.map(mentor => (
                                <>
                                    <div
                                        //key not needed with react.fragment
                                        key={mentor.displayName}
                                        className="card float-left"
                                        style={{ width: "18rem", marginRight: "1rem" }}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title" >Name: {mentor.displayName}</h5>
                                            <h5 className="card-title">Email: {mentor.email}</h5>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <h1>Add new mentor here</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Name</label>
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
                                        <label>Email</label>
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
                                        <label>Password</label>
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