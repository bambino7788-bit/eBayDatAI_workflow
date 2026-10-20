import { useState, startTransition } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { NotebooksPage } from "./components/NotebooksPage";
import { PipelinesPage } from "./components/PipelinesPage";
import { ArtifactsPage } from "./components/ArtifactsPage";
import { ProjectDashboardPage } from "./components/ProjectDashboardPage";
import { EmilyProjectPage } from "./components/EmilyProjectPage";
import DataModel from "./components/DataModel";
import { CatalogPage } from "./components/CatalogPage";
import { AskNeoPage } from "./components/AskNeoPage";
import { TabProvider, useTabs } from "./contexts/TabContext";

function MainContent() {
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const { tabs, activeTabId } = useTabs();
  const isWorkflow = tabs.find(tab => tab.id === activeTabId)?.type === "pipeline-dag";
  const [currentPage, setCurrentPage] = useState<'emilyProject' | 'dashboard' | 'notebooks' | 'pipelines' | 'artifacts' | 'dataModel' | 'catalog' | 'projectHome' | 'askNeo'>('projectHome');

  // Render sidebar page content (when not in Emily's Project)
  const renderPageContent = () => {
    switch (currentPage) {
      case 'projectHome':
        return <HomePage />;
      case 'emilyProject':
        return <EmilyProjectPage aiDrawerOpen={aiDrawerOpen} onAiDrawerChange={setAiDrawerOpen} />;
      case 'dashboard':
        return <ProjectDashboardPage />;
      case 'notebooks':
        return <NotebooksPage />;
      case 'pipelines':
        return <PipelinesPage />;
      case 'artifacts':
        return <ArtifactsPage />;
      case 'dataModel':
        return <DataModel />;
      case 'catalog':
        return <CatalogPage />;
      case 'askNeo':
        return <AskNeoPage />;
      default:
        return <EmilyProjectPage />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#fafafa]">
      <Sidebar onNavigate={(page) => startTransition(() => setCurrentPage(page))} currentPage={currentPage} />
      <div className="flex flex-col flex-1 min-w-0">
        {currentPage !== 'askNeo' && <Header aiActive={currentPage === 'emilyProject' && isWorkflow && aiDrawerOpen} onAiClick={currentPage === 'emilyProject' && isWorkflow ? () => setAiDrawerOpen(open => !open) : undefined} />}
        {renderPageContent()}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TabProvider>
      <MainContent />
    </TabProvider>
  );
}
