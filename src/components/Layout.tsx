import { Content } from './content';
import { Header } from './header';
import { Panel } from './panel';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <section className='section'>
        <Panel />
        <Content />
      </section>
    </div>
  );
};

export default Layout;
