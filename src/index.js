import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter, BrowserRouter, Link, NavLink, Route, Router, Routes
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
import Appointment_asbowl from "./texts"
import Quarantaenerechner from "./quarantaenerechner";



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
    <HashRouter>
        <Routes>
            <Route exact path="/" element={ <Main subpage="" /> } />
            <Route exact path="/asb-owl" element={ <Main subpage="/asb-owl" appointment={<Appointment_asbowl />}/> } />

            <Route exact path="/information" element={ <Information subpage="" /> } />
            <Route exact path="/asb-owl/information" element={ <Information subpage="/asb-owl" /> } />

            <Route exact path="/faq" element={ <Faq subpage="" /> } />
            <Route exact path="/asb-owl/faq" element={ <Faq subpage="/asb-owl" /> } />

            <Route exact path="/impressum" element={ <Impressum subpage="" /> } />
            <Route exact path="/asb-owl/impressum" element={ <Impressum subpage="/asb-owl" /> } />

            <Route exact path="/datenschutz" element={ <Datenschutz subpage="" /> } />
            <Route exact path="/asb-owl/datenschutz" element={ <Datenschutz subpage="/asb-owl" /> } />


            <Route exact path="/quarantaenerechner" element={ <Quarantaenerechner /> } />
        </Routes>
    </HashRouter>,
    document.getElementById("root")
);

