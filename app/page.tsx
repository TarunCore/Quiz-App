'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
// Homepage image
import HomepageImage from 'assets/home-pic.png';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => router.push('/quiz');
  return (
    <div className='text-center'>
      <p className='text-white p-4'>Do you have what it takes to become the React-Quiz master?</p>
      <Button text='Start Quiz' onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
