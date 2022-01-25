import React from "react";
import * as form_logic from "./form_logic";
import {
    Age_header, Age_instruction, Alternative, DATE_OPTIONS, Disclaimer,
    Got_unregistered_vaccination_header,
    Got_unregistered_vaccination_instruction,
    Infection_date_header,
    Infection_date_instruction,
    texts_german,
    modal_got_unregistered_vaccination_text,
    modal_got_unregistered_vaccination_title, modal_infection_date_text, modal_infection_date_title,
    modal_past_infection_text,
    modal_past_infection_title,
    modal_pregnancy_week_text,
    modal_pregnancy_week_title,
    modal_pregnant_text,
    modal_pregnant_title,
    modal_risk_group_text,
    modal_risk_group_title, modal_symptoms_end_date_text, modal_symptoms_end_date_title,
    modal_symptoms_registered_text,
    modal_symptoms_registered_title,
    modal_vaccinated_text,
    modal_vaccinated_title,
    Number_vaccinations_header,
    Number_vaccinations_instruction,
    Past_infection_header,
    Past_infection_instruction,
    Pregnancy_week_exact_header, Pregnancy_week_exact_instruction,
    Pregnancy_week_header,
    Pregnancy_week_instruction,
    Pregnant_header,
    Pregnant_instruction,
    Risk_group_header,
    Risk_group_instruction, Start_header,
    Symptoms_end_date_header, Symptoms_end_date_instruction,
    Symptoms_registered_header,
    Symptoms_registered_instruction,
    Unregistered_vaccination_date_header,
    Unregistered_vaccination_date_instruction,
    Vaccinated_header,
    Vaccinated_instruction,
    Vaccination_1_header,
    Vaccination_1_instruction,
    Vaccination_2_header,
    Vaccination_2_instruction
} from "./texts";


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="vc-card container">
                <div className="vc-card-header">
                    <div className="col-sm" style={{textAlign: "center"}}>
                        <h1 className="card-title" >{this.props.title}</h1>
                    </div>
                </div>
                <div className="vc-card-body">
                    <form onSubmit={this.props.handler} className="needs-validation">
                        {this.props.form_body}
                    </form>
                    <div className="" style={{"position": "absolute", "bottom": "2%", "width":"96%"}}>
                        <div className="d-flex justify-content-between">
                            <button className="button button_back" onClick={this.props.handler}
                                    id={this.props.id_back}>
                                zurück
                            </button>
                            <button className="button button_next" type="submit" onClick={this.props.handler}
                                    id={this.props.id_next}>
                                weiter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function on_enter_next(input_field_id, next_button_id){
    var input = document.getElementById(input_field_id);

    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById(next_button_id).click();
        }
    });
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


class Form_body_vaccination_brand_date extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div>{this.props.instruction}</div>
                    <br/>
                    <div className="container" style={{"width":"90%"}}>
                        <div className="row">
                            <div className="col">
                                <label>{texts_german["vaccination_brand_date"]["vaccination_label"]}:</label>
                            </div>
                            <div className="col-md-auto">
                                <select className="form-select select-validation"
                                        onChange={this.props.input_data_handler} name={this.props.input_name_vaccine} defaultValue="none">
                                    <option value='none' disabled>{texts_german["vaccination_brand_date"]["vaccination_default"]}</option>
                                    <option value={texts_german["vaccines"]["biontec"]}>{texts_german["vaccines"]["biontec"]}</option>
                                    <option value={texts_german["vaccines"]["moderna"]}>{texts_german["vaccines"]["moderna"]}</option>
                                    <option value={texts_german["vaccines"]["astra"]}>{texts_german["vaccines"]["astra"]}</option>
                                    <option value={texts_german["vaccines"]["johnson"]}>{texts_german["vaccines"]["johnson"]}</option>
                                    <option value={texts_german["vaccines"]["novavax"]}>{texts_german["vaccines"]["novavax"]}</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <label>{texts_german["vaccination_brand_date"]["date_labe"]}:</label>
                            </div>
                            <div className="col-md-auto">
                                <DatePicker onChange={this.props.input_data_handler}
                                            date_picker_name={this.props.input_name_vaccination_date}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

