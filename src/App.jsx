import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/index.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage/index.jsx';
import { QuestionPage } from './pages/QuestionPage/index.jsx';
import { AddQuestionPageLazy } from './pages/AddQuestionPage/index.jsx';
import { AuthProvider } from './auth/AuthProvider/AuthProvider.jsx';
import { useAuth } from './hooks/useAuth.js';
import { ForbiddenPage } from './pages/ForbiddenPage/index.jsx';
import EditQuestionPageLazy from './pages/EditQuestionPage/EditQuestionPage.lazy.jsx';

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/forbidden" state={{ from: location.pathname }} replace />;
};

function App() {
  // return <MainLayout />;
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/forbidden" element={<ForbiddenPage />} />
            <Route path="/question/:id" element={<QuestionPage />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/addquestion" element={<AddQuestionPageLazy />} />
              <Route path="/editquestion/:id" element={<EditQuestionPageLazy />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
