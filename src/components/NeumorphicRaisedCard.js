import React from 'react';

function NeumorphicRaisedCard(props){

    const divStyle = {
        width:'100%',
        height:'100%',
        borderRadius: '10px',
        background: '#ffffff',
        boxShadow: '20px 20px 60px #e8e8e8, -20px -20px 60px #ffffff',
    };

    return (
        <div style={divStyle}>
            {props.children}
        </div>    
    );

}

export default NeumorphicRaisedCard;