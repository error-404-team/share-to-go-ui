import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    
})

class CheckNum extends React.Component {

    render() {
        return (
            <span>
                <label>
                    {this.props.textII}
                    <input type={this.props.type} name={this.props.name} value={this.props.value} ></input>
                    {this.props.value} {this.props.text}
                </label>
            </span>
        )
    }
}
export default withStyles(bts)(CheckNum)