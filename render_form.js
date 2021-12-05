'use strict';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handler}>
                    <div className="card" >
                        <div className="card-body">
                            <h2 className="card-title">{this.props.title}</h2>
                            {this.props.form_body}
                            <br/>
                            <button className="btn btn-primary button_back" onClick={this.props.handler}
                                    id={this.props.id_back}>
                                back
                            </button>
                            <button className="btn btn-primary button_next" onClick={this.props.handler}
                                    id={this.props.id_next}>
                                next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


class Form_body_vaccination extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Impfstoff <i className="bi bi-info-circle"></i> :</label>
                    <select className="form-select" id="exampleFormControlSelect1"
                            onChange={this.props.input_data_handler} name={this.props.input_name_vaccine}>
                        <option value>bitte auswählen</option>
                        <option>BioNTech/Pfizer</option>
                        <option>Moderna</option>
                        <option>AstraZeneca</option>
                        <option>Sinovac</option>
                        <option>Sinopharm</option>
                        <option>Sputnik</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Datum <i className="bi bi-info-circle"></i> :</label>
                    <DatePicker onChange={this.props.input_data_handler}
                                date_picker_name={this.props.input_name_vaccination_date}/>
                </div>
            </div>);
    }
}

class Form_body_vaccinated extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Haben Sie bereits eine Corona-Schutzimpfung erhalten? :</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  id="flexRadioDefault1" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated} value={true}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1"> Ja </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  id="flexRadioDefault2" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated}  value={false}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2"> Nein </label>
                    </div>
                </div>
            </div>
        )}
}


class Form_body_past_infection extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>Wurden Sie bereits positiv auf Corona (SARS-CoV-2) getestet (Kein Selbsttest)? :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> Ja </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> Nein </label>
                </div>
            </div>
        );
    }
}


class Form_body_risk_group extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>Risikogruppe? :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> Ja </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> Nein </label>
                </div>
            </div>
        );
    }
}


class Form_body_symptoms extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>Symptomes? :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={0}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Nein, ich hatte nie Symptome
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={1}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        Ja, ich habe immer noch Symptome
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={2}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        Ja, ich hatte Symptome
                    </label>
                </div>
            </div>
        );
    }
}

class Form_body_number_vaccinations extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>Symptomes? :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={1}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        1
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={2}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        2
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={3}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        3
                    </label>
                </div>
            </div>
        );
    }
}


class Form_body_infection_date extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Test2</h2>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">Datum <i className="bi bi-info-circle"></i> :</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_name_infection_date}/>
            </div>
        );
    }
}


class Form_body_symptoms_end extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Symtpoms end</h2>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">Datum <i className="bi bi-info-circle"></i> :</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_symptoms_end}/>
            </div>
        );
    }
}


class Form_body_age extends React.Component {
    constructor(props) {
        super(props);
        this.input_filed_change = this.input_filed_change.bind(this);
        this.state = {value: 45};
        this.props.input_data_handler({target: {value: [this.state.value], name: [this.props.input_name_age]}});
    }

    input_filed_change(e){
        this.setState({value: e.target.value});
        this.props.input_data_handler({target: {value: [e.target.value], name: [this.props.input_name_age]}});
    }

    render(){
        return(<input value={this.state.value}  type="number" min="0" max="1000" step="1" className="form-control" id="exampleFormControlInput1" placeholder="Alter" onChange={this.input_filed_change} name={this.props.input_name_age} />)
    }
}


