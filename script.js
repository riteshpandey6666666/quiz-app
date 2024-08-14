// Array of 15 questions with options and correct answers
const questions = [
    {
        question: "Which of the following best describes a frame of reference?",
        options: ["A) A stationary object", "B) A coordinate system used to describe the position of objects", "C) The velocity of an object", "D) The mass of an object"],
        answer: 1 // B) A coordinate system used to describe the position of objects
    },
    {
        question: "If you are sitting in a car moving at a constant speed, which of the following can be considered a frame of reference?",
        options: ["A) The car's interior", "B) The road outside the car", "C) A stationary building by the roadside", "D) All of the above"],
        answer: 3 // D) All of the above
    },
    {
        question: "An object is dropped from a height. What is the acceleration of the object during free fall?",
        options: ["A) 0 m/s²", "B) 9.8 m/s² upwards", "C) 9.8 m/s² downwards", "D) 4.9 m/s² downwards"],
        answer: 2 // C) 9.8 m/s² downwards
    },
    {
        question: "If an object is thrown upwards with an initial velocity of 20 m/s, what will be its velocity at the peak of its trajectory?",
        options: ["A) 0 m/s", "B) 20 m/s", "C) 10 m/s", "D) -20 m/s"],
        answer: 0 // A) 0 m/s
    },
    {
        question: "When an object is thrown upward, the time taken to reach the highest point is equal to the time taken to return to the starting point. This is true for:",
        options: ["A) Only if there is no air resistance", "B) Only for objects with high mass", "C) Only if the object is thrown horizontally", "D) Only for objects with low mass"],
        answer: 0 // A) Only if there is no air resistance
    },
    {
        question: "A graph of distance vs. time for a car moving with constant speed is a:",
        options: ["A) Straight line with a positive slope", "B) Curved line", "C) Horizontal line", "D) Vertical line"],
        answer: 0 // A) Straight line with a positive slope
    },
    {
        question: "On a velocity-time graph, the area under the curve represents:",
        options: ["A) Distance traveled", "B) Acceleration", "C) Speed", "D) Time"],
        answer: 0 // A) Distance traveled
    },
    {
        question: "In a position-time graph, a horizontal line indicates:",
        options: ["A) Constant velocity", "B) Constant acceleration", "C) Constant position", "D) Increasing speed"],
        answer: 2 // C) Constant position
    },
    {
        question: "If the acceleration of an object is not constant, which of the following graphs could represent the motion of the object?",
        options: ["A) A straight line graph of velocity vs. time", "B) A curved line graph of velocity vs. time", "C) A straight line graph of position vs. time", "D) A horizontal line graph of acceleration vs. time"],
        answer: 1 // B) A curved line graph of velocity vs. time
    },
    {
        question: "For variable acceleration, the instantaneous acceleration is found by:",
        options: ["A) Finding the average acceleration over a time interval", "B) Calculating the slope of the velocity-time graph at a specific point", "C) Integrating the velocity-time graph", "D) Taking the derivative of the position-time graph"],
        answer: 1 // B) Calculating the slope of the velocity-time graph at a specific point
    },
    {
        question: "In a motion where acceleration is proportional to the displacement, the type of motion described is:",
        options: ["A) Uniform linear motion", "B) Simple harmonic motion", "C) Free fall motion", "D) Uniform circular motion"],
        answer: 1 // B) Simple harmonic motion
    },
    {
        question: "Which of the following scenarios involves non-uniform acceleration?",
        options: ["A) A car moving with a constant speed", "B) A falling object in a vacuum", "C) A cyclist accelerating from rest and then decelerating", "D) A satellite orbiting the Earth"],
        answer: 2 // C) A cyclist accelerating from rest and then decelerating
    },
    {
        question: "An object is dropped from a height of 80 meters. How long does it take to reach the ground? (Assume \( g = 10 \text{ m/s}^2 \))",
        options: ["A) 4 s", "B) 8 s", "C) 5.7 s", "D) 2 s"],
        answer: 0 // A) 4 s
    },
    {
        question: "If a car travels with a uniform acceleration of 2 m/s² and reaches a velocity of 20 m/s, what is the time taken to reach this velocity?",
        options: ["A) 10 s", "B) 5 s", "C) 20 s", "D) 4 s"],
        answer: 1 // B) 5 s
    },
    {
        question: "Which of the following statements is true for an object in free fall?",
        options: ["A) Its speed increases linearly with time.", "B) Its velocity decreases with time.", "C) The distance it falls decreases with time.", "D) Its acceleration increases with height."],
        answer: 0 // A) Its speed increases linearly with time.
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    if (currentQuestionIndex >= questions.length) {
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('score').textContent = score;
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('next-button').classList.add('hidden');
        return;
    }

    const question = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `<h2>${question.question}</h2>`;

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.className = 'option';
        optionElement.addEventListener('click', () => handleAnswer(index));
        questionElement.appendChild(optionElement);
    });

    quizContainer.appendChild(questionElement);
}

function handleAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        if (index === question.answer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
        option.removeEventListener('click', handleAnswer);
    });

    // Update score based on the answer
    if (selectedIndex === question.answer) {
        score += 4; // Correct answer
    } else {
        score -= 1; // Incorrect answer
    }

    document.getElementById('next-button').classList.remove('hidden');
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
    document.getElementById('next-button').classList.add('hidden');
});

// Initialize the quiz
loadQuestion();