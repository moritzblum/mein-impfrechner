let user_data_history = [];



// todo get_next_card(user_input) -> card_id, empty_data_object
function get_next_card(user_input){
    let possible_cards = ['start', 'vaccination', 'vaccinated', 'past_infection'];
    return possible_cards[Math.floor(Math.random()*possible_cards.length)];
}

function add_to_history(card_id){
    user_data_history.concat([card_id]);
    console.log('user data history: ' + user_data_history);
}


// todo get_last_card() -> card_id, past_user_input
function get_last_card(){
    return ['start']

}