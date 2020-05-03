// console.log("Hey shubham,This is popup.js")
let backgroundPage = chrome.extension.getBackgroundPage();
let word = backgroundPage.word;

// console.log(word)

let url = `https://owlbot.info/api/v4/dictionary/${word}`;
console.log(url)
let params = {
    method: 'GET',
    headers: {
        'Authorization': 'Token ' + '93e67247578867940b5a9e44f540a839661735bd'
    }
}

fetch(url, params)
    .then((res) => {
        return res.json();
    })
    .then((json) => {

        let setdef = document.getElementById('definition');
        let setword = document.getElementById('word');
        setdef.innerText = `" ${json.definitions[0].definition} "` 
        setword.innerText = json.word
    })
    .catch((err) => {
        let seterror = document.getElementById('word');
        seterror.innerText = "Definition Not Found"
    });