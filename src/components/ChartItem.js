import React from 'react';

const ChartItem = (props)=>{
  // console.log("New: ",props.name);
  if(!props.name)return null;
  return(
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="song">
        <div className="position-box">{props.position}</div>
        <div className="info-box">
          <div className="artist-name">
            {props.artist}
          </div>
          <br/>
          <div className="song-title">
            {props.name}
          </div>
        </div>
        <div className="album-art">
          <img src={props.cover} alt={props.name}/>
        </div>
      </div>
    </a>
  )
}

export default ChartItem;
