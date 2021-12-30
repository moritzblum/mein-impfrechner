import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



let texts_german = {
    "start": {
        "header": "Impfrechner",
        "welcome": "Hier können Sie Ihren Impftermin berechnen",
        "data_storage": "Alle Daten bleiben im Browser"
    },
    "form_validation": {
        "valid": "Eingabe ist valide",
        "invalid" : "Bitte machen Sie eine valide Eingabe, um fortzufahren"
    },
    "vaccination_last": {
        "header": "Angaben zur letzten Corona-Schutzimpfung (SARS-CoV-2)",
        "instructions": "Bitte angeben",
        "vaccination_label": "Impfstoff",
        "vaccination_instruction": "bitte auswählen",
        "other_vaccines": "andere",
        "info_vaccines": "Welcher Impfstoff, Erklärungen, ....",
        "date_labe": "Datum",
        "info_date": "Welches Datum, warum, wie, was"// ggf. nicht benötigt
    },
    "vaccination_x": {
        "header": "Angaben zur ersten Corona-Schutzimpfung", //muss angepasst werden, wenn 4 Impfungen zulässig werden.
        "instructions": "Welcher Impfstoff wurde bei Ihrer ersten Corona-Schutzimpfung verimpft?",
        "vaccination_label": "Impfstoff",
        "vaccination_instruction": "bitte auswählen",
        "other_vaccines": "andere",
        "info_vaccines": "Welcher Impfstoff, Erklärungen, ...."
    },
    "vaccinated": {
        "header": "Impfstatus",
        "instructions": "Haben Sie bereits eine zulässige Impfung gegen das Coronavirus (SARS-CoV-2) erhalten?",
        "vaccinated_yes": "Ja",
        "vaccinated_no": "Nein"
    },
    "past_infection": {
        "header": "Genesenenstatus",
        "instructions": "Wurden Sie bereits positiv auf das Coronavirus (SARS-CoV-2) getestet (Kein Selbsttest)? ",
        "info_past_infection": "Warum nur kein Selbsttest, was zählt, wie, was...",
        "past_infection_yes": "Ja",
        "past_infection_no": "Nein"
    },
    "risk_group": {
        "header": "Risikogruppe",
        "instructions": "Sind Sie zum aktuellen Zeitpunkt schwanger?",
        "info_risk_group": "Wann genau und warum ist man Teil einer Risikogruppe",
        "risk_group_yes": "Ja",
        "risk_group_no": "Nein"
    },
    "got_unregistered_vaccination": {
        "header": "Impfstoff ohne STIKO- Zulassung",
        "instructions": "Wurden Sie bereits mit einem in Deutschland nicht zulässigen Corona-Impfstoff geimpft?",
        "info_got_unregistered_vaccination": "Was, wann, warum problematisch?",
        "got_unregistered_vaccination_yes": "Ja",
        "got_unregistered_vaccination_no": "Nein"
    },
    "unregistered_vaccination_date": {
        "header": "Angaben zur unzulässigen Corona-Schutzimpfung",
        "instructions": "Wann haben Sie die letzte nicht zulässige Corona-Schutzimpfung erhalten?",
        "label": "Datum"
    },
    "symptoms_registered": {
        "header": "Symptome",
        "instructions": "Hatten oder haben Sie Symptome in Folge Ihrer Corona-Infektion entwickelt?",
        "info_symptoms_registered": "Was sind Symptome, was sind Spätfolgen und wie muss ich die angeben...?",
        "never": "Nein, ich hatte nie Symptome",
        "still": "Ja, ich habe immer noch Symptome",
        "past": "Ja, ich hatte Symptome"
    },
    "number_vaccinations": {
        "header": "Anzahl der erhaltenen Corona-Schutzimpfungen",
        "instructions": "Wie viele zugelassene Corona-Schutzimpfungen haben Sie erhalten?",
        "one": "1",
        "two": "2",
        "three": "3"
    },
    "infection_date": {
        "header": "Erkrankungsdatum",
        "instructions": "Wann wurden Sie erstmalig positiv auf das Coronavirus getestet (kein Selbsttest)?",
        "label": "Datum"
    },
    "symptoms_end_date": {
        "header": "Ende der Symptomatik",
        "instructions": "Wann haben ihre Symptome aufgehört?",
        "label": "Datum"
    },
    "age": {
        "header": "Alter",
        "instructions": "Wie alt sind Sie?",
        "age_placeholder": "Alter"
    },
    "vaccines": {
        "biontec": "Biontech",
        "moderna": "Moderna",
        "astra": "Astrazeneca",
        "johnson": "Janssen",
    },
    "results": {
        "really_old": "Wenn du wirklich schon so lange gelebt hast, dann bringt dich Corona auch nicht mehr um.",
        "no_general_recommendation": "Aktuell keine Impfempfehlung",
        "contact_dr": "Keine generelle Impfempfehlung, bitte besprechen Sie Ihre individuellen Umstände mit Ihrem Hausarzt.",
        "no_recommendation_symptoms": "Aktuell keine Impfempfehlung, wenn noch Symptome oder Spätfolgen bestehen.",
        "no_further_recommendation": "Nach aktuellem Stand benötigen sie keine weitere Impfung.",
        "multiple_options": "Wir haben für sie folgende Optionen berechnet:",
        "next_possible_date_first": "Erstimpfung: Sie können sich mit <vaccination_brand> ab dem <date> Impfen lassen.",
        "next_possible_date_second_dose": "Sie können sich mit <vaccination_brand> ab dem <date> zum zweiten mal Impfen lassen.",
        "next_possible_date_booster_infection": "Sie können sich mit <vaccination_brand> ab dem <date> Boostern lassen, unter Einbezug ihrer vorherigen Corona-Infection.",
        "second_vaccination_infection": "Ihre zweite Impfung sollten Sie mit dem Impfstoff <vaccination_brand> nach dem <date_first> bekommen, unter Einbezug ihrer vorangegangenen Corona-Infektion.",
        "second_vaccination_range": "Ihre zweite Impfung sollten Sie mit dem Impfstoff <vaccination_brand> zwischen dem <date_first> und dem <date_second> bekommen.",
        "third_vaccination": "Ihre dritte Impfung sollten Sie mit dem Impfstoff <vaccination_brand> nach dem  <date> bekommen.",
        "check_data": "Bitte überprüfen Sie Ihre Eingaben:",
        "error": "Leider konnten wir Ihren persönlichen Fall nicht lösen. Wenden Sie sich für eine individuelle Beratung an ihren Hausarzt."
    },
    "disclaimer": "Haftungsausschluss: Die Inhalte dieser Seite dienen ausschließlich der allgemeinen Information der Öffentlichkeit. mein-impfrechner.de übernimmt keine Verantwortung für die Richtigkeit und Vollständigkeit der Daten und Informationen, ob auf dieser Seite angegeben oder verlinkt, für Abweichungen von Originaldaten, Übertragungsfehler oder Veränderung der Informationen durch Dritte."

};

