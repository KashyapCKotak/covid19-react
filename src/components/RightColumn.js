import React, { useState } from 'react';
import FlatMap from './FlatMap';
import { DataContext } from './contexts/DataContext';
import DataButton from './DataButton';
import {REGION_CODES_TO_NAMES,SHORT_NAMES} from '../DataConstants';
import MultiLineChart from './MultiLineChart'

function RightColumn(props){
    console.log(props);
    const [currType,toggleCurrType]=useState(0);
    const typeArray=['confirmed','active','recovered','deaths'];
    const buttonPressedStyle='normal-pressed-button map-numbers';
    const buttonRaisedStyle='normal-raised-button map-numbers';
    let buttonStyles=new Array(4).fill(buttonRaisedStyle);
    buttonStyles[currType]=buttonPressedStyle;
    let confimedInitVal=null,activeInitVal=null,recoveredInitVal=null,deceasedInitVal=null
    if(props.data.timeSeriesData!=null){
        confimedInitVal=props.data.timeSeriesData[props.data.timeSeriesData.length-1].totalconfirmed
        activeInitVal=props.data.timeSeriesData[props.data.timeSeriesData.length-1].totalactive
        recoveredInitVal=props.data.timeSeriesData[props.data.timeSeriesData.length-1].totalconfirmed-props.data.timeSeriesData[props.data.timeSeriesData.length-1].totalactive
        deceasedInitVal=props.data.timeSeriesData[props.data.timeSeriesData.length-1].totaldeceased
    }
    else {
        console.log(process.env.PUBLIC_URL+'/loader1.gif');
        // confimedInitVal=<img src={process.env.PUBLIC_URL+'/loader1.gif'} style={{height:'100%',width:'100%'}}></img>
        // activeInitVal=<img src={process.env.PUBLIC_URL+'/loader1.gif'} style={{height:'100%',width:'100%'}}></img>
        // recoveredInitVal=<img src={process.env.PUBLIC_URL+'/loader1.gif'} style={{height:'100%',width:'100%'}}></img>
        // deceasedInitVal=<img src={process.env.PUBLIC_URL+'/loader1.gif'} style={{height:'100%',width:'100%'}}></img>

        confimedInitVal='loading'
        activeInitVal='loading'
        recoveredInitVal='loading'
        deceasedInitVal='loading'
    }
    const toggleButton=(value)=>{
        console.log("in toggle button",value);
        buttonStyles=buttonStyles.map(s => buttonRaisedStyle)
        buttonStyles[value]=buttonPressedStyle;
        console.log(buttonStyles);
        toggleCurrType(value);
    }
    return (
        <div>
            <div id='map' className='map'>
                <div className='normal-pressed' style={{height:'100%', padding:'10px',position:'relative'}}>
                    <div className='mapDataHolder'>
                        {/* <div style={{height:'100%',width:'20%',padding:'10px',display:'inline-block'}}>
                            <div className='normal-raised' style={{textAlign:"center",width:'100%',height:'100%'}}>
                                <div id='mapRegionName' style={{height:'100%',textAlign:'center',width:'100%'}}>
                                    India India
                                </div>
                            </div>
                        </div> */}
                        <div className='mapData full-width-map-data-1'>
                            <div className='normal-pressed mapDataSubDiv' style={{paddingTop:'2px'}}>
                                <div class="vertical-center-helper-parent">
                                    <div style={{textAlign:"center",display:'flex',margin:'auto auto',fontWeight:500,lineHeight:1.15,fontSize:'1.1rem'}}>
                                        <div  id='mapRegionName' style={{margin: 'auto auto',height:'100%',overflow:'hidden'}}>
                                            {SHORT_NAMES.shortName(REGION_CODES_TO_NAMES[props.locationCode])}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DataButton id='Confirmed' val={0} buttonStyles={buttonStyles} toggleButton={toggleButton} initVal={props.latestValues.latestCVal}/>
                        <DataButton id='Active' val={1} buttonStyles={buttonStyles} toggleButton={toggleButton} initVal={props.latestValues.latestAVal}/>
                        <DataButton id='Recovered' val={2} buttonStyles={buttonStyles} toggleButton={toggleButton} initVal={props.latestValues.latestRVal}/>
                        <DataButton id='Deceased' val={3} buttonStyles={buttonStyles} toggleButton={toggleButton} initVal={props.latestValues.latestDVal}/>
                    </div>
                    <div className='mapHolder'>
                        <DataContext.Consumer>
                            {({locationCode}) => (
                                <FlatMap locationCode={locationCode} data={props.data.outerMapData} maxValues={props.maxValues} caseType={currType} initVals={[confimedInitVal,activeInitVal,recoveredInitVal,deceasedInitVal]} typeArray={typeArray} />
                            )}
                        </DataContext.Consumer>
                    </div>
                    <div className='pointingDeviceMapHelp'>
                        Hover on any region for details, Click to enter region.
                    </div>
                    <div className='touchDeviceMediumMapHelp'>
                        Tap any region for details, Tap again to enter region.
                    </div>
                </div>
            </div>
            <div style={{height:'35vh',minHeight:'245px',maxHeight:'350px',padding:'10px 5px 10px 0'}}>
                <div className='normal-pressed' style={{height:'100%', padding:'10px 5px 0 10px',position:'relative'}}>
                    <MultiLineChart 
                    title='Cases Over Time'
                    labels={['Confirmed','Active','Recovered','Deceased']} 
                    dataKey={['totalconfirmed','totalactive','totalrecovered','totaldeceased']} 
                    stroke={['#ff0000','#4285f4','#00c851','#000000']} 
                    timeSeriesData={props.data.timeSeriesData} 
                    maxValue={props.maxValues.maxTotalConfirmed}
                    syncId='1'/>
                </div>
            </div>
            <div style={{height:'35vh',minHeight:'245px',maxHeight:'350px',padding:'10px 5px 10px 0'}}>
                <div className='normal-pressed' style={{height:'100%', padding:'10px 5px 0 10px',position:'relative'}}>
                    <MultiLineChart 
                    title='New Cases Trends'
                    labels={['Confirmed','Recovered','Deceased']} 
                    dataKey={['dailyconfirmed','dailyrecovered','dailydeceased']} 
                    stroke={['#ff0000','#00c851','#000000']} 
                    timeSeriesData={props.data.timeSeriesData} 
                    maxValue={props.maxValues.maxDeltaValue}
                    syncId='2'/>
                </div>
            </div>
        </div>
    );
}

export default RightColumn;