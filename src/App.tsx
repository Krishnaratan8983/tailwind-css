import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeSwitcher from './pages/ThemeSwitcher';
import Home from './pages/Home';
import DropdownPage from './pages/Dropdown';

const App = () => {
  return (
    <ThemeProvider>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme-picker" element={<ThemeSwitcher />} />
        <Route path="/dropdown" element={<DropdownPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