let constants = {
    'age_groups': {
        // the two values specify the range of age, e.g. [13,200] means everybody with an age of 13 up to 200
        'age_group_1': [0,4],
        'age_group_2': [5,11],
        'age_group_3': [12,17],
        'age_group_4': [18,29],
        'age_group_5': [30,59],
        'age_group_6': [60,199],
        'age_group_7': [200,Number.MAX_SAFE_INTEGER],
    },
    'symptoms': {
        'never': 0,
        'still': 1,
        'past': 2
    },
    'registered_vaccination_brands': ['biontec', 'moderna', 'astra', 'johnson'],
    'registered_vaccination_brands_two_shots': ['biontec', 'moderna', 'astra'],
    'registered_vaccination_brands_one_shots': ['johnson'],
    'time_gap': {
        'other': {
            'other': 'min 4 weeks'
        },
        'immunization': {
            'biontec': '3-6 weeks',
            'moderna': '4-6 weeks',
            'astra': '8-10 weeks', // ?
            'other': 'min 4 weeks'
        },
        'booster': {
            'biontec': '5 month',
            'moderna': '5 month',
            'astra': '5 month',
            'johnson': '5 month',
            'other': 'min 4 weeks'
        }
    }
}

let BIONTECH = "biontech";
let MODERNA = "moderna";
let BIONTECH_MODERNA = "biontech_moderna";
let BIONTECH_MODERNA_ASTRA = "biontech_moderna_astra";