class Form_body_vaccinated extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("vaccinated_input", "card_vaccinated_next")
    }

    render() {
        return (
            <div>
                <div className="form-group" id="vaccinated_input">
                    <label><Vaccinated_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_vaccinated"/></label>
                    <Modal_popup button_id="modal_vaccinated" title={modal_vaccinated_title} text={modal_vaccinated_text} />
                    <br/>
                    <br/>
                    <div className="form-check">
                        <input className="form-check-input radio-validation" type="radio"  id="flexRadioDefault1" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated} value={true}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1"> {texts_german["vaccinated"]["vaccinated_yes"]} </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input radio-validation" type="radio"  id="flexRadioDefault2" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated}  value={false}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2"> {texts_german["vaccinated"]["vaccinated_no"]} </label>
                        <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                        <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                    </div>
                </div>
            </div>
        )}
}

class Form_body_pregnancy_week extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("pregnancy_week_input", "card_pregnancy_week_next")
    }

    render() {
        return (
            <div>
                <div className="form-group" id="pregnancy_week_input">
                    <label><Pregnancy_week_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_pregnancy_week"/></label>
                    <Modal_popup button_id="modal_pregnancy_week" title={modal_pregnancy_week_title} text={modal_pregnancy_week_text} />
                    <br/>
                    <br/>
                    <div className="form-check">
                        <input className="form-check-input radio-validation" type="radio"  id="flexRadioDefault1" onChange={this.props.input_data_handler} name={this.props.input_name_pregnancy_week} value={true}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1"> {texts_german["pregnancy_week"]["pregnancy_week_yes"]} </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input radio-validation" type="radio"  id="flexRadioDefault2" onChange={this.props.input_data_handler} name={this.props.input_name_pregnancy_week}  value={false}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2"> {texts_german["pregnancy_week"]["pregnancy_week_no"]} </label>
                        <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                        <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                    </div>
                </div>
            </div>
        )}
}


