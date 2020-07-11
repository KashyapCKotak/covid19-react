export const URLS = {
    India: 'https://api.covid19india.org/data.json',//'https://api.covid19india.org/states_daily.json',
    India_states_districts: 'https://api.covid19india.org/state_district_wise.json',//'https://api.covid19india.org/districts_daily.json'
    India_states_TS: 'https://api.covid19india.org/states_daily.json'
}

export const DATA_PROPS_META={
    outerMapProperty: 'outerMapProperty',
    timeSeriesProperty: 'timeSeriesProperty'
}

export const SHORT_NAMES = {
  shortName: (name) => {
    if(name.toLowerCase() === "dadra and nagar haveli and daman and diu")
      return "DNH and DD";
    else if (name.toLowerCase() === "andaman and nicobar islands")
      return "Andaman and Nicobar";
    else
      return name;
  }
}

export const DATA_PROPS = {
    India: {
        outerMapProperty: 'statewise',
        timeSeriesProperty: 'cases_time_series',
        totalConfirmedProp: 'totalconfirmed',
        totalDeceasedProp: 'totaldeceased',
        totalRecoveredProp: 'totalrecovered',
        totalActiveProp: 'totalactive',
        dateProp: 'date'
    },
    // Maharashtra: {
    //     outerMapProperty: 'statewise',
    //     timeSeriesProperty: 'cases_time_series',
    //     totalConfirmedProp: 'totalconfirmed',
    //     totalDeceasedProp: 'totaldeceased',
    //     totalRecoveredProp: 'totalrecovered',
    //     totalActiveProp: 'totalactive',
    //     dateProp: 'date'
    // },
    INDIAN_STATES: {
      outerMapProperty: 'statewise',
      timeSeriesProperty: 'cases_time_series',
      totalConfirmedProp: 'totalconfirmed',
      totalDeceasedProp: 'totaldeceased',
      totalRecoveredProp: 'totalrecovered',
      totalActiveProp: 'totalactive',
      dateProp: 'date'
  }
  }
  
export const DATA_NAME_FILEDS = {
    India: {
      name: 'statecode'
    }
  }
  
  export const REGIONS_LIST = [
    {'key':'in','value':'in','flag':'in', 'label':'India'}, 
    {'key':'inap','value':'inap','flag':'in', 'label':'Andhra Pradesh'},
    {'key':'inar','value':'inar','flag':'in', 'label':'Arunachal Pradesh'},
    {'key':'inas','value':'inas','flag':'in', 'label':'Assam'},
    {'key':'inbr','value':'inbr','flag':'in', 'label':'Bihar'},
    {'key':'inct','value':'inct','flag':'in', 'label':'Chhattisgarh'},
    {'key':'inga','value':'inga','flag':'in', 'label':'Goa'},
    {'key':'ingj','value':'ingj','flag':'in', 'label':'Gujarat'},
    {'key':'inhr','value':'inhr','flag':'in', 'label':'Haryana'},
    {'key':'inhp','value':'inhp','flag':'in', 'label':'Himachal Pradesh'},
    {'key':'injh','value':'injh','flag':'in', 'label':'Jharkhand'},
    {'key':'inka','value':'inka','flag':'in', 'label':'Karnataka'},
    {'key':'inkl','value':'inkl','flag':'in', 'label':'Kerala'},
    {'key':'inmp','value':'inmp','flag':'in', 'label':'Madhya Pradesh'},
    {'key':'inmh','value':'inmh','flag':'in', 'label':'Maharashtra'},
    {'key':'inmn','value':'inmn','flag':'in', 'label':'Manipur'},
    {'key':'inml','value':'inml','flag':'in', 'label':'Meghalaya'},
    {'key':'inmz','value':'inmz','flag':'in', 'label':'Mizoram'},
    {'key':'innl','value':'innl','flag':'in', 'label':'Nagaland'},
    {'key':'inor','value':'inor','flag':'in', 'label':'Odisha'},
    {'key':'inpb','value':'inpb','flag':'in', 'label':'Punjab'},
    {'key':'inrj','value':'inrj','flag':'in', 'label':'Rajasthan'},
    {'key':'insk','value':'insk','flag':'in', 'label':'Sikkim'},
    {'key':'intn','value':'intn','flag':'in', 'label':'Tamil Nadu'},
    {'key':'intg','value':'intg','flag':'in', 'label':'Telangana'},
    {'key':'intr','value':'intr','flag':'in', 'label':'Tripura'},
    {'key':'inut','value':'inut','flag':'in', 'label':'Uttarakhand'},
    {'key':'inup','value':'inup','flag':'in', 'label':'Uttar Pradesh'},
    {'key':'inwb','value':'inwb','flag':'in', 'label':'West Bengal'},
    {'key':'inan','value':'inan','flag':'in', 'label':'Andaman and Nicobar Islands'},
    {'key':'inch','value':'inch','flag':'in', 'label':'Chandigarh'},
    {'key':'indn','value':'indh','flag':'in', 'label':'Dadra and Nagar Haveli'},
    {'key':'indn','value':'indn','flag':'in', 'label':'Daman and Diu'},
    {'key':'indl','value':'indl','flag':'in', 'label':'Delhi'},
    {'key':'injk','value':'injk','flag':'in', 'label':'Jammu and Kashmir'},
    {'key':'inla','value':'inla','flag':'in', 'label':'Ladakh'},
    {'key':'inld','value':'inld','flag':'in', 'label':'Lakshadweep'},
    {'key':'inpy','value':'inpy','flag':'in', 'label':'Puducherry'},
  ];

