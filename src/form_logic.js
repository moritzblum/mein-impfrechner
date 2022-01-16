import * as date_operations from './date_operations.js';
import {
    texts_german,
    constants,
    Error,
    Really_old,
    No_further_recommendation,
    No_recommendation_too_young,
    No_recommendation_pregnant,
    No_recommendation_symptoms,
    Contact_dr,
    Contact_dr_young,
    Recommendation_young,
    Recommendation_young_no_risk_group,
    Next_possible_date_first,
    Next_possible_date_first_alternative,
    Next_possible_date_first_infection,
    Next_possible_date_first_infection_alternative,
    Second_vaccination_range,
    Second_vaccination_range_alternative,
    Next_possible_date_second_dose_infection,
    Next_possible_date_second_dose_infection_alternative,
    Next_possible_date_booster,
    Next_possible_date_booster_alternative,
    Next_possible_date_booster_infection,
    Next_possible_date_booster_infection_alternative,
} from "./texts.js";


export function get_next_card(card_history, user_data) {
    //  possible_cards: 'vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms_registered',
    //  'symptoms_end_date', 'risk_group', 'number_vaccinations', 'got_unregistered_vaccination',
    //  'unregistered_vaccination_date', 'vaccination_1', 'vaccination_2'

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
        return create_output('result_1', [<Really_old/>]);
    }

    if (user_age <= constants['age_groups']['age_group_1'][1]) {
        return create_output('result_2', [<No_recommendation_too_young/>]);
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
            return create_output('result_2', [<No_recommendation_pregnant/>]);
        }
    }

    let risk_group = (user_data['risk_group']['value'] == true);
    let pregnant = (user_data['pregnant']['value'] == true);

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
            return create_output('result_3', [<No_recommendation_symptoms/>]);
        }
    }

    if (!('vaccinated' in user_data)) {
        return ['vaccinated', {}];
    }

    // komplett ungeimpft
    if (!(user_data['vaccinated']['value'])) {

        if (!('got_unregistered_vaccination' in user_data)) {
            return ['got_unregistered_vaccination', {}];
        }

        if (user_data['got_unregistered_vaccination']['value']) {
            if (!('unregistered_vaccination_date' in user_data)) {
                return ['unregistered_vaccination_date', {}];
            } else {
                unregistered_vaccination_date = user_data['unregistered_vaccination_date']['date']
            }
        }

        let first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE');

        if (!past_infection) {
            // no past infection
            // age <= 11
            if ((user_age <= constants['age_groups']['age_group_2'][1])) {
                if (risk_group === false) {
                    return create_output('result_2', [
                        <Recommendation_young_no_risk_group
                            date={first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />]);
                } else {
                    return create_output('result_2', [
                        <Recommendation_young
                            date={first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />]);
                }
            }

            // age <= 29 or pregnant
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                return create_output('result_5', [
                    <Next_possible_date_first
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['biontec']}
                    />]);
            }

            // age <= 59
            if ((user_age <= constants['age_groups']['age_group_5'][1])) {
                return create_output('result_6', [
                    <Next_possible_date_first
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['moderna']}
                    />,
                    <Next_possible_date_first_alternative
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['biontec']}
                    />
                ]);
            } else {
                return create_output('result_6', [
                    <Next_possible_date_first
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['moderna']}
                    />,
                    <Next_possible_date_first_alternative
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['biontec']}
                    />,
                    <Next_possible_date_first_alternative
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['johnson']}
                    />
                ]);
            }
        }

         else {
            // past infection
            // age <= 11
            if ((user_age <= constants['age_groups']['age_group_2'][1])) {
                return create_output('result_2', [
                    <No_recommendation_too_young/>
                ]);
            }

            // age <= 29 or pregnant
            if ((user_age <= constants['age_groups']['age_group_4'][1])) {
                return create_output('result_5', [
                    <Next_possible_date_first_infection
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['biontec']}
                    />
                ]);
            }

            // age >= 30
            else{
                return create_output('result_6', [
                    <Next_possible_date_first_infection
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['moderna']}
                    />,
                    <Next_possible_date_first_infection_alternative
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['biontec']}
                    />
                ]);
            }
        }
    }

    if (!('number_vaccinations' in user_data)) {
        return ['number_vaccinations', {}];
    }

    // mit 3 Impfungen ist man auf jeden Fall durch
    if (user_data['number_vaccinations']['value'] == 3){
        return create_output('result_8', [
            <No_further_recommendation/>]);
    }

    // collect vaccination information
    if (!('vaccination_brand_date' in user_data)) {
        if (user_data['number_vaccinations']['value'] == 1) {
            return ['vaccination_1', {}];
        }

        if (user_data['number_vaccinations']['value'] == 2) {
            if (!('vaccination_1' in user_data)) {
                return ['vaccination_1', {}];
            }
            if (!('vaccination_2' in user_data)) {
                return ['vaccination_2', {}];
            }
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

    let vaccination_history = [];
    let vaccination_history_date = [];


    vaccination_history.push(user_data['vaccination_1']['value']);
    vaccination_history_date.push(user_data['vaccination_1']['date']);

    if (user_data['number_vaccinations']['value'] > 1) {
        vaccination_history.push(user_data['vaccination_2']['value']);
        vaccination_history_date.push(user_data['vaccination_2']['date']);
    }

    if (vaccination_history.includes(texts_german['vaccines']['novavax'])){
        console.log('ERROR: Unser entered Novavax (not supported yet)');
        return create_output('result_25', [
            <Error/>
        ]);
    }


    // second shot
    if (user_data['number_vaccinations']['value'] == 1) {

        let three_weeks_first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_history_date[1], 3),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE');
;
        let four_weeks_first_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_history_date[1], 4),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE');

        let last_possible_date = date_operations.get_latest_date([Date.now(),
            date_operations.add_weeks_2_date(vaccination_history_date[1], 6),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE');

        if (!past_infection){
            // age <= 29
            if ((user_age <= constants['age_groups']['age_group_4'][1]) ||pregnant) {
                if (vaccination_history[0] !== texts_german['vaccines']['biontec']){
                    // bei einer nicht Biontech Erstimpfung sollten mehr als 4 Wochen auf Biontech gewartet werden
                    return create_output('result_9', [
                        <Second_vaccination_range
                            date_first={four_weeks_first_possible_date}
                            date_second={last_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />]);
                } else {
                    // sonst reichen 3 Wochen (standard)
                    return create_output('result_10', [
                        <Second_vaccination_range
                            date_first={three_weeks_first_possible_date}
                            date_second={last_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }
            }
            // age >= 30
            else {
                if (vaccination_history[0] !== texts_german['vaccines']['biontec']){
                    // hier sollte 4 Wochen gewartet werden
                    return create_output('result_9', [
                        <Second_vaccination_range
                            date_first={four_weeks_first_possible_date}
                            date_second={last_possible_date}
                            vaccination_brand={texts_german['vaccines']['moderna']}
                        />,
                        <Second_vaccination_range_alternative
                            date_first={four_weeks_first_possible_date}
                            date_second={last_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }
                else {
                    return create_output('result_9', [
                        <Second_vaccination_range
                            date_first={four_weeks_first_possible_date}
                            date_second={last_possible_date}
                            vaccination_brand={texts_german['vaccines']['moderna']}
                        />,
                        <Second_vaccination_range_alternative
                            date_first={three_weeks_first_possible_date}
                            date_second={last_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }
            }
        }
        else {
            // Infektion innerhalb von 4 Wochen nach 1. Impfung
            if ((vaccination_history_date[0] <= infection_date) && (infection_date <= date_operations.add_weeks_2_date(vaccination_history_date[0], 4))) {

                // age <= 11
                if ((user_age <= constants['age_groups']['age_group_2'][1])) {
                    return create_output('result_8', [
                        <Contact_dr_young/>
                    ]);
                }

                // age <= 29
                if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                    return create_output('result_9', [
                        <Next_possible_date_second_dose_infection
                            date={four_weeks_first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }

                // age >= 30
                else {
                    return create_output('result_9', [
                        <Next_possible_date_second_dose_infection
                            date={four_weeks_first_possible_date}
                            vaccination_brand={texts_german['vaccines']['moderna']}
                        />,
                        <Next_possible_date_second_dose_infection_alternative
                            date={four_weeks_first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }
            }
            // Infektion nicht innerhalb von 4 Wochen nach 1. Impfung
            else {
                // age <= 11
                if ((user_age <= constants['age_groups']['age_group_2'][1])) {
                    return create_output('result_8', [
                        <Contact_dr/>
                    ]);
                }

                // age <= 29
                if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                    return create_output('result_9', [
                        <Next_possible_date_booster_infection
                            date={four_weeks_first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }

                // age >= 30
                else {
                    return create_output('result_9', [
                        <Next_possible_date_booster_infection
                            date={four_weeks_first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />,
                        <Next_possible_date_booster_infection_alternative
                            date={four_weeks_first_possible_date}
                            vaccination_brand={texts_german['vaccines']['moderna']}
                        />
                    ]);
                }
            }
        }
    }


    // third shot
    if (user_data['number_vaccinations']['value'] == 2) {
        let first_possible_date = date_operations.get_latest_date([
            Date.now(),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            date_operations.add_weeks_2_date(symptoms_end_date, 4),
            date_operations.add_month_2_date(vaccination_history_date[1], 3)
        ]).toLocaleDateString('de-DE');

        if (!past_infection){

            // age <= 11
            if ((user_age <= constants['age_groups']['age_group_2'][1])) {
                return create_output('result_8', [
                    <No_further_recommendation/>
                ]);
            }

            // age <= 29
            if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                return create_output('result_9', [
                    <Next_possible_date_booster
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['biontec']}
                    />
                ]);
            }
            // age >= 30
            else{
                return create_output('result_9', [
                    <Next_possible_date_booster
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['moderna']}
                    />,
                    <Next_possible_date_booster_alternative
                        date={first_possible_date}
                        vaccination_brand={texts_german['vaccines']['biontec']}
                    />
                ]);
            }
        }
        else{
            // Infektion innerhalb von 4 Wochen nach 1. Impfung
            if ((vaccination_history_date[0] <= infection_date) && (infection_date <= date_operations.add_weeks_2_date(vaccination_history_date[0], 4))) {

                // age <= 11
                if ((user_age <= constants['age_groups']['age_group_2'][1])) {
                    return create_output('result_8', [
                        <Contact_dr/>
                    ]);
                }
                // age <= 29
                if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
                    return create_output('result_9', [
                        <Next_possible_date_booster_infection
                            date={first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }
                // age >= 30
                else{
                    return create_output('result_9', [
                        <Next_possible_date_booster_infection
                            date={first_possible_date}
                            vaccination_brand={texts_german['vaccines']['moderna']}
                        />,
                        <Next_possible_date_booster_infection_alternative
                            date={first_possible_date}
                            vaccination_brand={texts_german['vaccines']['biontec']}
                        />
                    ]);
                }
            }
            else {
                return create_output('result_8', [<No_further_recommendation/>]);
            }
        }
    }



    console.log('ERROR');
    return create_output('result_25', [
        texts_german['results']['error']
    ]);
}




