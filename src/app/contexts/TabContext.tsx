import { createContext, useContext, useState, ReactNode } from 'react';

export type TabType = 'configuration' | 'pipeline-dag' | 'pipeline-detail' | 'notebook';

export interface Tab {
  id: string;
  type: TabType;
  title: string;
  icon?: string;
  closable: boolean;
  data?: any; // Additional data for the tab (e.g., pipeline ID, notebook ID)
}

interface TabContextType {
  tabs: Tab[];
  activeTabId: string | null;
  openTab: (tab: Omit<Tab, 'id'>) => void;
  closeTab: (tabId: string) => void;
  setActiveTab: (tabId: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 'config-1',
      type: 'configuration',
      title: 'Project Configuration',
      closable: false
    },
    {
      id: 'pipeline-1',
      type: 'pipeline-dag',
      title: 'dbdemos_pipeline_bike_main_db...',
      closable: true
    },
    {
      id: 'notebook-1',
      type: 'notebook',
      title: 'dbdemos_pipeline_bike...',
      closable: true
    },
    {
      id: 'notebook-2',
      type: 'notebook',
      title: 'dbdemos_pipeline_bike...',
      closable: true
    },
    {
      id: 'notebook-3',
      type: 'notebook',
      title: 'dbdemos_pipeline_bike...',
      closable: true
    }
  ]);
  const [activeTabId, setActiveTabId] = useState<string>('config-1');

  const openTab = (newTab: Omit<Tab, 'id'>) => {
    // Check if a tab with the same type and data already exists
    const existingTab = tabs.find(
      t => t.type === newTab.type && JSON.stringify(t.data) === JSON.stringify(newTab.data)
    );

    if (existingTab) {
      // If tab exists, just activate it
      setActiveTabId(existingTab.id);
    } else {
      // Create new tab with unique ID
      const newTabWithId: Tab = {
        ...newTab,
        id: `${newTab.type}-${Date.now()}`
      };
      setTabs(prev => [...prev, newTabWithId]);
      setActiveTabId(newTabWithId.id);
    }
  };

  const closeTab = (tabId: string) => {
    const tabIndex = tabs.findIndex(t => t.id === tabId);
    const tab = tabs[tabIndex];
    
    // Prevent closing non-closable tabs
    if (!tab?.closable) return;

    setTabs(prev => prev.filter(t => t.id !== tabId));

    // If the closed tab was active, switch to another tab
    if (activeTabId === tabId) {
      if (tabs.length > 1) {
        // Switch to the tab on the left, or the one on the right if it's the first tab
        const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0;
        const newActiveTab = tabs[newActiveIndex === tabIndex ? newActiveIndex + 1 : newActiveIndex];
        setActiveTabId(newActiveTab.id);
      } else {
        setActiveTabId(tabs[0]?.id || null);
      }
    }
  };

  const setActiveTab = (tabId: string) => {
    if (tabs.find(t => t.id === tabId)) {
      setActiveTabId(tabId);
    }
  };

  return (
    <TabContext.Provider
      value={{
        tabs,
        activeTabId,
        openTab,
        closeTab,
        setActiveTab
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabProvider');
  }
  return context;
}