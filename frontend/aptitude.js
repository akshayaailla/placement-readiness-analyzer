const branch = localStorage.getItem("selectedBranch");

let questions = aptitudeQuestions[branch];

// Shuffle questions every time
questions = questions.sort(() => 0.5 - Math.random());

const form = document.getElementById("quizForm");

questions.forEach((q,index)=>{
    let html = `<h4>${index+1}. ${q.q}</h4>`;
    q.o.forEach(option=>{
        html += `
        <input type="radio" name="q${index}" value="${option}"> ${option}<br>
        `;
    });
    form.innerHTML += html + "<br>";
});

// TIMER
let time = 300;
let timer = document.getElementById("timer");

setInterval(()=>{
    let min = Math.floor(time/60);
    let sec = time%60;
    timer.innerText = `${min}:${sec<10?"0":""}${sec}`;
    time--;
},1000);

// SUBMIT
function submitQuiz(){
    alert("Quiz Submitted!");
}