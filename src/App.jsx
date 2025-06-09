import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/index.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  // return <MainLayout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<h1>forbidden !!!</h1>} />
          <Route path="/addquestion" element={<h1>add question</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
