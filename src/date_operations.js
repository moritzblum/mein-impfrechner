export function get_latest_date(dates) {
    // filter out undefined list elements
    dates = dates.filter(function( date ) {
        return date !== undefined;
    });

    return new Date(Math.max.apply(null, dates));
}

export function is_valid_date_format(date_str) {
    let d = ger_str_2_date(date_str);
    return d instanceof Date && !isNaN(d);
}

// e.g. ger_str_2_date("24.10.1996") returns Date(Thu Oct 24 1996 ...)
export function ger_str_2_date(ger_str) {
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

export function add_weeks_2_date(date, weeks) {
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

export function add_month_2_date(date, month) {
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