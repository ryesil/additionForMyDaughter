let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let equaler = document.getElementById("equaler");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let starter = document.getElementById("starter");
let trueOut = document.getElementById('true')
let falseOut = document.getElementById('false')
let btns = document.querySelectorAll('.btn')
let scoreContainer = document.querySelector('#scoreContainer')


const adding = function(e){
e.preventDefault();
const num1 = number1.value*1;
const num2 = number2.value*1;
const result = num1+num2;
const resultFromUser=equaler.value*1
const isTrue = result===resultFromUser
if(isTrue)
trueOut.removeAttribute("hidden")
else
falseOut.removeAttribute("hidden")

let score = document.createElement('li');
if(isTrue)
score.setAttribute('style','background-color:green; width:fit-content; margin-bottom:5px; color:white; align-items: center')
else
score.setAttribute('style','background-color:red; width:fit-content; margin-bottom:5px; color:white; align-items: center')

score.innerHTML = `${num1} + ${num2} = ${resultFromUser}`
scoreContainer.append(score)

}

const begining = function(e){
e.preventDefault();
trueOut.setAttribute("hidden","hidden")
falseOut.setAttribute("hidden","hidden")
const number1Value = Math.floor(Math.random()*7)
const number2Value = Math.floor(Math.random()*7)
number1.value=number1Value;
number2.value=number2Value;
equaler.value='';

}

starter.addEventListener('click',(e)=>{
    e.preventDefault()
    begining(e) 
})
submit.addEventListener('click',(e)=>{
    adding(e)
})

btns.forEach(bt=>{
    bt.addEventListener('click',e=>{
        e.preventDefault();
        //console.log(e.target.value)
equaler.value +=e.target.value
    })
})
