import { HashRouter, Routes, Route } from 'react-router-dom';
import { GradeProvider } from './context/GradeContext';
import { ProgressProvider } from './context/ProgressContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ReadingPage from './pages/ReadingPage';
import WritingPage from './pages/WritingPage';
import SpellingPage from './pages/SpellingPage';
import VocabularyPage from './pages/VocabularyPage';
import GrammarPage from './pages/GrammarPage';
import ExercisePage from './pages/ExercisePage';

export default function App() {
  return (
    <HashRouter>
      <GradeProvider>
        <ProgressProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reading" element={<ReadingPage />} />
              <Route path="/writing" element={<WritingPage />} />
              <Route path="/spelling" element={<SpellingPage />} />
              <Route path="/vocabulary" element={<VocabularyPage />} />
              <Route path="/grammar" element={<GrammarPage />} />
              <Route path="/exercise/:id" element={<ExercisePage />} />
            </Routes>
          </Layout>
        </ProgressProvider>
      </GradeProvider>
    </HashRouter>
  );
}
