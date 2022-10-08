import { UserProfile } from '../components/user';

const UserPage = () => {
  return (
    <div className='page user'>
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
