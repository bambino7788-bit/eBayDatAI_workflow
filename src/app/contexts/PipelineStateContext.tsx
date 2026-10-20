import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type PipelineState = 'dev' | 'released';

interface PipelineStateContextType {
  pipelineState: PipelineState;
  setPipelineState: (state: PipelineState) => void;
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
  panelCloseSignal: number;
  triggerPanelClose: () => void;
}

const PipelineStateContext = createContext<PipelineStateContextType | undefined>(undefined);

export function PipelineStateProvider({ children }: { children: ReactNode }) {
  const [pipelineState, setPipelineState] = useState<PipelineState>('dev');
  const [isEditMode, setIsEditMode] = useState(true);
  const [panelCloseSignal, setPanelCloseSignal] = useState(0);

  const triggerPanelClose = useCallback(() => {
    setPanelCloseSignal(prev => prev + 1);
  }, []);

  return (
    <PipelineStateContext.Provider value={{ pipelineState, setPipelineState, isEditMode, setIsEditMode, panelCloseSignal, triggerPanelClose }}>
      {children}
    </PipelineStateContext.Provider>
  );
}

export function usePipelineState() {
  const context = useContext(PipelineStateContext);
  if (context === undefined) {
    throw new Error('usePipelineState must be used within a PipelineStateProvider');
  }
  return context;
}