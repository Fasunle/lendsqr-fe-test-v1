import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} path='/' />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};

export default App;
