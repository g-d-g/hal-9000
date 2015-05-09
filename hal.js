/* HAL 9000 */

var humanName = null,
    startThinking = null;

var whatTimeIsIt = function() {
    var date = new Date();
    var anwser = "It is " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return anwser;
};

var whatDayIsIt = function() {
    var date = new Date();
    var answer = "Today is" + date.getDay();
    return anwser;
};

/* 
 * Starts thinking
 * @param loaderElement HTML element where loader will start
 */
function thinking(loaderElement) {
    var count = 0;
    startThinking = setInterval(function(){
        count++;
        var dots = new Array(count % 5).join('.');
        loaderElement.innerHTML = " Thinking." + dots;
    }, 200);
    startThinking;
}

/* 
 * Stops thinking
 * @param loaderElement HTML element where loader will stop
 */
function done(loaderElement) {
    var stopThinking = clearInterval(startThinking);
    loaderElement.innerHTML = "";
    stopThinking;
}

/* 
 * Captures input
 * @param textField HTML element where input is being taken from
 */
function captureInput(e) {

   // Key 13 = Enter
   if(e.which != 13) {
        return false;
   }

   var question = this.value;

   appendOutput("<p><b>Human: </b>" + question + "</p>", output);
   thinking(loader);

   setTimeout(function () {
        appendOutput("<p><b>HAL: </b>" + processInput(question) + "</p>", output);
        done(loader);

   }, 1000);
   
   this.focus();
   this.select();

   //output.scrollByLines(100);
}

/* 
 * Processes input
 * @param question Input question to be processed
 */
function processInput(question) {
    var answer = "I am ";
    if(humanName != null) {
        answer += "sorry " + name + ", I'm afraid I can't do that...";
    } else {
        answer += "sorry, I'm afraid I can't do that...";
    }
    
    dict = dictionary[question.toUpperCase()];
    
    if(dict) {
        var randKey = parseInt(Math.random() * dict.length);
        answer = dict[randKey];
    }

    return answer;
}

/* 
 * Displays output
 * @param message string message to be displayed
 * @param dest HTML element where message is to be displayed
 */
function appendOutput(message, dest) {
    dest.innerHTML += message;
}

function getName() {
    var namePrompt = prompt("What is your name?", "");

    if (namePrompt != null) {
        person = namePrompt;
    }

}

// Initialize
var input = document.getElementById("inText");
input.onkeyup = captureInput;

var output = document.getElementById("dialog");
input.focus;

var loader = document.getElementById("loader");