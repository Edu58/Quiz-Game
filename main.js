const form = document.getElementById("form")
const submit = document.getElementById("submitBtn");
const popup = document.getElementById("scorePopup")
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

  popup.innerHTML = `
    <div class="card p-3 text-light">
    <div class="card-body">
    <i class="fas fa-trophy"></i>

    <h2 class="fw-bolder">Congratulations!!</h2>
    <h4 class="fw-bolder my-3">You scored: ${score} Points</h4>

    <div class="closeBtn">
        <button class="btn btn-sm btn-info text-light mx-2" id="retry">
        retry
        </button>
        <button class="btn btn-sm btn-secondary text-light" id="close">
        close
        </button>
    </div>
    </div>
    </div>                    
`;
});


  /*


}
*/