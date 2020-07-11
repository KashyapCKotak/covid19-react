import * as d3 from 'd3';
import d3Legend from 'd3-svg-legend';
import * as dgp from 'd3-geo-projection';
import React, {useEffect,useRef, useContext,Fragment} from 'react';
import * as topojson from 'topojson';
import {REGION_CODES_TO_NAMES,MAP_INFO,PROJECTION_INFO,STATE_NAMES_TO_CODES,STATE_CODE_APPEND_COUNTRY_CODE,STATE_CODES_TO_NAMES,SHORT_NAMES} from '../DataConstants';
import { DataContext } from './contexts/DataContext';


function FlatMap(props) {
    // const mapFile=process.env.PUBLIC_URL+'/maps/world110_noA.json';
    // const featureCollectionObject="countries";
    // const propertyField = 'name';
    // const projectionType='geoCylindricalStereographic';
    console.log("entered flat map ");
    console.log(props);
    const context=useContext(DataContext);
    const choroplethMap=useRef(null);
    const choroplethLegend = useRef(null);
    let locationName=REGION_CODES_TO_NAMES[props.locationCode];
    let locationObjectName=(REGION_CODES_TO_NAMES[props.locationCode] in STATE_NAMES_TO_CODES)?'INDIAN_STATES':REGION_CODES_TO_NAMES[props.locationCode];
    // locationName='World'
    // locationObjectName='World'
    console.log(locationName, props.locationCode, locationObjectName);
    let currentlyTappedRegion='';
    let touch=false;

    // const india=d3.map()
    // const widthStyle = parseInt(svg.style('width'));
    // const heightStyle = parseInt(svg.style('height'));

    // const indiamap = d3.json("world50.json")

    function handleRegionTap(d){
        if(currentlyTappedRegion===d)
            handleClickOrDoubleTap(d);
        else{
            currentlyTappedRegion=d;
            handleHoverOrSingleTouch(d);
        }
    }

    function handleClickOrDoubleTap(obj){
        let locationCode=0;
        if(!(locationName in STATE_NAMES_TO_CODES)){
            locationCode=STATE_NAMES_TO_CODES[obj.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toLowerCase();
            locationCode=STATE_CODE_APPEND_COUNTRY_CODE[locationCode];
            if(locationCode in STATE_CODES_TO_NAMES || locationCode==='in' || locationCode==='wd'){
                console.log("updating context to:"+locationCode);
                context.updateLocationCode(locationCode);
            }
        } else if(locationName in STATE_NAMES_TO_CODES){
            locationCode=obj.properties[MAP_INFO[locationObjectName].propertyField];
            console.log("not updating context to:"+locationCode);
            // context.updateLocationCode(locationCode);
        }
    }

    function handleHoverOrSingleTouch(region){
        console.log(region);
        console.log(region.properties[MAP_INFO[locationObjectName].propertyField]);
            highlightRegionInMap(region.properties[MAP_INFO[locationObjectName].propertyField]);
            let c=0,r=0,d=0,a=0;
            if(!(locationName in STATE_NAMES_TO_CODES)){
                c=parseInt(props.data[STATE_NAMES_TO_CODES[region.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toUpperCase()].confirmed) || 0;
                a=parseInt(props.data[STATE_NAMES_TO_CODES[region.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toUpperCase()].active) || 0;
                r=parseInt(props.data[STATE_NAMES_TO_CODES[region.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toUpperCase()].recovered) || 0;
                d=parseInt(props.data[STATE_NAMES_TO_CODES[region.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toUpperCase()].deaths) || 0;
            } else if(locationName in STATE_NAMES_TO_CODES){
                if(region.properties[MAP_INFO[locationObjectName].propertyField] in props.data){
                    c=parseInt(props.data[region.properties[MAP_INFO[locationObjectName].propertyField]].confirmed) || 0;
                    a=parseInt(props.data[region.properties[MAP_INFO[locationObjectName].propertyField]].active) || 0;
                    r=parseInt(props.data[region.properties[MAP_INFO[locationObjectName].propertyField]].recovered) || 0;
                    d=parseInt(props.data[region.properties[MAP_INFO[locationObjectName].propertyField]].deceased) || 0;
                }
            }
            console.log(c);
            console.log(a);
            console.log(r);
            console.log(d);
            document.getElementById('confirmed_value').innerHTML=c;
            document.getElementById('active_value').innerHTML=a;
            document.getElementById('recovered_value').innerHTML=r;
            document.getElementById('deceased_value').innerHTML=d;
            document.getElementById('mapRegionName').innerHTML=SHORT_NAMES.shortName(region.properties[MAP_INFO[locationObjectName].propertyField]);
    }

    function renderFlatMap(topoJson) {
        console.log("rendering flat map");
        // setting projection
        let projection = null
        if (locationName in MAP_INFO && MAP_INFO[locationName].projectionType === PROJECTION_INFO.geoCylindricalStereographic.name) {
            projection = dgp.geoCylindricalStereographic(); // Good projections: geoCylindricalStereographic // geoPatterson // geoMiller //geoEquirectangular
            projection.parallel([-45]);
        } else {
            projection = d3.geoMercator();
        }
        const path=d3.geoPath().projection(projection)
        console.log(MAP_INFO[locationObjectName].featureCollectionObject(locationName.toLowerCase()));
        const features=topojson.feature(topoJson, topoJson.objects[MAP_INFO[locationObjectName].featureCollectionObject(locationName.toLowerCase())]).features;
        console.log("features", features);
        const topology=topojson.feature(topoJson, topoJson.objects[MAP_INFO[locationObjectName].featureCollectionObject(locationName.toLowerCase())]);
        const svg = d3.select(choroplethMap.current)
        const widthSVG = parseInt(svg.style('width'));
        const heightSVG = parseInt(svg.style('height'));
        projection.fitSize([widthSVG, heightSVG], topology);
        // get statistics
        // Math.max.apply(Math, data.map(function(o) { return o.y; }))
        let maxValue=0;
        let colorInterpolator=null
        if(props.caseType===0){
            colorInterpolator = (t) => d3.interpolateReds(t * 2);
            maxValue=props.maxValues.maxTotalConfirmed;
        }
        else if(props.caseType===1){
            colorInterpolator = (t) => d3.interpolateBlues(t * 2.5);
            maxValue=props.maxValues.maxTotalActive;
        }
        else if(props.caseType===2){
            colorInterpolator = (t) => d3.interpolateGreens(t * 3);
            maxValue=props.maxValues.maxTotalRecovered;
        }
        else if(props.caseType===3){
            colorInterpolator = (t) => d3.interpolateGreys(t * 3);
            maxValue=props.maxValues.maxTotalDeceased;
        }
        else{
            colorInterpolator = (t) => d3.interpolateReds(t * 2);
            maxValue=props.maxValues.maxTotalConfirmed;
        }
        const colorScale = d3.scaleSequential(
            [0, Math.max(1,maxValue)],
            colorInterpolator
        );
        console.log(maxValue);
        // draw map
        svg.selectAll("*").remove();
        svg.append("g")
        .attr("class", "region")
        .selectAll("path")
        .data(features)
        .enter()
        .append("path")
        .attr("d", path)
        // .attr('fill','#61f2ff')
        .attr('fill', function (d) {
            // console.log(d);
            if(props.data!=null){
                let n = 0;
                if(!(locationName in STATE_NAMES_TO_CODES)){
                    console.log(locationObjectName);
                    console.log(d.properties[MAP_INFO[locationObjectName].propertyField]);
                    console.log(STATE_NAMES_TO_CODES[d.properties[MAP_INFO[locationObjectName].propertyField]].code);
                    console.log(STATE_NAMES_TO_CODES[d.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toUpperCase());
                    console.log(props.data[STATE_NAMES_TO_CODES[d.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toUpperCase()][props.typeArray[props.caseType]]);
                    n=parseInt(props.data[STATE_NAMES_TO_CODES[d.properties[MAP_INFO[locationObjectName].propertyField]].code.substring(2).toUpperCase()][props.typeArray[props.caseType]]) || 0;
                } else if(locationName in STATE_NAMES_TO_CODES){
                    if(d.properties[MAP_INFO[locationObjectName].propertyField] in props.data)
                        n=parseInt(props.data[d.properties[MAP_INFO[locationObjectName].propertyField]][props.typeArray[props.caseType]]) || 0;
                    else {
                        n=0;
                        console.log(d.properties[MAP_INFO[locationObjectName].propertyField])
                    }
                }
                // console.log(d.properties[MAP_INFO[locationName].propertyField]);
                // console.log(props.data[INDIAN_STATE_NAMES_TO_CODES[d.properties[MAP_INFO[locationName].propertyField]]]);
                const color = maxValue === 0 ? '#ffffff' : colorScale(n);
                return color;
            } else {
                return '#61f2ff';
            }
        })
        .attr('pointer-events', 'all')
        .attr('class','sub-region')
        .on('mouseenter', (region) => {
            console.log('mouseenter');
            if(!touch)
                handleHoverOrSingleTouch(region);
        })
        .on('mouseleave', (d) => {
            console.log('mouseleave',d);
        })
        .on('touchstart', (d) => {
            touch=true;
            console.log('touchstart',d);
            handleRegionTap(d);
        })
        .on('touchend', (d) => {
            console.log('touchend',d);
        })
        .on('click', (d) => {
            console.log('click triggered','touch:'+touch);
            if(!touch){
                console.log('click',d);
                handleClickOrDoubleTap(d);
            } else {
                touch=false;
            }
        })
        .style('cursor', 'pointer')

        // draw borders
        svg.append('g').append('path')
        .attr('class', 'borders')
        .attr('stroke', '#ff073a20')
        .attr('fill', 'none')
        .attr('stroke-width', 2.744)
        .attr(
          'd',
          path(topojson.mesh(topoJson, topoJson.objects[MAP_INFO[locationObjectName].featureCollectionObject(locationName.toLowerCase())]))
        );

        /* Legend */

        var svgLegend = d3.select(choroplethLegend.current);

        svgLegend.append("g")
        .attr("class", "legendLinear")
        .attr("transform", "translate(20,20)");

        var legendLinear = d3Legend.legendColor()
        .shapeWidth(100)
        .cells(5)
        .orient('horizontal')
        .scale(colorScale);

        svgLegend.select(".legendLinear")
        .call(legendLinear);

    }

    const highlightRegionInMap = (name) => {
        const paths = d3.selectAll('.sub-region');
        paths.classed('map-hover', (d, i, nodes) => {
            
            if (name === d.properties[MAP_INFO[locationObjectName].propertyField]) {
                nodes[i].parentNode.appendChild(nodes[i]);
                return true;
            }
            return false;
        });
    };

    useEffect(() => {
        if (locationName != null) {
            (async () => {
                console.log("in useEffect. mapName:"+locationName);
                let topoJsonData=null;
                // if(locationName in STATE_NAMES_TO_CODES){
                //     topoJsonData = await d3.json(MAP_INFO.INDIAN_STATES.mapFile(locationName.toLowerCase()));
                // } else if(locationName=="India"){
                //     topoJsonData = await d3.json(MAP_INFO[locationName].mapFile);
                // }
                console.log(MAP_INFO[locationObjectName].mapFile(locationName.toLowerCase()));
                topoJsonData = await d3.json(MAP_INFO[locationObjectName].mapFile(locationName.toLowerCase()));
                console.log(topoJsonData);
                // Promise.all([geoData]).then(ready)
                if (choroplethMap.current) {
                    renderFlatMap(topoJsonData);
                }
            })();
        }
    });

    if(props.data!=null){
        return(
            <Fragment>
                <div className="svg-map-parent">
                    <svg 
                        id={new Date().getTime()}
                        width='100%'
                        height='100%'
                        // style={{backgroundColor: 'wheat'}}
                        ref={choroplethMap}
                        className='shadow-filter'
                    >
                    </svg>
                </div>
                {/* <div className="svg-legend-parent" style={{height:'15%', padding:'10px'}}>
                    <svg 
                        id={new Date().getTime()}
                        width='100%'
                        height='100%'
                        // style={{backgroundColor: 'wheat'}}
                        ref={choroplethLegend}
                    >
                    </svg>
                </div> */}
            </Fragment>
        )
    }
    else {
        return(
            <div className="svg-parent" style={{height:'100%', padding:'10px'}}>
                <div className="overlap">
                    {/* <img src="http://via.placeholder.com/100x200/ff0000/ffff00?text=someVOerlap"/> */}
                    <img alt="loader" className="overlapImage" src={process.env.PUBLIC_URL + '/loaderCovid.gif'}/>
                </div>
            </div>
        )
    }

}

export default FlatMap;