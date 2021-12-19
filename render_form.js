'use strict';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="card inactive container">
                    <div className="card-body">
                            <div className="" style={{"position": "relative", "height":"100%", "width":"100%"}}>
                                <div className="">
                                    <form onSubmit={this.props.handler}>
                                            <div className="">
                                                <h2 className="card-title text-center">{this.props.title}</h2>
                                                <br/>
                                                {this.props.form_body}
                                                <br/>
                                            </div>
                                    </form>
                                </div>
                            </div>


                            <div className="" style={{"position": "relative", "bottom": "10%", "width":"100%"}}>
                                <div className="">

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-outline-secondary button_back" onClick={this.props.handler}
                                            id={this.props.id_back}>
                                        back
                                    </button>
                                    <button className="btn btn-outline-secondary sm-right mr-0 button_next" onClick={this.props.handler}
                                            id={this.props.id_next}>
                                        next
                                    </button>
                                </div>
                                </div>
                            </div>

                </div>

            </div>
        );
    }
}


class Form_body_vaccination_last extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div>{texts_german["vaccination_last"]["instruction"]}</div>
                    <label>{texts_german["vaccination_last"]["vaccination_label"]}:</label>
                    <select className="form-select" id="exampleFormControlSelect1"
                            onChange={this.props.input_data_handler} name={this.props.input_name_vaccine}>
                        <option value>{texts_german["vaccination_last"]["vaccination_instruction"]}</option>
                        <option>{texts_german["vaccines"]["biontec"]}</option>
                        <option>{texts_german["vaccines"]["moderna"]}</option>
                        <option>{texts_german["vaccines"]["astra"]}</option>
                        <option>{texts_german["vaccines"]["johnson"]}</option>

                    </select>
                </div>
                <div className="form-group">
                    <label>{texts_german["vaccination_last"]["date_labe"]}:</label>
                    <DatePicker onChange={this.props.input_data_handler}
                                date_picker_name={this.props.input_name_vaccination_date}/>
                </div>
            </div>);
    }
}

class Form_body_vaccination_x extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div>{texts_german["vaccination_x"]["instruction"]}</div>
                    <label>{texts_german["vaccination_x"]["vaccination_label"]} :</label>
                    <select className="form-select" id="exampleFormControlSelect1"
                            onChange={this.props.input_data_handler} name={this.props.input_name_vaccine}>
                        <option value>{texts_german["vaccination_x"]["vaccination_instruction"]}</option>
                        <option>{texts_german["vaccines"]["biontec"]}</option>
                        <option>{texts_german["vaccines"]["moderna"]}</option>
                        <option>{texts_german["vaccines"]["astra"]}</option>
                        <option>{texts_german["vaccines"]["johnson"]}</option>
                    </select>
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
                    <label>{texts_german['vaccinated']['instruction']} :</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  id="flexRadioDefault1" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated} value={true}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1"> {texts_german['vaccinated']['vaccinated_yes']} </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  id="flexRadioDefault2" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated}  value={false}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2"> {texts_german['vaccinated']['vaccinated_no']} </label>
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
                <label>{texts_german['past_infection']['instruction']} :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> {texts_german["past_infection"]["past_infection_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> {texts_german["past_infection"]["past_infection_no"]} </label>
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
                <label>{texts_german['risk_group']['instruction']} :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> {texts_german["risk_group"]["risk_group_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> {texts_german["risk_group"]["risk_group_no"]} </label>
                </div>
            </div>
        );
    }
}

class Form_body_got_unregistered_vaccination extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>{texts_german['got_unregistered_vaccination']['instruction']} :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_got_unregistered_vaccination} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> {texts_german["got_unregistered_vaccination"]["got_unregistered_vaccination_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_got_unregistered_vaccination} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> {texts_german["got_unregistered_vaccination"]["got_unregistered_vaccination_no"]} </label>
                </div>
            </div>
        );
    }
}

