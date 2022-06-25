function falseCheck() {
  document.getElementById("answer_a_correct").checked = false;
  document.getElementById("answer_b_correct").checked = false;
  document.getElementById("answer_c_correct").checked = false;
  document.getElementById("answer_d_correct").checked = false;
  document.getElementById("answer_e_correct").checked = false;
  document.getElementById("answer_f_correct").checked = false;
}

function get_selectedELs() {
  answer = [];
  let selectedELs = document.getElementsByClassName("answer");
  for (
    let selector_counter = 0;
    selector_counter < selectedELs.length;
    selector_counter++
  ) {
    if (selectedELs[selector_counter].checked) {
      answer.push(selectedELs[selector_counter].id);
      selected_els = true;
    }
  }
}

function getCorrectAnswers() {
  let correctChoices = quizes[currentQuestion].correct_answers;
  let keys_correct = Object.keys(correctChoices);
  let correct_answers_filtered = [];
  keys_correct.forEach((key) => {
    if (correctChoices[key] == "true") {
      correct_answers_filtered.push(
        quizes[currentQuestion]["answers"][key.replace("_correct", "")]
      );
    }
  });
  return correct_answers_filtered;
}

function marker(user_answers, correct_answers) {
  if (review.length == 0) {
    for (
      let counter_review = 0;
      counter_review < quizes.length;
      counter_review += 1
    ) {
      review.push([[], [], 0]);
    }
  }
  let questionValue = 2 / correct_answers.length;
  let user_degree = 0;
  review[currentQuestion][0] = correct_answers;
  user_answers.forEach((ans) => {
    correct_answers.forEach((deg) => {
      if (
        deg == quizes[currentQuestion]["answers"][ans.replace("_correct", "")]
      ) {
        user_degree += questionValue;
      }
    });
    review[currentQuestion][1].push(
      quizes[currentQuestion]["answers"][ans.replace("_correct", "")]
    );
  });
  let user_mark_question = parseInt(`${user_degree}`);
  review[currentQuestion][2] = user_mark_question;
  return user_mark_question;
}

function count_down() {
  const minsEL = document.getElementById("minutes");
  const currentDate = new Date();
  const secondsEL = document.getElementById("seconds");
  const seconds = (newDate - currentDate) / 1000;
  const minutes = Math.floor(seconds / 60) % 60;
  const seconds_calc = Math.floor(seconds % 60);
  seconds_calc2 = seconds_calc;
  if (minsEL) {
    minsEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds_calc);
  }
  if (seconds_calc2 < 0) {
    document.getElementById("submit").click();
    clearInterval(refreshIntervalId);
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function convertHTML(str) {
  let regex = /[&|<|>|"|']/g;
  let htmlString = str.replace(regex, function (match) {
    if (match === "&") {
      return "&amp;";
    } else if (match === "<") {
      return "&lt;";
    } else if (match === ">") {
      return "&gt;";
    } else if (match === '"') {
      return "&quot;";
    } else {
      return "&apos;";
    }
  });

  return htmlString;
}
