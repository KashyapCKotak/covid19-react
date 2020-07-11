import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/neumorphism.css';
import './styles/customStyles.css';
import 'axios-progress-bar/dist/nprogress.css'
import MainContent from './components/MainContent';
import {DataContext} from './components/contexts/DataContext';

class App extends React.Component{

  constructor(props){
    super(props);

    this.updateLocationCode = (newLocCode) => {
      console.log("Setting APP State", newLocCode);
      this.setState({
          locationCode : newLocCode
      })
    }

    this.state={
      locationCode: 'in',
      updateLocationCode: this.updateLocationCode
    }

  }

  render () {
    console.log("rendering app");
    return (
      // <div className="App">
      //   <div id="map">
      //   </div>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      // <FlatMap mapName='damananddiu'/>
      <DataContext.Provider value={this.state}>
        <MainContent locationCode={this.state.locationCode} updateLocationCode={this.updateLocationCode}/>
      </DataContext.Provider>
    )
  }
}

export default App;
