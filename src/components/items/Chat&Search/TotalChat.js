import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import TabChat from './TabChat';
const chat = theme => ({
  styeinput: {
    display: 'flex',
    backgroundColor: '#ffffff',
    width: '75%',
    height: '32px',
    padding: '5px',
    borderRadius: '20px',
    paddingLeft: '44px',
    marginTop: '125%',
    marginLeft: '6%'
  },
  iconeimoji: {
    border: '0px',
    backgroundColor: '#ffffff',
    marginLeft: '-8%',
    position: 'absolute',
    marginTop: '1%'
  },
  iconsend: {
    border: '0px',
    backgroundColor: '#ffffff',
    marginLeft: '55%',
    position: 'absolute',
    marginTop: '1%'
  },
});
class TotalChat extends React.Component {
  render() {
    return (
      <div>
        <form className={this.props.classes.styeinput}>
          <TabChat />
          <button type="submit" class={this.props.classes.iconeimoji}>
            <InsertEmoticonIcon style={{ color: "grey" }}></InsertEmoticonIcon>
          </button>
          {/* ไอค่อน'อิโมจิ'ซึ่งใส่ในตารางแล้วเปลี่ยนสีให้ลบคอบ */}
          <button type="submit" class={this.props.classes.iconsend}>
            <SendIcon color="primary" ></SendIcon> 
            {/* ไอคอนปุ่มส่ง ในตารางแล้วเปลี่ยนสีให้ลบคอบ */}
          </button>
        </form>
      </div>
    );
  }
}
export default withStyles(chat)(TotalChat);