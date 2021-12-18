let card_history = [];
let user_data = {};

function get_next_card(card_history, user_data) {
    let possible_cards = ['vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms_registered', 'symptoms_end_date', 'risk_group', 'number_vaccinations', 'got_unregistered_vaccination', 'unregistered_vaccination_date'];

    if (card_history.length == 0) {
        return ['start', {}];
    }
    if (!('age' in user_data)) {
        return ['age', {}];
    }

    let user_age = user_data['age']['value'];

    if (user_age >= constants['age_groups']['age_group_4'][0]) {
        console.log('result_3: wenn du wirklich schon so lange gelegt hast, dann bringt dich auch Corona nicht mehr um. ;)');
        return ["result", {'result_3': true}];
    }

    if (!('risk_group' in user_data)) {
        return ['risk_group', {}];
    }

    if (user_age <= constants['age_groups']['age_group_1'][1]) {

        if (user_data['risk_group']['value'] == true){
            console.log('result_1: bitte besprechen Sie das mit ihrem Arzt');
            return ["result", {'result_1': true}];
        }
        else{
            console.log('result_2: aktuell keine Impfempfehlung');
            return ["result", {'result_2': true}];
        }
    }


    if (!('past_infection' in user_data)){
        return ['past_infection', {}];
    }

    if (user_data['past_infection']['value']){
        if (!('infection_date' in user_data)) {
            return ['infection_date', {}];
        }
        if (!('symptoms_registered' in user_data)){
            return ['symptoms_registered', {}];
        }
        if (user_data['symptoms_registered']['value'] === 'past') {
            if (!('symptoms_end_date' in user_data)){
                return ['symptoms_end_date', {}];
            }
        }

        if (user_data['symptoms_registered']['value'] === 'still') {
            console.log('result_2: aktuell keine Impfempfehlung');
            return ['result', {'result_2': true}];
        }

        // infection date is the limiting factor concerning the vaccination date
        if (user_data['symptoms_registered']['value'] === 'never') {
            user_data['symptoms_end_date'] = user_data['infection_date'];
        }
    }
    else {
        // just to simplify the calculation
        user_data['infection_date'] = {'date': '01.01.2020'};
    }

    if (!('got_unregistered_vaccination' in user_data)){
        return ['got_unregistered_vaccination', {}];
    }

    if (user_data['got_unregistered_vaccination']['value']) {
        if (!('unregistered_vaccination_date' in user_data)){
            return ['unregistered_vaccination_date', {}];
        }
    }
    else {
        // just to simplify the calculation
        user_data['unregistered_vaccination_date'] = {'date': '01.01.2020'};
    }


    if (!('vaccinated' in user_data)) {
        return ['vaccinated', {}];
    }

    // past infection and vaccinated
    if (user_data['vaccinated']['value'] && user_data['past_infection']['value']) {
        console.log('vaccinated and infected, no further recommendation');
        return ['result', {'result_10': true}];
    }

    if (!(user_data['vaccinated']['value'])){

        if (!user_data['past_infection']['value']) {
            // age >= 30, normal first vaccination
            let first_possible_date = get_latest_date([Date.now(), add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 4)]);
            if (user_age >= constants['age_groups']['age_group_3'][0]) {
                return ['result', {'result_11': true, 'value': first_possible_date}];
            }
            // age < 30, normal first vaccination
            else {
                return ['result', {'result_12': true, 'value': first_possible_date}];
            }
        }

        if (user_data['past_infection']['value']) {
            let first_possible_date = get_latest_date([Date.now(),
                add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 4),
                add_weeks_2_date(ger_str_2_date(user_data['infection_date']['date']), 4),
                add_weeks_2_date(ger_str_2_date(user_data['symptoms_end_date']['date']), 4)]);

            // age >= 30, first vaccination with past infection
            if (user_age >= constants['age_groups']['age_group_3'][0]) {
                return ['result', {'result_13': true, 'value': first_possible_date}];
            }
            // age < 30, first vaccination with past infection
            else {
                return ['result', {'result_14': true, 'value': first_possible_date}];
            }
        }
    }

    if (!('number_vaccinations' in user_data)) {
        return ['number_vaccinations', {}];
    }

    if (user_data['number_vaccinations']['value'] >= 5){
        console.log('result_7: 5 Impfungen sind auf jeden Fall genug, keine weitere Impfempfehlung.');
        return ['result', {'result_7': true}];
    }

    if (user_data['number_vaccinations']['value'] == 3){
        console.log('result_21: Boostern schon durch');
        return ['result', {'result_21': true}];
    }

    if (! ('vaccination_last' in user_data)) {
        if (user_data['number_vaccinations']['value'] == 1) {
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

    let got_one_shot_dose = false;
    vaccination_history.forEach(element => {
        if (constants.registered_vaccination_brands_one_shots.includes(element)){
            got_one_shot_dose = true;
        }
    });

    if (got_one_shot_dose && vaccination_history.length == 2) {
        console.log('Auch durch mit Impfung');
        return ['result', {'result_20': true}];
    }


    if (user_data['number_vaccinations']['value'] == 1) {
        // age >= 30
        if (user_age >= constants['age_groups']['age_group_3'][0]) {
            if (got_one_shot_dose) {
                // Auffrischung nach 4-6 Wochen
                let first_possible_date = get_latest_date([Date.now(), add_weeks_2_date(ger_str_2_date(user_data['vaccination_last']['date']), 3)]);
                let moderna_possible_date = get_latest_date([Date.now(),
                    add_weeks_2_date(ger_str_2_date(user_data['vaccination_last']['date']), 4),
                    add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 4)]);

                let last_possible_date = get_latest_date([Date.now(),
                    add_weeks_2_date(ger_str_2_date(user_data['vaccination_last']['date']), 6),
                    add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 4)]);
                console.log('moderna or biontec')
                return ['result', {'result_15': true, 'value': [first_possible_date, last_possible_date]}];
            }
            else {
                // Immunisierung
                console.log('moderna or biontec')
                let first_possible_date = get_latest_date([Date.now(),
                    add_month_2_date(ger_str_2_date(user_data['vaccination_last']['date']), 5),
                    add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 4)]);
                return ['result', {'result_16': true, 'value': first_possible_date}];
            }
        }
        // age < 30
        else {
            let first_possible_date = get_latest_date([Date.now(),
                add_month_2_date(ger_str_2_date(user_data['vaccination_last']['date']), 5),
                add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 4)]);
            return ['result', {'result_17': true, 'value': first_possible_date}];
        }

    }

    // klassisches Boostern
    if (user_data['number_vaccinations']['value'] == 2) {
        let first_possible_date = get_latest_date([Date.now(),
            add_month_2_date(ger_str_2_date(user_data['vaccination_last']['date']), 5),
            add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 3)]);

        // booster age >= 30
        if (user_age >= constants['age_groups']['age_group_3'][0]) {
            console.log('biontec or moderna');
            let moderna_possible_date = get_latest_date([Date.now(),
                add_month_2_date(ger_str_2_date(user_data['vaccination_last']['date']), 5),
                add_weeks_2_date(ger_str_2_date(user_data['unregistered_vaccination_date']['date']), 4)]);
            return ['result', {'result_18': true, 'value': first_possible_date}];
        }
        // booster age < 30
        else {
            console.log('only biontec');
            return ['result', {'result_19': true, 'value': first_possible_date}];
        }
    }


    console.log('Default case: sampled random card.')
    return possible_cards[Math.floor(Math.random() * possible_cards.length)];


}



function get_user_data(card_id) {
    return user_data[card_id]
}