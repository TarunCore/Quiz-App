import { shuffleArray } from '@/utils/arrayUtils';
import Quiz from './Quiz';
import { Difficulty, QuestionsState, Question } from '@/types/quiz';

const TOTAL_QUESTIONS = 10;

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint, { cache: 'no-store' })).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
};

const Home = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM);

  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default Home;