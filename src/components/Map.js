import React from 'react'

class Map extends React.Component {
    contructor(props){
        super(props);
        this.state={
            nameLoc='world'
        };
    }

    render() {
        return (
          <div>
              <canvas id="current-map"></canvas>
          </div>
        );
      }
}

export default Map;