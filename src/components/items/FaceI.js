import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// import color from '@material-ui/core/colors/deepOrange';

const bts = theme => ({
    borderS: {
        border: '1px solid white',
        borderRadius: '10px',
        height:'18px'
    },
    borderSI: {
        border: '1px solid white',
        borderRadius: '5px',
        height: '26px',
        margin:'auto',
        width: '60px',
        position: 'fixed',
        right:'40%'

    },
    ButtonCR: {
     
        border: '1px solid white',
        borderRadius: '5px',
        width: '100%',
        height: '50px',
        color: 'white',
        position: 'absolute',
        bottom: '0%',
        backgroundColor: '#20C53C',
      
    },
    // PositionI:{
    //     position: 'absolute',
    //     right:'10',
    // },
    centerr: {
        margin: 'auto',
        width: '50%',
    },
    centerrII: {
        margin: 'auto',
        width: '60%',
        color: 'white',
    },
    centerrI: {
        margin: 'auto',
        width: '95%',
        height: '1px',
        color: 'white',
        backgroundColor: 'white'
    },
    BGcolor: {
        backgroundColor: '#4A83D9',
    },
    // PadingI:{
    //     position: 'fixed',
    //     right:'60%',

    // }
    // floatI: { float: 'left' },
    // floatII:{float:'right'}
})

class FaceI extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>

                <div className={this.props.classes.BGcolor}>
                    <header className={this.props.classes.centerr} >
                        <br></br>
                        <input className={this.props.classes.borderS} placeholder="ค้นหา"></input>
                        <br></br>
                        <br></br>
                        <input className={this.props.classes.borderS} placeholder="เป้าหมาย" ></input>
                    </header>
                    <br></br>
                    <hr className={this.props.classes.centerrI}></hr>
                    <br></br>
                    <br></br>
                    <h3 className={this.props.classes.centerrII}>เวลาที่คาดว่าจะเดินทาง</h3>
                    <p >เริ่มต้น</p>
                    <input className={this.props.classes.borderSI} placeholder="15.00 น"></input>
                    <p >สิ้นสุด</p>
                    <input className={this.props.classes.borderSI} placeholder="17.00 น"></input>
                    <br></br>
                    <button className={this.props.classes.ButtonCR} >ร่วมแชร์</button>
                </div>


            </React.Fragment>
        )
    }
}
export default withStyles(bts)(FaceI)