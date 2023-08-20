'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => router.push('/quiz');
  return (
    <div className='flex items-center justify-center h-screen'>
      <Button text='Start Quiz' onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
