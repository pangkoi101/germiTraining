import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export class Header extends React.Component {

    render() {

        return (
            <div>
                <AppBar title={this.props.title} />
                <AppBar title={this.props.title2} />



            </div>
        );
    }
}