import React from 'react';
import ChartList from '../components/ChartList.js';

class ChartContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tracks:[]
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=10/json';
    const request = new XMLHttpRequest();
    request.open('GET',url);

    request.addEventListener("load",()=>{
      if(request.status !==200)return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const feed = data.feed;
      const entries = feed.entry;
      this.setState({tracks:entries})
    });
    request.send();
  }

  render(){
    return(
      <div className="chart-container">
        <h2>UK Top 10</h2>
        <ChartList tracks={this.state.tracks}/>
      </div>
    )
  }
}

export default ChartContainer;
