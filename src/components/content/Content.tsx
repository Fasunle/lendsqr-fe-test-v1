import Card from './Card';
import usersImage from '../../assets/icons/users-card.svg';
import activeUsers from '../../assets/icons/active-users.svg';
import usersWithLoans from '../../assets/icons/users-with-loans.svg';
import usersWithSavings from '../../assets/icons/users-with-savings.svg';

const Content = () => {
  return (
    <main className='content'>
      <h1 className='content__header text-2xl'>User</h1>
      <section className='content__analytics'>
        <div className='cards'>
          <Card imgUrl={usersImage} status='users' numberOfUsers={234546} />
          <Card alt='active users' imgUrl={activeUsers} status='active' numberOfUsers={234546} />
          <Card imgUrl={usersWithLoans} status='users with loan' numberOfUsers={234546} />
          <Card imgUrl={usersWithSavings} status='users with savings' numberOfUsers={234546} />
        </div>
      </section>
      <section className='content__body'></section>
    </main>
  );
};

export default Content;
