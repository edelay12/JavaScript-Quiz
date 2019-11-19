window.onload = function() {
  this.startQuiz();
  this.console.log("Quiz Loaded Successfully");
};

function togElement(elmnt1, elmnt2) {
  $(elmnt1).toggleClass("_hide");
  $(elmnt2).toggleClass("_hide");
}

function startQuiz() {
  $("#startButton").on("click", function start() {
    $(".focus").html(questionHTMLform);
    togElement(".nextButton");
    $(".headerLabel").css("font-size", "25px");
    $(".score-prog").removeClass("_hide");
    $("#progId").text(
      `Question: ${curQuestion + 1} / ${STORE.questions.length}`
    );
    $("#scoreId").text(`Score: ${score} / ${STORE.questions.length}`);
    next();
    submitAnser();
    run();
  });
}

function submitAnser() {
  $("body").on("submit", "#quizForm", function(event) {
    event.preventDefault();
    let correctAnswer = STORE.questions[curQuestion].answer;
    let selectedOption = $("input[name=qs]:checked").val();
    if (!selectedOption) {
      alert("Please choose an option!");
      return;
    }
    if (selectedOption === correctAnswer) {
      $(".answerHTML").html(handleSpan("correct", correctAnswer));
      score++;
      togElement(".submitButton", ".nextButton");
    } else {
      $(".answerHTML").html(handleSpan("incorrect", correctAnswer));
      togElement(".submitButton", ".nextButton");
    }
    curQuestion++;
  });
}

function handleSpan(result, answer) {
  switch (result) {
    case "correct":
      return `<div id="D"><span class="r1">
        You got it right!</br></br>The answer is</br>${answer}</span></div>`;

    case "incorrect":
      return `<div id="D"><span class="r1">
            Sorry, you got it wrong</br></br>The answer is</br>${answer}</span></div>`;
    case "clear":
      return "";
  }
}

function next() {
  $("#nextButton").on("click", function() {
    handleProgress();
    togElement(".submitButton", ".nextButton");
  });
}

function handleProgress() {
  $("#progId").text(`Question: ${curQuestion +1} / ${STORE.questions.length}`);
  $("#scoreId").text(`Score: ${score} / ${STORE.questions.length}`);
  curQuestion == STORE.questions.length ? results() : run();
}

function queNewQuestion(question) {
  let q = question.questions[curQuestion].question;
  let questionHTML = ` <label for="question" class="mainQ">
${q} </label></br><hr> `;
  return questionHTML;
}

//renders question to DOM
function renderQuestion() {
  console.log("rendered a question");
  let nextQuestion = queNewQuestion(STORE);
  $(".qHTML").html(nextQuestion);
}

function generateItemElement(item) {
  return ` <input type="radio" name="qs" id="${item}_q" value="${item}" tabindex='1'>
    <label for="${item}_q" id="qLabel" class="qL" >${item}
    </label></br> `;
}

function generateNewAnswers(list) {
  let items = list.map(item => generateItemElement(item));
  let itemsjoin = items.join("");
  return itemsjoin;
}

function renderAnswers() {
  let ansArray = STORE.questions[curQuestion].options;
  let nextAs = generateNewAnswers(ansArray);
  $(".answerHTML").html(nextAs);
}

function results() {
  $(".focus").html(`<div class="results_hide">
  <h3 class="ff">Your score was ${score} / ${STORE.questions.length}</h3>
  <button id="startButton" class="retake">Retake</button></div>`);
  $(".retake").on("click", function(){
    document.location.reload()
  });
  curQuestion = 0;
  score = 0;
}

function run() {
  renderQuestion();
  renderAnswers();
  console.log(curQuestion);
}


