import React from 'react';

function MapButton(props) {

    return (
        <>
            <div className={props.class+' chartButton'} style={{cursor:'pointer'}} onClick={props.clickHandler}>
                <div className="data_button"  id={props.value+'_mapButton'}>
                    <div style={{textAlign:"center",height:'50%',fontWeight:'700'}}>
                        {props.value}
                    </div>
                </div>
            </div>
        </>
    );

}

export default MapButton;