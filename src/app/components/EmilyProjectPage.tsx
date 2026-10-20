import { useTabs } from "../contexts/TabContext";
import { TopWindowTab, ConfigurationContent } from "../../imports/Container-52-240550";
import { WorkflowContent } from "../../imports/Container-25-12509";
import { RightToolbar, PanelType } from "./RightToolbar";
import FileTreeMenu from "../../imports/Container-52-376885";
import PipelineDetailsDrawer from "../../imports/Frame427319469";
import { AlertsPanel, InstancePanel, HistoryPanel, VariablesPanel, AutoRetryPanel, RelatedPipelinePanel } from "./PanelContents";
import { useState } from "react";
import { PipelineStateProvider, usePipelineState } from "../contexts/PipelineStateContext";
import { WorkflowAIDialog, WorkflowAIDrawer } from "./WorkflowAIDialog";

interface AIProps {
  aiDrawerOpen?: boolean;
  onAiDrawerChange?: (open: boolean) => void;
}

function EmilyProjectPageContent({ aiDrawerOpen = false, onAiDrawerChange }: AIProps) {
  const [aiDraft, setAiDraft] = useState("");
  const { activeTabId, tabs } = useTabs();
  const activeTab = tabs.find(t => t.id === activeTabId);
  const [activePanel, setActivePanel] = useState<PanelType>(null);
  const { pipelineState } = usePipelineState();

  const isDrawerOpen = activePanel !== null;

  const handleClosePanel = () => setActivePanel(null);

  // Render the panel content based on active panel
  const renderPanelContent = () => {
    switch (activePanel) {
      case 'info':
        return <PipelineDetailsDrawer isOpen={true} onClose={handleClosePanel} />;
      case 'alerts':
        return <AlertsPanel onClose={handleClosePanel} />;
      case 'instance':
        return <InstancePanel onClose={handleClosePanel} />;
      case 'history':
        return <HistoryPanel onClose={handleClosePanel} />;
      case 'variables':
        return <VariablesPanel onClose={handleClosePanel} />;
      case 'auto-retry':
        return <AutoRetryPanel onClose={handleClosePanel} />;
      case 'related-pipeline':
        return <RelatedPipelinePanel onClose={handleClosePanel} />;
      default:
        return null;
    }
  };

  // Render content based on active tab type
  const renderTabContent = () => {
    if (!activeTab) {
      return <ConfigurationContent />;
    }

    switch (activeTab.type) {
      case 'configuration':
        return <ConfigurationContent />;
      case 'pipeline-dag':
        return (
          <div className="flex flex-row h-full w-full">
            {aiDrawerOpen && <WorkflowAIDrawer value={aiDraft} onValueChange={setAiDraft} onClose={() => onAiDrawerChange?.(false)} />}
            <div className="flex-1 overflow-hidden relative">
              <WorkflowContent isDrawerOpen={isDrawerOpen} />
              {!aiDrawerOpen && <WorkflowAIDialog value={aiDraft} onValueChange={setAiDraft} onScale={() => onAiDrawerChange?.(true)} />}
            </div>
            {/* Panel Content Drawer */}
            {renderPanelContent()}
          </div>
        );
      case 'notebook':
        return (
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full p-8">
            <div className="text-center">
              <h2 className="font-['Geist:SemiBold',sans-serif] text-[20px] font-semibold text-[#0a0a0a] mb-4">
                Notebook: {activeTab.title}
              </h2>
              <p className="font-['Geist:Regular',sans-serif] text-[14px] text-[#737373]">
                Notebook content will be displayed here
              </p>
            </div>
          </div>
        );
      default:
        return <ConfigurationContent />;
    }
  };

  return (
    <div className="flex-1 bg-white overflow-hidden flex flex-row h-full">
      {/* File Tree Menu - Left side, full height */}
      <div className="shrink-0 h-full w-[259px] overflow-auto">
        <FileTreeMenu />
      </div>
      
      {/* Right side content */}
      <div className="flex-1 flex flex-row overflow-hidden">
        {/* Main content area with tabs */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopWindowTab />
          
          {/* Tab Content */}
          <div className="flex-1 overflow-auto">
            {renderTabContent()}
          </div>
        </div>
        
        {/* Right Toolbar - always at the rightmost edge, full height from top */}
        {activeTab?.type === 'pipeline-dag' && (
          <RightToolbar 
            activePanel={activePanel}
            onPanelClick={setActivePanel}
            hideAutoRetry={pipelineState === 'released'}
            isReleasedMode={pipelineState === 'released'}
          />
        )}
      </div>
    </div>
  );
}

export function EmilyProjectPage(props: AIProps) {
  return (
    <PipelineStateProvider>
      <EmilyProjectPageContent {...props} />
    </PipelineStateProvider>
  );
}
