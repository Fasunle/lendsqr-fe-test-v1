import { Content } from './content';
import { NavBar } from './header';
import { Panel } from './panel';

const Layout = () => {
  return (
    <div className='layout'>
      <NavBar />
      <Panel />
      <Content />
    </div>
  );
};

export default Layout;
