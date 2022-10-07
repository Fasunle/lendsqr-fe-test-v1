type CartPropType = {
  numberOfUsers: number;
  alt?: string;
  imgUrl: string;
  status: string;
};

const Card = ({ imgUrl, alt, status, numberOfUsers }: CartPropType) => (
  <div className='card'>
    <div className='card__header'>
      <img src={imgUrl} alt={alt || status} />
    </div>
    <div className='card__body'>
      <p className='status'>{status}</p>
      <b className='number-of-users'>{numberOfUsers}</b>
    </div>
  </div>
);

export default Card;
