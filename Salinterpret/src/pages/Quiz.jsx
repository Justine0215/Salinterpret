import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/home.jpg';
import { useNavigate } from 'react-router-dom';
import A from '../assets/A.png';
import B from '../assets/B.png';

const QuizPage = () => {
  // Mock quiz data
  const quizTitle = "Quiz Time";
  const questions = [
    {
      questionImage: A,
      answerOptions: ["A", "R", "T", "E"],
      correctAnswer: "A"
    },
    {
      questionImage: B,
      answerOptions: ["E", "Z", "B", "Y"],
      correctAnswer: "4"
    }
    // Add more questions here
  ];

  // State for current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle answer selection
  const handleAnswerSelect = (selectedAnswer) => {
    // Move to the next question
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Quiz completed
      alert("Quiz Completed!");
      // Navigate back to the courses page
      navigate('/courses');
    }
  };

  return (
    <BackgroundContainer>
      <QuizContainer>
        <Header>{quizTitle}</Header>
        {currentQuestionIndex < questions.length && (
          <>
            <QuestionContainer>
              <QuestionImage src={questions[currentQuestionIndex].questionImage} alt="Question" />
            </QuestionContainer>
          </>
        )}
      </QuizContainer>
      <OptionsContainer>
        {currentQuestionIndex < questions.length && (
          <>
            {questions[currentQuestionIndex].answerOptions.map((option, index) => (
              <Option key={index} onClick={() => handleAnswerSelect(option)}>
                {option}
              </Option>
            ))}
          </>
        )}
      </OptionsContainer>
    </BackgroundContainer>
  );
};

export default QuizPage;

// Styled Components
const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg}); /* Set the background image */
  background-size: cover; /* Cover the entire container */
  min-height: 100vh; /* Ensure the background fills the entire viewport */
  display: flex;
  flex-direction: column;
`;

const QuizContainer = styled.div`
  flex: 1; /* Allow the quiz container to grow to fill available space */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
`;

const QuestionContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const QuestionImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 10px;
  padding: 20px;
`;

const Option = styled.div`
  padding: 20px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;
