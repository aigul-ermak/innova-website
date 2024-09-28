import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const SelfAssessment = () => {

    const questions = [
        {
            question: "01- What do you enjoy the most in your current academic work?",
            choices: ["Solving complex problems in math or science", "Working on hands-on projects or building things", "Writing essays or participating in discussions", "Creative activities like art, music, or design"]
        },
        {
            question: "02- When you're faced with a difficult problem, what's your usual approach?",
            choices: ["I like to analyze the problem and find logical solutions.", "I prefer to experiment or try different things until I figure it out.", "I discuss it with others to get different perspectives.", "I look for inspiration and creative ideas."]
        },
        {
            question: "03- Which of these tasks sounds most interesting to you?",
            choices: ["Conducting research or experiments", "Building or fixing something", "Debating or advocating for an important cause", "Designing or creating something new"]
        },
        {
            question: "04- How do you typically handle group projects?",
            choices: ["I often take charge and ensure things are well-organized.", "I contribute my part and help with the technical aspects.", "I enjoy working with the group and sharing ideas.", "I usually bring new, creative solutions to the table."]
        },
        {
            question: "05- What kind of environment do you work best in?",
            choices: ["A structured environment where tasks are clearly defined", "A hands-on environment where I can experiment and build", "A social environment where I can collaborate and discuss", "An open, creative environment where I have freedom to explore ideas"]
        },
        {
            question: "06- How do you approach long-term planning or goals?",
            choices: ["I plan everything out step by step and stick to the plan.", "I prefer to keep my options open and adjust as I go.", "I set goals based on advice from others or input from mentors.", "I follow my intuition and adapt as things evolve."]
        },
        {
            question: "07- What type of feedback do you prefer?",
            choices: ["Detailed, logical feedback that helps me improve step by step.", "Constructive feedback that I can apply practically.", "Encouragement that motivates me to keep going.", "Creative suggestions that spark new ideas."]
        },
        {
            question: "Which of the following best describes your interest in extracurricular activities?",
            choices: ["I like activities that enhance my academic or technical skills.", " I prefer hands-on clubs, like robotics or woodworking.", "Iâ€™m involved in activities that support my community or advocacy.", "I enjoy creative outlets like music, art, or theater."]
        },
        {
            question: "09- How do you prefer to study or learn new things??",
            choices: ["I like to dive deep into research and understand all the details.", "I learn best by doing and practicing.", "I like to discuss what Iâ€™m learning with others.", "I prefer exploring ideas through experimentation and creative thinking."]
        },
        {
            question: "10- What are you most passionate about achieving in the next five years?",
            choices: ["Advancing in a technical or academic career.", "Gaining practical skills that lead directly to a career.", "Making a positive social impact in my community.", "Creating something original and meaningful in a creative field."]
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
            // Assessment complete, store the results
            localStorage.setItem('selfAssessmentResults', JSON.stringify(userResponses));
            alert('Self-Assessment Complete! Redirecting to Career Quiz...');
            navigate('/quiz');
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

export default SelfAssessment;