export const REGION_CODES_TO_NAMES = {
	'in'  : 'India',
  'inap': 'Andhra Pradesh',
  'inar': 'Arunachal Pradesh',
  'inas': 'Assam',
  'inbr': 'Bihar',
  'inct': 'Chhattisgarh',
  'inga': 'Goa',
  'ingj': 'Gujarat',
  'inhr': 'Haryana',
  'inhp': 'Himachal Pradesh',
  'injh': 'Jharkhand',
  'inka': 'Karnataka',
  'inkl': 'Kerala',
  'inmp': 'Madhya Pradesh',
  'inmh': 'Maharashtra',
  'inmn': 'Manipur',
  'inml': 'Meghalaya',
  'inmz': 'Mizoram',
  'innl': 'Nagaland',
  'inor': 'Odisha',
  'inpb': 'Punjab',
  'inrj': 'Rajasthan',
  'insk': 'Sikkim',
  'intn': 'Tamil Nadu',
  'intg': 'Telangana',
  'intr': 'Tripura',
  'inut': 'Uttarakhand',
  'inup': 'Uttar Pradesh',
  'inwb': 'West Bengal',
  'inan': 'Andaman and Nicobar Islands',
  'inch': 'Chandigarh',
  // 'indn': 'Dadra and Nagar Haveli',
  'indn': 'Dadra and Nagar Haveli and Daman and Diu',
  'indh': 'Daman and Diu',
  'indl': 'Delhi',
  'injk': 'Jammu and Kashmir',
  'inla': 'Ladakh',
  'inld': 'Lakshadweep',
  'inpy': 'Puducherry',
};

export const MAP_DIR = process.env.PUBLIC_URL+'/maps/';

const mapFileIndianStates=(name)=>{
    console.log(MAP_DIR+name.replace(/\s/g,"").toLocaleLowerCase()+".json");
    return MAP_DIR+name.replace(/\s/g,"").toLocaleLowerCase()+".json";
}

const featureCollectionObjectIndianStates=(name)=>{
    console.log(name.replace(/\s/g,"").toLowerCase()+'_district');
    return name.replace(/\s/g,"").toLowerCase()+'_district';
}

// const genericMapFile=(name)=>{
//     return MAP_DIR+name.toLowerCase()+'.json';
// }

export const MAP_INFO={
    India: {
        name: 'india',
        projectionType: 'geoMercator',
        projectionLib: 'd3',
        mapFile: ()=>{return MAP_DIR + 'india_dist.json'},
        propertyField: 'st_nm',
        featureCollectionObject: ()=>{return 'india-states'},
        dataObjectForRegionName: 'state'
    },
    World: {
        name: 'world',
        projectionType: 'geoCylindricalStereographic',
        projectionLib: 'dgp',
        mapFile: ()=>{return MAP_DIR + 'world50_noA.json'},
        propertyField: 'name',
        featureCollectionObject: ()=>{return 'countries'}
    },
    INDIAN_STATES: {
        name: 'INDIAN_STATES',
        projectionType: 'geoMercator',
        projectionLib: 'd3',
        mapFile: mapFileIndianStates,
        propertyField: 'district',
        featureCollectionObject: featureCollectionObjectIndianStates,
        dataObjectForRegionName: 'district'
    }
}