var datepicker_german = {
    currentText: 'heute', currentStatus: '',
    todayText: 'heute', todayStatus: '',
    clearText: '-', clearStatus: '',
    closeText: 'schließen', closeStatus: '',
    monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    showMonthAfterYear: false,
    dateFormat: 'd MM, yy'
};

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datepickerContainer = React.createRef();
        this.handle_date_selection_internal = this.handle_date_selection_internal.bind(this);
    }

    handle_date_selection_internal(date) {
        this.props.onChange({target: {value: [date], name: [this.props.date_picker_name]}});
    }

    componentDidMount() {

        let datepicker_setting = datepicker_german;
        datepicker_setting['onSelect'] = this.handle_date_selection_internal;
        datepicker_setting['name'] = this.props.date_picker_name;

        $(this.refs.input_2).datepicker(datepicker_setting);
    }

    componentWillUnmount() {
        $(this.refs.input_2).datepicker("destroy");
    }

    render() {
        return (
            <div>
                <input id="datepicker_infection" type="text" className="form-control" placeholder="bitte auswählen"
                       ref="input_2"/>
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
            <div className="card inactive" id="card_start">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm">
                            <h1 className="card-title" style={{textAlign: "center"}}>Impfrechner</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button type="button" className="btn btn-primary btn-lg button_next" id="card_start_button_next"
                                    onClick={this.props.handler} >Starten
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


let button_id_2_card_id = {
    'card_start_button_next': 'start', // works
    'card_vaccination_next': 'vaccination', //
    'card_vaccinated_next': 'vaccinated', // works
    'card_past_infection_next': 'past_infection', // works
    'card_infection_date_next': 'infection_date', // works
    'card_age_next': 'age', // works
    'card_symptoms_next': 'symptoms', // works
    'card_symptoms_end_next': 'symptoms_end', // works
    'card_risk_group_next': 'risk_group', // works
    'card_number_vaccinations_next': 'number_vaccinations' // works
};


class CardManager extends React.Component {
    constructor(props) {
        super(props);
        this.control_click_handler = this.control_click_handler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            step: 'start',
            entered_data: 'test'
        };

    }


    control_click_handler(e) {
        //console.log('click next on: ' + e.target.className);
        //console.log('entered_data:' + this.state.entered_data.date);

        if (e.target.classList.contains('button_next')) {
            const current_card_id = button_id_2_card_id[e.target.id];
            console.log('current card id:' + current_card_id);
            console.log('submitted data:' + JSON.stringify(this.state.entered_data));
            add_to_history(current_card_id, this.state.entered_data);
            let next_card_id = get_next_card(current_card_id);
            this.setState({step: next_card_id, entered_data: {}});
        }
        if (e.target.classList.contains('button_back')) {
            const last_step = get_last_card();
            //console.log('back to:' + last_step)
            this.setState({step: last_step});
        }

        e.preventDefault();
    }


    handleInputChange(event) {
        const entered_data = this.state.entered_data;
        const target = event.target;
        console.log('handleInputChange event: name: ' + target.name + '; value : ' + target.value);
        entered_data[target.name] = target.value;
        console.log('new entered_data state: ' + JSON.stringify(entered_data))

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
                );

            case 'vaccination':
                return (
                    <Card title={"vaccination"}
                          id_next={"card_vaccination_next"}
                          id_back={"card_vaccination_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination input_data_handler={this.handleInputChange}
                                                            input_name_vaccine='value'
                                                            input_name_vaccination_date='date'/>}/>
                );
            case 'vaccinated':
                return (
                    <Card title={"vaccinated"}
                          id_next={"card_vaccinated_next"}
                          id_back={"card_vaccinated_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccinated input_data_handler={this.handleInputChange}
                                                           input_name_vaccinated='value'/>}/>
                );
            case 'past_infection':
                return (
                    <Card title={"past_infection"}
                          id_next={"card_past_infection_next"}
                          id_back={"card_past_infection_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_past_infection input_data_handler={this.handleInputChange}
                                                               input_name_past_infection='value' />}/>
                );
            case 'infection_date':
                return (
                    <Card title={"infection date"}
                          id_next={"card_infection_date_next"}
                          id_back={"card_infection_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_infection_date input_data_handler={this.handleInputChange}
                                                               input_name_infection_date='date'/>}/>
                );
            case 'age':
                return (
                    <Card title={"age"}
                          id_next={"card_age_next"}
                          id_back={"card_age_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_age input_data_handler={this.handleInputChange}
                                                               input_name_age='value'/>}/>
                );
            case 'symptoms':
                return (
                    <Card title={"symptoms"}
                          id_next={"card_symptoms_next"}
                          id_back={"card_symptoms_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms input_data_handler={this.handleInputChange}
                                                               input_name_symptoms='value' />}/>
                );
            case 'symptoms_end':
                return (
                    <Card title={"infection date"}
                          id_next={"card_symptoms_end_next"}
                          id_back={"card_symptoms_end_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms_end input_data_handler={this.handleInputChange}
                                                               input_symptoms_end='date'/>}/>
                );
            case 'risk_group':
                return (
                    <Card title={"risk group"}
                          id_next={"card_risk_group_next"}
                          id_back={"card_risk_group_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_past_infection input_data_handler={this.handleInputChange}
                                                               input_name_past_infection='value' />}/>
                );
            case 'number_vaccinations':
                return (
                    <Card title={"number vaccinations"}
                          id_next={"card_number_vaccinations_next"}
                          id_back={"card_number_vaccinations_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_number_vaccinations input_data_handler={this.handleInputChange}
                                                               input_name_number_vaccinations='value' />}/>
                );

            default:
                console.log('Rendering default.')
                return (
                    <div>
                        ERROR: Not a render case!
                    </div>
                )
        }
    }
}

ReactDOM.render(
    <CardManager/>,
    document.getElementById('root')
);

