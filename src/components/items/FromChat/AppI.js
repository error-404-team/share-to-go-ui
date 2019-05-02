import React, { Component } from 'react';
import { Widget} from 'react-chat-widget';

// import 'react-chat-widget/lib/styles.css';

class AppI extends Component {
  componentDidMount() {
    // addResponseMessage("Welcome to this awesome chat!");
  // }
  // handleNewUserMessage = (newMessage) => {
  //   console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div>
        <Widget></Widget>
      </div>
    );
  } 
}

export default AppI;