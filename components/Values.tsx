import React from 'react';
import { WobbleCard } from '../components/ui/WobbleCard';
interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div  className='bg-black h-2'>
      {children}
      <WobbleCard>
        {children}
      </WobbleCard>
    </div>
  
  );
};

export default Card;