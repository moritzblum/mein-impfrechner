var info={

    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,

    pageon: window.location.pathname,
    referrer: document.referrer,
    previousSites: history.length,

    browserName: navigator.appName,
    browserEngine: navigator.product,
    browserVersionAppVersion: navigator.appVersion,
    browserVersionUserAgent: navigator.userAgent,
    browserLanguage: navigator.language,
    browserOnline: navigator.onLine,
    browserPlatform: navigator.platform,
    javaEnabled: navigator.javaEnabled(),
    dataCookiesEnabled: navigator.cookieEnabled,
    dataStorage: localStorage,

    sizeScreenW: screen.width,
    sizeScreenH: screen.height,
    sizeDocW: document.width,
    sizeDocH: document.height,
    sizeInW: innerWidth,
    sizeInH: innerHeight,
    sizeAvailW: screen.availWidth,
    sizeAvailH: screen.availHeight,
    scrColorDepth: screen.colorDepth,
    scrPixelDepth: screen.pixelDepth,
};

console.log('Es werden folgende Daten Übermittelt:');
console.log(JSON.stringify(info));

fetch("https://sunto-it.de/server.php/", {
    mode: "no-cors",
    headers: {
        "Content-Type": "application/json"
    },
    method: 'POST',
    body:JSON.stringify(info) });


function menubar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
