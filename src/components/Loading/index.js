import React from "react";
import './styles/loading.css'

class Loading extends React.Component {
    render() {
        return (
            <div class="progress-bar">
                <span class="bar">
                    <span class="progress"></span>
                </span>
            </div>
        )
    }
}

export default Loading