function get_next_card(card_history, user_data) {
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

        if (past_infection) {
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

        let first_possible_date = get_latest_date([Date.now(),
            add_weeks_2_date(unregistered_vaccination_date, 4),
            add_month_2_date(infection_date, 3),
            add_weeks_2_date(symptoms_end_date, 4)]);

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
            let first_possible_date = get_latest_date([
                Date.now(),
                add_weeks_2_date(unregistered_vaccination_date, 4),
                add_month_2_date(infection_date, 3),
                add_weeks_2_date(symptoms_end_date, 4),
                add_month_2_date(vaccination_last_date, 3)
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
        let first_possible_date = get_latest_date([Date.now(),
            add_month_2_date(vaccination_last_date, 3),
            add_weeks_2_date(unregistered_vaccination_date, 4)]).toLocaleDateString('de-DE');

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

        if (first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['biontec'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['johnson'] && second_dose === texts_german['vaccines']['astra'] ||
            first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['johnson'] ||
            first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['moderna'] ||
            first_dose === texts_german['vaccines']['moderna'] && second_dose === texts_german['vaccines']['moderna'] ||
            first_dose === texts_german['vaccines']['astra'] && second_dose === texts_german['vaccines']['biontec']
        ){
            return create_output('result_22', [
                texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['biontec']).replace('<date>', first_possible_date),
                texts_german['results']['third_vaccination'].replace('<vaccination_brand>', texts_german['vaccines']['moderna']).replace('<date>', first_possible_date)
            ]);
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

    console.log('ERROR')
    return create_output('result_25', [
        texts_german['results']['error']
    ]);
}




function get_latest_date(dates) {
    // filter out undefined list elements
    dates = dates.filter(function( date ) {
        return date !== undefined;
    });

    return new Date(Math.max.apply(null, dates));
}

function is_valid_date_format(date_str) {
    let d = ger_str_2_date(date_str);
    return d instanceof Date && !isNaN(d);
}

// e.g. ger_str_2_date("24.10.1996") returns Date(Thu Oct 24 1996 ...)
function ger_str_2_date(ger_str) {
    if (ger_str === undefined){
        return undefined
    }
    else {
        let format = 'dd.mm.yyyy'
        let parts = ger_str.match(/(\d+)/g), i = 0, fmt = {};
        format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

        return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
    }

}

function add_weeks_2_date(date, weeks) {
    if (date === undefined){
        return undefined
    }
    else{
        if (typeof date == "string") {
            date = ger_str_2_date(date)
        }
    }
    return new Date(date.setDate(date.getDate() + weeks * 7));

}

function add_month_2_date(date, month) {
    if (date === undefined){
        return undefined
    }
    else{
        if (typeof date == "string") {
            date = ger_str_2_date(date)
        }
    }

    return new Date(date.setMonth(date.getMonth() + month));
}










let modal_risk_group_title = "Risikogruppe";
let modal_risk_group_text = <div style={{"color": "red"}}><p>modal_risk_group Hier könnte Ihre Werbung stehen!</p></div>;
let modal_vaccinated_title = "Impfung";
let modal_vaccinated_text = <div style={{"color": "red"}}><p>modal_vaccinated Hier könnte Ihre Werbung stehen!</p></div>;
let modal_got_unregistered_vaccination_title = "Nicht zugelassene Impfung";
let modal_got_unregistered_vaccination_text = <div style={{"color": "red"}}><p>modal_got_unregistered_vaccination Hier könnte Ihre Werbung stehen!</p></div>;
let modal_past_infection_title = "Genesenenstatus";
let modal_past_infection_text = <div style={{"color": "red"}}><p>modal_past_infection Hier könnte Ihre Werbung stehen!</p></div>;
let modal_infection_date_title = "Infektionsdatum";
let modal_infection_date_text = <div style={{"color": "red"}}><p>modal_infection_date Hier könnte Ihre Werbung stehen!</p></div>;
let modal_symptoms_registered_title = "Symptome";
let modal_symptoms_registered_text = <div style={{"color": "red"}}><p>modal_symptoms_registered Hier könnte Ihre Werbung stehen!</p></div>;
let modal_symptoms_end_date_title = "Ende der Symptome";
let modal_symptoms_end_date_text = <div style={{"color": "red"}}><p>modal_symptoms_end_date Hier könnte Ihre Werbung stehen!</p></div>;

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="vc-card container">
                    <div className="vc-card-header">
                        <div className="col-sm" style={{textAlign: "center"}}>
                            <h1 style={{color: "grey"}} className="card-title" >{this.props.title}</h1>
                        </div>
                    </div>
                    <div className="vc-card-body">

                        <form onSubmit={this.props.handler} className="needs-validation">
                            {this.props.form_body}
                        </form>


                        <div className="" style={{"position": "absolute", "bottom": "2%", "width":"96%"}}>
                            <div className="d-flex justify-content-between">
                                <button className="button button_back" onClick={this.props.handler}
                                        id={this.props.id_back}>
                                    zurück
                                </button>
                                <button className="button button_next" type="submit" onClick={this.props.handler}
                                        id={this.props.id_next}>
                                    weiter
                                </button>
                            </div>
                        </div>

                </div>

            </div>
        );
    }
}


function Modal_popup(props) {
    return (
        <div className="modal fade" id={props.button_id} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{"color": "gray"}}>{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"/>
                    </div>
                    <div className="modal-body" style={{"color": "gray"}}>
                        {props.text}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="button" data-bs-dismiss="modal">Schließen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


class Form_body_vaccination_last extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div>{texts_german["vaccination_last"]["instructions"]}</div>
                    <br/>
                    <br/>
                    <label>{texts_german["vaccination_last"]["vaccination_label"]}</label>
                    <select className="form-select select-validation" id="exampleFormControlSelect1"
                            onChange={this.props.input_data_handler} name={this.props.input_name_vaccine}>
                        <option value>{texts_german["vaccination_last"]["vaccination_instruction"]}</option>
                        <option>{texts_german["vaccines"]["biontec"]}</option>
                        <option>{texts_german["vaccines"]["moderna"]}</option>
                        <option>{texts_german["vaccines"]["astra"]}</option>
                        <option>{texts_german["vaccines"]["johnson"]}</option>
                    </select>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>

                    <div className="form-group">
                        <label>{texts_german["vaccination_last"]["date_labe"]}</label>
                        <DatePicker onChange={this.props.input_data_handler}
                                    date_picker_name={this.props.input_name_vaccination_date}/>
                    </div>
                </div>

            </div>);
    }
}

