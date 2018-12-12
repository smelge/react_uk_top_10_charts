import React from 'react';
import ChartItem from './ChartItem.js';

const ChartList = (props)=>{
  const trackArray = props.tracks.map((track,index)=>{
    // console.log("PROPS: ",track);
    return(
      <ChartItem
        key={index}
        name={track["im:name"].label}
        position={index+1}
        artist={track["im:artist"].label}
        cover={track["im:image"]["2"].label}
        url={track["id"].label}
      />
    )
  })

  return(
    <div className="track-list">
      {trackArray}
    </div>
  )
}

export default ChartList;
