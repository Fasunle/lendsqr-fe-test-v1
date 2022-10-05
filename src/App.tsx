import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} path='/dashboard' />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