class Form_body_unregistered_vaccination_date extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{texts_german["symptoms_end_date"]["instructions"]}</div>

                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["unregistered_vaccination_date"]["label"]}:</label>
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

    render(){
        return(
            <div className="form-group">
                <label>{texts_german["symptoms_registered"]["instructions"]} :</label>
                <label>{texts_german["symptoms_registered"]["info_symptoms_registered"]} :</label>

                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'never'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        {texts_german["symptoms_registered"]["never"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'still'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["symptoms_registered"]["still"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'past'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["symptoms_registered"]["past"]}
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
                <label>{texts_german["number_vaccinations"]["instructions"]} :</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={1}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        {texts_german["number_vaccinations"]["one"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={2}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["number_vaccinations"]["two"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={3}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["number_vaccinations"]["three"]}
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
                <div>{texts_german["infection_date"]["instructions"]}</div>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["infection_date"]["label"]}:</label>
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

    render() {
        return (
            <div>
                <div>{texts_german["symptoms_end_date"]["instructions"]}</div>

                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["symptoms_end_date"]["label"]}:</label>
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
        this.state = {value: 45};
        this.props.input_data_handler({target: {value: [this.state.value], name: [this.props.input_name_age]}});
    }

    input_filed_change(e){
        this.setState({value: e.target.value});
        this.props.input_data_handler({target: {value: [e.target.value], name: [this.props.input_name_age]}});
    }

    render(){
        return(
            <div>
                <label>{texts_german["age"]["instructions"]} :</label>
                <input value={this.state.value}  type="number" min="0" max="1000" step="1" className="form-control" id="exampleFormControlInput1" placeholder="Alter" onChange={this.input_filed_change} name={this.props.input_name_age} />
            </div>
        )
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
    dateFormat: 'dd.mm.yy'
};

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datepickerContainer = React.createRef();
        this.handle_date_selection_internal = this.handle_date_selection_internal.bind(this);
    }

    handle_date_selection_internal(date) {
        this.props.onChange({target: {value: date, name: [this.props.date_picker_name]}});
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
                <input id={this.props.date_picker_name} type="text" className="form-control" placeholder="bitte auswählen"
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
            <div className="card inactive container" id="card_start">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <div className="card-body">
                                <div className="col-sm" style={{textAlign: "center"}}>
                                    <h1 className="card-title" > {texts_german['start']['header']} </h1>
                                    <div>
                                        {texts_german['start']['welcome']}
                                    </div>
                                </div>
                                <div className="col position-absolute top-50 start-50 translate-middle">
                                    <button type="button" className="btn btn-outline-secondary btn-lg button_next" id="card_start_button_next"
                                            onClick={this.props.handler} style={{"fontSize":"40px"}}>  Starten
                                    </button>
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
        return(
            <div className="card inactive container">
                <div className="card-body">
                    <div className="" style={{"position": "relative", "height":"100%", "width":"100%"}}>
                        <h1>Result</h1>
                        <div>{this.props.user_data["entered_data"]["value"]}</div>
                        <br/>

                        <h1>User Input</h1>
                        <div>{JSON.stringify({'data': this.props.user_data}, null, '\t')}</div>
                    </div>

                    <div className="" style={{"position": "relative", "bottom": "10%", "width":"100%"}}>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-secondary button_back" onClick={this.props.handler}
                                    id={this.props.id_back}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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
    if (button_id.includes('_vaccinated_')){
        return 'vaccinated';
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
    if (button_id.includes('_number_vaccinations_')){
        return 'number_vaccinations';
    }
    if (button_id.includes('_result_')){
        return 'result';
    }
}




class CardManager extends React.Component {
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

        if (e.target.classList.contains('button_next')) {
            console.log('clicked next');
            current_card_history.push(current_card_id);
            current_user_data[current_card_id] = this.state.entered_data;
            let next_card = get_next_card(current_card_history, current_user_data);

            this.setState({card_history: this.state.card_history});
            this.setState({user_data: current_user_data});
            this.setState({step: next_card[0], entered_data: next_card[1]});
        }
        if (e.target.classList.contains('button_back')) {
            let last_step = current_card_history.pop();
            delete current_user_data[current_card_id];

            this.setState({card_history: current_card_history});
            this.setState({user_data: current_user_data});
            this.setState({entered_data: {value:0}});
            this.setState({step: last_step});
        }

        e.preventDefault();
    }


    handleInputChange(event) {
        const entered_data = this.state.entered_data;
        const target = event.target;
        console.log('handleInputChange event: name: ' + target.name + '; value : ' + target.value);

        // typecast string value to boolean if required
        let value = target.value;
        if (value === 'true') {
            value = true;
        }
        if (value === 'false') {
            value = false;
        }

        entered_data[target.name] = value;
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

            case 'vaccination_last':
                return (
                    <Card title={texts_german["vaccination_last"]["header"]}
                          id_next={"card_vaccination_last_next"}
                          id_back={"card_vaccination_last_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_last input_data_handler={this.handleInputChange}
                                                            input_name_vaccine='value'
                                                            input_name_vaccination_date='date'/>}/>
                );
            case 'vaccination_1':
                return (
                    <Card title={texts_german["vaccination_x"]["header"]}
                          id_next={"card_vaccination_1_next"}
                          id_back={"card_vaccination_1_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_x input_data_handler={this.handleInputChange}
                                                            input_name_vaccine='value' />}/>
                );
            case 'vaccination_2':
                return (
                    <Card title={texts_german["vaccination_x"]["header"]}
                          id_next={"card_vaccination_2_next"}
                          id_back={"card_vaccination_2_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_x input_data_handler={this.handleInputChange}
                                                              input_name_vaccine='value' />}/>
                );
            case 'vaccination_3':
                return (
                    <Card title={texts_german["vaccination_x"]["header"]}
                          id_next={"card_vaccination_3_next"}
                          id_back={"card_vaccination_3_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_x input_data_handler={this.handleInputChange}
                                                              input_name_vaccine='value' />}/>
                );
            case 'vaccinated':
                return (
                    <Card title={texts_german["vaccinated"]["header"]}
                          id_next={"card_vaccinated_next"}
                          id_back={"card_vaccinated_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccinated input_data_handler={this.handleInputChange}
                                                           input_name_vaccinated='value'/>}/>
                );
            case 'past_infection':
                return (
                    <Card title={texts_german["past_infection"]["header"]}
                          id_next={"card_past_infection_next"}
                          id_back={"card_past_infection_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_past_infection input_data_handler={this.handleInputChange}
                                                               input_name_past_infection='value' />}/>
                );
            case 'infection_date':
                return (
                    <Card title={texts_german["infection_date"]["header"]}
                          id_next={"card_infection_date_next"}
                          id_back={"card_infection_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_infection_date input_data_handler={this.handleInputChange}
                                                               input_name_infection_date='date'/>}/>
                );
            case 'age':
                return (
                    <Card title={texts_german["age"]["header"]}
                          id_next={"card_age_next"}
                          id_back={"card_age_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_age input_data_handler={this.handleInputChange}
                                                               input_name_age='value'/>}/>
                );
            case 'symptoms_registered':
                return (
                    <Card title={texts_german["symptoms_registered"]["header"]}
                          id_next={"card_symptoms_registered_next"}
                          id_back={"card_symptoms_registered_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms_registered input_data_handler={this.handleInputChange}
                                                               input_name_symptoms='value' />}/>
                );
            case 'symptoms_end_date':
                return (
                    <Card title={texts_german["symptoms_end_date"]["header"]}
                          id_next={"card_symptoms_end_date_next"}
                          id_back={"card_symptoms_end_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms_end_date input_data_handler={this.handleInputChange}
                                                               input_symptoms_end_date='date'/>}/>
                );
            case 'risk_group':
                return (
                    <Card title={texts_german["risk_group"]["header"]}
                          id_next={"card_risk_group_next"}
                          id_back={"card_risk_group_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_risk_group input_data_handler={this.handleInputChange}
                                                           input_name_risk_group='value' />}/>
                );
            case 'number_vaccinations':
                return (
                    <Card title={texts_german["number_vaccinations"]["header"]}
                          id_next={"card_number_vaccinations_next"}
                          id_back={"card_number_vaccinations_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_number_vaccinations input_data_handler={this.handleInputChange}
                                                               input_name_number_vaccinations='value' />}/>
                );
            case 'got_unregistered_vaccination':
                return (
                    <Card title={texts_german["got_unregistered_vaccination"]["header"]}
                          id_next={"card_got_unregistered_vaccination_next"}
                          id_back={"card_got_unregistered_vaccination_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_got_unregistered_vaccination input_data_handler={this.handleInputChange}
                                                           input_name_got_unregistered_vaccination='value' />}/>
                );
            case 'unregistered_vaccination_date':
                return (
                    <Card title={texts_german["unregistered_vaccination_date"]["header"]}
                          id_next={"card_unregistered_vaccination_date_next"}
                          id_back={"card_unregistered_vaccination_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_unregistered_vaccination_date input_data_handler={this.handleInputChange}
                                                                              input_unregistered_vaccination_date='date' />}/>
                );
            case 'result':
                console.log(this.state.entered_data);
                return (
                    <Card_result handler={this.control_click_handler} user_data={{'user_data': this.state.user_data, 'entered_data': this.state.entered_data}}/>
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