class Form_body_past_infection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("past_infection_input", "card_past_infection_next")
    }

    render(){
        return(
            <div className="form-group" id="past_infection_input">
                <label><Past_infection_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_past_infection"/></label>
                <Modal_popup button_id="modal_past_infection" title={modal_past_infection_title} text={modal_past_infection_text} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> {texts_german["past_infection"]["past_infection_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> {texts_german["past_infection"]["past_infection_no"]} </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}


class Form_body_risk_group extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("risk_group_input", "card_risk_group_next")
    }

    render(){
        return(
            <div className="form-group" id="risk_group_input">
                <label><Risk_group_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_risk_group"/></label>
                <Modal_popup button_id="modal_risk_group" title={modal_risk_group_title} text={modal_risk_group_text} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="risk_group_1_input" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={true}/>
                    <label className="form-check-label" htmlFor="risk_group_1_input"> {texts_german["risk_group"]["risk_group_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="risk_group_2_input" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={false}/>
                    <label className="form-check-label" htmlFor="risk_group_2_input"> {texts_german["risk_group"]["risk_group_no"]} </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}


class Form_body_pregnant extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("pregnant_input", "card_pregnant_next")
    }

    render(){
        return(
            <div className="form-group" id="pregnant_input">
                <label><Pregnant_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_pregnant"/></label>
                <Modal_popup button_id="modal_pregnant" title={modal_pregnant_title} text={modal_pregnant_text} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="pregnant_1_input" onChange={this.props.input_data_handler} name={this.props.input_name_pregnant} value={true}/>
                    <label className="form-check-label" htmlFor="pregnant_1_input"> {texts_german["pregnant"]["pregnant_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="pregnant_2_input" onChange={this.props.input_data_handler} name={this.props.input_name_pregnant} value={false}/>
                    <label className="form-check-label" htmlFor="pregnant_2_input"> {texts_german["pregnant"]["pregnant_no"]} </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}




class Form_body_got_unregistered_vaccination extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("got_unregistered_vaccination_input", "card_got_unregistered_vaccination_next")
    }

    render(){
        return(
            <div className="form-group" id="got_unregistered_vaccination_input">
                <label><Got_unregistered_vaccination_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_got_unregistered_vaccination"/></label>
                <Modal_popup button_id="modal_got_unregistered_vaccination" title={modal_got_unregistered_vaccination_title} text={modal_got_unregistered_vaccination_text} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_got_unregistered_vaccination} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> {texts_german["got_unregistered_vaccination"]["got_unregistered_vaccination_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_got_unregistered_vaccination} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> {texts_german["got_unregistered_vaccination"]["got_unregistered_vaccination_no"]} </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}

class Form_body_unregistered_vaccination_date extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("date", "card_unregistered_vaccination_date_next")
    }


    render() {
        return (
            <div>
                <div><Unregistered_vaccination_date_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_got_unregistered_vaccination"/></div>
                <br/>
                <br/>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["unregistered_vaccination_date"]["label"]}</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_unregistered_vaccination_date}/>
            </div>
        );
    }
}


class Form_body_symptoms_registered extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("symptoms_registered_input", "card_symptoms_registered_next")
    }

    render(){
        return(
            <div className="form-group" id="symptoms_registered_input">
                <label><Symptoms_registered_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_symptoms_registered"/></label>
                <Modal_popup button_id="modal_symptoms_registered" title={modal_symptoms_registered_text} text={modal_symptoms_registered_title} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'never'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        {texts_german["symptoms_registered"]["never"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'still'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["symptoms_registered"]["still"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault5" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'past'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                        {texts_german["symptoms_registered"]["past"]}
                    </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}

class Form_body_number_vaccinations extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("number_vaccinations_input", "card_number_vaccinations_next")
    }

    render(){
        return(
            <div className="form-group" id="number_vaccinations_input">
                <label><Number_vaccinations_instruction/></label>
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={1}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        {texts_german["number_vaccinations"]["one"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={2}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["number_vaccinations"]["two"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={3}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["number_vaccinations"]["three"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault5" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={4}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                        {texts_german["number_vaccinations"]["four"]}
                    </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}


class Form_body_infection_date extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("date", "card_infection_date_next")
    }

    render() {
        return (
            <div>
                <label><Infection_date_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_infection_date"/></label>
                <Modal_popup button_id="modal_infection_date" title={modal_infection_date_title} text={modal_infection_date_text} />
                <br/>
                <br/>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["infection_date"]["label"]}</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_name_infection_date}/>
            </div>
        );
    }
}


class Form_body_symptoms_end_date extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        on_enter_next("date", "card_symptoms_end_date_next")
    }

    render() {
        return (
            <div>
                <label><Symptoms_end_date_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_symptoms_end_date"/></label>
                <Modal_popup button_id="modal_symptoms_end_date" title={modal_symptoms_end_date_text} text={modal_symptoms_end_date_title} />
                <br/>
                <br/>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["symptoms_end_date"]["label"]}</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_symptoms_end_date}/>
            </div>
        );
    }
}


class Form_body_age extends React.Component {
    constructor(props) {
        super(props);
        this.input_filed_change = this.input_filed_change.bind(this);
        this.state = {value: texts_german["age"]["age_placeholder"]};
        this.props.input_data_handler({target: {value: [this.state.value], name: this.props.input_name_age}});
    }

    input_filed_change(e){
        this.setState({value: e.target.value});
        this.props.input_data_handler({target: {value: e.target.value, name: [this.props.input_name_age]}});
    }

    componentDidMount() {
        on_enter_next("age_input_field", "card_age_next")
    }

    render(){
        return(
            <div className="vc-card-in">
                <label><Age_instruction/></label>
                <br/>
                <br/>
                <input value={this.state.value}  type="number" min="0" max="1000" step="1" className="form-control" id="age_input_field" placeholder={texts_german["age"]["age_placeholder"]} onChange={this.input_filed_change} name={this.props.input_name_age} required/>
                <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
            </div>
        )
    }
}


class Form_body_pregnancy_week_exact extends React.Component {
    constructor(props) {
        super(props);
        this.input_filed_change = this.input_filed_change.bind(this);
        this.state = {value: texts_german["pregnancy_week_exact"]["pregnancy_week_exact_placeholder"]};
        this.props.input_data_handler({target: {value: [this.state.value], name: this.props.input_name_age}});
    }

    input_filed_change(e){
        this.setState({value: e.target.value});
        this.props.input_data_handler({target: {value: e.target.value, name: [this.props.input_name_pregnancy_week_exact]}});
    }

    componentDidMount() {
        on_enter_next("pregnancy_week_exact_input_field", "card_pregnancy_week_exact_next")
    }


    render(){
        return(
            <div className="vc-card-in">
                <label><Pregnancy_week_exact_instruction/> <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_pregnancy_week"/></label>
                <Modal_popup button_id="modal_pregnancy_week" title={modal_pregnancy_week_title} text={modal_pregnancy_week_text} />
                <br/>
                <br/>
                <input value={this.state.value}  type="number" min="0" max="1000" step="1" className="form-control" id="pregnancy_week_exact_input_field" placeholder={texts_german["pregnancy_week_exact"]["pregnancy_week_exact_placeholder"]} onChange={this.input_filed_change} name={this.props.input_name_pregnancy_week_exact} required/>
                <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
            </div>
        )
    }
}


class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datepickerContainer = React.createRef();
        this.handle_date_selection_internal = this.handle_date_selection_internal.bind(this);
        this.handle_manual_change = this.handle_manual_change.bind(this);
    }

    handle_date_selection_internal(date) {
        this.props.onChange({target: {value: date, name: [this.props.date_picker_name]}});
    }

    handle_manual_change(event) {
        this.handle_date_selection_internal(event.target.value);
    }

    render() {
        return (
            <div>
                <input id={this.props.date_picker_name} type="date" className="form-control date-validation" placeholder="bitte auswählen"
                       ref="input_2" onChange={this.handle_manual_change}/>

                <div className="DatePicker" ref={this.datepickerContainer}/>
            </div>
        );
    }
}


class Card_start extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="main_page_text container" style={{"margin-top":"2%"}}>
                    Die Berechnung basiert auf den Empfehlungen der <a target="_blank" href="https://www.rki.de/DE/Content/Infekt/EpidBull/epid_bull_node.html" style={{"color":"white"}}>Ständigen Impfkommission (STIKO) des
                    RKI</a>  und wurde durch <a target="_blank" href="information.html#dr">Herrn Prof. Dr. Theodor Windhorst</a>  fachwissenschaftlich begleitet.
                    <br/>
                    <br/>
                    Die aktuelle Version bildet den Stand vom <a target="_blank" href="https://www.rki.de/DE/Content/Infekt/EpidBull/epid_bull_node.html" style={{"color": "white"}}>25.01.2022</a> ab.
                </div>
                <div className="vc-card vc-card-start container" id="card_start" >
                    <div className="row justify-content-md-center">
                        <div className="vc-card-header">
                            <div className="col-sm" style={{textAlign: "center"}}>
                                <h1 className="card-title"><Start_header/></h1>
                            </div>
                        </div>
                        <div className="vc-card-body">
                            <div className="col" style={{"position": "relative", "textAlign": "center", "padding": "20% 0%"}}>
                                <button type="button" className="button-start button_next" id="card_start_button_next"
                                        onClick={this.props.handler} style={{"fontSize":"40px"}}>  Starten
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_page_text container" style={{"margin-bottom":"2%"}}>
                    Die Sicherheit Ihrer Daten hat für uns große Priorität. <br/>
                    Mehr dazu erfahren Sie <a href="information.html" style={{"color": "white"}}>hier</a>...
                </div>

            </div>
        );
    }
}

