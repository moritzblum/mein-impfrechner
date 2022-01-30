import React from "react";
import {Link} from "react-router-dom";
import Leiste from "./leiste";
import Footer from "./footer";
import $ from 'jquery';

import {
    Alternative, DATE_OPTIONS,
    Disclaimer,
    Infection_date_instruction,
    modal_infection_date_text,
    modal_infection_date_title, modal_pregnancy_week_text, modal_pregnancy_week_title,
    modal_symptoms_registered_text,
    modal_symptoms_registered_title,
    modal_quarantine_test_date_title,
    modal_quarantine_test_date_text,
    Symptoms_registered_instruction,
    texts_german
} from "./texts";


class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datepickerContainer = React.createRef();
        this.handle_date_selection_internal = this.handle_date_selection_internal.bind(this);
        this.handle_manual_change = this.handle_manual_change.bind(this);
    }

    handle_date_selection_internal(date) {
        this.props.onChange(date);
    }

    handle_manual_change(event) {
        this.handle_date_selection_internal(event.target.value);
    }

    render() {
        return (
            <div>
                <input id={this.props.date_picker_name} type="date" className="form-control date-validation" placeholder="bitte auswählen"
                       ref="input_2" onChange={this.handle_manual_change} style={{fontSize:"0.7em", width:"9em"}}/>

                <div className="DatePicker" ref={this.datepickerContainer}/>
            </div>
        );
    }
}
function Modal_popup(props) {
    return (
        <div className="modal fade " id={props.button_id} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLabel" style={{"color": "gray", "fontWeight": "bold"}}>{props.title}</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        {props.text}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="button" data-bs-dismiss="modal">Schließen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



class Result extends React.Component {
    render() {
        if(this.props.result != ""){
            return (
                <div>
                    <br/>
                    <div className="alert alert-warning" role="alert">
                        {this.props.result}
                    </div>
                    <br/>
                </div>
            );
        }
        else {
            return(<div> </div>)
        }
    }
}







class Symptoms_start_date extends React.Component {
    render() {
            if(this.props.symptoms === "true"){
                return (
                    <div>
                        <br/>
                        <div className="row">
                            {/* Datum der positiven Testung */}
                            <div className="col">
                                <label htmlFor="datepicker_symptoms"><b>Symptombeginn</b></label></div>
                            <div className="col">
                                <DatePicker onChange={this.props.handler} date_picker_name="symptom_date"/>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return (<div> </div>)
            }
    }
}

class QuarantaeneCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "result":  "",
            "symptoms": false,
            "symptom_date": undefined,
            "test_date": undefined};
        this.control_click_handler_calculate = this.control_click_handler_calculate.bind(this);
        this.control_click_handler_clear = this.control_click_handler_clear.bind(this);
        this.control_date_handler_test_date = this.control_date_handler_test_date.bind(this);
        this.control_date_handler_symptoms_date = this.control_date_handler_symptoms_date.bind(this);
        this.control_click_handler_symptoms = this.control_click_handler_symptoms.bind(this);

    }

    componentDidMount() {
        let myModal = new window.bootstrap.Modal(document.getElementById("quarantineModal"), {});
        myModal.show();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("result-view").scrollTop = document.getElementById("result-view").scrollHeight;
    }

    control_click_handler_calculate(e) {
        console.log('Starte Berechnung:');

        if (this.state.test_date===undefined || this.state.symptoms===undefined || (this.state.symptoms==="true" && this.state.symptom_date===undefined)){
            this.setState({result:  "Wir bitten um eine valide Eingabe, sonst ist eine Berechnung nicht möglich."});
        }
        else{
            let end;
            let test_date = new Date(this.state["test_date"]);
            let raustesten = new Date(test_date.setDate(test_date.getDate() + 7));

            if (this.state.symptoms === "false"){
                end = new Date(test_date.setDate(test_date.getDate() + 10));
            }
            else {
                let symptom_date = new Date(this.state["symptom_date"]);
                // nur relevant, wenn Symptome vor positivem Test, sonst sind es null Tage
                let days_between = Math.max(Math.round((test_date-symptom_date)/(1000*60*60*24)), 0);
                end = new Date(test_date.setDate(test_date.getDate() + (10 - Math.max(0, Math.min(2, days_between)))));
            }

            this.setState({result:  "Quarantäne bis einschließlich: "
                    + end.toLocaleDateString('de-DE', DATE_OPTIONS)
                    + ", die Quarantäne ist fortzusetzen, solange weiterhin Symptome bestehen. Freitesten möglich ab: "
                    + raustesten.toLocaleDateString('de-DE',  DATE_OPTIONS)
                    + ", sofern seit 48h symptomfrei"});
        }
    }

    control_date_handler_test_date(e){
        this.setState({"test_date":  e});
        this.setState({"result":  ""});
    }

    control_date_handler_symptoms_date(e){
        this.setState({"symptom_date":  e});
        this.setState({"result":  ""});
    }

    control_click_handler_clear(e) {
        this.setState({"result":  "", "symptoms": undefined, "symptom_date": undefined, "test_date": undefined});
        document.getElementById("flexRadioDefault8").checked = false;
        document.getElementById("flexRadioDefault9").checked = false;
        document.getElementById("test_date").value = undefined;
    }

    control_click_handler_symptoms(e) {
        const target = e.target;
        let value = target.value;
        this.setState({"symptoms": value})
        this.setState({"result":  ""});
    }


    render(){
        return(
            <div className="vc-card container" style={{height:"500px"}}>
                <div className="vc-card-header">
                    <div className="col-sm" style={{textAlign: "center"}}>
                        <h1 className="card-title" style={{marginTop:"0em"}}> <b>Corona-Quarantänerechner</b></h1>
                    </div>
                </div>

                <div className="vc-card-body" >
                    <div className="vc-result" id="result-view" style={{"position": "relative", "height":"90%", "width":"100%", "overflowY": 'scroll'}}>

                        {/* Datum der positiven Testung */}
                        <div className="container" style={{"width":"100%"}}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="datepicker_infection"><b>Testentnahmedatum <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_quarantine_test_date"/></b></label>
                                    <Modal_popup button_id="modal_quarantine_test_date" title={modal_quarantine_test_date_title} text={modal_quarantine_test_date_text} />
                                </div>
                                <div className="col">
                                    <DatePicker onChange={this.control_date_handler_test_date} date_picker_name="test_date"/>
                                </div>
                            </div>

                            <br/>

                            <div className="row">
                                {/* Symptome*/}
                                <div className="col">
                                    <label><b>Symptome <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_quarantine_symptoms"/></b></label>
                                    <Modal_popup button_id="modal_quarantine_symptoms" title={modal_symptoms_registered_title} text={modal_symptoms_registered_text} />

                                </div>
                                <div className="col">
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" onChange={this.control_click_handler_symptoms} value={true}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault8">
                                            &nbsp;Ja
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9"  onChange={this.control_click_handler_symptoms} value={false}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault9">
                                            &nbsp;Nein
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <Symptoms_start_date symptoms={this.state.symptoms} handler={this.control_date_handler_symptoms_date}/>
                        </div>
                        <Result result={this.state.result}/>


                    </div>
                    <div className="" style={{"position": "absolute", "bottom": "2%", "width":"96%"}}>
                        <div className="d-flex justify-content-between">
                            <button className="button button_back" onClick={this.control_click_handler_clear} style={{width:"9em"}}
                                    id={this.props.id_back}>
                                zurück
                            </button>
                            <button className="button button_next" type="submit" onClick={this.control_click_handler_calculate} style={{width:"9em"}}
                                    id={this.props.id_next}>
                                berechnen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Quarantaenerechner extends React.Component {

    render() {
        return (
            <div style={{height:"100%", width: "100%"}}>
                <div>
                    <nav style={{"position":"relative"}}>
                        <div id="navbar-lg">
                                <img src="img/Corona_1.svg" style={{"height": "1.5em", "width": "1.5em"}} alt="Virus"/>
                                <span style={{color:"gray"}}>Quarantänerechner</span>
                        </div>
                        <div id="navbar-sm">
                            <div className="topnav">
                                <h3 style={{"fontWeight": "bold", "color": "gray", height:"3.8em",  paddingTop: "1em", paddingLeft: "1em"}}><img src="img/Corona_1.svg" style={{"height": "1.5em", "width": "1.5em"}} alt="Virus"/>Quarantänerechner</h3>


                            </div>
                        </div>
                    </nav>

                </div>

                <div className="container main_page_text" style={{height:"100%"}}>
                    <br/>
                    <br/>
                    Die Empfehlung basiert auf der aktuellen Corona-Test-und-Quarantäneverordnung des Landes Nordrhein-Westfalen und Ihren Angaben.
                    <br/>
                    <br/>
                    Die aktuelle Version bildet den Stand vom 29.01.2022 und damit die vom 24.11.2021 in der ab dem 26.01.2022 gültigen Fassung der Corona-Test-und-Quarantäneverordnung ab.
                    <br/>
                    <br/>
                    <QuarantaeneCalculator style={{height:"100%"}}/>
                    <br/>
                    <br/>
                    Weiterführende Informationen zur Quarantäne sowie den Regeln, Maßnahmen und aktuellen Verordnungen erhalten Sie auf der Webseite der Landesregierung Nordrhein-Westfalen (<a href="https://www.land.nrw/corona" target='_blank'>NRW</a>):
                    <br/>
                    <br/>
                    Weiterhin haben Sie die Möglichkeit die Corona-Hotline des Landes zu nutzen.<br/>
                    (Deutsch): 0211 / 9119-1001<br/>
                    (Fremdsprachen): 0211 / 468-44996<br/>
                    <br/>
                    <br/>
                    <br/>
                    <div id="partner-sm" style={{"width":"100%", "textAlign": "center", paddingTop:"60px"}}>
                        <div style={{"textAlign": "center"}}>
                            <h5 style={{"textAlign": "center"}}><b>In Kooperation mit:</b></h5>
                            <a href="https://www.kreis-guetersloh.de/aktuelles/corona/" target="_blank">
                                <img alt="Frau impft junge Frau." src="img/KGT-Logo-4c-100_20_90.svg" width="200em" height="100em"
                                     style={{"paddingTop": 0, "paddingBottom": 0, "textAlign": "center"}}/>
                            </a>
                            <br/>
                            <br/>
                            <br/>
                            <a href="https://www.mein-impfrechner.de" style={{position: "center"}}>Überprüfen Sie hier Ihren Impfstatus</a>
                            <br/>
                            <a href="https://www.mein-impfrechner.de">
                                <img alt="Logo ASB OWL" src="img/banner_footer.svg" width="250em" height="190em"
                                 style={{"paddingTop": 0, "paddingBottom": 0}}/>
                            </a>
                        </div>
                    </div>
                    <div className="" id="partner-lg" style={{"width": "99%", "textAlign": "center"}}>
                        <div className="row">
                            <div className="col-3">
                            </div>
                            <div className="col-6" style={{"textAlign": "center"}}>
                                <a href="https://www.mein-impfrechner.de" style={{position: "center"}}>Überprüfen Sie hier Ihren Impfstatus</a>
                                <br/>
                                <a href="https://www.mein-impfrechner.de">
                                    <img alt="Frau impft junge Frau." src="img/banner_footer.svg" width="300em" height="225em"
                                     style={{"paddingTop": 0, "paddingBottom": 0}}/>
                                </a>
                            </div>
                            <div className="col-3">
                                <h5 style={{"marginBottom": "10px"}}><b>In Kooperation mit:</b></h5>
                                <a href="https://www.kreis-guetersloh.de/aktuelles/corona/" target="_blank">
                                    <img alt="Logo ASB OWL" src="img/KGT-Logo-4c-100_20_90.svg" width="200em" height="100em"
                                         style={{"paddingTop": 0, "paddingBottom": 0, "textAlign": "right", "marginBottom": 0}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="bg-light py-4" style={{position : "relative", bottom : "0", width: "100%", marginTop : "0px"}}>
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">
                            <Link to={"/impressum"} > <i className="fas fa-user-friends"/> Impressum</Link>
                            &nbsp;
                            <Link to={"/datenschutz"} > <i className="fas fa-user-shield"/> Datenschutz</Link>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Quarantaenerechner;