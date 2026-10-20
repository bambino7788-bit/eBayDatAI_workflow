import { useState } from 'react';
import ConnectionLineControls from './ConnectionLineControls';

interface ConnectionLineProps {
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
  endX: number;
  endY: number;
  endWidth: number;
  endHeight: number;
  onAddNode?: (type: string) => void;
  onDelete?: () => void;
}

export default function ConnectionLine({
  startX,
  startY,
  startWidth,
  startHeight,
  endX,
  endY,
  endWidth,
  endHeight,
  onAddNode,
  onDelete
}: ConnectionLineProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate connection points (from right edge of start to left edge of end)
  const x1 = startX + startWidth;
  const y1 = startY + startHeight / 2;
  const x2 = endX;
  const y2 = endY + endHeight / 2;

  // Calculate bounding box
  const minX = Math.min(x1, x2);
  const minY = Math.min(y1, y2);
  const maxX = Math.max(x1, x2);
  const maxY = Math.max(y1, y2);

  // Add padding for arrow and interactive area
  const padding = 50;
  const width = maxX - minX + padding * 2;
  const height = maxY - minY + padding * 2;

  // Adjust coordinates to SVG viewport
  const adjustedX1 = x1 - minX + padding;
  const adjustedY1 = y1 - minY + padding;
  const adjustedX2 = x2 - minX + padding;
  const adjustedY2 = y2 - minY + padding;

  // Calculate arrow angle
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  // Arrow size - increased for better visibility
  const arrowSize = 10;

  // Calculate midpoint for controls
  const midX = (adjustedX1 + adjustedX2) / 2;
  const midY = (adjustedY1 + adjustedY2) / 2;

  // Create curved path using cubic Bezier curve
  const controlPointOffset = Math.abs(adjustedX2 - adjustedX1) / 3;
  const cp1x = adjustedX1 + controlPointOffset;
  const cp1y = adjustedY1;
  const cp2x = adjustedX2 - controlPointOffset;
  const cp2y = adjustedY2;
  
  const curvePath = `M ${adjustedX1} ${adjustedY1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${adjustedX2} ${adjustedY2}`;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute"
      style={{
        left: `${minX - padding}px`,
        top: `${minY - padding}px`,
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: 'none'
      }}
    >
      <svg
        className="absolute inset-0"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible'
        }}
      >
        {/* Invisible thicker path for hover detection */}
        <path
          d={curvePath}
          stroke="transparent"
          strokeWidth="30"
          fill="none"
          style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
        />
        
        {/* Visible connection curve */}
        <path
          d={curvePath}
          stroke={isHovered ? "#0968F6" : "#8F8F8F"}
          strokeWidth="2"
          fill="none"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Arrow at end point */}
        <polygon
          points={`0,-${arrowSize/2} ${arrowSize},0 0,${arrowSize/2}`}
          fill={isHovered ? "#0968F6" : "#8F8F8F"}
          transform={`translate(${adjustedX2}, ${adjustedY2}) rotate(${angle})`}
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Controls at midpoint */}
        {isHovered && onAddNode && onDelete && (
          <ConnectionLineControls
            x={midX}
            y={midY}
            onAddNode={onAddNode}
            onDelete={onDelete}
          />
        )}
      </svg>
    </div>
  );
}