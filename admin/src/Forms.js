import React from 'react';
import { Form } from 'react-formio';
import "formiojs/dist/formio.full.css";
import "bootstrap/dist/css/bootstrap.css";

export class Forms extends React.Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <div style={{padding:40}}>
                <Form src="https://tkjujrjyhdygpzy.form.io/successcoachform" />
            </div>
            
        )
    }
}
