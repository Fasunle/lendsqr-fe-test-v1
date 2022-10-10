import { GeneralInformation, UserProfile } from '../components/user';
import leftArrowLogo from '../assets/icons/arrow-left.svg';
import { Link } from 'react-router-dom';

const UserPage = () => {
  return (
    <div className='page user'>
      <div className='controller'>
        <Link className='back-to-users text-2xl' to='/users'>
          <span className='leftArrorContainer'>
            <img src={leftArrowLogo} alt='back to users' />
          </span>
          <span className='text-xl title'>Back to Users</span>
        </Link>
        <div className='banner'>
          <h1 className='text-2xl'>User Details</h1>
          <div className='cta'>
            <button type='button' className='btn btn-cta text-lg'>
              Blacklist User
            </button>
            <button type='button' className='btn btn-cta text-lg'>
              Activate User
            </button>
          </div>
        </div>
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

      {/* General Information tab  */}
      <GeneralInformation />
    </div>
  );
};

export default UserPage;
