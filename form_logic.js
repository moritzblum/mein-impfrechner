let BIONTECH = "biontech";
let MODERNA = "moderna";
let BIONTECH_MODERNA = "biontech_moderna";
let BIONTECH_MODERNA_ASTRA = "biontech_moderna_astra";
let RESULT_01 = "no further recommendation";
// ...


function get_next_card(card_history, user_data) {
    let possible_cards = ['vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms_registered', 'symptoms_end_date', 'risk_group', 'number_vaccinations', 'got_unregistered_vaccination', 'unregistered_vaccination_date'];

    let infection_date, symptoms_end_date, unregistered_vaccination_date, vaccination_last_date;

    if (card_history.length === 0) {
        return ['start', {}];
    }
    if (!('age' in user_data)) {
        return ['age', {}];
    }

    let user_age = user_data['age']['value'];

    if (user_age >= constants['age_groups']['age_group_7'][0]) {
        return ["result", {'result_3': true, 'value': [texts_german['results']['really_old']]}];
    }

    if (user_age <= constants['age_groups']['age_group_1'][1]) {
        return ["result", {'result_2': true, 'value': [texts_german["results"]["no_general_recommendation"]]}];
    }

    if (!('risk_group' in user_data)) {
        return ['risk_group', {}];
    }

    let risk_group = (user_data['risk_group']['value'] == true);

    if (user_age <= constants['age_groups']['age_group_2'][1]) {
        if (risk_group === false) {
            return ["result", {'result_2': true, 'value': [texts_german["results"]["no_general_recommendation"]]}];
        }
    }

    if (!('past_infection' in user_data)) {
        return ['past_infection', {}];
    }

    let past_infection = user_data['past_infection']['value'];

    if (past_infection) {
        if (!('infection_date' in user_data)) {
            return ['infection_date', {}];
        }
        else{
            infection_date = user_data['infection_date']['date'];
        }
        if (!('symptoms_registered' in user_data)) {
            return ['symptoms_registered', {}];
        }
        if (user_data['symptoms_registered']['value'] === 'past') {
            if (!('symptoms_end_date' in user_data)) {
                return ['symptoms_end_date', {}];
            }
            else {
                symptoms_end_date = user_data['symptoms_end_date']['date'];
            }
        }

        if (user_data['symptoms_registered']['value'] === 'still') {
            return ['result', {'result_2': true, 'value': [texts_german["results"]["no_recommendation_symptoms"]]}];
        }

    }

    if (!('got_unregistered_vaccination' in user_data)) {
        return ['got_unregistered_vaccination', {}];
    }

    if (user_data['got_unregistered_vaccination']['value']) {
        if (!('unregistered_vaccination_date' in user_data)) {
            return ['unregistered_vaccination_date', {}];
        }
        else {
            unregistered_vaccination_date = user_data['unregistered_vaccination_date']['date']
        }
    }

    if (!('vaccinated' in user_data)) {
        return ['vaccinated', {}];
    }

    // komplett ungeimpft
    if (!(user_data['vaccinated']['value'])) {

        let vaccination_possibilities = undefined; // BIONTECH/BIONTECH_MODERNA/BIONTECH_MODERNA_ASTRA

        if (past_infection) {
            if (user_age <= constants['age_groups']['age_group_2'][1]) {
                if (risk_group) {
                    return ['result', {
                        'result_36': true,
                        'value': [
                            texts_german['results']['contact_dr']
                        ]
                    }];
                } else {
                    return ['result', {
                        'result_37': true,
                        'value': [
                            texts_german['results']['no_general_recommendation']
                        ]
                    }];
                }
            }

            // age <= 30
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || risk_group) {
                vaccination_possibilities = BIONTECH;
            } else {
                vaccination_possibilities = BIONTECH_MODERNA;
            }
        } else {
            // age >= 60
            if ((user_age >= constants['age_groups']['age_group_6'][0]) && !risk_group) {
                vaccination_possibilities = BIONTECH_MODERNA_ASTRA;
            }
            // age >= 30
            if ((user_age >= constants['age_groups']['age_group_5'][0]) && !risk_group) {
                vaccination_possibilities = BIONTECH_MODERNA;
            }
            // age < 30, normal first vaccination
            else {
                vaccination_possibilities = BIONTECH;
            }
        }

        let first_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(unregistered_vaccination_date, 4),
            add_month_2_date(infection_date, 3),
            add_weeks_2_date(symptoms_end_date, 4)]);

        if (vaccination_possibilities === BIONTECH) {
            return ['result', {
                'result_28': true,
                'value': [
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]
            }];
        }
        if (vaccination_possibilities === BIONTECH_MODERNA) {
            return ['result', {
                'result_12': true,
                'value': [
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                ]
            }];
        }
        if (vaccination_possibilities === BIONTECH_MODERNA_ASTRA) {
            return ['result', {
                'result_11': true,
                'value': [
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['johnson']),
                ]
            }];
        }
        else {
            // todo error case
            return "TODO";
        }
    }

    if (!('number_vaccinations' in user_data)) {
        return ['number_vaccinations', {}];
    }

    if ((user_data['number_vaccinations']['value'] === 2) && (user_age <= constants['age_groups']['age_group_3'][1])){
        return ['result', {
            'result_16': true,
            'value':[
                texts_german['results']['no_further_recommendation']
            ]
        }];
    }

    if (user_data['number_vaccinations']['value'] == 3) {
        return ['result', {
            'result_17': true,
            'value': [
                texts_german['results']['no_further_recommendation']
            ]
        }];
    }

    // collect vaccination information
    if (!('vaccination_last' in user_data)) {
        if (user_data['number_vaccinations']['value'] == 1) {
            return ['vaccination_last', {}];
        }

        if ((user_data['number_vaccinations']['value'] > 1) && !('vaccination_1' in user_data)) {
            return ['vaccination_1', {}];
        }

        if ((user_data['number_vaccinations']['value'] > 2) && !('vaccination_2' in user_data)) {
            return ['vaccination_2', {}];
        }

        return ['vaccination_last', {}];
    }

    let vaccination_history = [];

    if (user_data['number_vaccinations']['value'] > 1) {
        vaccination_history.push(user_data['vaccination_1']['value']);
    }

    vaccination_history.push(user_data['vaccination_last']['value']);
    vaccination_last_date = user_data['vaccination_last']['date'];

    // second shot
    if (user_data['number_vaccinations']['value'] == 1 && !past_infection) {
        let three_weeks_first_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(vaccination_last_date, 3)]).toLocaleDateString('de-DE');
        let four_weeks_first_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(vaccination_last_date, 4),
            add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        let last_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(vaccination_last_date, 6),
            add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        let vaccination_possibilities_second_dose = undefined; // BIONTECH/BIONTECH_MODERNA/BIONTECH_MODERNA_ASTRA

        // age <= 29
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
            vaccination_possibilities_second_dose = BIONTECH;
            // todo bei Johnson Erstimpfung sollte mehr als 4 Wochen gewartet werden
        }
        // age >= 30
        else {
            // todo bei Johnson Erstimpfung sollte mehr als 4 Wochen gewartet werden
            if ([texts_german['vaccines']['astra'],
                texts_german['vaccines']['johnson']].includes(vaccination_history[0])){
                vaccination_possibilities_second_dose = BIONTECH_MODERNA;

            }
            if (texts_german['vaccines']['biontec'] === vaccination_history[0]){
                vaccination_possibilities_second_dose = BIONTECH;

            }
            if (texts_german['vaccines']['moderna'] === vaccination_history[0]){
                vaccination_possibilities_second_dose = MODERNA;
            }
        }

        if (vaccination_possibilities_second_dose === BIONTECH) {
            return ['result', {'result_20': true,
                'value': [
                    texts_german['results']['second_vaccination_range'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', three_weeks_first_possible_date).replace('<date_second>', last_possible_date)
                ]
            }];
        }
        if (vaccination_possibilities_second_dose === MODERNA) {
            return ['result', {'result_21': true,
                'value': [
                    texts_german['results']['second_vaccination_range'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date_first>', four_weeks_first_possible_date).replace('<date_second>', last_possible_date)
                ]
            }];
        }
        if (vaccination_possibilities_second_dose === BIONTECH_MODERNA) {
            return ['result', {
                'result_19': true,
                'value':[
                    texts_german['results']['second_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', three_weeks_first_possible_date),
                    texts_german['results']['second_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date_first>', three_weeks_first_possible_date)
                ]
            }];
        }
        else {
            // TODO Error case
            return 'todo';
        }
    }

    if (user_data['number_vaccinations']['value'] == 1 && past_infection) {

        // Infektion innerhalb von 4 Wochen nach 1. Impfung
        if ((vaccination_last_date <= infection_date) && (ger_str_2_date(infection_date) <= add_weeks_2_date(vaccination_last_date, 4))){
            // Grundimmunisierung durch Impfung nach 3 Monaten
            let first_possible_date = get_latest_date([
                Date.now(),
                add_weeks_2_date(unregistered_vaccination_date, 4),
                add_month_2_date(infection_date, 3),
                add_weeks_2_date(symptoms_end_date, 4)
            ]);

            // age <= 30
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
                return ['result', {
                    'result_30': true,
                    'value':[
                        texts_german['results']['second_vaccination_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    ]
                }];
            }
            else {
                return ['result', {
                    'result_31': true,
                    'value':[
                        texts_german['results']['second_vaccination_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                        texts_german['results']['second_vaccination_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    ]
                }];
            }
        }
        else {
            // nur noch Boostern nach 3 Monaten nötig
            let first_possible_date = get_latest_date([
                Date.now(),
                add_weeks_2_date(unregistered_vaccination_date, 4),
                add_month_2_date(infection_date, 3),
                add_weeks_2_date(symptoms_end_date, 4),
                add_month_2_date(vaccination_last_date, 3)
            ]);

            // age <= 30
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || risk_group) {

                return ['result', {
                    'result_32': true,
                    'value':[
                        texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    ]
                }];
            }
            else {
                return ['result', {
                    'result_33': true,
                    'value':[
                        texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                        texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    ]
                }];
            }
        }
    }


    // third shot
    if (user_data['number_vaccinations']['value'] == 2 && !past_infection) {
        let first_possible_date = get_latest_date([Date.now(),
            add_month_2_date(vaccination_last_date, 3),
            add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        let first_dose = vaccination_history[0];
        let second_dose = vaccination_history[1];

        if (first_dose === texts_german['vaccines']['biontec'] && second_dose === texts_german['vaccines']['biontec']){
            return ['result', {'result_22': true,
                'value': [
                    texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date)
                ]
            }];
        }

        // age 30-59
        if ((constants['age_groups']['age_group_5'][0] <= user_age) &&  (user_age <= constants['age_groups']['age_group_5'][1])) {

            if (first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['moderna']){
                return ['result', {'result_23': true,
                    'value': [
                        texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date>', first_possible_date)
                    ]
                }];
            }
        }
        // age >= 60
        if (user_age >= constants['age_groups']['age_group_6'][0]) {
            if ((first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['moderna']) ||
                (first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['moderna']) ||
                (first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['moderna'])

            ){
                return ['result', {'result_24': true,
                    'value': [
                        texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date>', first_possible_date)
                    ]
                }];
            }
            if ((first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['biontec']) ||
                (first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['biontec'])
            ){
                return ['result', {'result_25': true,
                    'value': [
                        texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date)
                    ]
                }];
            }
        }

        // age 18-29
        if ((constants['age_groups']['age_group_4'][0] <= user_age) && (user_age <= constants['age_groups']['age_group_4'][1])) {
            if (first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['biontec']){
                return ['result', {'result_26': true,
                    'value': [
                        texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date)
                    ]
                }];
            }
        }

        if (first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['biontec'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['johnson'] ||
            first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['moderna'] ||
            first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['moderna'] ||
            first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['biontec']
        ){
            return ['result', {'result_27': true,
                'value': [
                    texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date),
                    texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date>', first_possible_date)
                ]
            }];
        }
    }

    if (user_data['number_vaccinations']['value'] == 2 && past_infection) {

        let first_possible_date = get_latest_date([
            Date.now(),
            add_weeks_2_date(unregistered_vaccination_date, 4),
            add_month_2_date(infection_date, 3),
            add_weeks_2_date(symptoms_end_date, 4),
            add_month_2_date(vaccination_last_date, 3)
        ]);

        // age <= 30
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
            return ['result', {
                'result_34': true,
                'value':[
                    texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]
            }];
        }
        else {
            return ['result', {
                'result_35': true,
                'value':[
                    texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                ]
            }];
        }
    }

    console.log('ERROR')
    return ['result', {
        'result_36': true,
        'value':[
            texts_german['results']['error']
        ]
    }];
}




