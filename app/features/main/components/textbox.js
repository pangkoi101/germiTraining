import React, { Component } from 'react';


import TextField from 'material-ui/TextField';




export class Textbox extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        const { onChange} = this.props;

        return (


            <div>

               <TextField
                    hintText="Hint Text"
                    onChange={onChange.bind(this)}
                />
            </div>
        );
    }
}