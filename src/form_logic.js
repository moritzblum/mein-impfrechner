import * as date_operations from './date_operations.js';
import {texts_german, constants} from "./texts.js";
import {add_month_2_date, toLocaleDateString} from "./date_operations.js";

// Possible User Histories: 5 (registered vaccination brands) * 6 (age groups) * 2 (risk group) * 2 (past infection) * 3 (infection date) * 3 (symptoms) * 2 (got unregistered vaccination) * 4 (number vaccinations) * 2 (vaccinations) => 17.280 combinations
// Possible Recommendations: 5 (brands) * 2 (got unregistered vaccination) * 2 (past infection) => 20 combinations



const BIONTECH = "biontech";
const MODERNA = "moderna";
const BIONTECH_MODERNA = "biontech_moderna";
const MODERNA_BIONTECH = "moderna_biontech";
const BIONTECH_MODERNA_JOHNSSON = "biontech_moderna_johnsson";

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
        return create_output('result_2', [texts_german["results"]["no_general_recommendation_too_young"]]);
    }

    if (!('risk_group' in user_data)) {
        return ['risk_group', {}];
    }

    if (!('pregnant' in user_data)) {
        return ['pregnant', {}];
    }

    if (user_data['pregnant']['value']){
        if (!('pregnancy_week' in user_data)) {
            return ['pregnancy_week', {}];
        }
        else if (user_data['pregnancy_week']['value']) {
            return create_output('result_2', [texts_german["results"]["no_general_recommendation_pregnant"]]);
        }
    }


    let risk_group = (user_data['risk_group']['value'] == true);
    let pregnant = (user_data['pregnant']['value'] == true);

    if (user_age <= constants['age_groups']['age_group_2'][1]) {
        if (risk_group === false) {
            return create_output('result_2', [texts_german["results"]["no_general_recommendation_too_young_no_risk"]]);
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

        let vaccination_possibilities = undefined; // BIONTECH/BIONTECH_MODERNA/BIONTECH_MODERNA_JOHNSSON

        let first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]);

        if (past_infection) {
            // young
            if (user_age <= constants['age_groups']['age_group_2'][1] && risk_group) {
                return create_output('result_5', [
                    texts_german['results']['next_possible_date_booster_infection'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]);
            }
            if (user_age <= constants['age_groups']['age_group_2'][1] && !risk_group) {
                return create_output('result_4', [texts_german['results']['no_general_recommendation_too_young_no_risk']]);
            }
            // age <= 30
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                return create_output('result_5', [
                    texts_german['results']['next_possible_date_booster_infection'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]);
            } else {
                return create_output('result_6', [
                    texts_german['results']['next_possible_date_booster_infection'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']),
                    texts_german['results']['next_possible_date_booster_infection_alternative'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['moderna']),
                ]);
            }

        } else {
            // young
            if (user_age <= constants['age_groups']['age_group_2'][1] && !risk_group) {
                return create_output('result_4', [texts_german['results']['no_general_recommendation_too_young_no_risk']]);
            }
            // age >= 60
            if ((user_age >= constants['age_groups']['age_group_6'][0]) && !pregnant) {
                vaccination_possibilities = BIONTECH_MODERNA_JOHNSSON;
            }
            // age >= 30
            if ((user_age >= constants['age_groups']['age_group_5'][0]) && !pregnant) {
                vaccination_possibilities = MODERNA_BIONTECH;
            }
            // age < 30, normal first vaccination
            else {
                vaccination_possibilities = BIONTECH;
            }
        }



        if (vaccination_possibilities === BIONTECH) {
            return create_output('result_5', [
                texts_german['results']['next_possible_date_first'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['biontec']),
            ]);
        }
        if (vaccination_possibilities === MODERNA_BIONTECH) {
            return create_output('result_6', [
                texts_german['results']['next_possible_date_first'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['biontec']),
                texts_german['results']['next_possible_date_first_alternative'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['moderna']),
            ]);
        }
        if (vaccination_possibilities === BIONTECH_MODERNA_JOHNSSON) {
            return create_output('result_7', [
                texts_german['results']['next_possible_date_first'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['moderna']),
                texts_german['results']['next_possible_date_first_alternative'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['biontec']),
                texts_german['results']['next_possible_date_first_alternative'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['johnson']),
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
        return create_output('result_8', [texts_german['results']['no_further_recommendation']]);
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
            date_operations.add_weeks_2_date(vaccination_last_date, 3),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');
        let four_weeks_first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_last_date, 4),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');
        let last_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_last_date, 6),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

        // age <= 29
        if ((user_age <= constants['age_groups']['age_group_4'][1]) ||pregnant) {
            if (vaccination_history[0] !== texts_german['vaccines']['biontec']){
                // bei Johnson Erstimpfung sollte mehr als 4 Wochen gewartet werden
                return create_output('result_9', [
                    texts_german['results']['second_vaccination_range'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']).replaceAll
                    ('<date_first>', four_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date)
                ]);
            } else {
                // sonst reichen 3 Wochen (standard)
                return create_output('result_10', [
                    texts_german['results']['second_vaccination_range'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']).replaceAll
                    ('<date_first>', three_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date)
                ]);
            }
        }
        // age >= 30
        else {
            if ([texts_german['vaccines']['astra'],
                texts_german['vaccines']['johnson']].includes(vaccination_history[0])){
                // hier sollte 4 Wochen gewartet werden
                return create_output('result_9', [
                    texts_german['results']['second_vaccination_range'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['moderna']).replaceAll
                    ('<date_first>', four_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date),
                    texts_german['results']['second_vaccination_range_alternative'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']).replaceAll
                    ('<date_first>', four_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date)
                ]);

            }
            if (texts_german['vaccines']['biontec'] === vaccination_history[0] ){
                return create_output('result_9', [
                    texts_german['results']['second_vaccination_range'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['moderna']).replaceAll
                    ('<date_first>', four_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date),
                    texts_german['results']['second_vaccination_range_alternative'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']).replaceAll
                    ('<date_first>', three_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date)
                ]);
            }
            if (texts_german['vaccines']['moderna'] === vaccination_history[0]){
                return create_output('result_9', [
                    texts_german['results']['second_vaccination_range'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['moderna']).replaceAll
                    ('<date_first>', four_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date),
                    texts_german['results']['second_vaccination_range_alternative'].replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']).replaceAll
                    ('<date_first>', four_weeks_first_possible_date).replaceAll
                    ('<date_second>', last_possible_date)
                ]);
            }
            else {
                console.log('ERROR');
                return create_output('result_25', [texts_german['results']['error']]);
            }
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
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                return create_output('result_13', [
                    texts_german['results']['second_vaccination_infection'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]);
            }
            else {
                return create_output('result_14', [
                    texts_german['results']['second_vaccination_infection'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    texts_german['results']['second_vaccination_infection_alternative'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']),
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
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                return create_output('result_15', [
                    texts_german['results']['next_possible_date_booster_infection'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']),
                ]);
            }
            else {
                return create_output('result_16', [
                    texts_german['results']['next_possible_date_booster_infection'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['moderna']),
                    texts_german['results']['next_possible_date_booster_infection_alternative'].replaceAll
                    ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                    ('<vaccination_brand>', texts_german['vaccines']['biontec']),
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

        if (user_age <= constants['age_groups']['age_group_4'][1] || pregnant){
            return create_output('result_17', [
                texts_german['results']['third_vaccination'].replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['biontec']).replaceAll
                ('<date>', first_possible_date)
            ])
        }

        if (user_age >= constants['age_groups']['age_group_5'][0]){
            return create_output('result_22', [
                texts_german['results']['third_vaccination'].replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['moderna']).replaceAll
                ('<date>', first_possible_date),
                texts_german['results']['third_vaccination_alternative'].replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['biontec']).replaceAll
                ('<date>', first_possible_date),
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
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
            return create_output('result_23', [
                texts_german['results']['next_possible_date_booster_infection'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['biontec']),
            ]);
        }
        else {
            return create_output('result_24', [
                texts_german['results']['next_possible_date_booster_infection'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['moderna']),
                texts_german['results']['next_possible_date_booster_infection_alternative'].replaceAll
                ('<date>', first_possible_date.toLocaleDateString('de-DE')).replaceAll
                ('<vaccination_brand>', texts_german['vaccines']['biontec']),
            ]);
        }
    }

    console.log('ERROR');
    return create_output('result_25', [
        texts_german['results']['error']
    ]);
}




