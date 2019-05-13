import React from 'react'
import './styles/mySidenav.css'
import './styles/menuProfile.css'

export function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.width = "100%";
}

export function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
}

class SidenavUI extends React.Component {

    render() {
        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;
        return (
            <div
                id="mySidenav"
                className="overlay"

            >
                <div
                    style={{
                        width: '100%',
                        height: '5%',
                        backgroundColor: '#4bb5ef',
                    }}
                >
                    <a href="javascript:void(0)" className="closebtn fa fa-close" onClick={() => closeNav()}></a>
                </div>

                <div
                    className="mm-navbars_top"
                >
                    <div className="mm-navbar mm-navbar_size-2">
                        <img src={this.props.store.photoURL} />
                        <span style={{ display: "list-item", fontSize: "18px" }}>{this.props.store.displayName} </span>
                    </div>

                </div>
                <div className="mm-panels">
                    <div id="panel-menu" className="mm-panel mm-panel_opened" style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: "translate3d(0,0,0)",
                        backgroundColor: " #3ba5df"
                    }}>
                        <div className="mm-navbar" aria-hidden="true">
                            <a className="mm-navbar__title">Menu</a></div>
                        <ul className="mm-listview">
                            <li className="mm-listitem">
                                {/* <a href="#/" className="mm-listitem__text">Home</a> */}
                                {this.props.children}
                            </li>

                        </ul>
                    </div>
                </div>
                {/* <div className="overlay-content">
                    {this.props.children}
                </div> */}
            </div>

        )
    }

}

export default SidenavUI;