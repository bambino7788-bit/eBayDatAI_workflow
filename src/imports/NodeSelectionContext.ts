import { createContext, useContext } from 'react';

/** True when the parent DraggableNode is currently selected. */
export const NodeSelectionContext = createContext(false);

export function useNodeSelection(): boolean {
  return useContext(NodeSelectionContext);
}
