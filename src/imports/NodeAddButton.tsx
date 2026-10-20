import { Plus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import NodeTypeMenu from './NodeTypeMenu';

interface NodeAddButtonProps {
  onAddNode: (type: string) => void;
  nodeWidth: number;
  nodeHeight: number;
}

export default function NodeAddButton({ onAddNode, nodeWidth, nodeHeight }: NodeAddButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && showMenu) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        x: rect.right + 12,
        y: rect.top + rect.height / 2
      });
    }
  }, [showMenu]);

  const handleSelectType = (type: string) => {
    onAddNode(type);
    setShowMenu(false);
  };

  return (
    <div 
      className="absolute"
      style={{
        left: `${nodeWidth}px`,
        top: `${nodeHeight / 2}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
        className="w-6 h-6 rounded-full bg-[#0968F6] hover:bg-[#0757d4] flex items-center justify-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] transition-colors group-hover:opacity-100 opacity-0"
        style={{ pointerEvents: 'auto' }}
      >
        <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
      </button>
      
      {showMenu && createPortal(
        <div
          style={{
            position: 'fixed',
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`,
            transform: 'translateY(-50%)',
            zIndex: 9999
          }}
        >
          <NodeTypeMenu 
            onSelectType={handleSelectType}
            onClose={() => setShowMenu(false)}
          />
        </div>,
        document.body
      )}
    </div>
  );
}