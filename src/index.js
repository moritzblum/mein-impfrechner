import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter, Link, NavLink, Route, Router, Routes
} from "react-router-dom";

import './main.css'
import Leiste from "./leiste";
import News from "./news";
import Footer from "./footer";
import CardManager from "./card_manager"
import Impressum from "./impressum"
import Datenschutz from "./datenschutz"
import Faq from "./faq"
import Information from "./information"
import Appointment_bielefeld from "./texts"



class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Leiste subpage={this.props.subpage} main_page={"black"} faq={"gray"} information={"gray"} style={{"position":"relative"}}/>
                <CardManager appointment={this.props.appointment}/>
                <News />
                <Footer subpage={this.props.subpage} />
            </div>
        )}
}


ReactDOM.render(
    <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Main subpage="" /> } />
            <Route path="/bielefeld" element={ <Main subpage="/bielefeld" appointment={<Appointment_bielefeld />}/> } />

            <Route path="/information" element={ <Information subpage="" /> } />
            <Route path="/bielefeld/information" element={ <Information subpage="/bielefeld" /> } />

            <Route path="/faq" element={ <Faq subpage="" /> } />
            <Route path="/bielefeld/faq" element={ <Faq subpage="/bielefeld" /> } />

            <Route path="/impressum" element={ <Impressum subpage="" /> } />
            <Route path="/bielefeld/impressum" element={ <Impressum subpage="/bielefeld" /> } />

            <Route path="/datenschutz" element={ <Datenschutz subpage="" /> } />
            <Route path="/bielefeld/datenschutz" element={ <Datenschutz subpage="/bielefeld" /> } />
        </Routes>
    </BrowserRouter>
    </div>,
    document.getElementById("root")
);

