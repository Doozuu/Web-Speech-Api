// speech API
const speechContent = window.speechSynthesis;

// DOM
const selectLang = document.querySelector('#selectBox');
const inputText = document.querySelector('#input-text');
const speakButton = document.querySelector('#speak-button');

speakButton.addEventListener('click', () => {
    speak(inputText.value, {
        rate : 1, 
        lang : selectLang.options[selectLang.selectedIndex].value
    });
})

function speak(text, opt_prop){
    const speech = new SpeechSynthesisUtterance(text)
    const prop = opt_prop || {}
    console.log(speech)
    speech.lang = prop.lang;
    speech.rate = prop.rate;
    speechContent.speak(speech, true)
}

