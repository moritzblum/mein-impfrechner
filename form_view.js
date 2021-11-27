
// todo show_card(card_id, data)
function show_card(card_id, card_content){

    console.log('show card:' + card_id);

    // set all cards to inactive
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        document.getElementById("card-form-start").classList.remove('active');
        document.getElementById("card-form-start").classList.add('inactive');
    })

    // set the one card active
    document.getElementById(card_id).classList.remove('inactive');
    document.getElementById(card_id).classList.add('active');

}