export const PROJECTION_INFO={
    geoMercator: {
        'name': 'geoMercator',
        'd3package': 'd3',
    },
    geoCylindricalStereographic: {
        'name': 'geoCylindricalStereographic',
        'd3package': 'dgp',
    },
    geoPatterson: {
        'name': 'geoPatterson',
        'd3package': 'dgp',
    }, 
    geoMiller: {
        'name': 'geoMiller',
        'd3package': 'dgp',
    },
    geoEquirectangular: {
        'name': 'geoEquirectangular',
        'd3package': 'dgp',
    }
}

export const STATE_CODE_APPEND_COUNTRY_CODE = {
  'ap':'inap',
  'ar':'inar',
  'as':'inas',
  'br':'inbr',
  'ct':'inct',
  'ga':'inga',
  'gj':'ingj',
  'hr':'inhr',
  'hp':'inhp',
  'jh':'injh',
  'ka':'inka',
  'kl':'inkl',
  'mp':'inmp',
  'mh':'inmh',
  'mn':'inmn',
  'ml':'inml',
  'mz':'inmz',
  'nl':'innl',
  'or':'inor',
  'pb':'inpb',
  'rj':'inrj',
  'sk':'insk',
  'tn':'intn',
  'tg':'intg',
  'tr':'intr',
  'ut':'inut',
  'up':'inup',
  'wb':'inwb',
  'an':'inan',
  'ch':'inch',
  'dn':'indn',
  'dh':'indh',
  'dd':'indd',
  'dl':'indl',
  'jk':'injk',
  'la':'inla',
  'ld':'inld',
  'py':'inpy',
}

