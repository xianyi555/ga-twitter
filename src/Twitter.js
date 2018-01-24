import React, { Component } from 'react';
import './Twitter.css';
import $ from 'jquery';

const tweetsFromServer = [
  {
    "author": "Michael Scott",
    "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
    "author": "Jeff Bezos",
    "text": "In the end, we are our choices."
  }
];

class Twitter extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
    // this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
    // this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }
  // loadTweetsFromServer() {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, (data) => {
  //       // Set state in step 6 of the exercise!
  //     }
  //   );
  // }
  // handleTweetSubmit(author, text) {
  //   const submittedTweet = { author: author, text: text };
  //
  //   // POST to add tweet to database
  //   $.post(this.props.url, submittedTweet, (data) => {
  //       // Set state in step 10 of the exercise!
  //     }
  //   );
  // }
  // componentDidMount() {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // }
  render() {
    return (
      <div className="twitter">
        <h1>Welcome to Twitter</h1>
      </div>
    );
  }
}

export default Twitter;
