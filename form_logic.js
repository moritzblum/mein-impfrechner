let card_history = [];
let user_data = {};

function get_next_card(card_history, user_data) {
    let possible_cards = ['vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms', 'symptoms_end', 'risk_group', 'number_vaccinations', 'got_unregistered_vaccination', 'unregistered_vaccination_date'];

    if (card_history.length === 0) {
        return ['start', {}];
    }
    if (!('age' in user_data)) {
        return ['age', {}];
    }

    let user_age = user_data['age']['value'];

    if (user_age >= constants['age_groups']['age_group_3'][0]) {
        console.log('result_3: wenn du wirklich schon so lange gelegt hast, dann bringt dich auch Corona nicht mehr um. ;)');
        return ["result", {'result_3': true}];
    }

    if (!('risk_group' in user_data)) {
        return ['risk_group', {}];
    }

    if (user_age <= constants['age_groups']['age_group_1'][1]) {

        if (user_data['risk_group']['value'] === true){
            console.log('result_1: bitte besprechen Sie das mit ihrem Arzt');
            return ["result", {'result_1': true}];
        }
        else{
            console.log('result_2: aktuell keine Impfempfehlung');
            return ["result", {'result_2': true}];
        }
    }

    // else (user_age <= constants['age_groups']['age_group_2'][1])

    if (!('past_infection' in user_data)){
        return ['past_infection', {}];
    }

    if (user_data['past_infection']['value']){
        if (!('infection_date' in user_data)) {
            return ['infection_date', {}];
        }
        if (!('symptoms' in user_data)){
            return ['symptoms', {}];
        }
        if (user_data['symptoms']['value'] === 'past') {
            if (!('symptoms_end' in user_data)){
                return ['symptoms_end', {}];
            }
        }

        if (user_data['symptoms']['value'] === 'still') {
            console.log('result_2: aktuell keine Impfempfehlung');
            return ['result', {'result_2': true}];
        }
    }

    if (!('got_unregistered_vaccination' in user_data)){
        return ['got_unregistered_vaccination', {}];
    }

    if (user_data['got_unregistered_vaccination']['value']) {
        if (!('unregistered_vaccination_date' in user_data)){
            return ['unregistered_vaccination_date', {}];
        }
    }

    if (!('vaccinated' in user_data)) {
        return ['vaccinated', {}];
    }

    if (!(user_data['vaccinated']['value'])){
        if (user_data['past_infection']['value']){
            if (user_data['symptoms']['value'] === 'past'){
                console.log('result_5: Impfempfehlung max(' + user_data['infection_date']['value'] + ',' + user_data['symptoms_end']['value'] + ') + 4 Wochen');
                return ['result', {'result_5': true}];
            }
            if (user_data['symptoms']['value'] === 'never'){
                console.log('result_6: Impfempfehlung' + user_data['infection_date']['value'] + '+ 4 Wochen');
                return ['result', {'result_6': true}];
            }
        }

        console.log('result_4: generelle Impfempfehlung für Menschen ohne Impfung und vorherige Infektion');
        return ['result', {'result_4': true}];
    }

    if (!('number_vaccinations' in user_data)) {
        return ['number_vaccinations', {}];
    }

    if (user_data['number_vaccinations']['value'] >= 5){
        console.log('result_7: 5 Impfungen sind auf jeden Fall genug, keine weitere Impfempfehlung.');
        return ['result', {'result_7': true}];
    }

    if (! ('vaccination_last' in user_data)) {
        if (user_data['number_vaccinations']['value'] === 1) {
            return ['vaccination_last', {}];
        }

        if ((user_data['number_vaccinations']['value'] > 1) && !('vaccination_1' in user_data))  {
            return ['vaccination_1', {}];
        }

        if ((user_data['number_vaccinations']['value'] > 2) && !('vaccination_2' in user_data))  {
            return ['vaccination_2', {}];
        }

        return ['vaccination_last', {}];
    }

    let vaccination_history = [];

    if (user_data['number_vaccinations']['value'] > 1) {
        vaccination_history.push(user_data['vaccination_1']['value']);
    }

    vaccination_history.push(user_data['vaccination_last']['value']);
    console.log(vaccination_history);


    let got_one_shot_dose = false;
    vaccination_history.forEach(element => {
        if (element in constants.registered_vaccination_brands_one_shots){
            got_one_shot_dose = true;
        }
    });

    if (got_one_shot_dose && vaccination_history.length === 2) {
        console.log('Auch durch mit Impfung');
    }







    if (user_data['number_vaccinations']['value'] === 1) {
        console.log('result_8: 1 Impfung')
        return ['result', {'result_8': true}];
    }

    if (user_data['number_vaccinations']['value'] === 2) {
        console.log('result_9: 2 Impfungen')
        return ['result', {'result_9': true}];
    }



    // TODO
    console.log('TODO')

    console.log('Default case: sampled random card.')
    return possible_cards[Math.floor(Math.random() * possible_cards.length)];


}


// todo get_last_card() -> card_id, past_user_input
function get_last_card() {
    return card_history.pop();
}

function get_user_data(card_id) {
    return user_data[card_id]
}