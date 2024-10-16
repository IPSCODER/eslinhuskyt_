import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { createContext, useState } from 'react';

export const ContextProvider = createContext<{
  change: string;
  setChange: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

function App() {
  const [change, setChange] = useState<string>('');

  return (
    <ContextProvider.Provider value={{ change, setChange }}>
      <BrowserRouter>
        <Header />
        <h1>{change}</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider.Provider>
  );
}

export default App;
