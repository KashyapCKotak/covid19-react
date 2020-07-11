import React from 'react';

export default class SampleComp extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor");
    }

    render(){
        return(
            <div>
                Kashyap
            </div>
        );
    }
}