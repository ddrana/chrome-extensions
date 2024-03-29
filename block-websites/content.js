//BLOCK WORDS
findString = function findText(text) {
    if (window.find(text)) {
        document.documentElement.innerHTML = '';
        document.documentElement.innerHTML = 'This site is blocked';
        document.documentElement.scrollTop = 0;
    };
}

findString("WordToBlock");

//BLOCK THE PARTIAL DOMAINS
findURL = function changeURL(text) {
    var current = window.location.href;
    if (current === text) {
        window.location.replace("https://www.google.co.in");
    }
}

//BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
findAllURL = function changeAllURL(url) {
    var current = window.location.href;
    if (current.startsWith(url)) {
        document.documentElement.innerHTML = '';
        document.documentElement.innerHTML = 'Domain is blocked';
        document.documentElement.scrollTop = 0;
    }
}


findAllURL("https://www.quora.com/");
findAllURL("https://www.facebook.com/");
findAllURL("https://kite.zerodha.com");
findAllURL("https://www.rediff.com/");