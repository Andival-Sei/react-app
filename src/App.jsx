import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/index.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage/index.jsx';

function App() {
  // return <MainLayout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<h1>forbidden !!!</h1>} />
          <Route path="/addquestion" element={<h1>add question</h1>} />
          <Route path="/question/:id" element={<h1>question page</h1>} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
