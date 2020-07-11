import React, { Fragment, useState } from 'react';
import {LineChart, XAxis, YAxis, ResponsiveContainer, Line, Tooltip, Legend} from "recharts";
import MapButton from './MapButton';

function MultiLineChart(props){

    const periodTypes={all:'all',m1:'m1',m2:'m2'};
    const [period,setPeriod] = useState(periodTypes.all);

    let legendIconType=""
    legendIconType='square';

    let timeSeriesData=null;
    const buttonPressedStyle='normal-pressed-button';
    const buttonRaisedStyle='normal-raised-button';

    let buttonTypes={};
    buttonTypes[periodTypes.all]=buttonRaisedStyle;
    buttonTypes[periodTypes.m1]=buttonRaisedStyle;
    buttonTypes[periodTypes.m2]=buttonRaisedStyle;

    if(period===periodTypes.all) {
        timeSeriesData=props.timeSeriesData;
    } else if(period===periodTypes.m1) {
        timeSeriesData=props.timeSeriesData.slice(props.timeSeriesData.length-31,props.timeSeriesData.length);
    } else if(period===periodTypes.m2) {
        timeSeriesData=props.timeSeriesData.slice(props.timeSeriesData.length-62,props.timeSeriesData.length);
    }
    buttonTypes[period]=buttonPressedStyle;

    // if(document.documentElement.clientWidth<=644){
    //     legendIconType='circle'
    // } else {
    // }

    function periodClickHandler(periodParam){
        console.log(periodParam)
        setPeriod(periodParam)
    }

    function tickFormat(tick){
        // console.log(tick/1000+'K');
        let newTick=0;
        if (tick===0)
            return newTick;
        if (tick < 1000)
            return tick;
        if (tick < 100000)
            return tick/1000+'K';
        if (tick < 10000000)
            return tick/100000+'L';
        return tick/10000000+'C';
    }

    if(props.timeSeriesData!=null)
        return (
            <Fragment>
                <div class='chart-title'>
                    {props.title}
                    <MapButton class={buttonTypes[periodTypes.all]} value='all' clickHandler={() => {periodClickHandler(periodTypes.all)}}/>
                    <MapButton class={buttonTypes[periodTypes.m1]} value='1m' clickHandler={() => {periodClickHandler(periodTypes.m1)}}/>
                    <MapButton class={buttonTypes[periodTypes.m2]} value='2m' clickHandler={() => {periodClickHandler(periodTypes.m2)}}/>
                </div>
                <div style={{height:'calc(100% - 39px)'}}>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart syncId={'syncChartsID_'+props.syncId} margin={{top: 0, right: -25, bottom: 0, left: 0}} data={timeSeriesData} >
                        <Legend style={{fontSize:'0.7rem'}} margin={{top: 0, right: 0, bottom: 0, left: 0}} verticalAlign="bottom" align="center" height={36} iconType={legendIconType} iconSize={9}/>
                        <XAxis style={{fontSize:'0.7rem'}} dataKey="date" axisLine={false} padding={{ right: 10 }} tickLine={false}/>
                        <YAxis style={{fontSize:'0.7rem'}} tickFormatter={tickFormat} scale="linear" orientation="right" type="number" domain={[0, props.maxValue+10000]} axisLine={false} padding={{ left: 1000 }}/>
                        <Tooltip animationEasing="ease-out"/>
                        {
                            props.dataKey.map((key,index) => {
                                return <Line name={props.labels[index]} type="natural" dataKey={key} stroke={props.stroke[index]} dot={false} strokeWidth={2} isAnimationActive={true} animationEasing='ease-in-out'/>
                            })
                        }
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </Fragment>
        );
    else
        return(
            <div className="overlap">
                {/* <img src="http://via.placeholder.com/100x200/ff0000/ffff00?text=someVOerlap"/> */}
                <img alt="loader" className="overlapImage" src={process.env.PUBLIC_URL + '/loaderCovid.gif'}/>
            </div>
        );

}

export default MultiLineChart;