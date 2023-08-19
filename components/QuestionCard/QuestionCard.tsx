type Props = {
    currentQuestionIndex: number;
    question: string;
    answers: string[];
    userAnswer: string | undefined;
    correctAnswer: string;
    onClick: (answer: string, currentQuestionIndex: number) => void;
  };
  
  const QuestionCard: React.FC<Props> = ({
    currentQuestionIndex,
    question,
    answers,
    userAnswer,
    onClick,
    correctAnswer
  }) => {
    return (
      <div>
        <p className='text-[20px] max-w-[400px]' dangerouslySetInnerHTML={{ __html: question }} />
        <div className='flex flex-col items-center pt-8'>
          {answers.map(answer => (
            <div
              key={answer}
              onClick={() => onClick(answer, currentQuestionIndex)}>
              <span className='truncate' dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuestionCard;