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