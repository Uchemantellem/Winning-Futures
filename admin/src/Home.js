import React from 'react';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';



export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.apikey = ""; 
    }

    componentDidMount() {
        this.getforms();
    }
    getforms = () => {
        var url = "https://tkjujrjyhdygpzy.form.io/successcoachform";
        // let request = new Request(url, {method:"GET", headers: {"content-type": "application/json"}, body:'x-token='+this.apikey});
        // console.log(request);
        let params = {
            "x-token": this.apikey,
            'Content-Type': 'application/json'
        };
        fetch(url, {
            method: 'GET',
            headers: params
        })
            .then(response => response.text())
            .then((response) => console.log(response));
    }  
    render() {
        return(
            <h1>Placeholder Text Here</h1> 
        );

    }

}