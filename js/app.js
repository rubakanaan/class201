'use strict';
let score = 0;
let userName = prompt('PLEASE INTER YOUR NAME');
alert('HELLO ' + userName.toUpperCase() + ' ,I AM GLAD YOU ARE HERE!');
alert('LETS PLAY A QUICK GAME!');

let study = prompt('Am I a Computer Scientist?', 'yes or no').toLocaleLowerCase();
if (study === 'y' || study === 'yes') {
    alert('Correct! I studied Computer Science in Yarmouk University.');
    score++;
}
else if (study === 'n' || study === 'no') {
    alert('Sorry, Not Correct');
}
else {
    alert("your answer should be yes or no.")
}

let live = prompt('I Live In Jordan ?', 'yes or no').toLocaleLowerCase();
if (live === 'y' || live === 'yes') {
    alert('Correct! I live in Amman.');
    score++;
}
else if (live === 'n' || live === 'no') {
    alert('Sorry, Not Correct');
}
else {
    alert("your answer should be yes or no.")
}

let drink = prompt('Do I Like Drinking Coffe?', 'yes or no').toLocaleLowerCase();
if (drink === 'y' || drink === 'yes') {
    alert('Correct! Coffee is my favourite drink.');
    score++;
}
else if (drink === 'n' || drink === 'no') {
    alert('Sorry, Not Correct');
}
else {
    alert("your answer should be yes or no.");

}

let morning = prompt('Am I a Morning Person?', 'yes or no').toLocaleLowerCase();
morning.toLocaleLowerCase();
if (morning === 'n' || morning === 'no') {
    alert('Correct! I\'m Not a Morning person.');
    score++;
}
else if (morning === 'y' || morning === 'yes') {
    alert('Sorry, Not Correct');
}
else {
    alert("your answer should be yes or no.")
}

let cat = prompt('Am I a Cat Person?', 'yes or no').toLocaleLowerCase();
if (cat === 'y' || cat === 'yes') {
    alert('Correct! I love Cat So Much.');
    score++;
}
else if (cat === 'n' || cat === 'no') {
    alert('Sorry, Not Correct');
}
else {
    alert("your answer should be yes or no.")
}

/*
console.log('I studied Computer Science in Yarmouk University.');
console.log(' I live in Amman.');
console.log('Coffee is my favourite drink.');
console.log(' I\'m Not a Morning person.');
console.log(' I love Cat So Much.'); */




let myNum = 7;
let counter = 0;
let userNum = Number(prompt("Guess my favorite number between 1 to 10"));

while (counter != 4 && userNum != myNum) {
    if (userNum < myNum) {
        userNum = prompt('TOO LOW , TRY AGAIN!');
        counter++;
    }
    else {
        userNum = prompt('TOO HIGH , TRY AGAIN!');
        counter++;
    }


}

if (counter == 4) {
    alert('The right answer is 7, sorry!');
}
else {
    alert('CORRECT :)');
    score++;
}

//console.log('7');

let answers = [3, 8, 12, 19, 15, 6];
let attemp = 0;
let chance=6;

while (attemp < 6) {
    let userAttemp = Number(prompt('Please guess one of my favorite numbers between 1 and 20 , you have :'+ chance+' chances'));
    for (let i = 0; i < answers.length; i++) {
        if (userAttemp == answers[i]) {
            alert('Correct! :)');
            attemp=7;
            score++;
            break;

        }

    }
    if (attemp<6){
    
    alert('Not correct!');
}
chance--;
attemp++;
}

//console.log(answers);

alert('My answers are: \n I studied Computer Science in Yarmouk University. \n I live in Amman. \n Coffee is my favourite drink. \n I\'m Not a Morning person. \n I love Cat So Much.\n my favorite number is 7 \n The numbers are: 3,6,8,12,15,19. \n YOUR SCORE IS: ' + score);
alert('THANK YOU ' + userName.toUpperCase() + ' ,I HOPE YOU KNOW ME BETTER NOW :)');
