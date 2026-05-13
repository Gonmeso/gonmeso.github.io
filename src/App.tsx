import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { SiteShell } from './components/SiteShell';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { AiPage } from './pages/AiPage';

type AppProps = {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
};

export default function App({ mode, onToggleMode }: AppProps) {
  return (
    <Box className="app-root" data-theme={mode}>
      <SiteShell mode={mode} onToggleMode={onToggleMode}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/ai" element={<AiPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteShell>
    </Box>
  );
}
