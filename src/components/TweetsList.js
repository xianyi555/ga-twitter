import React, { Component } from 'react';
import Tweet from './Tweet';

class TweetsList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="tweets-list">
        { this.props.data.map(function(eachTweet){
          return <Tweet author={ eachTweet.author } text={ eachTweet.text } />
        }) }
      </div>
    );
  }
}

export default TweetsList;
