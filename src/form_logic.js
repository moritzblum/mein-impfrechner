import * as date_operations from './date_operations.js';
import {texts_german, constants} from "./texts.js";
import {add_month_2_date} from "./date_operations.js";

// Possible User Histories: 5 (registered vaccination brands) * 6 (age groups) * 2 (risk group) * 2 (past infection) * 3 (infection date) * 3 (symptoms) * 2 (got unregistered vaccination) * 4 (number vaccinations) * 2 (vaccinations) => 17.280 combinations
// Possible Recommendations: 5 (brands) * 2 (got unregistered vaccination) * 2 (past infection) => 20 combinations



const BIONTECH = "biontech";
const MODERNA = "moderna";
const BIONTECH_MODERNA = "biontech_moderna";
const BIONTECH_MODERNA_ASTRA = "biontech_moderna_astra";

export function get_next_card(card_history, user_data) {
    //  possible_cards: 'vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms_registered',
    //  'symptoms_end_date', 'risk_group', 'number_vaccinations', 'got_unregistered_vaccination',
    //  'unregistered_vaccination_date'

    function create_output(result_id, result_value) {
        return ["result", {[result_id]: true, 'value': result_value}];
    }

    let infection_date, symptoms_end_date, unregistered_vaccination_date, vaccination_last_date;

    if (card_history.length === 0) {
        return ['start', {}];
    }
    if (!('age' in user_data)) {
        return ['age', {}];
    }

    let user_age = user_data['age']['value'];

    if (user_age >= constants['age_groups']['age_group_7'][0]) {
        return create_output('result_1', [texts_german['results']['really_old']]);
    }

    if (user_age <= constants['age_groups']['age_group_1'][1]) {
        return create_output('result_2', [texts_german["results"]["no_general_recommendation"]]);
    }

    if (!('risk_group' in user_data)) {
        return ['risk_group', {}];
    }

    let risk_group = (user_data['risk_group']['value'] == true);

    if (user_age <= constants['age_groups']['age_group_2'][1]) {
        if (risk_group === false) {
            return create_output('result_2', [texts_german["results"]["no_general_recommendation"]]);
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
            return create_output('result_3', [texts_german["results"]["no_recommendation_symptoms"]]);
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

        if (past_infection && date_operations.add_month_2_date(user_data['infection_date']['date'], 6) >= Date.now()) {
            if (user_age <= constants['age_groups']['age_group_2'][1]) {
                if (risk_group) {
                    return create_output('result_4', [texts_german['results']['contact_dr']]);

                } else {
                    return create_output('result_2', [texts_german['results']['no_general_recommendation']]);
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

        let first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]);

        if (vaccination_possibilities === BIONTECH) {
            return create_output('result_5', [
                texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
            ]);
        }
        if (vaccination_possibilities === BIONTECH_MODERNA) {
            return create_output('result_6', [
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
            ]);
        }
        if (vaccination_possibilities === BIONTECH_MODERNA_ASTRA) {
            return create_output('result_7', [
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    texts_german['results']['next_possible_date_first'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['johnson']),
                ]
            );
        }
        else {
            console.log('ERROR')
            create_output('result_25', texts_german['results']['error']);
        }
    }

    if (!('number_vaccinations' in user_data)) {
        return ['number_vaccinations', {}];
    }

    if (((user_data['number_vaccinations']['value'] === 2) && (user_age <= constants['age_groups']['age_group_3'][1]))
        || (user_data['number_vaccinations']['value'] == 3)){
        return create_output('result_8', texts_german['results']['no_further_recommendation']);
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

    if (vaccination_history[0] === texts_german['vaccines']['novavax']){

        console.log('ERROR: Unser entered Novavax (not supported yet)');
        return create_output('result_25', [
            texts_german['results']['error']
        ]);

    }

    // second shot
    if (user_data['number_vaccinations']['value'] == 1 && !past_infection) {
        let three_weeks_first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_last_date, 3)]).toLocaleDateString('de-DE');
        let four_weeks_first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_last_date, 4),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        let last_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_last_date, 6),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        let vaccination_possibilities_second_dose = undefined; // BIONTECH/BIONTECH_MODERNA/BIONTECH_MODERNA_ASTRA

        // age <= 29
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
            if (vaccination_history[0] !== texts_german['vaccines']['johnson']){
                // bei Johnson Erstimpfung sollte mehr als 4 Wochen gewartet werden
                return create_output('result_9', [
                    texts_german['results']['second_vaccination_range'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', four_weeks_first_possible_date).replace('<date_second>', last_possible_date)
                ]);

            } else {
                vaccination_possibilities_second_dose = BIONTECH;
            }
        }
        // age >= 30
        else {
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
            return create_output('result_10', [
                texts_german['results']['second_vaccination_range'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', three_weeks_first_possible_date).replace('<date_second>', last_possible_date)
            ]);

        }
        if (vaccination_possibilities_second_dose === MODERNA) {
            return create_output('result_11', [
                texts_german['results']['second_vaccination_range'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date_first>', four_weeks_first_possible_date).replace('<date_second>', last_possible_date)
            ]);

        }
        if (vaccination_possibilities_second_dose === BIONTECH_MODERNA) {
            return create_output('result_12', [
                texts_german['results']['next_possible_date_second_dose'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date_first>', four_weeks_first_possible_date),
                texts_german['results']['next_possible_date_second_dose'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date_first>', four_weeks_first_possible_date)
            ]);

        }
        else {
            console.log('ERROR');
            return create_output('result_25', [texts_german['results']['error']]);

        }
    }

    if (user_data['number_vaccinations']['value'] == 1 && past_infection) {

        // Infektion innerhalb von 4 Wochen nach 1. Impfung
        if ((vaccination_last_date <= infection_date) && (infection_date <= date_operations.add_weeks_2_date(vaccination_last_date, 4))){
            // Grundimmunisierung durch Impfung nach 3 Monaten
            let first_possible_date = date_operations.get_latest_date([
                Date.now(),
                date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
                date_operations.add_month_2_date(infection_date, 3),
                date_operations.add_weeks_2_date(symptoms_end_date, 4)
            ]);

            // age <= 30
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
                return create_output('result_13', [
                    texts_german['results']['second_vaccination_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]);
            }
            else {
                return create_output('result_14', [
                    texts_german['results']['second_vaccination_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['second_vaccination_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                ]);

            }
        }
        else {
            // nur noch Boostern nach 3 Monaten nötig
            let first_possible_date = date_operations.get_latest_date([
                Date.now(),
                date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
                date_operations.add_month_2_date(infection_date, 3),
                date_operations.add_weeks_2_date(symptoms_end_date, 4),
                date_operations.add_month_2_date(vaccination_last_date, 3)
            ]);

            // age <= 30
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || risk_group) {
                return create_output('result_15', [
                    texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]);
            }
            else {
                return create_output('result_16', [
                    texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
                ]);
            }
        }
    }


    // third shot
    if (user_data['number_vaccinations']['value'] == 2 && !past_infection) {
        let first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_month_2_date(vaccination_last_date, 3),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        let first_dose = vaccination_history[0];
        let second_dose = vaccination_history[1];

        if (first_dose === texts_german['vaccines']['biontec'] && second_dose === texts_german['vaccines']['biontec']){
            return create_output('result_17', [
                texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date)
            ])
        }

        // age 30-59
        if ((constants['age_groups']['age_group_5'][0] <= user_age) &&  (user_age <= constants['age_groups']['age_group_5'][1])) {

            if (first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['moderna']){
                return create_output('result_18', [
                    texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date>', first_possible_date)
                ]);
            }
        }
        // age >= 60
        if (user_age >= constants['age_groups']['age_group_6'][0]) {
            if ((first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['moderna']) ||
                (first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['moderna']) ||
                (first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['moderna'])

            ){
                return create_output('result_19', [
                    texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date>', first_possible_date)
                ]);
            }
            if ((first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['biontec']) ||
                (first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['biontec'])
            ){
                return create_output('result_20', [
                    texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date)
                ]);
            }
        }

        // age 18-29
        if ((constants['age_groups']['age_group_4'][0] <= user_age) && (user_age <= constants['age_groups']['age_group_4'][1])) {
            if (first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['biontec']){
                return create_output('result_21', [
                    texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date)
                ]);
            }
        }

        if ((first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['astra']) ||
            (first_dose === texts_german['vaccines']['biontec'] && second_dose === texts_german['vaccines']['astra']) ||
            (first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['astra']) ||
            (first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['astra']) ||
            (first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['johnson']) ||
            (first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['moderna']) ||
            (first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['moderna']) ||
            (first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['biontec'])
        ){
            return create_output('result_22', [
                texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date),
                texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date>', first_possible_date)
            ]);
        }
    }

    if (user_data['number_vaccinations']['value'] == 2 && past_infection) {

        let first_possible_date = date_operations.get_latest_date([
            Date.now(),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4),
            date_operations.add_month_2_date(vaccination_last_date, 3)
        ]);

        // age <= 30
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || user_data['risk_group']['value']) {
            return create_output('result_23', [
                texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
            ]);
        }
        else {
            return create_output('result_24', [
                texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['biontec']),
                texts_german['results']['next_possible_date_booster_infection'].replace('<date>', first_possible_date.toLocaleDateString('de-DE')).replace('<vaccination_brand>', texts_german['vaccines']['moderna']),
            ]);
        }
    }

    console.log('ERROR');
    return create_output('result_25', [
        texts_german['results']['error']
    ]);
}