export const STATE_CODES_TO_NAMES = {
    inap: 'Andhra Pradesh',
    inar: 'Arunachal Pradesh',
    inas: 'Assam',
    inbr: 'Bihar',
    inct: 'Chhattisgarh',
    inga: 'Goa',
    ingj: 'Gujarat',
    inhr: 'Haryana',
    inhp: 'Himachal Pradesh',
    injh: 'Jharkhand',
    inka: 'Karnataka',
    inkl: 'Kerala',
    inmp: 'Madhya Pradesh',
    inmh: 'Maharashtra',
    inmn: 'Manipur',
    inml: 'Meghalaya',
    inmz: 'Mizoram',
    innl: 'Nagaland',
    inor: 'Odisha',
    inpb: 'Punjab',
    inrj: 'Rajasthan',
    insk: 'Sikkim',
    intn: 'Tamil Nadu',
    intg: 'Telangana',
    intr: 'Tripura',
    inut: 'Uttarakhand',
    inup: 'Uttar Pradesh',
    inwb: 'West Bengal',
    inan: 'Andaman and Nicobar Islands',
    inch: 'Chandigarh',
    // indn: 'Dadra and Nagar Haveli',
    indn: 'Dadra and Nagar Haveli and Daman and Diu',
    indh: 'Daman and Diu',
    indl: 'Delhi',
    injk: 'Jammu and Kashmir',
    inla: 'Ladakh',
    inld: 'Lakshadweep',
    inpy: 'Puducherry',
  };

  export const STATE_NAMES_TO_CODES = {
     'Andhra Pradesh':{code:'inap',fileUrl:'INDIAN_STATES'},
     'Arunachal Pradesh':{code:'inar',fileUrl:'INDIAN_STATES'},
     'Assam':{code:'inas',fileUrl:'INDIAN_STATES'},
     'Bihar':{code:'inbr',fileUrl:'INDIAN_STATES'},
     'Chhattisgarh':{code:'inct',fileUrl:'INDIAN_STATES'},
     'Goa':{code:'inga',fileUrl:'INDIAN_STATES'},
     'Gujarat':{code:'ingj',fileUrl:'INDIAN_STATES'},
     'Haryana':{code:'inhr',fileUrl:'INDIAN_STATES'},
     'Himachal Pradesh':{code:'inhp',fileUrl:'INDIAN_STATES'},
     'Jharkhand':{code:'injh',fileUrl:'INDIAN_STATES'},
     'Karnataka':{code:'inka',fileUrl:'INDIAN_STATES'},
     'Kerala':{code:'inkl',fileUrl:'INDIAN_STATES'},
     'Madhya Pradesh':{code:'inmp',fileUrl:'INDIAN_STATES'},
     'Maharashtra':{code:'inmh',fileUrl:'INDIAN_STATES'},
     'Manipur':{code:'inmn',fileUrl:'INDIAN_STATES'},
     'Meghalaya':{code:'inml',fileUrl:'INDIAN_STATES'},
     'Mizoram':{code:'inmz',fileUrl:'INDIAN_STATES'},
     'Nagaland':{code:'innl',fileUrl:'INDIAN_STATES'},
     'Odisha':{code:'inor',fileUrl:'INDIAN_STATES'},
     'Punjab':{code:'inpb',fileUrl:'INDIAN_STATES'},
     'Rajasthan':{code:'inrj',fileUrl:'INDIAN_STATES'},
     'Sikkim':{code:'insk',fileUrl:'INDIAN_STATES'},
     'Tamil Nadu':{code:'intn',fileUrl:'INDIAN_STATES'},
     'Telangana':{code:'intg',fileUrl:'INDIAN_STATES'},
     'Tripura':{code:'intr',fileUrl:'INDIAN_STATES'},
     'Uttarakhand':{code:'inut',fileUrl:'INDIAN_STATES'},
     'Uttar Pradesh':{code:'inup',fileUrl:'INDIAN_STATES'},
     'West Bengal':{code:'inwb',fileUrl:'INDIAN_STATES'},
     'Andaman and Nicobar Islands':{code:'inan',fileUrl:'INDIAN_STATES'},
     'Chandigarh':{code:'inch',fileUrl:'INDIAN_STATES'},
     'Dadra and Nagar Haveli':{code:'indn',fileUrl:'INDIAN_STATES'},
     'Daman and Diu':{code:'indn',fileUrl:'INDIAN_STATES'},
     'Dadra and Nagar Haveli and Daman and Diu':{code:'indn',fileUrl:'INDIAN_STATES'},
     'Delhi':{code:'indl',fileUrl:'INDIAN_STATES'},
     'Jammu and Kashmir':{code:'injk',fileUrl:'INDIAN_STATES'},
     'Ladakh':{code:'inla',fileUrl:'INDIAN_STATES'},
     'Lakshadweep':{code:'inld',fileUrl:'INDIAN_STATES'},
     'Puducherry':{code:'inpy',fileUrl:'INDIAN_STATES'},
  };

  export const DISTRICTS_ARRAY = [
    {
      district: 'Nicobars',
      othernamesspellings: '',
      state: 'Andaman and Nicobar Islands',
    },
    {
      district: 'North and Middle Andaman',
      othernamesspellings: '',
      state: 'Andaman and Nicobar Islands',
    },
    {
      district: 'South Andaman',
      othernamesspellings: '',
      state: 'Andaman and Nicobar Islands',
    },
    {
      district: 'Anantapur',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Chittoor',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'East Godavari',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Guntur',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Krishna',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Kurnool',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Prakasam',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'S.P.S. Nellore',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Srikakulam',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Visakhapatnam',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Vizianagaram',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'West Godavari',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Y.S.R.',
      othernamesspellings: '',
      state: 'Andhra Pradesh',
    },
    {
      district: 'Anjaw',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Changlang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'East Kameng',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'East Siang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Kamle',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Kra Daadi',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Kurung Kumey',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Lepa Rada',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Lohit',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Longding',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Lower Dibang Valley',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Lower Siang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Lower Subansiri',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Namsai',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Pakke Kessang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Papum Pare',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Shi Yomi',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Siang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Tawang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Tirap',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Upper Dibang Valley',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Upper Siang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Upper Subansiri',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'West Kameng',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'West Siang',
      othernamesspellings: '',
      state: 'Arunachal Pradesh',
    },
    {
      district: 'Baksa',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Barpeta',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Biswanath',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Bongaigaon',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Cachar',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Charaideo',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Chirang',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Darrang',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Dhemaji',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Dhubri',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Dibrugarh',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Dima Hasao',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Goalpara',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Golaghat',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Hailakandi',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Hojai',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Jorhat',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Kamrup',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Kamrup Metropolitan',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Karbi Anglong',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Karimganj',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Kokrajhar',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Lakhimpur',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Majuli',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Morigaon',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Nagaon',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Nalbari',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Sivasagar',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Sonitpur',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'South Salmara Mancachar',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Tinsukia',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Udalguri',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'West Karbi Anglong',
      othernamesspellings: '',
      state: 'Assam',
    },
    {
      district: 'Araria',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Arwal',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Aurangabad',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Banka',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Begusarai',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Bhagalpur',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Bhojpur',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Buxar',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Darbhanga',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Gaya',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Gopalganj',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Jamui',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Jehanabad',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Kaimur Bhabua',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Katihar',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Khagaria',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Kishanganj',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Lakhisarai',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Madhepura',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Madhubani',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Munger',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Muzaffarpur',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Nalanda',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Nawada',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'West Champaran',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Patna',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'East Champaran',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Purnia',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Rohtas',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Saharsa',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Samastipur',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Saran',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Sheikhpura',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Sheohar',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Sitamarhi',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Siwan',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Supaul',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Vaishali',
      othernamesspellings: '',
      state: 'Bihar',
    },
    {
      district: 'Chandigarh',
      othernamesspellings: '',
      state: 'Chandigarh',
    },
    {
      district: 'Balod',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Baloda Bazar',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Balrampur',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Bametara',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Bastar',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Bijapur',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Bilaspur',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Dakshin Bastar Dantewada',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Dhamtari',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Durg',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Gariaband',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Janjgir Champa',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Jashpur',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Kabeerdham',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Kondagaon',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Korba',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Koriya',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Mahasamund',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Mungeli',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Narayanpur',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Raigarh',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Raipur',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Rajnandgaon',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Sukma',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Surajpur',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Surguja',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Uttar Bastar Kanker',
      othernamesspellings: '',
      state: 'Chhattisgarh',
    },
    {
      district: 'Dadra and Nagar Haveli',
      othernamesspellings: '',
      state: 'Dadra and Nagar Haveli',
    },
    {
      district: 'Daman',
      othernamesspellings: '',
      state: 'Daman And Diu',
    },
    {
      district: 'Diu',
      othernamesspellings: '',
      state: 'Daman And Diu',
    },
    {
      district: 'Central Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'East Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'New Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'North Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'North East Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'North West Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'Shahdara',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'South Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'South East Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'South West Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'West Delhi',
      othernamesspellings: '',
      state: 'Delhi',
    },
    {
      district: 'North Goa',
      othernamesspellings: '',
      state: 'Goa',
    },
    {
      district: 'South Goa',
      othernamesspellings: '',
      state: 'Goa',
    },
    {
      district: 'Ahmadabad',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Amreli',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Anand',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Aravalli',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Banas Kantha',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Bharuch',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Bhavnagar',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Botad',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Chota Udaipur',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Devbhumi Dwarka',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Dohad',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Gandhinagar',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Gir Somnath',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Jamnagar',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Junagadh',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Kachchh',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Kheda',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Mahesana',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Mahisagar',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Morbi',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Narmada',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Navsari',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Panch Mahals',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Patan',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Porbandar',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Rajkot',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Sabar Kantha',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Surat',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Surendranagar',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Tapi',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'The Dangs',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Vadodara',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Valsad',
      othernamesspellings: '',
      state: 'Gujarat',
    },
    {
      district: 'Ambala',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Bhiwani',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Charki Dadri',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Faridabad',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Fatehabad',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Gurugram',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Hisar',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Jhajjar',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Jind',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Kaithal',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Karnal',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Kurukshetra',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Mahendragarh',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Nuh',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Palwal',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Panchkula',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Panipat',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Rewari',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Rohtak',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Sirsa',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Sonipat',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Yamunanagar',
      othernamesspellings: '',
      state: 'Haryana',
    },
    {
      district: 'Bilaspur',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Chamba',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Hamirpur',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Kangra',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Kinnaur',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Kullu',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Lahul and Spiti',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Mandi',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Shimla',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Sirmaur',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Solan',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Una',
      othernamesspellings: '',
      state: 'Himachal Pradesh',
    },
    {
      district: 'Anantnag',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Badgam',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Bandipore',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Baramula',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Doda',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Ganderbal',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Jammu',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Kathua',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Kishtwar',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Kulgam',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Kupwara',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Mirpur',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Muzaffarabad',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Pulwama',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Punch',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Rajouri',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Ramban',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Reasi',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Samba',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Shupiyan',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Srinagar',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Udhampur',
      othernamesspellings: '',
      state: 'Jammu and Kashmir',
    },
    {
      district: 'Bokaro',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Chatra',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Deoghar',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Dhanbad',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Dumka',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Garhwa',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Giridih',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Godda',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Gumla',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Hazaribagh',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Jamtara',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Khunti',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Kodarma',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Latehar',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Lohardaga',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Pakur',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Palamu',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Pashchimi Singhbhum',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Purbi Singhbhum',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Ramgarh',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Ranchi',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Sahibganj',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Saraikela-Kharsawan',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Simdega',
      othernamesspellings: '',
      state: 'Jharkhand',
    },
    {
      district: 'Bagalkote',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Ballari',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Belagavi',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Bengaluru',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Bengaluru Rural',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Bidar',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Chamarajanagara',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Chikkaballapura',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Chikkamagaluru',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Chitradurga',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Dakshina Kannada',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Davanagere',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Dharwad',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Gadag',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Hassan',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Haveri',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Kalaburagi',
      othernamesspellings: 'Gulbarga',
      state: 'Karnataka',
    },
    {
      district: 'Kodagu',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Kolar',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Koppal',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Mandya',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Mysuru',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Raichur',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Ramanagara',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Shivamogga',
      othernamesspellings: 'Shimoga',
      state: 'Karnataka',
    },
    {
      district: 'Tumakuru',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Udupi',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Uttara Kannada',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Vijayapura',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Yadgir',
      othernamesspellings: '',
      state: 'Karnataka',
    },
    {
      district: 'Alappuzha',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Ernakulam',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Idukki',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Kannur',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Kasaragod',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Kollam',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Kottayam',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Kozhikode',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Malappuram',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Palakkad',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Pathanamthitta',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Thiruvananthapuram',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Thrissur',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Wayanad',
      othernamesspellings: '',
      state: 'Kerala',
    },
    {
      district: 'Kargil',
      othernamesspellings: '',
      state: 'Ladakh',
    },
    {
      district: 'Leh',
      othernamesspellings: '',
      state: 'Ladakh',
    },
    {
      district: 'Lakshadweep',
      othernamesspellings: '',
      state: 'Lakshadweep',
    },
    {
      district: 'Agar Malwa',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Alirajpur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Anuppur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Ashoknagar',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Balaghat',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Barwani',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Betul',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Bhind',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Bhopal',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Burhanpur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Chhatarpur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Chhindwara',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Damoh',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Datia',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Dewas',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Dhar',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Dindori',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Khandwa',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Guna',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Gwalior',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Harda',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Hoshangabad',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Indore',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Jabalpur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Jhabua',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Katni',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Mandla',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Mandsaur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Morena',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Narsimhapur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Neemuch',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Niwari',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Panna',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Raisen',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Rajgarh',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Ratlam',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Rewa',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Sagar',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Satna',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Sehore',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Seoni',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Shahdol',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Shajapur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Sheopur',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Shivpuri',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Sidhi',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Singrauli',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Tikamgarh',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Ujjain',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Umaria',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Vidisha',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Khargone',
      othernamesspellings: '',
      state: 'Madhya Pradesh',
    },
    {
      district: 'Ahmadnagar',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Akola',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Amravati',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Aurangabad',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Bhandara',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Bid',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Buldana',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Chandrapur',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Dhule',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Gadchiroli',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Gondiya',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Hingoli',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Jalgaon',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Jalna',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Kolhapur',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Latur',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Mumbai',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Mumbai Suburban',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Nagpur',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Nanded',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Nandurbar',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Nashik',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Osmanabad',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Palghar',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Parbhani',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Pune',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Raigarh',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Ratnagiri',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Sangli',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Satara',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Sindhudurg',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Solapur',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Thane',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Wardha',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Washim',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Yavatmal',
      othernamesspellings: '',
      state: 'Maharashtra',
    },
    {
      district: 'Bishnupur',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Chandel',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Churachandpur',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Imphal East',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Imphal West',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Jiribam',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Kakching',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Kamjong',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Kangpokpi',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Noney',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Pherzawl',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Senapati',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Tamenglong',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Tengnoupal',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Thoubal',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'Ukhrul',
      othernamesspellings: '',
      state: 'Manipur',
    },
    {
      district: 'East Garo Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'East Jaintia Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'East Khasi Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'North Garo Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'Ribhoi',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'South Garo Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'South West Garo Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'South West Khasi Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'West Garo Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'West Jaintia Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'West Khasi Hills',
      othernamesspellings: '',
      state: 'Meghalaya',
    },
    {
      district: 'Aizawl',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Champhai',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Kolasib',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Lawngtlai',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Lunglei',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Mamit',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Saiha',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Serchhip',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Dimapur',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Kiphire',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Kohima',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Longleng',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Mokokchung',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Mon',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Peren',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Phek',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Tuensang',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Wokha',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Zunheboto',
      othernamesspellings: '',
      state: 'Nagaland',
    },
    {
      district: 'Anugul',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Balangir',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Baleshwar',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Bargarh',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Baudh',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Bhadrak',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Cuttack',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Debagarh',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Dhenkanal',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Gajapati',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Ganjam',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Jagatsinghapur',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Jajapur',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Jharsuguda',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Kalahandi',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Kandhamal',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Kendrapara',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Kendujhar',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Khordha',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Koraput',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Malkangiri',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Mayurbhanj',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Nabarangapur',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Nayagarh',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Nuapada',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Puri',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Rayagada',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Sambalpur',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Subarnapur',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Sundargarh',
      othernamesspellings: '',
      state: 'Odisha',
    },
    {
      district: 'Karaikal',
      othernamesspellings: '',
      state: 'Puducherry',
    },
    {
      district: 'Mahe',
      othernamesspellings: '',
      state: 'Puducherry',
    },
    {
      district: 'Puducherry',
      othernamesspellings: '',
      state: 'Puducherry',
    },
    {
      district: 'Yanam',
      othernamesspellings: '',
      state: 'Puducherry',
    },
    {
      district: 'Amritsar',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Barnala',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Bathinda',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Faridkot',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Fatehgarh Sahib',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Fazilka',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Firozpur',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Gurdaspur',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Hoshiarpur',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Jalandhar',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Kapurthala',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Ludhiana',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Mansa',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Moga',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Pathankot',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Patiala',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Rupnagar',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'S.A.S. Nagar',
      othernamesspellings: 'Mohali',
      state: 'Punjab',
    },
    {
      district: 'Sangrur',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Shahid Bhagat Singh Nagar',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Sri Muktsar Sahib',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Tarn Taran',
      othernamesspellings: '',
      state: 'Punjab',
    },
    {
      district: 'Ajmer',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Alwar',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Banswara',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Baran',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Barmer',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Bharatpur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Bhilwara',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Bikaner',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Bundi',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Chittaurgarh',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Churu',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Dausa',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Dhaulpur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Dungarpur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Ganganagar',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Hanumangarh',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Jaipur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Jaisalmer',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Jalore',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Jhalawar',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Jhunjhunu',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Jodhpur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Karauli',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Kota',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Nagaur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Pali',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Pratapgarh',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Rajsamand',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Sawai Madhopur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Sikar',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Sirohi',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Tonk',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'Udaipur',
      othernamesspellings: '',
      state: 'Rajasthan',
    },
    {
      district: 'East District',
      othernamesspellings: '',
      state: 'Sikkim',
    },
    {
      district: 'North District',
      othernamesspellings: '',
      state: 'Sikkim',
    },
    {
      district: 'South District',
      othernamesspellings: '',
      state: 'Sikkim',
    },
    {
      district: 'West District',
      othernamesspellings: '',
      state: 'Sikkim',
    },
    {
      district: 'Ariyalur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Chennai',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Coimbatore',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Cuddalore',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Dharmapuri',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Dindigul',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Erode',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Kancheepuram',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Kanniyakumari',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Karur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Krishnagiri',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Madurai',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Nagapattinam',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Namakkal',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Perambalur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Pudukkottai',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Ramanathapuram',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Salem',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Sivaganga',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Thanjavur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'The Nilgiris',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Theni',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Thiruvallur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Thiruvarur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Thoothukkudi',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Tiruchirappalli',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Tirunelveli',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Tiruppur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Tiruvannamalai',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Vellore',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Viluppuram',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Virudhunagar',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Adilabad',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Bhadradri Kothagudem',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Hyderabad',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Jagitial',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Jangoan',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Jayashankar',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Jogulamba Gadwal',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Kamareddy',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Karimnagar',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Khammam',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Kumuram Bheem Asifabad',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Mahabubabad',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Mahabubnagar',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Mancherial',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Medak',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Medchal Malkajgiri',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Mulugu',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Nagarkurnool',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Nalgonda',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Narayanpet',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Nirmal',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Nizamabad',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Peddapalli',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Rajanna Sircilla',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Ranga Reddy',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Sangareddy',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Siddipet',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Suryapet',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Vikarabad',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Wanaparthy',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Warangal Rural',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Warangal Urban',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Yadadri Bhuvanagiri',
      othernamesspellings: '',
      state: 'Telangana',
    },
    {
      district: 'Dhalai',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'Gomati',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'Khowai',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'North Tripura',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'Sipahijala',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'South Tripura',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'Unokoti',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'West Tripura',
      othernamesspellings: '',
      state: 'Tripura',
    },
    {
      district: 'Agra',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Aligarh',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Ambedkar Nagar',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Amethi',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Amroha',
      othernamesspellings: 'Jyotiba Phule Nagar',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Auraiya',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Azamgarh',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Baghpat',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Bahraich',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Ballia',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Balrampur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Banda',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Bara Banki',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Bareilly',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Basti',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Bhadohi',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Bijnor',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Budaun',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Bulandshahr',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Chandauli',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Chitrakoot',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Deoria',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Etah',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Etawah',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Faizabad',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Farrukhabad',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Fatehpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Firozabad',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Gautam Buddha Nagar',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Ghaziabad',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Ghazipur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Gonda',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Gorakhpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Hamirpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Hapur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Hardoi',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Hathras',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Jalaun',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Jaunpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Jhansi',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Kannauj',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Kanpur Dehat',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Kanpur Nagar',
      othernamesspellings: 'Kanpur city',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Kasganj',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Kaushambi',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Kheri',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Kushinagar',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Lalitpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Lucknow',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Mahoba',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Mahrajganj',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Mainpuri',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Mathura',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Mau',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Meerut',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Mirzapur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Moradabad',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Muzaffarnagar',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Pilibhit',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Pratapgarh',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Prayagraj',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Rae Bareli',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Rampur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Saharanpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Sambhal',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Sant Kabir Nagar',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Shahjahanpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Shamli',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Shrawasti',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Siddharthnagar',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Sitapur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Sonbhadra',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Sultanpur',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Unnao',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Varanasi',
      othernamesspellings: '',
      state: 'Uttar Pradesh',
    },
    {
      district: 'Almora',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Bageshwar',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Chamoli',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Champawat',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Dehradun',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Haridwar',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Nainital',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Pauri Garhwal',
      othernamesspellings: 'Pauri or just Garhwal',
      state: 'Uttarakhand',
    },
    {
      district: 'Pithoragarh',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Rudraprayag',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Tehri Garhwal',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Udham Singh Nagar',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Uttarkashi',
      othernamesspellings: '',
      state: 'Uttarakhand',
    },
    {
      district: 'Alipurduar',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Bankura',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Birbhum',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Cooch Behar',
      othernamesspellings: 'Coochbehar',
      state: 'West Bengal',
    },
    {
      district: 'Dakshin Dinajpur',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Darjeeling',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Hooghly',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Howrah',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Jalpaiguri',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Jhargram',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Kalimpong',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Kolkata',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Maldah',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Medinipur West',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Murshidabad',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Nadia',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'North 24 Parganas',
      othernamesspellings: '24 paraganas north\r',
      state: 'West Bengal',
    },
    {
      district: 'Paschim Bardhaman',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Purba Bardhaman',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: 'Medinipur East',
      othernamesspellings: 'Purba Medinipur',
      state: 'West Bengal',
    },
    {
      district: 'Purulia',
      othernamesspellings: 'puruliya',
      state: 'West Bengal',
    },
    {
      district: 'South 24 Parganas',
      othernamesspellings: '24 south parganas',
      state: 'West Bengal',
    },
    {
      district: 'Uttar Dinajpur',
      othernamesspellings: '',
      state: 'West Bengal',
    },
    {
      district: '',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: '',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: '',
      othernamesspellings: '',
      state: 'Mizoram',
    },
    {
      district: 'Tenkasi',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Chengalpattu',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Ranipet',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Kallakurichi',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
    {
      district: 'Tirupathur',
      othernamesspellings: '',
      state: 'Tamil Nadu',
    },
  ];
  
