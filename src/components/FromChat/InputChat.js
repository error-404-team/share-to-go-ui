import React from 'react'
class InputChat extends React.Component {

    state = {
        msg: ""
    }

    onTextChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    onClickButton = () => {
        this.props.onClickButtonHandler(this.state.msg)
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.onTextChange} type="text" class="rcw-new-message" name="message" placeholder="พิมพ์ข้อความ" autocomplete="off" />
                <span className="input-group-btn">
                    <button className="btn btn-primary btn-sm"
                        onClick={this.onClickButton}
                        id="btn-chat">
                        Send</button>
                </span>
            </React.Fragment>
        )
    }
}

export default InputChat