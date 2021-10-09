var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

var Content = event.results[0][0].transcript; 

document.getElementsById("textbox").innerHTML = Content;
console.log(Content);
speak();

}

function speak()
{
    var synth = window.speechSynthesis;
    
    speak_data = document.getElementsById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}