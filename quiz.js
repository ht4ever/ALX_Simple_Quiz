function checkAnswer() {
    const correctAnswer = "4"; // Value should be a string as radio input values are strings
    const btn = document.querySelector('#submit-answer');
    const feedback = document.querySelector('#feedback');
    
    btn.addEventListener('click', function() {
        const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
        if (userAnswer === correctAnswer) {
            feedback.textContent = 'Correct! Well done.';
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    });
}

checkAnswer();
