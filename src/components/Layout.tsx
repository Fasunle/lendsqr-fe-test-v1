import { Content } from './content';
import { Header } from './header';
import { Sidebar } from './sidebar';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <section className='section'>
        <Sidebar />
        <Content />
      </section>
    </div>
  );
};

export default Layout;
