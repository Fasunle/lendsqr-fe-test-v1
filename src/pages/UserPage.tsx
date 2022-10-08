import { UserProfile } from '../components/user';
import leftArrowLogo from '../assets/icons/arrow-left.svg';
import { Link } from 'react-router-dom';

const UserPage = () => {
  return (
    <div className='page user'>
      <div className='page-title text-2xl'>
        <Link className='user-page-title' to='/users'>
          <span className='leftArrorContainer'>
            <img src={leftArrowLogo} alt='back to users' />
          </span>
          <span className='text-xl title'>Back to Users</span>
        </Link>
      </div>
      <UserProfile
        accountNumber={9912345678}
        balance='₦ 200,000.00'
        bankName='Providus Bank'
        fullname='Grace Effiom'
        stars={1}
        tier='User tier'
        userId='LSQFf587g90'
        avatar=''
      />
    </div>
  );
};

export default UserPage;
