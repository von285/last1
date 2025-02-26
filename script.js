function toggleDescription(index) {
    let descriptions = document.querySelectorAll('.description');
    descriptions[index].style.display = descriptions[index].style.display === 'block' ? 'none' : 'block';
}

const questions = [
    "What is your favorite back-end programming language?",
    "Which language do you think is the most versatile for back-end development?",
    "Which back-end language would you use to build scalable applications?",
    "Which language is best for working with databases in back-end development?",
    "What programming language do you think is the easiest for beginners in back-end development?"
];

function refreshQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.querySelector('.question').textContent = questions[randomIndex];
}