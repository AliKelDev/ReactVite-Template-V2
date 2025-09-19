import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import Example1Page from './pages/Example1Page';
import Example2Page from './pages/Example2Page';
import Example3Page from './pages/Example3Page';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exemple1" element={<Example1Page />} />
          <Route path="/exemple2" element={<Example2Page />} />
          <Route path="/exemple3" element={<Example3Page />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;