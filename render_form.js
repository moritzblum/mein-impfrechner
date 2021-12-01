'use strict';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handler}>
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            {this.props.form_body}
                            <br />
                            <button className="btn btn-primary" onClick={this.props.handler} id={this.props.id_back}>
                                back
                            </button>
                            <button className="btn btn-primary" onClick={this.props.handler} id={this.props.id_next}>
                                next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


let form_body_vaccination =
    <div>
        <div className="form-group">
            <label>Impfstoff <i className="bi bi-info-circle"></i> :</label>
            <select className="form-select" id="exampleFormControlSelect1">
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
            <input id="datepicker_impftermin" type="text" className="form-control" placeholder="bitte auswählen" />
        </div>
    </div>;


function handle_vaccination_submit(){
    console.log('click: handle_vaccination_submit');
}




class Card_start extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card inactive" id="card_start" style={{width: "30rem"}}>
                <div className="card-body">
                    <div className="col-sm">
                        <h5 className="card-title">Start card</h5>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg button_next" id="card_start_button_next" onClick={this.props.handler}>Starten</button>
                </div>
            </div>
        );
    }
}


class CardManager extends React.Component {
    constructor(props) {
        super(props);
        this.control_click_handler = this.control_click_handler.bind(this);

        this.state = {
            step: 'start',
            history: []
        };
    }


    control_click_handler(e){
        console.log('click next on: ' + e.target.id);

        if(e.target.id == "card_start_button_next"){
            this.setState({step : 'vaccination'});
            this.setState({history: this.state.history.concat(['start'])});
        }
        if(e.target.id == "card_vaccination_back"){
            //handle_vaccination_submit();
            console.log('back');
        }

        e.preventDefault();
    }

    render() {
        const step = this.state.step;

        switch(step) {
            case 'start':
                return (
                    <Card_start handler={this.control_click_handler} />
                );
            case 'vaccination':
                return (
                    <Card title={"Test 2"} id_next={"card_vaccination_next"} id_back={"card_vaccination_back"} form_body={form_body_vaccination} handler={this.control_click_handler}/>
                );
            case 'vaccinated':
                return (
                    <Card_start handler={this.control_click_handler} />
                );
            case 'past_infection':
                return (
                    <Card_start handler={this.control_click_handler} />
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
    <CardManager />,
    document.getElementById('root')
);

