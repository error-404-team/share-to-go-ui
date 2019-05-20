import React from 'react'
import {withStyles} from '@material-ui/core/styles'
const StyesChat = theme =>({
    borderinput:{
        position: 'absolute',
        marginLeft: '3%',
        height: '27px',
        width: '52%',
        border: '0px',
        marginTop: '1%',
        fontSize: '18px',
        backgroundColor: '#ffffff',
    }
    }
)
class TabChat extends React.Component {
    render() {
        return (
            <React.Fragment>
 <input type="text"  name="message" placeholder="พิมพ์ข้อความ..." className={this.props.classes.borderinput} ></input>
{/* แชท ตารางช่องให้ใส่ข้อความ #ลิ้งไปยังหน้าFromChat <TapCht/> */}
            </React.Fragment>
        )
    }
}
export default withStyles(StyesChat)(TabChat)