class Form_body_vaccination_x extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div>{texts_german["vaccination_x"]["instructions"]}</div>
                    <br/>
                    <br/>
                    <label>{texts_german["vaccination_x"]["vaccination_label"]}</label>
                    <select className="form-select select-validation" id="exampleFormControlSelect1"
                            onChange={this.props.input_data_handler} name={this.props.input_name_vaccine}>
                        <option value>{texts_german["vaccination_x"]["vaccination_instruction"]}</option>
                        <option>{texts_german["vaccines"]["biontec"]}</option>
                        <option>{texts_german["vaccines"]["moderna"]}</option>
                        <option>{texts_german["vaccines"]["astra"]}</option>
                        <option>{texts_german["vaccines"]["johnson"]}</option>
                    </select>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>);
    }
}

class Form_body_vaccinated extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>{texts_german["vaccinated"]["instructions"]} <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_vaccinated"/></label>
                    <Modal_popup button_id="modal_vaccinated" title={modal_vaccinated_title} text={modal_vaccinated_text} />
                    <br/>
                    <br/>
                    <div className="form-check">
                        <input className="form-check-input radio-validation" type="radio"  id="flexRadioDefault1" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated} value={true}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1"> {texts_german["vaccinated"]["vaccinated_yes"]} </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input radio-validation" type="radio"  id="flexRadioDefault2" onChange={this.props.input_data_handler} name={this.props.input_name_vaccinated}  value={false}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2"> {texts_german["vaccinated"]["vaccinated_no"]} </label>
                        <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                        <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                    </div>
                </div>
            </div>
        )}
}


class Form_body_past_infection extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>{texts_german["past_infection"]["instructions"]} <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_past_infection"/></label>
                <Modal_popup button_id="modal_past_infection" title={modal_past_infection_title} text={modal_past_infection_text} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> {texts_german["past_infection"]["past_infection_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_past_infection} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> {texts_german["past_infection"]["past_infection_no"]} </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}


class Form_body_risk_group extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>{texts_german["risk_group"]["instructions"]} <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_risk_group"/></label>
                <Modal_popup button_id="modal_risk_group" title={modal_risk_group_title} text={modal_risk_group_text} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="risk_group_1_input" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={true}/>
                    <label className="form-check-label" htmlFor="risk_group_1_input"> {texts_german["risk_group"]["risk_group_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="risk_group_2_input" onChange={this.props.input_data_handler} name={this.props.input_name_risk_group} value={false}/>
                    <label className="form-check-label" htmlFor="risk_group_2_input"> {texts_german["risk_group"]["risk_group_no"]} </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>


        );
    }
}




class Form_body_got_unregistered_vaccination extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>{texts_german["got_unregistered_vaccination"]["instructions"]} <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_got_unregistered_vaccination"/></label>
                <Modal_popup button_id="modal_got_unregistered_vaccination" title={modal_got_unregistered_vaccination_title} text={modal_got_unregistered_vaccination_text} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_got_unregistered_vaccination} value={true}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3"> {texts_german["got_unregistered_vaccination"]["got_unregistered_vaccination_yes"]} </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_got_unregistered_vaccination} value={false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4"> {texts_german["got_unregistered_vaccination"]["got_unregistered_vaccination_no"]} </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}

class Form_body_unregistered_vaccination_date extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{texts_german["symptoms_end_date"]["instructions"]}</div>
                <br/>
                <br/>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["unregistered_vaccination_date"]["label"]}</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_unregistered_vaccination_date}/>
            </div>
        );
    }
}


class Form_body_symptoms_registered extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>{texts_german["symptoms_registered"]["instructions"]} <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_symptoms_registered"/></label>
                <Modal_popup button_id="modal_symptoms_registered" title={modal_symptoms_registered_text} text={modal_symptoms_registered_title} />
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'never'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        {texts_german["symptoms_registered"]["never"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'still'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["symptoms_registered"]["still"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_symptoms} value={'past'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["symptoms_registered"]["past"]}
                    </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}

class Form_body_number_vaccinations extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group">
                <label>{texts_german["number_vaccinations"]["instructions"]}</label>
                <br/>
                <br/>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault3" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={1}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        {texts_german["number_vaccinations"]["one"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={2}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["number_vaccinations"]["two"]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-validation" type="radio" id="flexRadioDefault4" onChange={this.props.input_data_handler} name={this.props.input_name_number_vaccinations} value={3}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        {texts_german["number_vaccinations"]["three"]}
                    </label>
                    <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                    <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                </div>
            </div>
        );
    }
}