class Card_maintenance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="vc-card vc-card-start container" id="card_start" >
                    <div className="row justify-content-md-center">
                        <div className="vc-card-header">
                            <div className="col-sm" style={{textAlign: "center"}}>
                                <h1 className="card-title"><Start_header/></h1>
                            </div>
                        </div>
                        <div className="vc-card-body" >
                            <div style={{fontsize:"0.7 em"}}>
                                Achtung - Wartungsmodus: <br/>

                                Unsere Webseite wird derzeit überarbeitet. Damit wir Ihnen eine korrekte Impfempfehlung garantieren können, ist es notwendig, den Impfrechner regelmäßig zu aktualisieren. <br/><br/>

                                Der Impfrechner ist schon bald wieder für Sie erreichbar. Die Wartungsarbeiten sind spätestens am 26.01.2022 abgeschlossen. Wir danken Ihnen für Ihr Verständnis!
                                <br/>
                                Bleiben Sie gesund.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Card_result extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let result_text = [];

        // single output
        if (this.props.user_data["entered_data"]["value"].length === 1) {
            result_text.push(this.props.user_data["entered_data"]["value"][0]);
        }
        // multiple outputs
        else {
            const options = this.props.user_data["entered_data"]["value"];

            result_text.push(options[0]);
            result_text.push(<div><br/></div>);
            result_text.push(<Alternative/>);

            let result_text_alternatives = [];
            for (let i = 1; i < options.length; i++) {
                result_text_alternatives.push(<li key={i}>{options[i]}</li>);
            }
            result_text.push(<ul>{result_text_alternatives}</ul>);
        }

        return(
            <div className="vc-card container">
                <div className="vc-card-header">
                    <div className="col-sm" style={{textAlign: "center"}}>
                        <h1 className="card-title"> <b>Ergebnis </b></h1>
                    </div>
                </div>

                <div className="vc-card-body">
                    <div className="vc-result" style={{"position": "relative", "height":"90%", "width":"100%", "overflowY": 'scroll'}}>
                        <h1>Empfehlung</h1>
                        <div key="k1" style={{marginLeft: "20px"}}>{result_text}</div>
                        {this.props.appointment}
                        <br/>
                        <h1>Ihre Angaben</h1>
                        <div key="k3" style={{marginLeft: "20px"}}>{vis_user_data(this.props.user_data)}</div>
                        <br/>
                        <div key="k2" style={{marginLeft: "20px"}}><Disclaimer/></div>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="" style={{"position": "absolute", "bottom": "2%", "top":"auto", "width":"100%"}}>
                        <div className="d-flex justify-content-between">
                            <button className="button button_back" onClick={this.props.handler}
                                    id={this.props.id_back}>
                                Zurück
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function vis_user_data (user_data) {
    let user_data_list = [];

    if ('age' in user_data['user_data']){
        user_data_list.push(<li key='age'><Age_header/>: {user_data['user_data']['age']['value']}</li>);
    }

    if ('risk_group' in user_data['user_data']){
        if (user_data['user_data']['risk_group']['value']){
            user_data_list.push(<li key='risk_group'>{<Risk_group_header/>}: {texts_german['risk_group']['risk_group_yes']}</li>);
        }
    }

    if ('pregnant' in user_data['user_data']){
        if (user_data['user_data']['pregnant']['value']){
            user_data_list.push(<li key='pregnant'>{<Pregnant_header/>}: {texts_german['pregnant']['pregnant_yes']}</li>);
        }
    }

    if ('past_infection' in user_data['user_data']){
        if (user_data['user_data']['past_infection']['value']){
            user_data_list.push(<li key='past_infection'>{<Past_infection_header/>}: {texts_german['past_infection']['past_infection_yes']}</li>);
        }
    }

    if ('infection_date' in user_data['user_data']){
        user_data_list.push(<li key='infection_date'>{<Infection_date_header/>}: {new Date(user_data['user_data']['infection_date']['date']).toLocaleDateString('de-DE', DATE_OPTIONS)}</li>);
    }

    if ('symptoms_registered' in user_data['user_data']){
        user_data_list.push(<li key='symptoms_registered'>{<Symptoms_registered_header/>}: {texts_german['symptoms_registered'][user_data['user_data']['symptoms_registered']['value']]}</li>);
    }

    if ('symptoms_end_date' in user_data['user_data']){
        user_data_list.push(<li key='symptoms_end_date'>{<Symptoms_end_date_header/>}: {new Date(user_data['user_data']['symptoms_end_date']['date']).toLocaleDateString('de-DE', DATE_OPTIONS)}</li>);
    }

    if ('got_unregistered_vaccination' in user_data['user_data']){
        if (user_data['user_data']['got_unregistered_vaccination']['value']){
            user_data_list.push(<li key='got_unregistered_vaccination'>{<Got_unregistered_vaccination_header/>}: {texts_german['got_unregistered_vaccination']['got_unregistered_vaccination_yes']}</li>);
        }
    }

    if ('unregistered_vaccination_date' in user_data['user_data']){
        user_data_list.push(<li key='unregistered_vaccination_date'>{<Unregistered_vaccination_date_header/>}: {new Date(user_data['user_data']['unregistered_vaccination_date']['date']).toLocaleDateString('de-DE', DATE_OPTIONS)}</li>);
    }

    if ('vaccinated' in user_data['user_data']){
        if (user_data['user_data']['vaccinated']['value']){
            user_data_list.push(<li key='vaccinated'>{<Vaccinated_header/>}: {texts_german['vaccinated']['vaccinated_yes']}</li>);
        }
    }

    if ('pregnancy_week' in user_data['user_data']){
        if (user_data['user_data']['pregnancy_week']['value']){
            user_data_list.push(<li key='pregnancy_week'>{texts_german['pregnancy_week']["short"]}: {texts_german['pregnancy_week']['pregnancy_week_yes']}</li>);
        }
    }

    if ('pregnancy_week_exact' in user_data['user_data']){
        if (user_data['user_data']['pregnant']['value']){
            user_data_list.push(<li key='pregnancy_week_exact'>{<Pregnancy_week_exact_header/>}: {user_data['user_data']['pregnancy_week_exact']['value']}</li>);
        }
    }

    if ('vaccination_1' in user_data['user_data']){
        user_data_list.push(<li key='vaccination_1'><Vaccination_1_header/>: {user_data['user_data']['vaccination_1']['value']} am {new Date(user_data['user_data']['vaccination_1']['date']).toLocaleDateString('de-DE', DATE_OPTIONS)}</li>);
    }

    if ('vaccination_2' in user_data['user_data']){
        user_data_list.push(<li key='vaccination_2'><Vaccination_2_header/>: {user_data['user_data']['vaccination_2']['value']} am {new Date(user_data['user_data']['vaccination_2']['date']).toLocaleDateString('de-DE', DATE_OPTIONS)}</li>);
    }

    return <div>{user_data_list}</div>;
}


function button_id_2_card_id(button_id){
    if (button_id.includes('_start_')){
        return 'start';
    }
    if (button_id.includes('_got_unregistered_vaccination_')){
        return 'got_unregistered_vaccination';
    }
    if (button_id.includes('_unregistered_vaccination_date_')){
        return 'unregistered_vaccination_date';
    }
    if (button_id.includes('_vaccination_last_')){
        return 'vaccination_last';
    }
    if (button_id.includes('_vaccination_1_')){
        return 'vaccination_1';
    }
    if (button_id.includes('_vaccination_2_')){
        return 'vaccination_2';
    }
    if (button_id.includes('_vaccinated_')){
        return 'vaccinated';
    }
    if (button_id.includes('_pregnancy_week_exact_')){
        return 'pregnancy_week_exact';
    }
    if (button_id.includes('_pregnancy_week_')){
        return 'pregnancy_week';
    }
    if (button_id.includes('_past_infection_')){
        return 'past_infection';
    }
    if (button_id.includes('_infection_date_')){
        return 'infection_date';
    }
    if (button_id.includes('_age_')){
        return 'age';
    }
    if (button_id.includes('_symptoms_end_date_')){
        return 'symptoms_end_date';
    }
    if (button_id.includes('_symptoms_registered_')){
        return 'symptoms_registered';
    }
    if (button_id.includes('_risk_group_')){
        return 'risk_group';
    }
    if (button_id.includes('_pregnant_')){
        return 'pregnant';
    }
    if (button_id.includes('_number_vaccinations_')){
        return 'number_vaccinations';
    }
    if (button_id.includes('_result_')){
        return 'result';
    }
}


export default class CardManager extends React.Component {
    constructor(props) {
        super(props);
        this.control_click_handler = this.control_click_handler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            step: 'start',
            entered_data: {},
            card_history: [],
            user_data: {}
        };
    }

    control_click_handler(e) {
        let current_card_history = this.state.card_history;
        let current_user_data = this.state.user_data;
        let current_card_id = button_id_2_card_id(e.target.id);

        let invalid = false;

        if (e.target.classList !== undefined){
            if (e.target.classList.contains('button_next')) {

                if (current_card_id === 'start'){
                    window.scrollTo(0,0);
                }

                let forms = document.querySelectorAll('.needs-validation');

                Array.prototype.slice.call(forms)
                    .forEach(function (form) {
                        form.addEventListener('submit', function (event) {
                            if (!isNaN(this.state.entered_data['value'])) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            form.classList.add('was-validated')
                        }, false)
                    })

                // form validation
                // number text-field
                if (current_card_id === 'age') {
                    if (isNaN(this.state.entered_data['value']) || this.state.entered_data['value'] === '') {
                        document.getElementById("age_input_field").classList.remove("is-valid");
                        document.getElementById("age_input_field").classList.add("is-invalid");
                        invalid = true;
                    }
                    else {
                        document.getElementById("age_input_field").classList.remove("is-invalid");
                        document.getElementById("age_input_field").classList.add("is-valid")
                    }
                }
                if (current_card_id === 'pregnancy_week_exact') {
                    if (isNaN(this.state.entered_data['value']) || this.state.entered_data['value'] === '') {
                        document.getElementById("pregnancy_week_exact_input_field").classList.remove("is-valid");
                        document.getElementById("pregnancy_week_exact_input_field").classList.add("is-invalid");
                        invalid = true;
                    }
                    else {
                        document.getElementById("pregnancy_week_exact_input_field").classList.remove("is-invalid");
                        document.getElementById("pregnancy_week_exact_input_field").classList.add("is-valid")
                    }
                }
                // radio-button selection
                if (['pregnancy_week', 'vaccinated', 'past_infection', 'symptoms_registered', 'risk_group', 'pregnant', 'number_vaccinations', 'got_unregistered_vaccination'].includes(current_card_id)) {
                    let element = document.getElementsByClassName("radio-validation");

                    if (this.state.entered_data['value'] === undefined) {

                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-valid");
                            element[i].classList.add("is-invalid");
                        }
                        invalid = true;
                    }
                    else {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-invalid");
                            element[i].classList.add("is-valid");
                        }
                    }
                }
                // date
                if (['vaccination_1', 'vaccination_1', 'vaccination_brand_date', 'infection_date', 'symptoms_end_date', 'unregistered_vaccination_date'].includes(current_card_id)) {
                    let element = document.getElementsByClassName("date-validation");

                    if (this.state.entered_data['date'] === undefined) {

                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-valid");
                            element[i].classList.add("is-invalid");
                        }
                        invalid = true;
                    }
                    else {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-invalid");
                            element[i].classList.add("is-valid");
                        }
                    }
                }
                // select
                if (['vaccination_1', 'vaccination_2'].includes(current_card_id)) {
                    let element = document.getElementsByClassName("select-validation");

                    if (this.state.entered_data['value'] === undefined || this.state.entered_data['value'] === '' || this.state.entered_data['value'] === true) {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-valid");
                            element[i].classList.add("is-invalid");
                        }
                        invalid = true;
                    }
                    else {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-invalid");
                            element[i].classList.add("is-valid");
                        }
                    }
                }

                if (invalid) {
                    return null;
                }

                current_card_history.push(current_card_id);
                current_user_data[current_card_id] = this.state.entered_data;
                let next_card = form_logic.get_next_card(current_card_history, current_user_data);
                this.setState({card_history: this.state.card_history});
                this.setState({user_data: current_user_data});
                this.setState({step: next_card[0], entered_data: next_card[1]});
            }
        }
        if (e.target.classList !== undefined){
            if (e.target.classList.contains('button_back')) {
                let last_step = current_card_history.pop();
                delete current_user_data[current_card_id];

                this.setState({card_history: current_card_history});
                this.setState({user_data: current_user_data});
                this.setState({entered_data: {value:undefined}});
                this.setState({step: last_step});
            }
        }
        e.preventDefault();
    }


    handleInputChange(event) {
        const entered_data = this.state.entered_data;
        const target = event.target;

        // typecast string value to boolean if required
        let value = target.value;
        if (value === 'true') {
            value = true;
        }
        if (value === 'false') {
            value = false;
        }

        entered_data[target.name] = value;

        this.setState({
            entered_data: entered_data
        });
    }


    render() {
        const step = this.state.step;

        switch (step) {
            case 'start':
                return (
                    <Card_start handler={this.control_click_handler}/>
                    //<Card_maintenance />
                );
            case 'vaccination_1':
                return (
                    <Card title={<Vaccination_1_header/>}
                          id_next={"card_vaccination_1_next"}
                          id_back={"card_vaccination_1_next"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_brand_date key="1"
                                                                       instruction={<Vaccination_1_instruction/>}
                                                                       input_data_handler={this.handleInputChange}
                                                                       input_name_vaccine='value'
                                                                       input_name_vaccination_date='date'/>}/>
                );
            case 'vaccination_2':
                return (
                    <Card title={<Vaccination_2_header/>}
                          id_next={"card_vaccination_2_next"}
                          id_back={"card_vaccination_2_next"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_brand_date key="2"
                                                                       instruction={<Vaccination_2_instruction/>}
                                                                       input_data_handler={this.handleInputChange}
                                                                       input_name_vaccine='value'
                                                                       input_name_vaccination_date='date'/>}/>
                );
            case 'vaccinated':
                return (
                    <Card title={<Vaccinated_header/>}
                          id_next={"card_vaccinated_next"}
                          id_back={"card_vaccinated_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccinated input_data_handler={this.handleInputChange}
                                                           input_name_vaccinated='value'/>}/>
                );
            case 'pregnancy_week':
                return (
                    <Card title={<Pregnancy_week_header/>}
                          id_next={"card_pregnancy_week_next"}
                          id_back={"card_pregnancy_week_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_pregnancy_week input_data_handler={this.handleInputChange}
                                                               input_name_pregnancy_week='value'/>}/>
                );
            case 'pregnancy_week_exact':
                return (
                    <Card title={<Pregnancy_week_exact_header/>}
                          id_next={"card_pregnancy_week_exact_next"}
                          id_back={"card_pregnancy_week_exact_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_pregnancy_week_exact input_data_handler={this.handleInputChange}
                                                                     input_name_pregnancy_week_exact='value'/>}/>
                );
            case 'past_infection':
                return (
                    <Card title={<Past_infection_header/>}
                          id_next={"card_past_infection_next"}
                          id_back={"card_past_infection_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_past_infection input_data_handler={this.handleInputChange}
                                                               input_name_past_infection='value' />}/>
                );
            case 'infection_date':
                return (
                    <Card title={<Infection_date_header/>}
                          id_next={"card_infection_date_next"}
                          id_back={"card_infection_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_infection_date input_data_handler={this.handleInputChange}
                                                               input_name_infection_date='date'/>}/>
                );
            case 'age':
                return (
                    <Card title={<Age_header/>}
                          id_next={"card_age_next"}
                          id_back={"card_age_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_age input_data_handler={this.handleInputChange}
                                                    input_name_age='value'/>}/>
                );
            case 'symptoms_registered':
                return (
                    <Card title={<Symptoms_registered_header/>}
                          id_next={"card_symptoms_registered_next"}
                          id_back={"card_symptoms_registered_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms_registered input_data_handler={this.handleInputChange}
                                                                    input_name_symptoms='value' />}/>
                );
            case 'symptoms_end_date':
                return (
                    <Card title={<Symptoms_end_date_header/>}
                          id_next={"card_symptoms_end_date_next"}
                          id_back={"card_symptoms_end_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms_end_date input_data_handler={this.handleInputChange}
                                                                  input_symptoms_end_date='date'/>}/>
                );
            case 'risk_group':
                return (
                    <Card title={<Risk_group_header/>}
                          id_next={"card_risk_group_next"}
                          id_back={"card_risk_group_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_risk_group input_data_handler={this.handleInputChange}
                                                           input_name_risk_group='value' />}/>
                );
            case 'pregnant':
                return (
                    <Card title={<Pregnant_header/>}
                          id_next={"card_pregnant_next"}
                          id_back={"card_pregnant_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_pregnant input_data_handler={this.handleInputChange}
                                                         input_name_pregnant='value' />}/>
                );
            case 'number_vaccinations':
                return (
                    <Card title={<Number_vaccinations_header/>}
                          id_next={"card_number_vaccinations_next"}
                          id_back={"card_number_vaccinations_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_number_vaccinations input_data_handler={this.handleInputChange}
                                                                    input_name_number_vaccinations='value' />}/>
                );
            case 'got_unregistered_vaccination':
                return (
                    <Card title={<Got_unregistered_vaccination_header/>}
                          id_next={"card_got_unregistered_vaccination_next"}
                          id_back={"card_got_unregistered_vaccination_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_got_unregistered_vaccination input_data_handler={this.handleInputChange}
                                                                             input_name_got_unregistered_vaccination='value' />}/>
                );
            case 'unregistered_vaccination_date':
                return (
                    <Card title={<Unregistered_vaccination_date_header/>}
                          id_next={"card_unregistered_vaccination_date_next"}
                          id_back={"card_unregistered_vaccination_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_unregistered_vaccination_date input_data_handler={this.handleInputChange}
                                                                              input_unregistered_vaccination_date='date' />}/>
                );
            case 'result':
                return (
                    <Card_result handler={this.control_click_handler} appointment={this.props.appointment} user_data={{'user_data': this.state.user_data, 'entered_data': this.state.entered_data}}/>
                );

            default:
                console.log('React rendering ERROR: Rendering default.')
                return (

                    <div>
                        ERROR: Not a render case!
                    </div>
                )
        }
    }
}
