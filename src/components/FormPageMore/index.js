import React from 'react'
import * as firebase from 'firebase'
import RecipeReviewCard from '../RecipeReviewCard'
import {Link } from "react-router-dom";
import './styles/mySidenav.css'
import './styles/menuProfile.css'
import './styles/input-style.css'


class FormPageMore extends React.Component {

    render() {
        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;
        const { go_link ,photo_url,display_name,name_address,title,data } = this.props
        return (
            <div
                className="overlay-form-page-more"

            >
                <div
                    style={{
                        width: '100%',
                        height: '5%',
                        backgroundColor: '#1D385A',
                    }}
                >
                    <Link to={go_link } className="closebtn-form-page-more fa fa-close" />
                </div>

                <div
                    className="mm-navbars_top-form-page-more"
                >
                    <div className="mm-navbar-form-page-more mm-navbar_size-2-form-page-more">
                        <img src={photo_url} />
                        <div style={{
                            display: "block",
                            fontSize: "18px",
                            float: "right",
                            margin: "40px 0px 8px 0px",
                            width: "60%"
                        }}
                        >
                            <span style={{ float: "left" }}>{display_name} </span>
                            <div>
                                <input style={{
                                    width: "-webkit-fill-available"
                                }} 
                                className="form-control-plaintext-sidenav-push-near-by-users"
                                type="text" 
                                name="start_address" 
                                value={name_address} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                style={{
                    backgroundColor:"#142a46",
                    padding: "8px",
                    textAlign: "center",
                    color: "white",
                    fontSize: "large",
                }}
                >
                    <span>{title}</span>
                </div>
                <div className="mm-panels-form-page-more">
                    <div id="panel-menu-form-page-more" className="mm-panel-form-page-more mm-panel_opened-form-page-more" style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: "translate3d(0,0,0)",
                        backgroundColor: "#274D7D"
                    }}>
                        {
                            data.map((items) => {
                                return <RecipeReviewCard {...items} />
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }

}

export default FormPageMore;