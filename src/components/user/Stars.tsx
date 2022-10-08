import fullStarIcon from '../../assets/icons/full-star.svg';
import emptyStarIcon from '../../assets/icons/empty-star.svg';
import { ReactPropTypes } from 'react';

type StarType = {
  rating: number;
};

export const Stars = ({ rating: number }: StarType) => {
  // handle the logic here
  return (
    <div className='stars'>
      <img src={fullStarIcon} alt='full star' />
      <img src={emptyStarIcon} alt='empty star' />
      <img src={emptyStarIcon} alt='empty star' />
    </div>
  );
};
