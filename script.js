const api =
  "https://quizapi.io/api/v1/questions?apiKey=TSonDf90KpLWkVY4SWmiH1JAKOU7TzO2EenB382a";

var quizes = [];
fetch(api)
  .then((response) => response.json())
  .then((data) => (quizes = data))
  .catch((err) => console.error(err));

let currentQuestion = 0;
let seconds_calc2 = 0;
function loadQuiz() {
  const questionEL = document.getElementById("question_title");
  const questionTagEL = document.getElementById("question-cat");
  const el1 = document.getElementById("el1");
  const el2 = document.getElementById("el2");
  const el3 = document.getElementById("el3");
  const el4 = document.getElementById("el4");
  const el5 = document.getElementById("el5");
  const el6 = document.getElementById("el6");
  const elements = [el1, el2, el3, el4, el5, el6];
  const choice_a_el = document.getElementById("answer_a_correct");
  const choice_b_el = document.getElementById("answer_b_correct");
  const choice_c_el = document.getElementById("answer_c_correct");
  const choice_d_el = document.getElementById("answer_d_correct");
  const choice_e_el = document.getElementById("answer_e_correct");
  const choice_f_el = document.getElementById("answer_f_correct");
  const choice_a_text_el = document.getElementById("a_text");
  const choice_b_text_el = document.getElementById("b_text");
  const choice_c_text_el = document.getElementById("c_text");
  const choice_d_text_el = document.getElementById("d_text");
  const choice_e_text_el = document.getElementById("e_text");
  const choice_f_text_el = document.getElementById("f_text");
  elements_text = [
    choice_a_text_el,
    choice_b_text_el,
    choice_c_text_el,
    choice_d_text_el,
    choice_e_text_el,
    choice_f_text_el,
  ];
  if (quizes.length > 0) {
    total.innerHTML = quizes.length;
    counter.innerHTML = formatTime(currentQuestion + 1);
    currentQuiz = quizes[currentQuestion];
    for (
      let keysCounter = 0;
      keysCounter < Object.keys(currentQuiz.answers).length;
      keysCounter++
    ) {
      if (Object.values(currentQuiz.answers)[keysCounter] == null) {
        elements[keysCounter].style.display = "none";
      } else {
        elements_text[keysCounter].innerHTML = Object.values(
          currentQuiz.answers
        )[keysCounter];
      }
    }
    if (currentQuiz.multiple_correct_answers == "true") {
      choice_a_el.type = "checkbox";
      choice_b_el.type = "checkbox";
      choice_c_el.type = "checkbox";
      choice_d_el.type = "checkbox";
      choice_e_el.type = "checkbox";
      choice_f_el.type = "checkbox";
    }
    questionEL.innerHTML = currentQuiz.question;
    if (currentQuiz.question.length > 30) {
      questionEL.style.fontSize = "16px";
    }
    let tags = currentQuiz.tags;
    let alltags = [];
    for (var count = 0; count < tags.length; count++) {
      alltags.push("#" + tags[count].name + " ");
    }
    let question_tags = alltags.join("").toString();
    if (questionTagEL) {
      questionTagEL.innerHTML = question_tags;
    }
  }
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
const currentDate = new Date();
var newDate = addMinutes(currentDate, 30);

var refreshIntervalId = setInterval(count_down, 1000);


loadQuiz();
setInterval(loadQuiz, 1000);
