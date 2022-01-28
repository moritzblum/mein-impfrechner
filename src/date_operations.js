export function get_latest_date(dates) {
    // filter out undefined list elements
    dates = dates.filter(function( date ) {
        return date !== undefined;
    });

    return new Date(Math.max.apply(null, dates));
}


export function add_weeks_2_date(date, weeks) {
    if (date === undefined){
        return undefined
    }
    else{
        if (typeof date == "string") {
            date = new Date(date);
        }
    }
    return new Date(date.setDate(date.getDate() + weeks * 7));

}

export function add_month_2_date(date, month) {
    if (date === undefined){
        return undefined
    }
    else{
        if (typeof date == "string") {
            date = new Date(date)
        }
    }

    return new Date(date.setMonth(date.getMonth() + month));
}

export function isToday(someDate){
    const today = new Date()
    return ((someDate.getDay() == today.getDay()) &&
        (someDate.getMonth() == today.getMonth()) &&
        (someDate.getFullYear() == today.getFullYear()))
}

function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // note parts[1]-1
    return new Date(parseInt(parts[2]) , parts[1]-1, parts[0]);
}


export function CreateDateStringModified(props){
    const today = new Date()
    today.setHours(23, 59, 59);

    console.log(parseDate(props.date).toLocaleDateString());
    console.log(today.toLocaleDateString());
    console.log(isToday(parseDate(props.date)));

    if(isToday(parseDate(props.date))){
        return(<span><b>sofort</b></span>)
    }

    if(parseDate(props.date) <= today) {
        return (<span><b>sofort</b> (seit dem {props.date})</span>)
    }

    return(<span>dem <b>{props.date}</b></span>)

}
