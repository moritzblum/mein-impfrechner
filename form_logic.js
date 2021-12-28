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

    if (user_age <= constants['age_groups']['age_group_2'][1]) {
        if (user_data['risk_group']['value'] == false) {
            return ["result", {'result_2': true, 'value': [texts_german["results"]["no_general_recommendation"]]}];
        }
    }

    if (!('past_infection' in user_data)) {
        return ['past_infection', {}];
    }

    if (user_data['past_infection']['value']) {
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

        let first_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(unregistered_vaccination_date, 4),
            add_month_2_date(infection_date, 3),
            add_weeks_2_date(symptoms_end_date, 4)]);

        if ( user_data['past_infection']['value']) {

            // age >= 30
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
                return ['result', {
                    'result_28': true,
                    'value':[
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    ]
                }];
            }
            else {
                return ['result', {
                    'result_29': true,
                    'value':[
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    ]
                }];
            }
        }
        else {
            // age >= 60
            if ((user_age >= constants['age_groups']['age_group_6'][0]) && !user_data['risk_group']['value'] ) {
                return ['result', {
                    'result_11': true,
                    'value':[
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['johnson']),
                    ]
                }];
            }
            // age >= 30
            if ((user_age >= constants['age_groups']['age_group_5'][0]) && !user_data['risk_group']['value']) {
                return ['result', {
                    'result_12': true,
                    'value':[
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    ]
                }];
            }
            // age < 30, normal first vaccination
            else {
                return ['result', {'result_13': true,
                    'value':[
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec'])
                    ]
                }];
            }
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


    /*
    let got_one_shot_dose = false;
    vaccination_history.forEach(element => {
        if (constants.registered_vaccination_brands_one_shots.includes(element)) {
            got_one_shot_dose = true;
        }
    });
     */

    // second shot
    if (user_data['number_vaccinations']['value'] == 1 && !user_data['past_infection']['value']) {
        let biontec_first_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(vaccination_last_date, 3)]).toLocaleDateString('de-DE');
        let moderna_first_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(vaccination_last_date, 4),
            add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        let last_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(vaccination_last_date, 6),
            add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        // age <= 29
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
            return ['result', {'result_18': true,
                'value': [
                    texts_german['results']['second_vaccination_range'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', biontec_first_possible_date).replace('<date_second>', last_possible_date)
                ]
            }];
        }
        // age >= 30
        else {
            if ([texts_german['vaccines']['astra'],
                texts_german['vaccines']['johnson']].includes(vaccination_history[0])){
                return ['result', {
                    'result_19': true,
                    'value':[
                        texts_german['results']['second_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', biontec_first_possible_date),
                        texts_german['results']['second_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date_first>', biontec_first_possible_date)
                    ]
                }];
            }
            if (texts_german['vaccines']['biontec'] === vaccination_history[0]){
                return ['result', {'result_20': true,
                    'value': [
                        texts_german['results']['second_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', biontec_first_possible_date).replace('<date_second>', last_possible_date)
                    ]
                }];
            }
            if (texts_german['vaccines']['moderna'] === vaccination_history[0]){
                return ['result', {'result_21': true,
                    'value': [
                        texts_german['results']['second_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date_first>', moderna_first_possible_date).replace('<date_second>', last_possible_date)
                    ]
                }];
            }
        }
    }

    if (user_data['number_vaccinations']['value'] == 1 && user_data['past_infection']['value']) {

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
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    ]
                }];
            }
            else {
                return ['result', {
                    'result_31': true,
                    'value':[
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                        texts_german['results']['next_possible_date'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
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
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
                return ['result', {
                    'result_32': true,
                    'value':[
                        texts_german['results']['next_possible_date_booster'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    ]
                }];
            }
            else {
                return ['result', {
                    'result_33': true,
                    'value':[
                        texts_german['results']['next_possible_date_booster'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                        texts_german['results']['next_possible_date_booster'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    ]
                }];
            }
        }
    }


    // third shot
    if (user_data['number_vaccinations']['value'] == 2 && !user_data['past_infection']['value']) {
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

    if (user_data['number_vaccinations']['value'] == 2 && user_data['past_infection']['value']) {

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
                    texts_german['results']['next_possible_date_booster'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]
            }];
        }
        else {
            return ['result', {
                'result_35': true,
                'value':[
                    texts_german['results']['next_possible_date_booster'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_booster'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
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




