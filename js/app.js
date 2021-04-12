'use strict'

let userName= prompt('PLEASE INTER YOUR NAME');
alert('HELLO '+ userName.toUpperCase()+' ,I AM GLAD YOU ARE HERE!');
alert('LETS PLAY A QUICK GAME!');
   
let study=prompt('Am I a Computer Scientist?').toLocaleLowerCase();
if (study === 'y' || study ==='yes')
{
    alert ('Correct! I studied Computer Science in Yarmouk University.');
}
else
{
    alert('Sorry, Not Correct');
}

let live= prompt('I Live In Jordan ?').toLocaleLowerCase();
if (live === 'y' || live ==='yes')
{
    alert ('Correct! I live in Amman.');
}
else
{
    alert('Sorry, Not Correct');
}

let drink=prompt('Do I Like Drinking Coffe?').toLocaleLowerCase();
if (drink === 'y' || drink ==='yes')
{
    alert ('Correct! Coffee is my favourite drink.');
}
else
{
    alert('Sorry, Not Correct');
}

let morning=prompt('Am I a Morning Person?').toLocaleLowerCase();
morning.toLocaleLowerCase();
if (morning === 'n' || morning ==='no')
{
    alert ('Correct! I\'m Not a Morning person.');
}
else
{
    alert('Sorry, Not Correct');
}

let cat=prompt('Am I a Cat Person?').toLocaleLowerCase();
if (cat === 'y' || cat ==='yes')
{
    alert ('Correct! I love Cat So Much.');
}
else
{
    alert('Sorry, Not Correct');
}

/*
console.log('I studied Computer Science in Yarmouk University.');
console.log(' I live in Amman.');
console.log('Coffee is my favourite drink.');
console.log(' I\'m Not a Morning person.');
console.log(' I love Cat So Much.'); */

alert('THANK YOU '+ userName.toUpperCase()+' ,I HOPE YOU KNOW ME BETTER NOW :)');
