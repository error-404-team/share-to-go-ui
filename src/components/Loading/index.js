import React from "react";
import './styles/loading.css'

class Loading extends React.Component {
    render() {
        return (
            <div className="progress-bar">
                <span className="bar">
                    <span className="progress"></span>
                </span>
            </div>
        )
    }
}

export default Loading