class Form_body_infection_date extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>{texts_german["infection_date"]["instructions"]} <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_infection_date"/></label>
                <Modal_popup button_id="modal_infection_date" title={modal_infection_date_title} text={modal_infection_date_text} />
                <br/>
                <br/>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["infection_date"]["label"]}</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_name_infection_date}/>
            </div>
        );
    }
}


class Form_body_symptoms_end_date extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>{texts_german["symptoms_end_date"]["instructions"]} <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#modal_symptoms_end_date"/></label>
                <Modal_popup button_id="modal_symptoms_end_date" title={modal_symptoms_end_date_text} text={modal_symptoms_end_date_title} />
                <br/>
                <br/>
                <label htmlFor="datepicker_infection" data-bs-toggle="modal"
                       data-bs-target="#modal_datum_postest">{texts_german["symptoms_end_date"]["label"]}</label>
                <DatePicker onChange={this.props.input_data_handler}
                            date_picker_name={this.props.input_symptoms_end_date}/>
            </div>
        );
    }
}


class Form_body_age extends React.Component {
    constructor(props) {
        super(props);
        this.input_filed_change = this.input_filed_change.bind(this);
        this.state = {value: texts_german["age"]["age_placeholder"]};
        this.props.input_data_handler({target: {value: [this.state.value], name: this.props.input_name_age}});
    }

    input_filed_change(e){
        this.setState({value: e.target.value});
        this.props.input_data_handler({target: {value: e.target.value, name: [this.props.input_name_age]}});
    }

    render(){
        return(
            <div >
                <label>{texts_german["age"]["instructions"]}</label>
                <br/>
                <br/>
                <input value={this.state.value}  type="number" min="0" max="1000" step="1" className="form-control" id="age_input_field" placeholder={texts_german["age"]["age_placeholder"]} onChange={this.input_filed_change} name={this.props.input_name_age} required/>
                <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
            </div>
        )
    }
}


var datepicker_german = {
    currentText: 'heute', currentStatus: '',
    todayText: 'heute', todayStatus: '',
    clearText: '-', clearStatus: '',
    closeText: 'schließen', closeStatus: '',
    monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    showMonthAfterYear: false,
    dateFormat: 'dd.mm.yy'
};

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datepickerContainer = React.createRef();
        this.handle_date_selection_internal = this.handle_date_selection_internal.bind(this);
        this.handle_manual_change = this.handle_manual_change.bind(this);
    }

    handle_date_selection_internal(date) {
        this.props.onChange({target: {value: date, name: [this.props.date_picker_name]}});
    }

    handle_manual_change(event) {
        this.handle_date_selection_internal(event.target.value);
    }


    componentDidMount() {

        let datepicker_setting = datepicker_german;
        datepicker_setting["onSelect"] = this.handle_date_selection_internal;
        datepicker_setting["name"] = this.props.date_picker_name;

        window.$(this.refs.input_2).datepicker(datepicker_setting);
    }

    componentWillUnmount() {
        window.$(this.refs.input_2).datepicker("destroy");
    }

    render() {
        return (
            <div>
                <input id={this.props.date_picker_name} type="text" className="form-control date-validation" placeholder="bitte auswählen"
                       ref="input_2" onChange={this.handle_manual_change}/>
                <div className="valid-feedback">{texts_german["form_validation"]["valid"]}</div>
                <div className="invalid-feedback">{texts_german["form_validation"]["invalid"]}</div>
                <div className="DatePicker" ref={this.datepickerContainer}/>
            </div>
        );
    }
}



class Card_start extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="vc-card container" id="card_start" >
                <div className="row justify-content-md-center">
                        <div className="vc-card-header">
                            <div className="col-sm" style={{textAlign: "center"}}>
                                <h1 style={{color: "grey"}} className="card-title" >{texts_german["start"]["header"]}</h1>
                            </div>
                        </div>

                        <div className="vc-card-body">
                            <div className="col" style={{"position": "relative", "textAlign": "center", "padding": "20% 0%"}}>
                                <button type="button" className="button-start button_next" id="card_start_button_next"
                                        onClick={this.props.handler} style={{"fontSize":"40px"}}>  Starten
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

