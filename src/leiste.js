import React from "react";
import {Link} from "react-router-dom";

class Leiste extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <nav style={{"position":"relative"}}>
                    <div id="navbar-lg">
                        <Link to={this.props.subpage + '/'} style={{"color:": "green"}}>
                            <img src="img/syringe_black.svg" style={{"height": "1.5em", "width": "1.5em"}} alt="Spritze"/>
                            <span style={{color:this.props.main_page}}>Mein Impfrechner</span>
                        </Link>
                        <Link to={this.props.subpage + '/faq/'} >
                            &nbsp;<i style={{color:this.props.faq}} className="fas fa-question"/>
                            <span style={{color:this.props.faq}}>FAQs</span>
                        </Link>
                        <Link to={this.props.subpage + '/information/'}>
                            &nbsp;<i style={{color:this.props.information}} className="fas fa-info"/>
                            <span style={{color:this.props.information}}>Informationen</span>
                        </Link>
                    </div>

                    <div id="navbar-sm">
                        <div className="topnav">
                            <Link to={this.props.subpage + '/'} style={{"fontWeight": "bold", "color": "black"}}><img src="img/syringe_black.svg" style={{"height": "1.5em", "width": "1.5em"}} alt="Spritze"/> Mein Impfrechner</Link>
                            <div id="myLinks">
                                <Link to={this.props.subpage + '/faq/'}>FAQs</Link>
                                <Link to={this.props.subpage + '/information/'}>Informationen</Link>
                                <Link to={this.props.subpage + '/impressum/'}>Impressum</Link>
                                <Link to={this.props.subpage + '/datenschutz/'}>Datenschutz</Link>
                            </div>
                            <a href="javascript:void(0);" className="icon" onClick={window.menubar}>
                                <i className="fa fa-bars"/>
                            </a>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Leiste;