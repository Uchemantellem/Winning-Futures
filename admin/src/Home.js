import React from 'react';
import Firebase from "firebase";
import config from "./config";
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';

import 'react-form-builder2/dist/app.css';

// Firebase.initializeApp(config.firebase);
if (!Firebase.apps.length) {
    Firebase.initializeApp(config);
    }else {
    Firebase.app(); // if already initialized, use that one
}

const Home = () => {
    function Logout() {
        Firebase.auth().signOut();
    }
    return (
        <div>
            <h1> The Home PAge</h1>
            <button type="submit" onClick={Logout} className="btn btn-danger">Logout</button>
        </div>
    )
}
// export class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.apikey = ""; 
//     }

//     componentDidMount() {
//         this.getforms();
//     }
//     getforms = () => {
//         var url = "https://tkjujrjyhdygpzy.form.io/students/submission";
//         // let request = new Request(url, {method:"GET", headers: {"content-type": "application/json"}, body:'x-token='+this.apikey});
//         // console.log(request);
//         let params = {
//             "x-token": this.apikey,
//             'Content-Type': 'application/json'
//         };
//         fetch(url, {
//             method: 'GET',
//             headers: params
//         })
//             .then(response => response.text())
//             .then((response) => console.log(response));
//     }  
//     render() {
//         return(
//             <h1>Placeholder Text Here</h1> 
//         );

//     }

// }
export default Home;