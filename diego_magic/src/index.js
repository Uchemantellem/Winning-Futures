import {Formio} from "formiojs";
import "./bootstrap.min.css";
import "./formio.full.min.css";
import firebase from "firebase/app"
import "firebase/firestore";

/**
 * Setup:
 * 1. from diego_magic do yarn install
 * 2. then yarn build
 */

var firebaseConfig = {
    apiKey: "AIzaSyCQSHjNKtRqSB_Bks3x0Y8aLP1a-vOYrMY",
    authDomain: "winning-futures.firebaseapp.com",
    databaseURL: "https://winning-futures-default-rtdb.firebaseio.com",
    projectId: "winning-futures",
    storageBucket: "winning-futures.appspot.com",
    messagingSenderId: "460373487232",
    appId: "1:460373487232:web:dfce8debe3af0315f90065",
    measurementId: "G-GYHB57EH09"
  };


const formsUrl = "https://tkjujrjyhdygpzy.form.io/form";

window.onload = async function () {

    firebase.initializeApp(firebaseConfig);
    firebase.firestore().enablePersistence().catch((err) => {
        console.error(err)
    });

    let cached = false;
    let online = true;

    const loadJson = async (url) => {
        let json = undefined;
        try {
            let response = await fetch(url);
            json = await response.json();
            console.log("successfully loaded form");
            window.localStorage.setItem(url, JSON.stringify(json));
        } catch (e) {
            let savedJson = window.localStorage.getItem(url);
            if (savedJson !== null) {
                console.log("using cached version");
                cached = true;
                json = JSON.parse(savedJson);
            } else {
                // todo: first load offline, alert user
            }
        }
        return json;
    }

    const renderForm = (jsonFile) => {
        // grab div for form, let Formio do its magic
        Formio.createForm(document.getElementById('formio'), jsonFile).then(form => {
            // prevent the standard submit from Formio, we want to store in firestore instead
            form.nosubmit = true;

            // if using a cached version let the user know 
            if (cached) {
                form.setAlert("warning", "Offline, using cached version");
            }

            // on form submit, save to firestore, this will save it locally if offline and 
            // send it to the db next time when online
            form.on("submit", submission => {
                console.log(submission);
                // needed to show "success" button
                form.emit("submitDone", submission);

                // save to db
                firebase.firestore().collection(jsonFile.name).add(submission.data).catch(err => {
                    console.log(err);
                })

                // save to listofforms db
                firebase.firestore().collection("listofforms").add(jsonFile.name).catch(err => {
                    console.log(err);
                })
            });
        }).catch(error => {
            console.log(error);
        })
    }

    let formDiv = document.getElementById("formDiv");
    let buttonsDiv = document.getElementById("buttons");

    let forms = await loadJson(formsUrl);
    forms.forEach(form => {
        if (form.type === "form") {
            let button = document.createElement("button");
            button.style.marginTop = "18px";
            button.style.height = "60px";
            button.style.width = "90%";
            button.style.alignSelf = "center";
            button.style.backgroundColor = "#2643BE";
            button.className = "btn btn-primary";
            button.innerHTML = form.title;
            button.onclick = () => {
                renderForm(form);
                buttonsDiv.style.display = "none";
                formDiv.style.display = "block";
            }

            buttonsDiv.appendChild(button);
        }
    });

    // For testing: logic to enable/disable network for firebase db
    // let network = document.getElementById("toggleNetwork");
    // network.onclick = () => {
    //     if (online) {
    //         online = false;
    //         network.className = "btn btn-danger";
    //         network.innerHTML = "Offline";
    //         firebase.firestore().disableNetwork().then(()=> {
    //             console.log("offline");
    //         })
    //     } else {
    //         online = true;
    //         network.className = "btn btn-success";
    //         network.innerHTML = "Online";
    //         firebase.firestore().enableNetwork().then(()=> {
    //             console.log("online");
    //         })
    //     }
    // }

};
