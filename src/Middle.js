import React from 'react'
import './Middle'
import './App.css'
class Middle extends React.Component {
    constructor(props) {
        super(props)

        this.state = { a: 0 }
    }

    componentDidMount() {

    }
    render() {


        return (
            <React.Fragment>
                <div>
                    <h3>text</h3>
                    <p>text</p>
                    <input></input>
                    <p>text</p>
                    <input></input>
                    <br></br>
                    <button onClick="">ร่วมแชร์</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Middle