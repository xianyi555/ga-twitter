import React, { Component } from 'react';
import './Twitter.css';
import TweetForm from './components/TweetForm';
import TweetsList from './components/TweetsList';
import $ from 'jquery';

// const tweetsFromServer = [
//   {
//     "author": "Michael Scott",
//     "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
//   },
//   {
//     "author": "Jeff Bezos",
//     "text": "In the end, we are our choices."
//   }
// ];

class Twitter extends Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }
  handleTweetSubmit(author, text) {
    $.post('/api/tweets', {author: author, text: text}, (newTweetsInDatabase) => {
      this.setState({ tweets: newTweetsInDatabase });
    });
  }
  // conmpnentWillMount is a lifecycle method in React
  // it will always run before render()
  // e.g. server request to get all tweets

  // conmpnentDidMount is another lifecycle method in React
  // it will always run after render()
  // e.g. anything that needs the DOM (like jQuery)
  componentWillMount() {
    $.get('/api/tweets', (fetchedDateFromServer) => {
      // setState to the data I fetched from server
      this.setState({
        tweets: fetchedDateFromServer
      })
    });
  }

  render() {
    return (
      <div className="twitter">
        <header className="jumbotron">
          <div className="container">
            <h1>See what's happening right now.</h1>
            <h3>Find community, conversation, and inspiration about the things you love.</h3>
          </div>
        </header>
        <div className="container">
          <h1>Twitter</h1>
          <TweetForm />
          <TweetsList data={ this.state.tweets } />
        </div>
      </div>
    );
  }
}

export default Twitter;
