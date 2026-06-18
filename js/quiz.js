const questions = [
{
question:"Does your child respond to their name?"
},
{
question:"Does your child maintain eye contact?"
},
{
question:"Does your child enjoy playing with others?"
},
{
question:"Does your child follow simple instructions?"
},
{
question:"Does your child express emotions clearly?"
},
{
question:"Does your child imitate actions?"
},
{
question:"Does your child point to objects?"
},
{
question:"Does your child understand gestures?"
},
{
question:"Does your child engage in conversation?"
},
{
question:"Does your child show curiosity?"
}
];

let currentQuestion = 0;

function loadQuestion(){

document.getElementById("qNo").innerText =
currentQuestion + 1;

document.getElementById("questionText").innerText =
questions[currentQuestion].question;

}

document.querySelectorAll(".option-card")
.forEach(card=>{

card.addEventListener("click",()=>{

document
.querySelectorAll(".option-card")
.forEach(c=>c.classList.remove("selected"));

card.classList.add("selected");

});

});

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

if(currentQuestion < 9){

currentQuestion++;

loadQuestion();

}

});