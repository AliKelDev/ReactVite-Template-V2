import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import Exemple1Page from './pages/exemple1';  // Changed to match the component name
import Exemple2Page from './pages/exemple2';  // Changed for consistency
import Exemple3Page from './pages/exemple3';  // Changed for consistency

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exemple1" element={<Exemple1Page />} />
          <Route path="/exemple2" element={<Exemple2Page />} />
          <Route path="/exemple3" element={<Exemple3Page />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;