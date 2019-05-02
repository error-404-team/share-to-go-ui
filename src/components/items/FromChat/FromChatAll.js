import React from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import {withStyles} from '@material-ui/core/styles'
import 'react-chat-widget/lib/styles.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
const chat = theme =>({
    Stye:{
        position:'absolute',
        bottom:'0%',
        display:'flex', 
        backgroundColor: '#f4f7f9',
        width:'73%',
        height: '32px',
        padding: '5px',
        borderRadius: '14px',
        paddingLeft: '44px'

    },
    iconsI:{    border:'0px',
    backgroundColor:'#ffffff',
    marginLeft:'0%',
    position: 'absolute',
    left: '2%',
     
    }

})
class FromChatAll extends React.Component {

  render() {
    return (
      <div>
        <form className={this.props.classes.Stye}>
        <input type="text" class="rcw-new-message" name="message" placeholder="Type a message..." autocomplete="off"></input>
        <button type="submit" class={this.props.classes.iconsI}>
        <InsertEmoticonIcon></InsertEmoticonIcon>
        </button>
        <button type="submit" class="rcw-send">
        <SendIcon></SendIcon>
        </button>
        </form>
        
      </div>
    );
  } 
}

export default withStyles(chat) (FromChatAll);