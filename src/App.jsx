import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/index.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage/index.jsx';
import { QuestionPage } from './pages/QuestionPage/index.jsx';
import { AddQuestionPage } from './pages/AddQuestionPage/index.jsx';

function App() {
  // return <MainLayout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<h1>forbidden !!!</h1>} />
          <Route path="/addquestion" element={<AddQuestionPage />} />
          <Route path="/question/:id" element={<QuestionPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
