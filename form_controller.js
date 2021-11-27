// todo init model


// todo init view
show_card('card-form-start', {});



// add EventListener to all next buttons
const next_buttons = document.querySelectorAll(".button_next");
next_buttons.forEach(button => {
    button.addEventListener("click", () => {
            button_handler_next(button.id);
        }
    )
})

// add EventListener to all back buttons
const back_buttons = document.querySelectorAll(".button_back");
back_buttons.forEach(button => {
    button.addEventListener("click", () => {
            button_handler_back(button.id);
        }
    )
})


// handle pressed button with given id
function button_handler_next(button_id) {
    console.log('Next button pressed: ' + button_id);
    show_card("card-form-age", {});


}

// todo button_handler_back()
function button_handler_back(button_id) {
    console.log('Back button pressed: ' + button_id);
    // todo
}

