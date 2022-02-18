import * as date_operations from './date_operations.js';
import {
    texts_german,
    constants,
    DATE_OPTIONS,
    Error,
    Really_old,
    No_further_recommendation,
    No_recommendation_too_young,
    No_recommendation_too_young_past_infection,
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
    Next_possible_date_booster_2,
    Next_possible_date_booster_2_alternative
} from "./texts.js";


export function get_next_card(card_history, user_data) {
    //  possible_cards: 'vaccination', 'vaccinated', 'past_infection', 'infection_date', 'age', 'symptoms_registered',
    //  'symptoms_end_date', 'risk_group', 'number_vaccinations', 'got_unregistered_vaccination',
    //  'unregistered_vaccination_date', 'vaccination_1', 'vaccination_2', 'vaccination_3'

    function create_output(result_id, result_value) {
        return ["result", {[result_id]: true, 'value': result_value}];
    }

    let infection_date, symptoms_end_date, unregistered_vaccination_date, user_pregnancy_week_exact, user_age;

    if (card_history.length === 0) {
        return ['start', {}];
    }

    if (!('age' in user_data)) {
        return ['age', {}];
    }

    user_age = user_data['age']['value'];

    if (user_age >= constants['age_groups']['age_group_7'][0]) {
        return create_output('result_1', [<Really_old/>]);
    }

    if (user_age <= constants['age_groups']['age_group_1'][1]) {
        return create_output('result_2', [<No_recommendation_too_young/>]);
    }

    if (!('risk_group' in user_data)) {
        return ['risk_group', {}];
    }
    let risk_group = (user_data['risk_group']['value'] === true);

    if (risk_group) {
        if (!('exception' in user_data)) {
            return ['exception', {}];
        }
    }

    if (!('breast_feeding' in user_data)) {
        return ['breast_feeding', {}];
    }

    if (!('pregnant' in user_data)) {
        return ['pregnant', {}];
    }

    if (user_data['pregnant']['value']) {
        if (!('pregnancy_week_exact' in user_data)) {
            return ['pregnancy_week_exact', {}];
        }
        user_pregnancy_week_exact = user_data['pregnancy_week_exact']['value'];
    }

    let pregnant = (user_data['pregnant']['value'] === true);

    if (!('past_infection' in user_data)) {
        return ['past_infection', {}];
    }

    let past_infection = user_data['past_infection']['value'];

    if (user_data['past_infection']['value'] === "yes_single") {
        if (!('infection_date' in user_data)) {
            return ['infection_date', {}];
        } else {
            infection_date = user_data['infection_date']['date'];
        }
        if (!('symptoms_registered' in user_data)) {
            return ['symptoms_registered', {}];
        }
        if (user_data['symptoms_registered']['value'] === 'past') {
            if (!('symptoms_end_date' in user_data)) {
                return ['symptoms_end_date', {}];
            } else {
                symptoms_end_date = user_data['symptoms_end_date']['date'];
            }
        }

        if (user_data['symptoms_registered']['value'] === 'still') {
            return create_output('result_3', [<No_recommendation_symptoms/>]);
        }
    } else if (user_data['past_infection']['value'] === "yes_multiple") {
        return create_output('result_8', [
            <Contact_dr/>
        ]);
    }

    if (!('vaccinated' in user_data)) {
        return ['vaccinated', {}];
    }

    let vaccination_history = [];
    let vaccination_history_date = [];

    if ((user_data['vaccinated']['value'])) {
        if (!('number_vaccinations' in user_data)) {
            return ['number_vaccinations', {}];
        }

        if (user_data['number_vaccinations']['value'] === '4') {
            if (user_data["immun_def"]["value"]) {
                return create_output('result_8', [
                    <Contact_dr/>
                ]);
            } else {
                return create_output('result_8', [
                    <No_further_recommendation/>
                ]);
            }
        }

        // collect vaccination information
        if (user_data['number_vaccinations']['value'] === '1') {
            if (!('vaccination_1' in user_data)) {
                return ['vaccination_1', {}];
            }
        }

        if (user_data['number_vaccinations']['value'] === '2') {
            if (!('vaccination_1' in user_data)) {
                return ['vaccination_1', {}];
            }
            if (!('vaccination_2' in user_data)) {
                return ['vaccination_2', {}];
            }
        }

        if (user_data['number_vaccinations']['value'] === '3') {
            if (!('vaccination_1' in user_data)) {
                return ['vaccination_1', {}];
            }
            if (!('vaccination_2' in user_data)) {
                return ['vaccination_2', {}];
            }
            if (!('vaccination_3' in user_data)) {
                return ['vaccination_3', {}];
            }
        }

        vaccination_history.push(user_data['vaccination_1']['value']);
        vaccination_history_date.push(user_data['vaccination_1']['date']);

        if (user_data['number_vaccinations']['value'] > 1) {
            vaccination_history.push(user_data['vaccination_2']['value']);
            vaccination_history_date.push(user_data['vaccination_2']['date']);
        }

        if (user_data['number_vaccinations']['value'] > 2) {
            vaccination_history.push(user_data['vaccination_3']['value']);
            vaccination_history_date.push(user_data['vaccination_3']['date']);
        }
    }

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


    // calculate def-status
    let def_status = vaccination_history.length;

    /*
    An infection is only counted as contribution to the vaccination schema if the infection was not in a time
    window of 4 weeks past the first vaccination
    */
    if (user_data['past_infection']['value'] === "yes_single") {
        if (vaccination_history_date.length === 0) {
            def_status += 1
        } else {
            if (!((Date.parse(vaccination_history_date[0]) <= Date.parse(infection_date)) &&
                (Date.parse(infection_date) <= Date.parse(date_operations.add_weeks_2_date(vaccination_history_date[0], 4))))) {
                def_status += 1
            }
        }
    }
    console.log("Your status is: " + def_status);

    if (def_status === 0) {
        let first_possible_date = date_operations.get_latest_date([
            Date.now(),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            ((pregnant) ?
                date_operations.add_weeks_2_date(new Date().toLocaleDateString('en-US'), (Math.max(0, 13 - ((typeof user_pregnancy_week_exact === 'undefined') ? 13 : user_pregnancy_week_exact))))
                : undefined),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE', DATE_OPTIONS);

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

        let first_vaccination_possibilities = [];

        // age <= 29 or pregnant
        if ((user_age <= constants['age_groups']['age_group_4'][1])) {
            first_vaccination_possibilities = [
                <Next_possible_date_first
                    key='biontec'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />];
        }

        // age <= 59
        if ((user_age <= constants['age_groups']['age_group_5'][1]) || user_data['breast_feeding']['value']) {
            first_vaccination_possibilities = [
                <Next_possible_date_first
                    key='moderna'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['moderna']}
                />,
                <Next_possible_date_first_alternative
                    key='biontec'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />
            ];
        } else {
            first_vaccination_possibilities = [
                <Next_possible_date_first
                    key='moderna'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['moderna']}
                />,
                <Next_possible_date_first_alternative
                    key='biontec'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />,
                <Next_possible_date_first_alternative
                    key='johnson'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['johnson']}
                />
            ];
        }

        // Novavax is a possibility too, if not pregnant, breastfeeding, or younger than 18
        if (!pregnant
            && !user_data['breast_feeding']['value']
            && (user_age >= constants['age_groups']["age_group_4"][0])) {
            first_vaccination_possibilities.push(<Next_possible_date_first_alternative
                key='novavax'
                date={first_possible_date}
                vaccination_brand={texts_german['vaccines']['novavax']}
            />);
        }

        return create_output('result_5', first_vaccination_possibilities);
    }

    if (def_status === 1) {
        if ((user_age <= constants['age_groups']['age_group_2'][1]) && past_infection) {
            return create_output('result_8', [
                <Contact_dr/>
            ]);
        }

        let first_possible_date = date_operations.get_latest_date([
            date_operations.add_weeks_2_date(vaccination_history_date[0], 4),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            ((pregnant) ?
                date_operations.add_weeks_2_date(new Date().toLocaleDateString('en-US'), (Math.max(0, 13 - ((typeof user_pregnancy_week_exact === 'undefined') ? 13 : user_pregnancy_week_exact))))
                : undefined),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE', DATE_OPTIONS);

        let last_possible_date = date_operations.get_latest_date([
            date_operations.add_weeks_2_date(vaccination_history_date[0], 6),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            ((pregnant) ?
                date_operations.add_weeks_2_date(new Date().toLocaleDateString('en-US'), (Math.max(0, 13 - ((typeof user_pregnancy_week_exact === 'undefined') ? 13 : user_pregnancy_week_exact))))
                : undefined),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE', DATE_OPTIONS);

        // if 1. dose biontech, only wait 3 weeks for next dose biontech
        let first_possible_date_biontech = first_possible_date;
        if (vaccination_history.length === 1) {
            if (vaccination_history[0] === texts_german['vaccines']['biontec']) {
                first_possible_date_biontech = date_operations.get_latest_date([
                    date_operations.add_weeks_2_date(vaccination_history_date[0], 3),
                    date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
                    date_operations.add_month_2_date(infection_date, 3),
                    ((pregnant) ?
                        date_operations.add_weeks_2_date(new Date().toLocaleDateString('en-US'), (Math.max(0, 13 - ((typeof user_pregnancy_week_exact === 'undefined') ? 13 : user_pregnancy_week_exact))))
                        : undefined),
                    date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE', DATE_OPTIONS);
            }
        }

        if (vaccination_history.length === 1) {
            if (vaccination_history[0] === texts_german['vaccines']['novavax']
                && !pregnant
                && !user_data['breast_feeding']['value']) {
                return create_output('result_9', [
                    <Second_vaccination_range
                        key='novavax'
                        date_first={first_possible_date}
                        date_second={undefined}
                        vaccination_brand={texts_german['vaccines']['novavax']}
                    />]);
            }
        }

        let second_vaccination_possibilities = [];

        // age <= 29
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
            second_vaccination_possibilities = [
                <Second_vaccination_range
                    key='biontec'
                    date_first={first_possible_date_biontech}
                    date_second={last_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />];
        }
        // age >= 30
        else {
            second_vaccination_possibilities = [
                <Second_vaccination_range
                    key='moderna'
                    date_first={first_possible_date}
                    date_second={last_possible_date}
                    vaccination_brand={texts_german['vaccines']['moderna']}
                />,
                <Second_vaccination_range_alternative
                    key='biontec'
                    date_first={first_possible_date_biontech}
                    date_second={last_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />];
        }

        if ((user_age >= constants['age_groups']['age_group_6'][0])
            && !pregnant
            && !user_data['breast_feeding']['value']) {
            second_vaccination_possibilities = [
                <Second_vaccination_range_alternative
                    key='johnson'
                    date_first={first_possible_date}
                    date_second={undefined}
                    vaccination_brand={texts_german['vaccines']['johnson']}
                />];
        }

        return create_output('result_5', second_vaccination_possibilities);

    }

    if (def_status === 2) {
        if ((user_age <= constants['age_groups']['age_group_2'][1])) {
            if (user_data["immun_def"]["value"]) {
                return create_output('result_8', [
                    <Contact_dr/>
                ]);
            } else {
                return create_output('result_8', [
                    <No_further_recommendation/>
                ]);
            }
        }

        let first_possible_date = date_operations.get_latest_date([
            date_operations.add_month_2_date(vaccination_history_date[0], 3),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            ((pregnant) ?
                date_operations.add_weeks_2_date(new Date().toLocaleDateString('en-US'), (Math.max(0, 13 - ((typeof user_pregnancy_week_exact === 'undefined') ? 13 : user_pregnancy_week_exact))))
                : undefined),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE', DATE_OPTIONS);

        if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
            return create_output('result_8', [
                <Next_possible_date_booster
                    key='biontec'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />
            ]);
        } else {
            return create_output('result_8', [
                <Next_possible_date_booster
                    key='biontec'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['moderna']}
                />,
                <Next_possible_date_booster_alternative
                    key='moderna'
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />
            ]);
        }
    }

    if (def_status === 3) {
        let month_to_wait=0;

        if (user_age >= 70 ) {
            month_to_wait = 3;
        }
        if ('immun_def' in user_data){
            if (user_data["immun_def"]["value"] ) {
                month_to_wait = 3;
            }
        }
        if('healthcare' in user_data){
            if (user_data["healthcare"]["value"]) {
                month_to_wait = 3;
            }
        }
        if('healthcare_staff' in user_data) {
            if (user_data["healthcare_staff"]["value"]) {
                month_to_wait = 6;
            }
        }

        if(month_to_wait === 0) {
            return create_output('result_8', [
                <No_further_recommendation/>
            ]);
        }

        let first_possible_date = date_operations.get_latest_date([
            date_operations.add_month_2_date(vaccination_history_date[vaccination_history_date.length - 1], month_to_wait),
            date_operations.add_weeks_2_date(unregistered_vaccination_date, 4),
            date_operations.add_month_2_date(infection_date, 3),
            ((pregnant) ?
                date_operations.add_weeks_2_date(new Date().toLocaleDateString('en-US'), (Math.max(0, 13 - ((typeof user_pregnancy_week_exact === 'undefined') ? 13 : user_pregnancy_week_exact))))
                : undefined),
            date_operations.add_weeks_2_date(symptoms_end_date, 4)]).toLocaleDateString('de-DE', DATE_OPTIONS);

        // age <= 29
        if ((user_age <= constants['age_groups']['age_group_4'][1]) || pregnant) {
            return create_output('result_9', [
                <Next_possible_date_booster_2
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />
            ]);
        }

        // age >= 30
        else {
            return create_output('result_9', [
                <Next_possible_date_booster_2
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['moderna']}
                />,
                <Next_possible_date_booster_2_alternative
                    date={first_possible_date}
                    vaccination_brand={texts_german['vaccines']['biontec']}
                />
            ]);
        }
    }

    if (def_status === 4) {
        if (user_data["immun_def"]["value"]) {
            return create_output('result_8', [
                <Contact_dr/>
            ]);
        } else {
            return create_output('result_8', [
                <No_further_recommendation/>
            ]);
        }
    }

    console.log('ERROR');
    return create_output('result_25', [
        texts_german['results']['error']
    ]);
}




