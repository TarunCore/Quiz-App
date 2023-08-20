'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// Components
import Button from '@/components/Button/Button';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
// Types
import { QuestionsState } from '@/types/quiz';

type Props = {
    questions: QuestionsState;
    totalQuestions: number;
  };

  const Quiz = ({ questions, totalQuestions }: Props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>({});
  
    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;
  
    const router = useRouter();
  
    const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
      if (isQuestionAnswered) return;
      const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
      if (isCorrect) setScore(prev => prev + 1);
      setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
    };
  
    const handleChangeQuestion = (step: number) => {
      const newQuestionIndex = currentQuestionIndex + step;
      if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
      setCurrentQuestionIndex(newQuestionIndex);
    };
  
    const displayScore = (score: number) => {
      return (
        <div className='text-white text-center absolute inset-0 flex items-center justify-center'>
          <p className='p-8 font-bold text-[40px] '>Your Score: {score}</p>
        </div>
      );
    };
  
    return (
      <div className='text-white text-center'>
        {currentQuestionIndex === totalQuestions - 1 && displayScore(score)}
        {currentQuestionIndex !== totalQuestions - 1 && (
          <>
            <p className='text-[#9F50AC] font-bold pb-2 text-[18px]'>
              Question {currentQuestionIndex + 1} out of {totalQuestions}
            </p>
            <QuestionCard
              currentQuestionIndex={currentQuestionIndex}
              question={questions[currentQuestionIndex].question}
              answers={questions[currentQuestionIndex].answers}
              userAnswer={userAnswers[currentQuestionIndex]}
              correctAnswer={questions[currentQuestionIndex].correct_answer}
              onClick={handleOnAnswerClick}
            />
            <div className='flex justify-between mt-16'>
              <Button text='Prev' onClick={() => handleChangeQuestion(-1)} />
              <Button
                text={currentQuestionIndex === totalQuestions - 1 ? 'End' : 'Next'}
                onClick={currentQuestionIndex === totalQuestions - 1 ? () => displayScore(score) : () => handleChangeQuestion(1)}
              />
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Quiz;
  