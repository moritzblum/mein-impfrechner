let test_cases = [
    [['start'], ['age', 10], ['risk_group', true], ['result_1']],
    [['start'], ['age', 10], ['risk_group', false], ['result_2']]
]

errors = 0;
for (let test_case_number in test_cases) {
    let test_case = test_cases[test_case_number];

    let card_history_test = [];
    let user_data_test = {};

    for (let step in test_case) {
        let expe_card = test_case[step][0];
        let user_input = test_case[step][1];
        let pred_card = get_next_card(card_history_test, user_data_test);
        if(pred_card !== expe_card){
            console.log('ERROR: wrong prediction in test case ' + test_case_number + ' , expected ' + expe_card + ' got ' + pred_card);
            errors ++;
        }
        card_history_test.push(expe_card);
        user_data_test[expe_card] = {value: user_input};
    }
}

if (errors === 0) {
    console.log('--- Units test successful, no errors. ---');
}
else {
    console.log('--- ERROR: Unit tests not successful, see logged ERRORS above. --- ');
}



