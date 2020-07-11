import React, { useContext, useEffect } from 'react';
// import DataList from 'react-datalist-field/build';
import {MDBTable,MDBTableBody,MDBTableHead,MDBRow,MDBCardBody,MDBCol,MDBCard,MDBCardTitle,MDBCardText,MDBProgress,MDBBadge} from 'mdbreact';
import {REGIONS_LIST,STATE_CODES_TO_NAMES} from '../DataConstants';
import Select from 'react-select';
import {DataContext} from './contexts/DataContext';
import {REGION_CODES_TO_NAMES,MAP_INFO,STATE_NAMES_TO_CODES} from '../DataConstants';

function LeftColumn(props){

    const context=useContext(DataContext);
    let locationObjectName=(REGION_CODES_TO_NAMES[context.locationCode] in STATE_NAMES_TO_CODES)?'INDIAN_STATES':REGION_CODES_TO_NAMES[context.locationCode]
    console.log(props);
    console.log(REGION_CODES_TO_NAMES[context.locationCode]);
    console.log(MAP_INFO[locationObjectName].dataObjectForRegionName);
    let tableData=[];

    const columns = [{
        label: 'Region', field: 'region', width: 100, minimal: 'xs'
    },{
        label: 'Confirmed', field: 'confirmed', sort: 'asc', width: 100, minimal: 'xs'
    },{
        label: 'Active', field: 'active', sort: 'asc', width: 100, minimal: 'xs'
    },{
        label: 'Recovered', field: 'recovered', sort: 'asc', width: 100, minimal: 'xs'
    },{
        label: 'Deceased', field: 'deaths', sort: 'asc', width: 100, minimal: 'xs'
    }];

    // const loadingRows = [{
    //     region: 'loading', confirmed: 'loading', active: 'loading', recovered: 'loading', deaths: 'loading'
    // }]

    if(props.data!==null){
        if(props.locationCode in STATE_CODES_TO_NAMES){
            for(let key in props.data){
                if(key.toUpperCase()==='Total'.toUpperCase() || key.toUpperCase()==='Other State'.toUpperCase())
                    continue;
                tableData.push({region:key,confirmed:props.data[key].confirmed,active:props.data[key].active,recovered:props.data[key].recovered,deaths:props.data[key].deceased})
            }
        } else if(!(props.locationCode in STATE_CODES_TO_NAMES)){
            for(let key in props.data){
                if(props.data[key][MAP_INFO[locationObjectName].dataObjectForRegionName].toUpperCase()==='Total'.toUpperCase())
                    continue;
                tableData.push({region:props.data[key][MAP_INFO[locationObjectName].dataObjectForRegionName],confirmed:props.data[key].confirmed,active:props.data[key].active,recovered:props.data[key].recovered,deaths:props.data[key].deaths})
            }
        }
        console.log(tableData);
    }

    function onInputChanged(event){
        console.log(event);
        console.log(context);
        context.updateLocationCode(event.key);
    }

    function onFocusSelect(event){
        document.getElementsByClassName('RegionSelect__indicators')[0].className='RegionSelect__indicators-focused css-1hb7zxy-IndicatorsContainer'
    }

    function onBlurSelect(event){
        document.getElementsByClassName('RegionSelect__indicators-focused')[0].className='RegionSelect__indicators css-1hb7zxy-IndicatorsContainer'
    }

    /**
     * 
     * @param {*} id 
     * @param {*} start 
     * @param {*} end 
     * @param {*} duration in seconds
     */
    function animateValue(id, start, end, duration,float=false) {
        if(end===undefined)
            return;
        let interval=100; //milliseonds
        duration=duration*1000/interval;
        console.log(end);
        console.log('incrementing till:'+end+' from:'+start);
        // let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        if(!float)
            increment=Math.ceil(end/duration);
        else
            increment=end/duration;
        console.log(increment)
        let obj = document.getElementById(id);
        let timer = setInterval(function() {
            current += increment;
            // console.log(current);
            if(current>end){
                // console.log(end);
                obj.innerHTML = (float)?end.toFixed(2):end;
                clearInterval(timer);
                return;
            }
            obj.innerHTML = (float)?current.toFixed(2):current;
            if (current === end) {
                clearInterval(timer);
            }
        }, 10);
    }

    const table_height=(document.documentElement.clientHeight-(58));
    console.log(table_height);

    function addRowClickHandlers() {
        let rows = document.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
          let currentRow = rows[i];
          let createClickHandler = function(row) {
            return function() {
                let cell = row.getElementsByTagName("td")[0];
                let id = cell.innerHTML;
                if(id in STATE_NAMES_TO_CODES){
                    console.log('row:'+STATE_NAMES_TO_CODES[id].code);
                    context.updateLocationCode(STATE_NAMES_TO_CODES[id].code);
                }
                else{
                    console.log('row:'+id);
                }
            };
          };
          currentRow.onclick = createClickHandler(currentRow);
        }
      }

    useEffect(()=>{
        console.log('in useEffect');
        if (Object.keys(props.latestValues).length!==0) {
            animateValue('main-figure',0,props.latestValues.latestCVal,10);
            animateValue('active-number',0,props.latestValues.latestAVal,10);
            animateValue('recovered-number',0,props.latestValues.latestRVal,10);
            animateValue('deceased-number',0,props.latestValues.latestDVal,10);
            animateValue('recovery-ratio-number',0,(props.latestValues.latestRVal/props.latestValues.latestCVal)*100,10,true);
            animateValue('deceased-ratio-number',0,(props.latestValues.latestDVal/props.latestValues.latestCVal)*100,10,true);
            animateValue('new-cases-number',0,props.stats.newConfirmed,10);
        }
        addRowClickHandlers();
    },[props.latestValues,props.stats.newConfirmed]);

    return (
        <div>
            <MDBRow style={{padding:'20px', paddingTop:'10px', paddingBottom:'10px', height:'auto'}}>
                <MDBCol style={{height:'42px', padding:'0px 0px 0px 0px'}} md={6} className='logo'>
                    <img alt="CoviTrack Logo" style={{height:'100%'}} src={process.env.PUBLIC_URL + '/LogoCoviTrack2.png'}/>
                </MDBCol>
                <MDBCol style={{height:'42px', padding:'0px 0px 0px 0px'}} md={6}>
                    <div style={{width:'100%'}} className=''>
                        <Select
                            className="basic-single"
                            classNamePrefix="RegionSelect"    
                            value={(props.renderCount>0)?{'key':context.locationCode, 'value':context.locationCode, 'flag':'in', 'label':REGION_CODES_TO_NAMES[context.locationCode]}:null}
                            isSearchable={true}
                            name="region"
                            options={REGIONS_LIST}
                            onChange={onInputChanged}
                            styles='normal-pressed'
                            onFocus={onFocusSelect}
                            onBlur={onBlurSelect}
                            placeholder='Search State/District...'
                            // styles={{
                            //     control: base => ({
                            //       ...base,
                            //       height: '10vh'
                            //     })
                            // }}
                        />
                        {/* <DataList
                            options={REGION_LIST}
                            id={"id"}
                            value1={"region"}
                            value2={"parent"}
                            selectedIdName={"selectedRegion"}
                            selectedId={""}
                        /> */}
                    </div>
                </MDBCol>
                    <MDBCol size={12} style={{padding:'15px 0px 0px 0px'}}>
                        <MDBCard className='normal-pressed'>
                            {
                                (props.data===null)?
                                    <MDBCardBody style={{height:'309px'}}>
                                        <div className="overlap">
                                            {/* <img src="http://via.placeholder.com/100x200/ff0000/ffff00?text=someVOerlap"/> */}
                                            <img alt="loader" className="overlapImage" src={process.env.PUBLIC_URL + '/loaderCovid.gif'}/>
                                        </div>
                                    </MDBCardBody>
                                :
                                    <MDBCardBody>
                                        <MDBCardTitle>
                                            Cases Summary - <span id='summary_location_code' className='emphasis-text'>{REGION_CODES_TO_NAMES[props.locationCode]}</span>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <small>TOTAL CONFIRMED CASES</small><br/>
                                            <MDBCardTitle className='main-figure' id='main-figure'>
                                                {(Object.keys(props.latestValues).length!==0)?0:'\xa0'}
                                            </MDBCardTitle>
                                            <div class='bar-chart-using-progress-bar'>
                                                <MDBProgress className="progress-custom-active customtooltip" barClassName="progress-active" height='12px' color='primary' value={100} wrapperStyle={{width: (props.latestValues.latestAVal*100/props.maxValues.maxTotalConfirmed)+'%'}}>
                                                    <span class="customtooltiptext">Active: {(props.latestValues.latestAVal*100/props.maxValues.maxTotalConfirmed).toFixed(2)+'%'}</span>
                                                </MDBProgress>
                                                <MDBProgress className="progress-custom-recovered customtooltip" barClassName="progress-recovered" height='12px' color='success' value={100} wrapperStyle={{width: (props.latestValues.latestRVal*100/props.latestValues.latestCVal)+'%'}}>
                                                    <span class="customtooltiptext">Recovered: {(props.latestValues.latestRVal*100/props.latestValues.latestCVal).toFixed(2)+'%'}</span>
                                                </MDBProgress>
                                                <MDBProgress className="progress-custom-deceased customtooltip" barClassName="progress-deceased" height='12px' color='grey darken-3' value={100} wrapperStyle={{width: (props.latestValues.latestDVal*100/props.latestValues.latestCVal)+'%'}}>
                                                    <span class="customtooltiptext">Deceased: {(props.latestValues.latestDVal*100/props.latestValues.latestCVal).toFixed(2)+'%'}</span>
                                                </MDBProgress>
                                            </div>
                                            <MDBRow style={{margin:'0px'}}>
                                                <MDBCol style={{marginRight:'auto',padding:'0px'}} className="normal-pressed custom-summary-cn-col margin-bottom-15-xs-sm">
                                                    <ul class="summary-case-categories">
                                                        <li>
                                                            <div className='summary-case-numbers'>
                                                                <span>
                                                                    <MDBBadge color="primary" className="summary-case-number-badge">&nbsp;</MDBBadge>
                                                                    Active
                                                                </span>
                                                                <span id='active-number' className='summary-case-number blue-color'>
                                                                    {(Object.keys(props.latestValues).length!==0)?0:'\xa0'}
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='summary-case-numbers'>
                                                                <span>
                                                                    <MDBBadge color="success" className="summary-case-number-badge">&nbsp;</MDBBadge>
                                                                    Recovered
                                                                </span>
                                                                <span id='recovered-number' className='summary-case-number green-color'>
                                                                    {(Object.keys(props.latestValues).length!==0)?0:'\xa0'}
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='summary-case-numbers'>
                                                                <span>
                                                                    <MDBBadge color="black" className="summary-case-number-badge">&nbsp;</MDBBadge>
                                                                    Deceased
                                                                </span>
                                                                <span id='deceased-number' className='summary-case-number black-color'>
                                                                    {(Object.keys(props.latestValues).length!==0)?0:'\xa0'}
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </MDBCol>
                                                <MDBCol style={{marginLeft:'auto',padding:'0px'}} className="normal-pressed custom-summary-cn-col">
                                                    <ul class="summary-case-categories">
                                                        <li>
                                                            <div className='summary-case-numbers'>
                                                                <span>
                                                                    <MDBBadge color="danger" className="summary-case-number-badge">&nbsp;</MDBBadge>
                                                                    New Cases
                                                                </span>
                                                                <span id='new-cases-number' className='summary-case-number red-color'>
                                                                    {(Object.keys(props.latestValues).length!==0)?0:'\xa0'}
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='summary-case-numbers'>
                                                                <span>
                                                                    <MDBBadge color="success" className="summary-case-number-badge">&nbsp;</MDBBadge>
                                                                    Recovery Ratio
                                                                </span>
                                                                <span className='summary-case-number green-color'>
                                                                    %
                                                                </span>
                                                                <span id='recovery-ratio-number' className='summary-case-number green-color'>
                                                                    0
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='summary-case-numbers'>
                                                                <span>
                                                                    <MDBBadge color="black" className="summary-case-number-badge">&nbsp;</MDBBadge>
                                                                    Death Ratio
                                                                </span>
                                                                <span className='summary-case-number black-color'>
                                                                    %
                                                                </span>
                                                                <span id='deceased-ratio-number' className='summary-case-number black-color'>
                                                                    0
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardText>
                                    </MDBCardBody>
                            }
                        </MDBCard>
                    </MDBCol>
            </MDBRow>
            <MDBRow style={{padding:'20px', paddingTop:'10px', paddingBottom:'10px', minHeight:'250px' ,maxHeight:table_height+'px'}}>
                {/* <div clasName='normal-raised' style={{padding:'5px',height:(table_height-20)+'px'}}> */}
                    <div className='normal-pressed tableHolder'>
                        <MDBTable scrollY maxHeight={(table_height-20)+'px'} hover small> {/*className='table-borderless'*/}
                            <MDBTableHead columns={columns}/>
                            {
                                (props.data===null)?  
                                    <div className="overlap">
                                        {/* <img src="http://via.placeholder.com/100x200/ff0000/ffff00?text=someVOerlap"/> */}
                                        <img alt="loader" className="overlapImage" src={process.env.PUBLIC_URL + '/loaderCovid.gif'}/>
                                    </div>
                                :
                                    <MDBTableBody style={{cursor:'pointer'}} className='block-example border-left border-dark' rows={tableData} />
                            }
                        </MDBTable>
                    </div>
                {/* </div> */}
            </MDBRow>
        </div>
    );
    
}

export default LeftColumn;