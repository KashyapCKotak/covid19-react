import React from 'react';
// import {DataContext} from './contexts/DataContext'
import * as axios from 'axios';
import {URLS,DATA_PROPS,DATA_PROPS_META,DATA_NAME_FILEDS,REGION_CODES_TO_NAMES,STATE_CODES_TO_NAMES,STATE_NAMES_TO_CODES} from '../DataConstants';
// import {LineChart, XAxis, YAxis, ResponsiveContainer, Line, Tooltip, Legend, CartesianGrid} from "recharts";
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact';
import RightColumn from './RightColumn';
import LeftColumn from './LeftColumn';

export default class MainContent extends React.Component {

    constructor(props) {
        console.log("constructor",props);
        super(props);

        this.state = {
            locationCode: props.locationCode,
            updateLocationCode: props.updateLocationCode,
            mainData: {
                outerMapData:null,
                timeSeriesData:null,
            },
            maxValues: {},
            latestValues: {},
            stats:{},
            renderCount:0
        }

        this.setStateFromData=this.setIndianObjectFromData.bind(this);
        // this._loadAsynLocationData=this._loadAsynLocationData.bind(this);
    }

    static getDerivedStateFromProps(props,state) {
        console.log("getDerivedStateFromProps",props);
        const nullData={
            outerMapData:null,
            timeSeriesData:null,
        }
        if(props.locationCode!==state.locationCode)
            return {locationCode: props.locationCode,mainData: nullData,renderCount:state.renderCount+1}
        else
            return null;
    }

