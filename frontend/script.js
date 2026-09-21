let currentRound = 0;
let rounds = ["aptitude","technical","reasoning","communication"];
let timeLeft = 30;
let timer;
// Shuffle function (makes questions change every time)
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function startTimer() {

  clearInterval(timer);

  timeLeft = 30;

  timer = setInterval(function(){

    document.getElementById("timer").innerText = "Time: " + timeLeft;

    timeLeft--;

    if(timeLeft < 0){
      clearInterval(timer);
      nextQuestion();
    }

  },1000);
}

// Start Test
function startTest() {

  let branch = localStorage.getItem("branch");
  let roundName = rounds[currentRound];

  if(roundName === "technical"){
    selectedQuestions = shuffle(questionBank.technical[branch]).slice(0,10);
  }
  else{
    selectedQuestions = shuffle(questionBank[roundName]).slice(0,10);
  }

  currentQuestionIndex = 0;
  showQuestion();
  startTimer();
}

// Show Question
function showQuestion() {

  let questionData = selectedQuestions[currentQuestionIndex];

  let progressPercent = ((currentQuestionIndex+1)/selectedQuestions.length)*100;

  document.getElementById("progressBar").style.width = progressPercent + "%";
  document.getElementById("progressText").innerText =
  "Question " + (currentQuestionIndex+1) + " of " + selectedQuestions.length;

  let html = `
    <h3>Round: ${rounds[currentRound]}</h3>
    <h3>Q${currentQuestionIndex+1}. ${questionData.question}</h3>
  `;

  questionData.options.forEach(option => {
    html += `<button onclick="checkAnswer('${option}')">${option}</button><br><br>`;
  });

  document.getElementById("question").innerHTML = html;

  startTimer();
}
function nextQuestion() {

  currentQuestionIndex++;

  if(currentQuestionIndex < selectedQuestions.length){
    showQuestion();
  }
  else{
    nextRound();
  }
}

// Check Answer
function checkAnswer(selectedOption){

  let correctAnswer = selectedQuestions[currentQuestionIndex].answer;

  if(selectedOption === correctAnswer){
    score++;
  }

  nextQuestion();
}
function nextRound(){

  let roundName = rounds[currentRound];

  localStorage.setItem(roundName + "Score", score);

  score = 0;

  currentRound++;

  if(currentRound < rounds.length){
    startTest();
  }
  else{
    window.location = "result.html";
  }
}