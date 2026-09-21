let branch = localStorage.getItem("branch");

let current = 0;
let score = 0;
let time = 300;

function shuffle(arr){
return arr.sort(()=>Math.random()-0.5);
}

function loadQuiz(questionSet,nextPage){

let questions = shuffle(questionSet[branch]).slice(0,10);

window.questions = questions;
window.nextPage = nextPage;

showQuestion();
startTimer();

}

function showQuestion(){

let q = questions[current];

document.getElementById("questionBox").innerHTML = `
<h3>${q.q}</h3>
${q.options.map(opt=>`
<label>
<input type="radio" name="opt" value="${opt}">
${opt}
</label><br>
`).join("")}
`;

document.getElementById("progress").style.width =
((current+1)/10)*100 + "%";

}

function nextQuestion(){

let selected =
document.querySelector('input[name="opt"]:checked');

if(selected){
if(selected.value == questions[current].answer){
score++;
}
}

current++;

if(current<10){
showQuestion();
}
else{
finishQuiz();
}

}

function startTimer(){

let timer = setInterval(()=>{
time--;
document.getElementById("timer").innerText=time;

if(time==0){
clearInterval(timer);
finishQuiz();
}

},1000);

}

function finishQuiz(){
localStorage.setItem("lastScore",score);
window.location.href = nextPage;
}