    componentDidMount() {
        console.log("calling from did mount");
        this.loadAsyncLocationData(this.state.locationCode)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.state,prevState)
        console.log(this.state.locationCode===prevState.locationCode)
        if(this.state.locationCode!==prevState.locationCode){
            console.log("Calling loadAsyncData for "+this.state.locationCode)
            this.loadAsyncLocationData(this.state.locationCode)
        }
        console.log("MainContent RENDER COMPLETE")
    }

    render() {
        console.log("rendering Main Content ");
        console.log(this.state);
        console.log(this.state.mainData.timeSeriesData!=null);
        return (
            <div style={{backgroundImage:process.env.PUBLIC_URL + '/coronaBackground.jpg'}}>
                <MDBContainer fluid style={{maxWidth:'1540px'}}>
                    <MDBRow style={{height:'100vh'}}>
                        <MDBCol lg="6" xl="6" className='right-padding-5-992px custCol'>
                            <LeftColumn renderCount={this.state.renderCount} stats={this.state.stats} data={this.state.mainData.outerMapData} latestValues={this.state.latestValues} maxValues={this.state.maxValues} locationCode={this.state.locationCode}/>
                        </MDBCol>
                        <MDBCol lg="6" xl="6" className='left-padding-5-992px custCol'>
                            <RightColumn data={this.state.mainData} latestValues={this.state.latestValues} maxValues={this.state.maxValues} locationCode={this.state.locationCode}/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.mainData === null) {
    //         console.log("calling from did update");
    //         this._loadAsynLocationData(this.props.id);
    //     }
    // }

    componentWillUnmount() {
        if (this.loadAsyncLocationData) {
            this.loadAsyncLocationData.cancel();
        }
    }

    getLatestData(timeSeriesData){
        return {latestCVal:timeSeriesData[timeSeriesData.length-1].totalconfirmed,
        latestAVal:timeSeriesData[timeSeriesData.length-1].totalactive,
        latestRVal:timeSeriesData[timeSeriesData.length-1].totalconfirmed-timeSeriesData[timeSeriesData.length-1].totalactive,
        latestDVal:timeSeriesData[timeSeriesData.length-1].totaldeceased}
    }

    getMaxDeltaValue(timeSeriesData){
        let maxDeltaVal=0;
        for(let i=timeSeriesData.length-1;i>=timeSeriesData.length-32;i--){
            maxDeltaVal=Math.max(maxDeltaVal,timeSeriesData[i].dailyconfirmed,timeSeriesData[i].dailyrecovered,timeSeriesData[i].dailydeceased);
        }
        return maxDeltaVal;
    }

    getMaxConfirmedValueFromOuterMapData(outerMapData,timeSeriesData){
        console.log(outerMapData)
        let maxCValue=0, maxAValue=0, maxRValue=0, maxDValue=0;
        let keys=Object.keys(outerMapData);
        keys.forEach((key,index)=>{
            maxCValue=Math.max(maxCValue,outerMapData[key].confirmed);
            maxAValue=Math.max(maxAValue,outerMapData[key].active);
            maxRValue=Math.max(maxRValue,outerMapData[key].recovered);
            maxDValue=Math.max(maxDValue,outerMapData[key].deaths);
        });
        console.log([maxCValue,maxAValue,maxRValue,maxDValue]);
        return {maxTotalConfirmed:maxCValue,maxTotalActive:maxAValue,maxTotalRecovered:maxRValue,maxTotalDeceased:maxDValue
                ,maxDeltaValue:this.getMaxDeltaValue(timeSeriesData)};
    }

    getStats(timeSeriesData){
        return {'newConfirmed':timeSeriesData[timeSeriesData.length-1].totalconfirmed-timeSeriesData[timeSeriesData.length-2].totalconfirmed};
    }

    setIndianObjectFromData(response,locationName) {
        let locationObjectName=(REGION_CODES_TO_NAMES[this.state.locationCode] in STATE_NAMES_TO_CODES)?'INDIAN_STATES':REGION_CODES_TO_NAMES[this.state.locationCode];
        this._loadAsynLocationData = null;
        console.log("here's the data fetched");
        console.log(response.data,locationName);
        console.log(DATA_PROPS[locationObjectName][DATA_PROPS_META.outerMapProperty]);
        console.log(DATA_PROPS[locationObjectName]);
        console.log(DATA_PROPS[locationObjectName][DATA_PROPS_META.timeSeriesProperty]);
        let timeSeriesData=response.data[DATA_PROPS[locationObjectName][DATA_PROPS_META.timeSeriesProperty]];
        console.log(timeSeriesData);
        this.timeSeriesWithActive(locationName,timeSeriesData,locationObjectName);
        let modifiedData={};
        response.data[DATA_PROPS[locationObjectName][DATA_PROPS_META.outerMapProperty]].forEach((object,index)=>{
            modifiedData[object[DATA_NAME_FILEDS[locationName].name]]=object;
        });
        // let modifiedTSData = this.formatedTimeSeries(locationName,timeSeriesData);
        let TS_data=response.data[DATA_PROPS[locationObjectName][DATA_PROPS_META.timeSeriesProperty]];
        this.updateCompStateFromData({outerMapData:modifiedData,timeSeriesData:TS_data,locationName})
    }

    async setIndianStateObjectFromData(response, locationName){
        console.log("the data fetched");
        let TS_data=await this.loadAsyncData(URLS.India_states_TS);
        console.log(response.data,locationName,TS_data);
        let modifiedTSData=[], tempObj={}, totalConfirmed=0, totalRecovered=0, totalDeceased=0;
        let locationCodeWithoutCountryCode=STATE_NAMES_TO_CODES[locationName].code.substring(2);
        TS_data.data.states_daily.forEach((object,index)=>{
            if(index%3===0) {
                let deltaConfirmed=parseInt(object[locationCodeWithoutCountryCode])
                tempObj['date']=object.date;
                totalConfirmed=totalConfirmed+deltaConfirmed;
                tempObj['totalconfirmed']=totalConfirmed
                tempObj['dailyconfirmed']=deltaConfirmed
            } else if(index%3===1) {
                let deltaRecovered=parseInt(object[locationCodeWithoutCountryCode]);
                totalRecovered=totalRecovered+deltaRecovered;
                tempObj['totalrecovered']=totalRecovered
                tempObj['dailyrecovered']=deltaRecovered
            } else if(index%3===2) {
                let deltaDeceased=parseInt(object[locationCodeWithoutCountryCode])
                totalDeceased=totalDeceased+deltaDeceased;
                tempObj['totaldeceased']=totalDeceased;
                tempObj['dailydeceased']=deltaDeceased
                tempObj['totalactive']=tempObj['totalconfirmed']-tempObj['totalrecovered'];
                modifiedTSData.push(tempObj);
                tempObj={};
            }
        });
        console.log(modifiedTSData);
        this.updateCompStateFromData({outerMapData:response.data[locationName].districtData,timeSeriesData:modifiedTSData,locationName})
    }

    updateCompStateFromData(properties){
        this.setState({
            mainData: {
                outerMapData:properties.outerMapData,
                timeSeriesData:properties.timeSeriesData
            },
            maxValues:this.getMaxConfirmedValueFromOuterMapData(properties.outerMapData,properties.timeSeriesData),
            latestValues:this.getLatestData(properties.timeSeriesData),
            stats:this.getStats(properties.timeSeriesData)
        });
    }

    loadAsyncLocationData(locationCode) {
        console.log(locationCode)
        setTimeout(() => {
            console.log("Getting Data now !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            let url="";
            let locationName=REGION_CODES_TO_NAMES[locationCode];
            if(locationCode in STATE_CODES_TO_NAMES){
                url=URLS.India_states_districts;
            } else if(!(locationCode in STATE_CODES_TO_NAMES)){
                url=URLS.India;
            }
            axios.get(url).then(response => {
                if(locationCode==="in"){
                    console.log("For India")
                    this.setIndianObjectFromData(response,locationName)
                } else if (locationCode in STATE_CODES_TO_NAMES) {
                    console.log("For Indian States")
                    this.setIndianStateObjectFromData(response,locationName)
                }
            });
        }, 3000);
        // this.setStateFromData({"something here":"something there"});
    }

    timeSeriesWithActive = (locationName, tSDataWithoutActive,locationObjectName) => {
        tSDataWithoutActive.forEach((timeObject, index)=>{
            tSDataWithoutActive[index][DATA_PROPS[locationObjectName].totalActiveProp]=timeObject[DATA_PROPS[locationObjectName].totalConfirmedProp]-timeObject[DATA_PROPS[locationObjectName].totalRecoveredProp];
        });
    }

    async loadAsyncData(url){
        console.log("Getting Another Data now ###########################");
        let data=await axios.get(url);
        return data;
    }

    // formatedTimeSeries = (locationName, tSData) => {
    //     let modData=[]
    //     let confirmedTS=[];
    //     let recoveredTS=[];
    //     let deceasedTS=[];
    //     tSData.forEach((timeObject, index) => {
    //         confirmedTS.push({
    //             'x':timeObject[DATA_PROPS[locationObjectName].dateProp],
    //             'y':timeObject[DATA_PROPS[locationObjectName].totalConfirmedProp]
    //         });
    //         recoveredTS.push({
    //             'x':timeObject[DATA_PROPS[locationObjectName].dateProp],
    //             'y':timeObject[DATA_PROPS[locationObjectName].totalRecoveredProp]
    //         });
    //         deceasedTS.push({
    //             'x':timeObject[DATA_PROPS[locationObjectName].dateProp],
    //             'y':timeObject[DATA_PROPS[locationObjectName].totalDeceasedProp]
    //         });
    //     })
    //     modData.push({
    //         'id': 'confirmed',
    //         data: confirmedTS
    //     });
    //     modData.push({
    //         'id': 'recovered',
    //         data: recoveredTS
    //     });
    //     modData.push({
    //         'id': 'deceased',
    //         data: deceasedTS
    //     });
    //     console.log("MODIFIED TIME SERIES");
    //     console.log(modData);
    //     return modData;
    // }
    
}

// MainContent.contextType = DataContext;