class Card_result extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let result_text = [];

        // single output
        if (this.props.user_data["entered_data"]["value"].length === 1) {
            result_text.push(this.props.user_data["entered_data"]["value"][0]);
        }
        // multiple outputs
        else {
            result_text.push(<div key={"result_list_multiple_options_intro"}>{texts_german["results"]["multiple_options"]}</div>);
            const options = this.props.user_data["entered_data"]["value"];
            for (var i = 0; i < options.length; i++) {
                result_text.push(<li key={i}>{options[i]}</li>);
            }
        }

        return(
            <div className="vc-card container">
                    <div className="vc-card-header">
                        <div className="col-sm" style={{textAlign: "center"}}>
                            <h1 style={{color: "grey"}} className="card-title"> <b>Ergebnis </b></h1>
                        </div>
                    </div>

                    <div className="vc-card-body">
                        <div className="vc-result" style={{"position": "relative", "height":"90%", "width":"100%", "overflowY": 'scroll'}}>
                            <h1>Empfehlung</h1>
                            <div key="k1">{result_text}</div>
                            <br/>
                            <div key="k2">{texts_german["disclaimer"]}</div>
                            <br/>
                            <h1>Ihre Daten</h1>
                            <div key="k3">{vis_user_data(this.props.user_data)}</div>
                        </div>

                        <div className="" style={{"position": "absolute", "bottom": "2%", "top":"auto", "width":"100%"}}>
                            <div className="d-flex justify-content-between">
                                <button className="button button_back" onClick={this.props.handler}
                                        id={this.props.id_back}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}


function vis_user_data (user_data) {
    let user_data_list = [];

    if ('age' in user_data['user_data']){
        user_data_list.push(<li key='age'>{texts_german['age']["header"]}: {user_data['user_data']['age']['value']}</li>);
    }

    if ('risk_group' in user_data['user_data']){
        if (user_data['user_data']['risk_group']['value']){
            user_data_list.push(<li key='risk_group'>{texts_german['risk_group']["header"]}: {texts_german['risk_group']['risk_group_yes']}</li>);
        }
    }

    if ('past_infection' in user_data['user_data']){
        if (user_data['user_data']['past_infection']['value']){
            user_data_list.push(<li key='past_infection'>{texts_german['past_infection']["header"]}: {texts_german['past_infection']['past_infection_yes']}</li>);
        }
    }

    if ('infection_date' in user_data['user_data']){
        user_data_list.push(<li key='infection_date'>{texts_german['infection_date']["header"]}: {user_data['user_data']['infection_date']['date']}</li>);
    }

    if ('symptoms_registered' in user_data['user_data']){
        user_data_list.push(<li key='symptoms_registered'>{texts_german['symptoms_registered']["header"]}: {texts_german['symptoms_registered'][user_data['user_data']['symptoms_registered']['value']]}</li>);
    }

    if ('symptoms_end_date' in user_data['user_data']){
        user_data_list.push(<li key='symptoms_end_date'>{texts_german['symptoms_end_date']["header"]}: {user_data['user_data']['symptoms_end_date']['date']}</li>);
    }

    if ('got_unregistered_vaccination' in user_data['user_data']){
        if (user_data['user_data']['got_unregistered_vaccination']['value']){
            user_data_list.push(<li key='got_unregistered_vaccination'>{texts_german['got_unregistered_vaccination']["header"]}: {texts_german['got_unregistered_vaccination']['got_unregistered_vaccination_yes']}</li>);
        }
    }

    if ('unregistered_vaccination_date' in user_data['user_data']){
        user_data_list.push(<li key='unregistered_vaccination_date'>{texts_german['unregistered_vaccination_date']["header"]}: {user_data['user_data']['unregistered_vaccination_date']['date']}</li>);
    }

    if ('vaccinated' in user_data['user_data']){
        if (user_data['user_data']['vaccinated']['value']){
            user_data_list.push(<li key='vaccinated'>{texts_german['vaccinated']["header"]}: {texts_german['vaccinated']['vaccinated_yes']}</li>);
        }
    }

    if ('vaccination_1' in user_data['user_data']){
        user_data_list.push(<li key='vaccination_1'>Impfung: {user_data['user_data']['vaccination_1']['value']}</li>);
    }

    if ('vaccination_2' in user_data['user_data']){
        user_data_list.push(<li key='vaccination_2'>Impfung: {user_data['user_data']['vaccination_2']['value']}</li>);
    }

    if ('vaccination_last' in user_data['user_data']) {
        user_data_list.push(<li key='vaccination_last'>Letzte Impfung: {user_data['user_data']['vaccination_last']['value']} am {user_data['user_data']['vaccination_last']['date']}</li>);
    }

    return <div>{user_data_list}</div>;
}

function button_id_2_card_id(button_id){
    if (button_id.includes('_start_')){
        return 'start';
    }
    if (button_id.includes('_got_unregistered_vaccination_')){
        return 'got_unregistered_vaccination';
    }
    if (button_id.includes('_unregistered_vaccination_date_')){
        return 'unregistered_vaccination_date';
    }
    if (button_id.includes('_vaccination_last_')){
        return 'vaccination_last';
    }
    if (button_id.includes('_vaccination_1_')){
        return 'vaccination_1';
    }
    if (button_id.includes('_vaccinated_')){
        return 'vaccinated';
    }
    if (button_id.includes('_past_infection_')){
        return 'past_infection';
    }
    if (button_id.includes('_infection_date_')){
        return 'infection_date';
    }
    if (button_id.includes('_age_')){
        return 'age';
    }
    if (button_id.includes('_symptoms_end_date_')){
        return 'symptoms_end_date';
    }
    if (button_id.includes('_symptoms_registered_')){
        return 'symptoms_registered';
    }
    if (button_id.includes('_risk_group_')){
        return 'risk_group';
    }
    if (button_id.includes('_number_vaccinations_')){
        return 'number_vaccinations';
    }
    if (button_id.includes('_result_')){
        return 'result';
    }
}


