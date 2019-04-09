



function Trivia(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Trivia.prototype.getQuestionIndex = function () {
    return this. questions[this.questionIndex];
}

Trivia.prototype.isEnded = function () {
    return this. questions.length === this.questionIndex;
}

Trivia.prototype.guess = function(answer) {
    

    if(this.getQuestionIndex () .correctAnswer (answer)){
        this.score++;   
    }

    this.questionIndex++;
}






function  Question(text,choices,answer) {
    
    this.text = text;
    this.choices = choices;
    this.answer = answer;

}

Question.prototype.correctAnswer = function(choice){
return choice === this.answer;

}



function populate() {
    if(trivia.isEnded()){
        showScores();

        
    }

    else {
        let element = document. getElementById("questions");
        element.innerHTML = trivia.getQuestionIndex().text;

        let choices = trivia.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            let element = document.getElementById("choice"+ i);
            element.innerHTML = choices[i];
            guess("btn"+ i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document. getElementById(id);
    button.onclick=function() {
        trivia.guess (guess)
        populate();

    }
};

function showProgress() {
    let currentQuestionNumber = trivia.questionIndex +1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + trivia.questions.length;

};


function showScores() {
    let gameOverHtml = "<h3>Result</h3>";
    gameOverHtml += "<h3>Your Score:" + trivia.score + "</h3>";
    let element = document.getElementById("trivia");
    element.innerHTML =  gameOverHtml;
}




let questions = [
    new Question("What year does Ready Player One take place?", ["2025","2027","2040","2045"],"2045"),
    new Question("What is the Main Character's name?",["Wade Boggs","Wade Wilson","Wade Watts","Damien Wayne"],"Wade Watts"),
    new Question("What is the name is the virtual world in Ready Player One?",["OCULUS","PARIDISE","OASIS","The Quantum Realm "],"OASIS"),
    new Question("After finding all three keys and the Easter Egg what prize would the player receive? ",["Half a Trillion Dollars","Control of The OASIS","Control of Gergarious Games ","all the above "],"all the above "),
    new Question("On planet Doom what 1980's Horror Movie Icon did Aecth zero out in the opening scenes?",["Jason Voorhees","Chucky","Freddy Krueger","Pinhead"],"Freddy Krueger"),
    new Question("What vehicle did Parsival use to win the race for the first key?",["The Bigfoot Monster Truck","Kaneda's Bike","The Delorean","The Batmobile"],"The Delorean"),
    new Question("Finish this sentence (First to the key...)",["First to the Egg ","First to the Edge","First to Victory","Unlocks the Door"],"First to the Egg "),
    new Question("What coin did the Curator give Parsival due to a lost bet? ",["Two Face double head Coin","A Gold Coin","A Quarter ","An Extra Life "],"An Extra Life "),
    new Question("What custom did Persival wear when he met Artimus at The Destracted Globe?",["Prince's Purple Jacket","The Thiller Outfit","Duran Duran Jumpsuit","Buckaroo Bansai Suit"],"Buckaroo Bansai Suit"),
    new Question("What Stephen King movie did Artimus find the Second key in?",["IT","Carrie","The Shining","The Dead Zone"],"The Shining"),
    new Question("In What Atari Video Game did Parsival play to find the Final key",["Adventure","Centipede","Space Invader","Pac-Man"],"Adventure"),
    new Question("What name  was Persival and his Friends given after winning James Halloday's Easter Egg Hunt?",["The X-Force","The Ridiculous 6","The Hi-Five","The Fantasic 4"],"The Hi-Five"),
];
let trivia = new Trivia (questions);

populate();


let timer = setInterval(TimerHandler, 1000);
let sec=0;

function TimerHandler () {
sec++;

DisplayTime();
}




function DisplayTime () {
    let secCounter;
    let timerElement = document.getElementById("timer");
    if (sec <10) {
        secCounter = "0" +sec;
    }
    timerElement.innerHTML = ":"+ sec;
}

function stopTimer () {
    
}
