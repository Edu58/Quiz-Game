const form = document.getElementById("form")
const submit = document.getElementById("submitBtn");
const popup = document.getElementById("scorePopup")
const retryBtn = document.getElementById("retry")
const popupDissapear = document.getElementById("removePopup")
const answers = ["b", "b", "d", "d", "b"];
const total = 5;
let score = 0;

submit.addEventListener('click', (e) => {
  e.preventDefault()

  // Get user input
  const que1 = document.quizForm.q1.value;
  const que2 = document.quizForm.q2.value;
  const que3 = document.quizForm.q3.value;
  const que4 = document.quizForm.q4.value;
  const que5 = document.quizForm.q5.value;

  for (let i = 1; i <= total; i++) {
    //check correctness
    if (eval('que' + i) == answers[i - 1]) {
      score +=20;
    }
  }
  console.log(score);
  form.reset();
  popup.classList.remove("close");

  popup.innerHTML = `
    <div class="card p-3" id="removePopup">
    <div class="card-body">
    <h3 class="card-header fw-bolder">Quiz Submitted Successfully</h3>
    <i class="fas fa-trophy"></i>

    <h2 class="fw-bolder my-3">You scored: ${score} Points</h2>

    <div class="closeBtn">
        <button class="btn btn-sm btn-secondary text-light" onclick="closeIt()">
        close
        </button>
    </div>
    </div>
    </div>                    
`;
});

function closeIt() {
  popup.classList.add("close")
  score = 0;
};