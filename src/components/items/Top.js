import React from 'react'
import '../../App.css'
import {withStyles} from '@material-ui/core/styles'
// import color from '@material-ui/core/colors/deepOrange';

const bts = theme => ({
    borderS: {
        border: '1px solid white',
        borderRadius: '10px',
    },
    centerr:{
        margin:'auto',
        width:'50%',
    },
    BGcolor:{
        backgroundColor: '#4A83D9' ,}
     
})

class Top extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {

    }
    render() {
//  const {classes } = this.props

        return (
            <React.Fragment>
        
                <div className={this.props.classes.BGcolor} >
                    <header className={this.props.classes.centerr} >
                    <br></br>
                        <input className={this.props.classes.borderS} placeholder="ค้นหา"></input>
                        <br></br>
                        <br></br>
                        <input className={this.props.classes.borderS} ></input>
                        </header>
                        <br></br>
                        <h3>text</h3>
                    <p>text</p>
                    <input></input>
                    <p>text</p>
                    <input></input>
                    <br></br>
                    <button> ร่วมแช</button>
                </div>
                
                
            </React.Fragment>
        )
    }
}
export default withStyles(bts)(Top)