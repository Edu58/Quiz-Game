const form = document.getElementById("form");
const submit = document.getElementById("submitBtn");
const popup = document.getElementById("scorePopup");
const retryBtn = document.getElementById("retry");
const popupDissapear = document.getElementById("removePopup");
const answers = ["b", "b", "d", "d", "b"];
const total = 5;
let score = 0;

// listen for form submission
submit.addEventListener("click", (e) => {
  e.preventDefault();

  // Get user input
  const que1 = document.quizForm.q1.value;
  const que2 = document.quizForm.q2.value;
  const que3 = document.quizForm.q3.value;
  const que4 = document.quizForm.q4.value;
  const que5 = document.quizForm.q5.value;

  for (let i = 1; i <= total; i++) {
    //check correctness
    if (eval("que" + i) == answers[i - 1]) {
      score += 20;
    }
  }

  //custom message depending on score
  if (score >= 80) {
    message = "Excellent Score 👏";
  } else if (score >= 50 && score < 80) {
    message = "Fair Score 👌";
  } else if (score < 50) {
    message = "Poor score. <br> Try harder next time 😔";
  }

  // reset form
  form.reset();

  //remove close class from the score popup div
  popup.classList.remove("close");

  // add div showing the score and the message
  popup.innerHTML = `
    <div class="card p-3" id="removePopup">
    <div class="card-body">
    <h3 class="card-header fw-bolder">Quiz Submitted Successfully</h3>
    <i class="fas fa-trophy"></i>

    <h3 class="fw-bolder">${message}</h3>
    <h3 class="fw-bolder my-3">You scored: ${score} Points</h3>

    <div class="closeBtn">
        <button class="btn btn-sm btn-secondary text-light" onclick="closeIt()">
        close
        </button>
    </div>
    </div>
    </div>                    
`;
});

// Close score  popup
function closeIt() {
  popup.classList.add("close");
  score = 0;
}
