import React, { Component } from 'react';


import RaisedButton from 'material-ui/RaisedButton';





export class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        const { userList, onAddNewHobby , onEditHobby } = this.props;

        return (


            <div>
                <h1>test</h1>
                <RaisedButton
                    label={"Add"}
                    onClick={onAddNewHobby.bind(this)}
                    secondary={true}
                />


                {
                    userList.hobbies.map((hobby, index) =>
                    <div 
                       
                        key={index}
                    >
                       
                        <p>{hobby}</p>

                        <RaisedButton
                                label={"Edit"}
                                onTouchTap={onEditHobby.bind(this, index)}
                                secondary={true}
                            />
                    </div>
                    
                    )
                }
                {/* <p> {userList.age} </p>
                {userList.location.map((loc, index) => <p key={index}>{loc}</p>)} */}
            </div>
        );
    }
}