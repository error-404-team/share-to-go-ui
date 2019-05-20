import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    position: {
        marginTop: '0%',
        marginLeft:'0%',
        width: '100%',
        height: '1px',
        color: 'rgb(146, 146, 146)',
        backgroundColor: 'rgb(146, 146, 146)'
    },
    positionsize: {
        marginLeft:'0%',
        width: '60%',
        color: 'rgb(146, 146, 146)',
        marginTop: '3%'

    },
    divposition: {
        marginLeft:'30%'

    },
    positionone: {marginTop:'12%',
    marginLeft:'0%',
    color: 'rgb(146, 146, 146)',

    },
    positiontwo:{marginLeft:'44%',
                marginTop:'2%',
                color: 'rgb(146, 146, 146)',
    },
}
)
class RequestCar extends React.Component {

    render() {
        return (
                <React.Fragment>
            <div className={this.props.classes.divposition}>
                    <h3 className={this.props.classes.positionsize}>{this.props.text}</h3>
                    <span style={{ display: "flex" }}  >
                    <p   className={this.props.classes.positionone}>{this.props.text1}</p>
                    <p className={this.props.classes.positiontwo}>{this.props.text2}</p></span>
                    <hr className={this.props.classes.position}></hr>
                </div>
            </React.Fragment>
        )
    }
}
export default withStyles(bts)(RequestCar)