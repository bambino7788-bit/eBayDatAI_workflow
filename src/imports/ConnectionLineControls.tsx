import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import NodeTypeMenu from './NodeTypeMenu';

interface ConnectionLineControlsProps {
  x: number;
  y: number;
  onAddNode: (type: string) => void;
  onDelete: () => void;
}

export default function ConnectionLineControls({ x, y, onAddNode, onDelete }: ConnectionLineControlsProps) {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<SVGGElement>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current && showMenu) {
      const rect = containerRef.current.getBoundingClientRect();
      setMenuPosition({
        x: rect.left - 20,
        y: rect.top + rect.height / 2
      });
    }
  }, [showMenu, x, y]);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <>
      <g ref={containerRef}>
        {/* Extended hover area to keep controls visible */}
        <rect
          x={x - 60}
          y={y - 30}
          width="120"
          height="60"
          fill="transparent"
          style={{ pointerEvents: 'auto' }}
        />
        
        {/* Control buttons container */}
        <g transform={`translate(${x}, ${y})`}>
          {/* Plus button (Add node) */}
          <g
            transform="translate(-20, 0)"
            onClick={handleAddClick}
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          >
            <circle 
              cx="0" 
              cy="0" 
              r="12" 
              fill="#0968F6" 
              className="hover:opacity-90 transition-opacity"
            />
            <line 
              x1="-5" 
              y1="0" 
              x2="5" 
              y2="0" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              style={{ pointerEvents: 'none' }} 
            />
            <line 
              x1="0" 
              y1="-5" 
              x2="0" 
              y2="5" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              style={{ pointerEvents: 'none' }} 
            />
          </g>
          
          {/* Delete button */}
          <g
            transform="translate(20, 0)"
            onClick={handleDeleteClick}
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          >
            <circle 
              cx="0" 
              cy="0" 
              r="12" 
              fill="#EF4444" 
              className="hover:opacity-90 transition-opacity"
            />
            <line 
              x1="-4" 
              y1="-4" 
              x2="4" 
              y2="4" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              style={{ pointerEvents: 'none' }} 
            />
            <line 
              x1="4" 
              y1="-4" 
              x2="-4" 
              y2="4" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              style={{ pointerEvents: 'none' }} 
            />
          </g>
        </g>
      </g>

      {/* Menu positioned in DOM via portal */}
      {showMenu && createPortal(
        <div
          style={{
            position: 'fixed',
            left: `${menuPosition.x + 12}px`,
            top: `${menuPosition.y}px`,
            transform: 'translateY(-50%)',
            zIndex: 9999
          }}
        >
          <NodeTypeMenu 
            onSelectType={(type) => {
              onAddNode(type);
              setShowMenu(false);
            }}
            onClose={() => setShowMenu(false)}
          />
        </div>,
        document.body
      )}
    </>
  );
}