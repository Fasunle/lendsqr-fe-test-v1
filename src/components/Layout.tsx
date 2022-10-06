import { Content } from './content';
import { NavBar } from './nav';
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
