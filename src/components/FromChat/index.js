import React, { Component } from 'react';
import InputChat from './InputChat'
import ListChat from './ListChat'
import firebaseApp from '../../Firbase/firebaseApp'


class ChatFrom extends Component {
  
  state = { listMsg: [] }

  constructor(props) {
    super(props)
    var that  = this;
    firebaseApp.database().ref('message/').on('value', function(snapshot) {
      if(snapshot.val() != null) { 
         that.setState({
          listMsg:snapshot.val()
         })
       }
    });
  }

  onClickButtonHandlerData = (msg) => {
    const listMsgData = this.state.listMsg.concat({
      key: Math.random().toString().replace('.',''),
      message: msg
     })
    firebaseApp.database().ref('message/').set(listMsgData);
  }

  render() {
    const listMsg = this.state.listMsg.map( msg => {
      return <p>{msg.message}</p>
    })
    return (
      <div className="container">
        <ListChat
            listMsg = {this.state.listMsg} />
        <InputChat 
            onClickButtonHandler = {this.onClickButtonHandlerData}
        />
      </div>
    );
  }
}

export default ChatFrom;