import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/hooks/useTheme';
import { Layout } from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Home } from '@/pages/Home';
import { Download } from '@/pages/Download';
import { News } from '@/pages/News';
import { Article } from '@/pages/Article';
import { About } from '@/pages/About';
import { Community } from '@/pages/Community';

function MainLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/download" element={<Download />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<Article />} />
              <Route path="/about" element={<About />} />
              <Route path="/community" element={<Community />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
