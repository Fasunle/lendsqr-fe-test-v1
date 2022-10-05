import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} path='/dashboard' />
      <Route path='/' element={<LoginPage />} />
    </Routes>
  );
};

export default App;
