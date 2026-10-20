import { useState, useRef, ReactNode, useEffect } from 'react';
import { Play, MoreHorizontal } from 'lucide-react';
import NodeAddButton from './NodeAddButton';
import { NodeSelectionContext } from './NodeSelectionContext';

interface DraggableNodeProps {
  children: ReactNode;
  initialX: number;
  initialY: number;
  width?: number;
  height?: number;
  onPositionChange?: (x: number, y: number) => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onAddNode?: (type: string) => void;
  isReadOnly?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  nodeDescription?: string;
}

export default function DraggableNode({
  children,
  initialX,
  initialY,
  width = 260,
  height = 120,
  onPositionChange,
  onDragStart,
  onDragEnd,
  onAddNode,
  isReadOnly = false,
  isSelected = false,
  onSelect,
  onDelete,
  onDuplicate,
  nodeDescription = 'Executes pipeline operations and data transformations.',
}: DraggableNodeProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ── drag ── */
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    if ((e.target as HTMLElement).closest('[data-toolbar]')) return;

    onSelect?.();

    // In read-only mode, allow selection but prevent dragging
    if (isReadOnly) return;

    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    e.preventDefault();
    e.stopPropagation();
    onDragStart?.();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    setPosition({ x: newX, y: newY });
    onPositionChange?.(newX, newY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    onDragEnd?.();
  };

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position]);

  /* ── close menu on outside click ── */
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [menuOpen]);

  /* ── close menu when deselected ── */
  useEffect(() => {
    if (!isSelected && !isHovered) setMenuOpen(false);
  }, [isSelected, isHovered]);

  /* ── menu action helpers ── */
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
    onDelete?.();
  };
  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
    onDuplicate?.();
  };
  const closeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
  };

  return (
    <div
      ref={nodeRef}
      className={`group absolute ${isDragging ? 'cursor-grabbing' : isReadOnly ? 'cursor-pointer' : 'cursor-grab'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        height: `${height}px`,
        userSelect: 'none',
        zIndex: isSelected ? 20 : 10,
        transition: 'box-shadow 0.15s ease',
        borderRadius: 12,
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Floating action toolbar (top-right, above the card) ── */}
      {(isSelected || isHovered) && !isReadOnly && (
        <div
          data-toolbar
          className="absolute pointer-events-auto"
          style={{ top: -40, right: 0 }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div ref={menuRef} className="relative">
            {/* Pill container */}
            <div
              className="flex items-center gap-[2px] bg-white border border-[#e5e5e5] rounded-[8px] px-[5px] py-[4px]"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
            >
              {/* Run this step */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-[28px] h-[28px] rounded-[6px] hover:bg-[#f5f5f5] cursor-pointer transition-colors"
                title="Run this step"
              >
                <Play size={12} fill="#0a0a0a" color="#0a0a0a" />
              </button>

              {/* Divider */}
              <div className="w-px h-[16px] bg-[#e5e5e5]" />

              {/* Overflow / more */}
              <button
                onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
                className="flex items-center justify-center w-[28px] h-[28px] rounded-[6px] hover:bg-[#f5f5f5] cursor-pointer transition-colors"
                title="More options"
              >
                <MoreHorizontal size={14} color="#0a0a0a" />
              </button>
            </div>

            {/* ── Dropdown menu ── */}
            {menuOpen && (
              <div
                className="absolute right-0 mt-[4px] bg-white border border-[#e5e5e5] rounded-[12px] py-[5px] z-[9999] w-[224px]"
                style={{
                  top: '100%',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.13)',
                }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                {/* Run this step */}
                <MenuRow label="Run this step" onClick={closeMenu} />

                {/* Change Node */}
                <MenuRow label="Change Node" onClick={closeMenu} />

                <MenuDivider />

                {/* Copy */}
                <MenuRow label="Copy" shortcut="⌘ C" onClick={closeMenu} />

                {/* Duplicate */}
                <MenuRow label="Duplicate" shortcut="⌘ D" onClick={handleDuplicate} />

                {/* Delete */}
                <MenuRow label="Delete" shortcut="Del" danger onClick={handleDelete} />

                <MenuDivider />

                {/* View Docs */}
                <MenuRow label="View Docs" onClick={closeMenu} />

                <MenuDivider />

                {/* About */}
                <div className="px-[14px] pt-[6px] pb-[8px]">
                  <p
                    className="mb-[6px]"
                    style={{
                      fontFamily: "'Geist:Medium',sans-serif",
                      fontSize: 11,
                      color: '#737373',
                      letterSpacing: '0.48px',
                      textTransform: 'uppercase',
                      lineHeight: 1.5,
                    }}
                  >
                    About
                  </p>
                  <p
                    style={{
                      fontFamily: "'Geist:Regular',sans-serif",
                      fontSize: 12,
                      color: '#0a0a0a',
                      letterSpacing: '0.06px',
                      lineHeight: 1.5,
                    }}
                  >
                    {nodeDescription}
                  </p>
                  <p
                    className="mt-[4px]"
                    style={{
                      fontFamily: "'Geist:Regular',sans-serif",
                      fontSize: 12,
                      color: '#737373',
                      letterSpacing: '0.06px',
                    }}
                  >
                    Created by eBay DatAI
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Node content — wrapped in selection context so inner border can react */}
      <NodeSelectionContext.Provider value={isSelected}>
        {children}
      </NodeSelectionContext.Provider>

      {/* Add-node button on hover / selected */}
      {!isReadOnly && (isHovered || isSelected) && onAddNode && (
        <NodeAddButton
          onAddNode={onAddNode}
          nodeWidth={width}
          nodeHeight={height}
        />
      )}
    </div>
  );
}

/* ── small helpers ── */

function MenuRow({
  label,
  shortcut,
  danger,
  onClick,
}: {
  label: string;
  shortcut?: string;
  danger?: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      className="w-full flex items-center justify-between px-[14px] py-[8px] hover:bg-[#fafafa] transition-colors cursor-pointer text-left"
      onClick={onClick}
    >
      <span
        style={{
          fontFamily: "'Geist:Regular',sans-serif",
          fontSize: 14,
          color: danger ? '#ef4444' : '#0a0a0a',
          letterSpacing: '0.07px',
          lineHeight: 1.5,
        }}
      >
        {label}
      </span>
      {shortcut && (
        <span
          style={{
            fontFamily: "'Geist:Regular',sans-serif",
            fontSize: 12,
            color: '#737373',
            letterSpacing: '0.06px',
          }}
        >
          {shortcut}
        </span>
      )}
    </button>
  );
}

function MenuDivider() {
  return <div className="my-[5px] border-t border-[#e5e5e5]" />;
}