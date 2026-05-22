function submitQuiz(){
    let score = 0;
    //1. get the selected values(return null if not selected)
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    //2. check the answers and update the score
    if(q1 && q1.value === 'a') score++;
    if(q2 && q2.value === 'b') score++;
    if(q3 && q3.value === 'b') score++;
    if(q4 && q4.value === 'c') score++;
    if(q5 && q5.value === 'b') score++;

    //3. display the result
    document.querySelector('.quizResult').textContent = `Your score is: ${score}/5`;
}