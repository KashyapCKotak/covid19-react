import React, { useRef } from 'react';

function DataButton(props){

    const buttonRef=useRef(null);
    console.log(props,props.buttonStyles,props.val,props.buttonStyles[props.val]);

    function toggleButtonState(){
        props.toggleButton(props.val);
    }

    let fontColor='black'
    if(props.val===0)
        fontColor='#ff4444'
    else if(props.val===1)
        fontColor='#4285F4'
    else if(props.val===2)
        fontColor='#00C851'
    else if(props.val===3)
        fontColor='black'

    return (
        <div className='mapData' style={{color:fontColor, cursor:'pointer'}}>
            <div className={props.buttonStyles[props.val]+" data_button mapDataSubDiv"}  id={props.id} ref={buttonRef} onClick={toggleButtonState}>
                <div style={{textAlign:"center",height:'50%',fontWeight:'700'}}>
                    {props.id}
                </div>
                <div id={props.id.toLowerCase()+'_value'} style={{textAlign:"center",width:'100%',height:'50%'}}>
                    {props.initVal}
                </div>
            </div>
        </div>
    );

}

export default DataButton;