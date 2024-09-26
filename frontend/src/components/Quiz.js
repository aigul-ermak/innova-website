import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CareerQuiz = () => {
    const questions = [
        {
            question: "01- What type of projects do you enjoy working on?",
            choices: ["Researching and analyzing information", "Building or fixing something with my hands", "Leading a team or planning events", "Expressing myself creatively through art, music, or design"]
        },
        {
            question: "02- When working on something new, how do you approach it?",
            choices: ["I like to study all the details and understand the theory behind it.", "I prefer hands-on learning by doing it myself.", "I get people together to brainstorm and discuss.", "I experiment creatively to come up with new ideas."]
        },
        {
            question: "03- What type of work environment do you see yourself in?",
            choices: ["An office or lab where I can research and solve problems.", "IA workshop or field where I can work with my hands", "A fast-paced team environment where I can interact with others.", "A creative studio or space where I can express myself freely"]
        },
        {
            question: "04- Which of the following best describes your leadership style?",
            choices: ["I lead through knowledge and making informed decisions.", "I lead by demonstrating practical skills and getting things done.", " I lead by bringing people together and fostering teamwork.", "I lead by inspiring creativity and innovation in others."]
        },
        {
            question: "05- What's your favorite type of extracurricular activity?",
            choices: ["Science fairs, coding, or robotics clubs.", " Hands-on clubs like woodworking or auto mechanics.", "Student council, debate, or social clubs", "Creative clubs like music, drama, or art."]
        },
        {
            question: "06- What drives you when setting long-term career goals?",
            choices: ["A desire to solve complex problems and innovate.", " A focus on mastering practical skills and applying them directly.", "A passion for making a difference in peopleâ€™s lives or communities.", "A need to create and express myself in unique ways."]
        },
        {
            question: "07- How do you handle working on a large, ongoing project?",
            choices: ["AI break it down into smaller, logical tasks and plan it thoroughly.", " I work on it step by step, focusing on getting the job done.", "I involve others and communicate often to make sure we're on track.", "I stay flexible and adapt the project as new ideas come up."]
        },
        {
            question: "08- Which of these tasks sounds the most fulfilling?",
            choices: ["Designing a complex system or solving a scientific problem", " Building something from scratch or fixing machinery", "Organizing a large event or helping others reach their goals", "Creating an original piece of art or designing a new product"]
        },
        {
            question: "09- What are you most passionate about?",
            choices: ["Discovering how things work and solving intellectual challenges.", " Working with tools and hands-on projects.", "Leading people, teams, or making a social impact.", "Expressing ideas through creative outlets."]
        },
        {
            question: "10- What type of career would make you feel most successful?",
            choices: ["A career where I can innovate, research, and solve problems.", " A career where I can use practical skills to build or fix things.", "A career where I can lead others and make a positive difference.", "A career where I can create and inspire through artistic expression."]
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const navigate = useNavigate();

    const handleChoiceClick = (index) => {
        const updatedResponses = [...userResponses];
        updatedResponses[currentQuestionIndex] = index;
        setUserResponses(updatedResponses);
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {

            localStorage.setItem('careerQuizResults', JSON.stringify(userResponses));
            alert('Career Quiz Complete! Redirecting to Dashboard...');
            navigate('/');
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="question text-xl font-bold mb-4">{currentQuestion.question}</div>
            <div className="choices space-y-4">
                {currentQuestion.choices.map((choice, index) => (
                    <div
                        key={index}
                        className={`choice p-2 border rounded-lg cursor-pointer ${userResponses[currentQuestionIndex] === index ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                        onClick={() => handleChoiceClick(index)}
                    >
                        {choice}
                    </div>
                ))}
            </div>
            <button
                className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50"
                onClick={handleNextClick}
                disabled={userResponses[currentQuestionIndex] === undefined}
            >
                {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
        </div>
    );
};

export default CareerQuiz;
