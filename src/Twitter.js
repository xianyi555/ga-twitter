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
  constructor() {
    super();
  }
  render() {
    return (
      <div className="twitter">
        <h1>Welcome to Twitter</h1>
      </div>
    );
  }
}

export default Twitter;
