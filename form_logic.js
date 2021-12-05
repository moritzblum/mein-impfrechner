let card_history = [];
let user_data = {};

// todo get_next_card(user_input) -> card_id, empty_data_object
function get_next_card(user_input){
    let possible_cards = [ 'vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms', 'symptoms_end', 'risk_group', 'number_vaccinations'];
    //possible_cards = ['vaccination'];
    return possible_cards[Math.floor(Math.random()*possible_cards.length)];
}

function add_to_history(card_id, user_data_input){
    card_history.push(card_id);
    user_data[card_id] = user_data_input;
    console.log('model user_data: ' + JSON.stringify(user_data));
}


// todo get_last_card() -> card_id, past_user_input
function get_last_card(){
    return card_history.pop();
}

function get_user_data(card_id){
    return user_data[card_id]
}