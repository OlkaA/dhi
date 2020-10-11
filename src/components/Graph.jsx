import React, { useState, useEffect, useRef } from "react";
import Plot from 'react-plotly.js';

function Graph(props) {
    const { data } = props;
    const [graphData, setGraphData] = useState(null);

    // useEffect(() => {
    //     fetch(`https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${data.lat}&lon=${data.lon}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('Cop', data)
    //         setGraphData(data)
    //     })
    // }, [props]);
    
    console.log('Graph', graphData)

    return (
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    )
}

export default Graph;