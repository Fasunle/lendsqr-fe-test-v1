import avatarLogo from '../../assets/icons/avatar.svg';
import { Stars } from './Stars';

type UserProfilePropTypes = {
  avatar?: string;
  fullname: string;
  tier: string;
  stars: number;
  userId: string;
  balance: string;
  accountNumber: number;
  bankName: string;
};

export const UserProfile = ({
  accountNumber,
  balance,
  bankName,
  fullname,
  avatar,
  stars,
  tier,
  userId,
}: UserProfilePropTypes) => {
  return (
    <section className='profile'>
      <div className='profile--user'>
        <div className='imgContainer'>
          <img className='profile-picture' src={avatar || avatarLogo} alt={fullname} />
        </div>
        <div className='identity'>
          <h1 className='username text-xl'>{fullname}</h1>
          <p className='user-id'>{userId}</p>
        </div>
        {/* vertical separator */}
        <div className='dividerContainer'>
          <div className='divider' />
        </div>
        <div className='levels'>
          <h2 className='text text-lg'>{tier}</h2>
          <p>
            <Stars rating={stars} />
          </p>
        </div>

        {/* vertical separator */}
        <div className='dividerContainer'>
          <div className='divider' />
        </div>

        <div className='account-info'>
          <h2 className='balance text-lg'>{balance}</h2>
          <p className='bank-info'>
            {accountNumber}/ {bankName}
          </p>
        </div>
      </div>
      <nav className='profile--nav'>
        <ul className='nav-list'>
          <li className='nav-item'>General Details</li>
          <li className='nav-item'>Documents</li>
          <li className='nav-item'>Bank Details</li>
          <li className='nav-item'>Loans</li>
          <li className='nav-item'>Savings</li>
          <li className='nav-item'>App and System</li>
        </ul>
      </nav>
    </section>
  );
};
