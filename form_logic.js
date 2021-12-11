let card_history = [];
let user_data = {};

// todo get_next_card(user_input) -> card_id, empty_data_object
function get_next_card(card_history, user_data) {
    let possible_cards = ['vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms', 'symptoms_end', 'risk_group', 'number_vaccinations'];
    //possible_cards = ['vaccination'];
    console.log(card_history);
    console.log('make prediction:')
    if (card_history.length === 0) {
        return 'start';
    } else {
        if (!('age' in user_data)) {
            return 'age';
        } else {
            if (user_data['age']['value'] <= constants['age_groups']['age_group_1'][1]) {
                if (!('risk_group' in user_data)) {
                    return 'risk_group';
                } else {
                    if (user_data['risk_group']['value'] === true){
                        console.log('result_1: bitte besprechen Sie das mit ihrem Arzt');
                        return "result_1";
                    }
                    else{
                        console.log('result_2: aktuell keine Impfempfehlung');
                        return "result_2";
                    }
                }


            }
            return possible_cards[Math.floor(Math.random() * possible_cards.length)];
        }
    }
}


// todo get_last_card() -> card_id, past_user_input
function get_last_card() {
    return card_history.pop();
}

function get_user_data(card_id) {
    return user_data[card_id]
}