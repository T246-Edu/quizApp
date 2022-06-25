const submitBTN = document.getElementById("submit");
const nextBTN = document.getElementById("next");
const prevBTN = document.getElementById("prev");
let answers = {};
let review = [];
let answer = [];
let correct_counter = 0;
let selected_els = false;

if (nextBTN) {
  nextBTN.addEventListener("click", () => {
    get_selectedELs();
    let statusEL = document.getElementById("error");
    if (selected_els) {
      statusEL.style.display = "none";
      answers[currentQuestion] = marker(answer, getCorrectAnswers());
      if (currentQuestion == quizes.length - 1) {
        currentQuestion = 0;
      } else {
        currentQuestion++;
        loadQuiz();
      }
      selected_els = false;
      falseCheck();
    } else {
      statusEL.innerText = "You have to choose an answer";
      statusEL.style.display = "flex";
    }
  });
  prevBTN.addEventListener("click", () => {
    get_selectedELs();
    let statusEL = document.getElementById("error");
    if (selected_els) {
      statusEL.style.display = "none";
      answers[currentQuestion] = marker(answer, getCorrectAnswers());
      if (currentQuestion <= 0) {
        currentQuestion = quizes.length - 1;
      } else {
        currentQuestion--;
        loadQuiz();
      }
      loadQuiz();
      selected_els = false;
      falseCheck();
    } else {
      statusEL.innerText = "You have to choose an answer";
      statusEL.style.display = "flex";
    }
  });
  submitBTN.addEventListener("click", () => {
    let statusEL = document.getElementById("error");
    get_selectedELs();
    if (selected_els) {
      answers[currentQuestion] = marker(answer, getCorrectAnswers());
    }
    let marks_all_questions = Object.values(answers);
    marks_all_questions.forEach((mark) => {
      correct_counter += mark;
    });
    statusEL.style.display = "none";
    prevBTN.style.display = "none";
    nextBTN.style.display = "none";
    submitBTN.style.display = "none";
    const headerEL = document.getElementById("header");
    const answersEL = document.getElementById("answers");
    headerEL.style.display = "none";
    answersEL.style.display = "none";

    let resultsContainer = document.createElement("div");
    resultsContainer.className = "results-container";
    resultsContainer.id = "results-container";
    document.body.firstElementChild.appendChild(resultsContainer);

    let contain_results = document.getElementById("results-container");
    let msg = document.createElement("p");
    msg.className = "success-msg";
    msg.id = "success-msg";
    msg.innerText = "successfully, submitted the quiz.";
    contain_results.appendChild(msg);

    let grade = document.createElement("div");
    grade.className = "grade";
    grade.id = "grade";
    contain_results.appendChild(grade);
    let grade_EL = document.getElementById("grade");

    let user_grade_EL = document.createElement("p");
    user_grade_EL.innerText = formatTime(correct_counter);
    user_grade_EL.className = "total";
    grade_EL.appendChild(user_grade_EL);

    let splash = document.createElement("p");
    splash.className = "splash";
    splash.innerText = "/";
    grade_EL.appendChild(splash);

    let total_grade_EL = document.createElement("p");
    total_grade_EL.className = "total";
    let total_grade = formatTime(quizes.length * 2);
    total_grade_EL.innerText = total_grade;
    grade_EL.appendChild(total_grade_EL);

    let counter_for_values = 1;
    let values = Object.values(review);
    values.forEach((value) => {
      if (value[0].length > 0) {
        let section = document.createElement("div");
        document.getElementById("main-quiz-container").appendChild(section);
        section.className = "review-section";
        let qHead = document.createElement("p");
        qHead.innerText = "Question: " + formatTime(counter_for_values);
        qHead.className = "question-title-review";
        qHead.style.alignSelf = "center";
        section.appendChild(qHead);

        let user_answer_array = review[counter_for_values - 1][1];
        let right_answer_array = review[counter_for_values - 1][0];
        let student_mark = review[counter_for_values - 1][2];
        let right_answer = "";
        right_answer += "Right answer: ";
        let user_answer = "";
        user_answer += "Your Answer: ";
        if (right_answer_array.length <= 1) {
          right_answer += right_answer_array[0];
        } else {
          right_answer_array.forEach((ans) => {
            right_answer += ans;
            right_answer += "<br>";
          });
        }
        if (user_answer_array.length <= 1) {
          user_answer += user_answer_array[0];
        } else {
          user_answer_array.forEach((ans) => {
            user_answer += ans;
            user_answer += "<br>";
          });
        }

        let q_right = document.createElement("p");
        let q_user = document.createElement("p");
        let user_mark = document.createElement("p");
        q_right.id = "text-result";
        q_user.id = "text-result";
        q_right.innerHTML = convertHTML(right_answer);
        q_user.innerHTML = convertHTML(user_answer);
        user_mark.innerText = `Your grade is: ${student_mark} / 2`;
        user_mark.id = "text-result";
        if (student_mark < 2) {
          user_mark.style.color = "#ff7777";
        } else {
          user_mark.style.color = "#77ff77";
        }
        section.appendChild(q_right);
        section.append(q_user);
        section.appendChild(user_mark);
        counter_for_values += 1;
      }
    });
    let button = document.createElement("button");
    button.style.width = "90%";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.alignSelf = "center";
    button.style.justifyContent = "center";
    button.style.margin = "0.5rem 1.5rem";
    button.innerText = "Reload";
    button.addEventListener("click", () => {
      location.reload();
    });
    document.getElementById("main-quiz-container").appendChild(button);
  });
}
