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
            <div style={{height: "100%",width: "100%",overflowY: "auto"}}>
                <Form src="https://tkjujrjyhdygpzy.form.io/successcoachform" />
            </div>
            
        )
    }
}
