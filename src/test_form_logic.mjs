import {get_next_card} from "./form_logic.js";
import ger_str_2_date from "./date_operations.js";
import add_month_2_date from "./date_operations.js";
import add_weeks_2_date from "./date_operations.js";

console.log('--- Example date operations ---');
let test_date = ger_str_2_date("24.7.96");
console.log('From german DD.MM.(YY)YY format to JS Date: ' + test_date);
test_date = add_month_2_date(test_date, 2);
console.log('Added 2 month: ' + test_date);
test_date = add_weeks_2_date(test_date, 3);
console.log('Added 2 weeks: ' + test_date);
console.log('2 local string: ' + test_date.toLocaleString());


console.log('--- Start unit tests. ---');
let test_cases = [
    [['start'], ['age', 10], ['risk_group', false], ['result_2']],
    [['start'], ['age', 3], ['result_2']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', false], ['result_6']],
    [['start'], ['age', 31], ['risk_group', true], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', false], ['result_5']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', true],  ['unregistered_vaccination_date', '11.05.2021'], ['vaccinated', false], ['result_6']],
    [['start'], ['age', 21], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Biontech', '11.05.2021'], ['result_9']],
    [['start'], ['age', 21], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Moderna', '11.05.2021'], ['result_9']],
    [['start'], ['age', 54], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Moderna', '11.05.2021'], ['result_11']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Astrazeneca', '11.05.2021'], ['result_12']],
    [['start'], ['age', 15], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['result_8']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 3], ['result_8']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Astrazeneca', '11.05.2021'], ['result_9']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Biontech', '11.05.2021'], ['result_10']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Moderna', '11.05.2021'], ['result_11']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Biontech'], ['vaccination_last', 'Biontech', '11.05.2021'], ['result_17']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Moderna'], ['vaccination_last', 'Moderna', '11.05.2021'], ['result_18']],
    [['start'], ['age', 62], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Moderna'], ['vaccination_last', 'Moderna', '11.05.2021'], ['result_19']],
    [['start'], ['age', 62], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Astrazeneca'], ['vaccination_last', 'Biontech', '11.05.2021'], ['result_20']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Janssen'], ['vaccination_last', 'Biontech', '11.05.2021'], ['result_21']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', false], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Janssen'], ['vaccination_last', 'Astrazeneca', '11.05.2021'], ['result_22']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', false], ['result_5']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', false], ['result_6']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Astrazeneca', '10.05.2021'], ['result_13']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Astrazeneca', '10.05.2021'], ['result_14']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Astrazeneca', '12.05.2021'], ['result_15']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 1], ['vaccination_last', 'Astrazeneca', '12.05.2021'], ['result_16']],
    [['start'], ['age', 25], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Astrazeneca'], ['vaccination_last', 'Astrazeneca', '12.05.2021'], ['result_23']],
    [['start'], ['age', 31], ['risk_group', false], ['past_infection', true], ['infection_date', '11.05.2021'], ['symptoms_registered', 'never'], ['got_unregistered_vaccination', false], ['vaccinated', true], ['number_vaccinations', 2], ['vaccination_1', 'Astrazeneca'], ['vaccination_last', 'Astrazeneca', '12.05.2021'], ['result_24']],
]

let errors = 0;
for (let test_case_number in test_cases) {
    let test_case = test_cases[test_case_number];

    let card_history_test = [];
    let user_data_test = {};

    for (let step in test_case) {
        let expe_card = test_case[step];
        let pred = get_next_card(card_history_test, user_data_test);
        let pred_card = pred[0]

        if (pred_card === 'result'){
            if (! (pred[1][expe_card[0]])){
                console.log('ERROR: wrong result prediction in test case ' + test_case_number + ' , expected ' +  expe_card + ' got ' + JSON.stringify(pred));
                errors ++;
            }

        }
        else if(pred_card !== expe_card[0]){
            console.log('ERROR: wrong prediction in test case ' + test_case_number + ' , expected ' + JSON.stringify(expe_card) + ' got ' + JSON.stringify(pred));
            errors ++;
        }

        card_history_test.push(expe_card[0]);
        if (['infection_date', 'symptoms_end_date', 'unregistered_vaccination_date'].includes(expe_card[0])){
            user_data_test[expe_card[0]] = {'date': test_case[step][1]};
        }
        else {
            user_data_test[expe_card[0]] = {'value': test_case[step][1]};
            if (test_case[step].length > 2){
                user_data_test[expe_card[0]]['date'] = test_case[step][2];
            }
        }
    }
}

if (errors === 0) {
    console.log('--- Units test successful, no errors. ---');
}
else {
    console.log('--- ERROR: Unit tests not successful, see logged ERRORS above. --- ');
}



