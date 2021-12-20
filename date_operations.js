function get_latest_date(dates) {
    return new Date(Math.max.apply(null, dates));
}

function is_valid_date_format(date_str) {
    d = ger_str_2_date(date_str);
    return d instanceof Date && !isNaN(d);
}

// e.g. ger_str_2_date("24.10.1996") returns Date(Thu Oct 24 1996 ...)
function ger_str_2_date(ger_str) {
    let format = 'dd.mm.yyyy'
    let parts = ger_str.match(/(\d+)/g), i = 0, fmt = {};
    format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
}

function add_weeks_2_date(date, weeks) {
    return new Date(date.setDate(date.getDate() + weeks * 7));
}

function add_month_2_date(date, month) {
    return new Date(date.setMonth(date.getMonth() + month));
}