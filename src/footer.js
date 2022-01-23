import {
    BrowserRouter, Link, NavLink, Route, Router, Routes
} from "react-router-dom";
import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div style={{"position": "relative"}}>
                <div className="" id="partner-lg" style={{"width": "99%", "textAlign": "center"}}>
                    <div className="row">
                        <div className="col-3">
                        </div>
                        <div className="col-6" style={{"textAlign": "center"}}>
                            <img alt="Frau impft junge Frau." src="img/banner_footer.svg" width="300em" height="225em"
                                 style={{"paddingTop": 0, "paddingBottom": 0}}/>
                        </div>
                        <div className="col-3">
                            <h5 style={{"marginBottom": "10px"}}><b>In Kooperation mit:</b></h5>
                            <a href="https://www.asb-owl.de/" target="_blank">
                                <img alt="Logo ASB OWL" src="img/ASB-OWL-logo.png" width="200em" height="100em"
                                     style={{"paddingTop": 0, "paddingBottom": 0, "textAlign": "right", "marginBottom": 0}}/>
                            </a>
                            <br/>
                        </div>
                    </div>
                </div>

                <div id="partner-sm" style={{"width":"100%", "textAlign": "center"}}>
                    <div style={{"textAlign": "center"}}>
                        <h5 style={{"textAlign": "center"}}><b>In Kooperation mit:</b></h5>
                        <a href="https://www.asb-owl.de/" target="_blank">
                            <img alt="Frau impft junge Frau." src="img/ASB-OWL-logo.png" width="150em" height="75em"
                                 style={{"paddingTop": 0, "paddingBottom": 0, "textAlign": "center"}}/>
                        </a>
                        <br/>
                        <img alt="Logo ASB OWL" src="img/banner_footer.svg" width="300em" height="225em"
                                 style={{"paddingTop": 0, "paddingBottom": 0}}/>
                    </div>
                </div>

                <footer className="bg-light py-4">
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">
                            <Link to={this.props.subpage + "/impressum"} > <i className="fas fa-user-friends"/> Impressum</Link>
                            &nbsp;
                            <Link to={this.props.subpage + "/datenschutz"} > <i className="fas fa-user-shield"/> Datenschutz</Link>
                        </p>
                    </div>
                </footer>

            </div>
    )
    }
}

export default Footer;