class CardManager extends React.Component {
    constructor(props) {
        super(props);
        this.control_click_handler = this.control_click_handler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            step: 'start',
            entered_data: {},
            card_history: [],
            user_data: {}
        };
    }


    control_click_handler(e) {
        let current_card_history = this.state.card_history;
        let current_user_data = this.state.user_data;
        let current_card_id = button_id_2_card_id(e.target.id);

        let invalid = false;

        if (e.target.classList !== undefined){
            if (e.target.classList.contains('button_next')) {

                let forms = document.querySelectorAll('.needs-validation');

                Array.prototype.slice.call(forms)
                    .forEach(function (form) {
                        form.addEventListener('submit', function (event) {
                            if (!isNaN(this.state.entered_data['value'])) {
                                event.preventDefault();
                                event.stopPropagation();

                            }

                            form.classList.add('was-validated')
                        }, false)
                    })


                // form validation
                // number text-field
                if (current_card_id === 'age') {
                    if (isNaN(this.state.entered_data['value']) || this.state.entered_data['value'] === '') {
                        document.getElementById("age_input_field").classList.remove("is-valid");
                        document.getElementById("age_input_field").classList.add("is-invalid");
                        invalid = true;
                    }
                    else {
                        document.getElementById("age_input_field").classList.remove("is-invalid");
                        document.getElementById("age_input_field").classList.add("is-valid")
                    }
                }
                // radio-button selection
                if (['vaccinated', 'past_infection', 'symptoms_registered', 'risk_group', 'number_vaccinations', 'got_unregistered_vaccination'].includes(current_card_id)) {
                    let element = document.getElementsByClassName("radio-validation");

                    if (this.state.entered_data['value'] === undefined) {

                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-valid");
                            element[i].classList.add("is-invalid");
                        }
                        invalid = true;
                    }
                    else {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-invalid");
                            element[i].classList.add("is-valid");
                        }
                    }
                }
                // date
                if (['vaccination_last', 'infection_date', 'symptoms_end_date', 'unregistered_vaccination_date'].includes(current_card_id)) {
                    let element = document.getElementsByClassName("date-validation");

                    if (this.state.entered_data['date'] === undefined || !(is_valid_date_format(this.state.entered_data['date']))) {

                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-valid");
                            element[i].classList.add("is-invalid");
                        }
                        invalid = true;
                    }
                    else {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-invalid");
                            element[i].classList.add("is-valid");
                        }
                    }
                }
                // select
                if (['vaccination_last', 'vaccination_1'].includes(current_card_id)) {
                    let element = document.getElementsByClassName("select-validation");

                    if (this.state.entered_data['value'] === undefined || this.state.entered_data['value'] === '' || this.state.entered_data['value'] === true) {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-valid");
                            element[i].classList.add("is-invalid");
                        }
                        invalid = true;
                    }
                    else {
                        for(let i = 0; i < element.length; i++){
                            element[i].classList.remove("is-invalid");
                            element[i].classList.add("is-valid");
                        }
                    }

                }

                if (invalid) {
                    return null;
                }

                current_card_history.push(current_card_id);
                current_user_data[current_card_id] = this.state.entered_data;
                let next_card = get_next_card(current_card_history, current_user_data);

                this.setState({card_history: this.state.card_history});
                this.setState({user_data: current_user_data});
                this.setState({step: next_card[0], entered_data: next_card[1]});
            }
        }
        if (e.target.classList !== undefined){
            if (e.target.classList.contains('button_back')) {
                let last_step = current_card_history.pop();
                delete current_user_data[current_card_id];

                this.setState({card_history: current_card_history});
                this.setState({user_data: current_user_data});
                this.setState({entered_data: {value:undefined}});
                this.setState({step: last_step});
            }
        }

        e.preventDefault();
    }


    handleInputChange(event) {
        const entered_data = this.state.entered_data;
        const target = event.target;

        // typecast string value to boolean if required
        let value = target.value;
        if (value === 'true') {
            value = true;
        }
        if (value === 'false') {
            value = false;
        }

        entered_data[target.name] = value;

        this.setState({
            entered_data: entered_data
        });
    }


    render() {
        const step = this.state.step;

        switch (step) {
            case 'start':
                return (
                    <Card_start handler={this.control_click_handler}/>
                );

            case 'vaccination_last':
                return (
                    <Card title={texts_german["vaccination_last"]["header"]}
                          id_next={"card_vaccination_last_next"}
                          id_back={"card_vaccination_last_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_last input_data_handler={this.handleInputChange}
                                                            input_name_vaccine='value'
                                                            input_name_vaccination_date='date'/>}/>
                );
            case 'vaccination_1':
                return (
                    <Card title={texts_german["vaccination_x"]["header"]}
                          id_next={"card_vaccination_1_next"}
                          id_back={"card_vaccination_1_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_x input_data_handler={this.handleInputChange}
                                                            input_name_vaccine='value' />}/>
                );
            case 'vaccination_2':
                return (
                    <Card title={texts_german["vaccination_x"]["header"]}
                          id_next={"card_vaccination_2_next"}
                          id_back={"card_vaccination_2_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_x input_data_handler={this.handleInputChange}
                                                              input_name_vaccine='value' />}/>
                );
            case 'vaccination_3':
                return (
                    <Card title={texts_german["vaccination_x"]["header"]}
                          id_next={"card_vaccination_3_next"}
                          id_back={"card_vaccination_3_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccination_x input_data_handler={this.handleInputChange}
                                                              input_name_vaccine='value' />}/>
                );
            case 'vaccinated':
                return (
                    <Card title={texts_german["vaccinated"]["header"]}
                          id_next={"card_vaccinated_next"}
                          id_back={"card_vaccinated_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_vaccinated input_data_handler={this.handleInputChange}
                                                           input_name_vaccinated='value'/>}/>
                );
            case 'past_infection':
                return (
                    <Card title={texts_german["past_infection"]["header"]}
                          id_next={"card_past_infection_next"}
                          id_back={"card_past_infection_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_past_infection input_data_handler={this.handleInputChange}
                                                               input_name_past_infection='value' />}/>
                );
            case 'infection_date':
                return (
                    <Card title={texts_german["infection_date"]["header"]}
                          id_next={"card_infection_date_next"}
                          id_back={"card_infection_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_infection_date input_data_handler={this.handleInputChange}
                                                               input_name_infection_date='date'/>}/>
                );
            case 'age':
                return (
                    <Card title={texts_german["age"]["header"]}
                          id_next={"card_age_next"}
                          id_back={"card_age_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_age input_data_handler={this.handleInputChange}
                                                               input_name_age='value'/>}/>
                );
            case 'symptoms_registered':
                return (
                    <Card title={texts_german["symptoms_registered"]["header"]}
                          id_next={"card_symptoms_registered_next"}
                          id_back={"card_symptoms_registered_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms_registered input_data_handler={this.handleInputChange}
                                                               input_name_symptoms='value' />}/>
                );
            case 'symptoms_end_date':
                return (
                    <Card title={texts_german["symptoms_end_date"]["header"]}
                          id_next={"card_symptoms_end_date_next"}
                          id_back={"card_symptoms_end_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_symptoms_end_date input_data_handler={this.handleInputChange}
                                                               input_symptoms_end_date='date'/>}/>
                );
            case 'risk_group':
                return (
                    <Card title={texts_german["risk_group"]["header"]}
                          id_next={"card_risk_group_next"}
                          id_back={"card_risk_group_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_risk_group input_data_handler={this.handleInputChange}
                                                           input_name_risk_group='value' />}/>
                );
            case 'number_vaccinations':
                return (
                    <Card title={texts_german["number_vaccinations"]["header"]}
                          id_next={"card_number_vaccinations_next"}
                          id_back={"card_number_vaccinations_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_number_vaccinations input_data_handler={this.handleInputChange}
                                                               input_name_number_vaccinations='value' />}/>
                );
            case 'got_unregistered_vaccination':
                return (
                    <Card title={texts_german["got_unregistered_vaccination"]["header"]}
                          id_next={"card_got_unregistered_vaccination_next"}
                          id_back={"card_got_unregistered_vaccination_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_got_unregistered_vaccination input_data_handler={this.handleInputChange}
                                                           input_name_got_unregistered_vaccination='value' />}/>
                );
            case 'unregistered_vaccination_date':
                return (
                    <Card title={texts_german["unregistered_vaccination_date"]["header"]}
                          id_next={"card_unregistered_vaccination_date_next"}
                          id_back={"card_unregistered_vaccination_date_back"}
                          handler={this.control_click_handler}
                          form_body={<Form_body_unregistered_vaccination_date input_data_handler={this.handleInputChange}
                                                                              input_unregistered_vaccination_date='date' />}/>
                );
            case 'result':
                return (
                    <Card_result handler={this.control_click_handler} user_data={{'user_data': this.state.user_data, 'entered_data': this.state.entered_data}}/>
                );

            default:
                console.log('React rendering ERROR: Rendering default.')
                return (

                    <div>
                        ERROR: Not a render case!
                    </div>
                )
        }
    }
}

ReactDOM.render(
    <CardManager/>,
    document.getElementById("root")
);

