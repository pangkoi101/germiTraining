import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import { Display } from './Display';

import { Textbox } from './textbox';


export class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            showValue: true,
            hideValue: true,
            text: "Something!",


        }
    }


    render() {
        return (
            <div>
                <Textbox
                    onChange ={this.props.onChange}
                />
            </div>

        );
    }
}

