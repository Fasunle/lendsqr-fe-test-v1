import { Link as RouterLink, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

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
          <li className='nav-item text-lg'>
            <RouterLink to={pathname}>General Details</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/documents'>Documents</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/documents'>Bank Details</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/loans'>Loans</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/savings'>Savings</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/app-and-system'>App and System</RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
