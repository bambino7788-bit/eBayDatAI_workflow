interface MinimapProps {
  nodePositions: Record<string, { x: number; y: number; width: number; height: number }>;
  connections: Array<{ id: string; from: string; to: string }>;
  workflowWidth: number;
  workflowHeight: number;
  zoom: number;
  panX: number;
  panY: number;
  viewportWidth: number;
  viewportHeight: number;
}

export default function Minimap({
  nodePositions,
  connections,
  workflowWidth,
  workflowHeight,
  zoom,
  panX,
  panY,
  viewportWidth,
  viewportHeight
}: MinimapProps) {
  // Scale factor for minimap (original design was 105px wide for ~2319px workflow)
  const minimapWidth = 105;
  const minimapHeight = 66.3;
  const scaleX = minimapWidth / workflowWidth;
  const scaleY = minimapHeight / workflowHeight;
  const scale = Math.min(scaleX, scaleY);

  // Node status: For demo, we'll mark nodes as successful (green)
  // In real implementation, this would come from props
  const nodeStatus: Record<string, 'success' | 'selected' | 'idle'> = {
    node1: 'success',
    node2: 'success',
    node3: 'success',
    node4: 'idle',
    node5: 'idle',
    node6: 'idle'
  };

  const getNodeColor = (nodeKey: string) => {
    const status = nodeStatus[nodeKey] || 'idle';
    switch (status) {
      case 'selected':
        return '#0968F6'; // Blue
      case 'success':
        return '#22C55E'; // Green
      case 'idle':
      default:
        return '#D4D4D4'; // Gray
    }
  };

  // Calculate viewport rectangle in minimap coordinates
  const viewportScale = zoom / 100;
  
  // The workflow canvas size
  const canvasWidth = workflowWidth;
  const canvasHeight = workflowHeight;
  
  // After scaling, the canvas actual display size
  const scaledCanvasWidth = canvasWidth * viewportScale;
  const scaledCanvasHeight = canvasHeight * viewportScale;
  
  // The top-left corner of the visible viewport in workflow coordinates
  // When panX/panY are positive, the canvas moves right/down, so we see the left/top part
  // When panX/panY are negative, the canvas moves left/up, so we see the right/bottom part
  const viewportLeft = -panX / viewportScale;
  const viewportTop = -panY / viewportScale;
  
  // The visible area size in workflow coordinates
  const visibleWidth = viewportWidth / viewportScale;
  const visibleHeight = viewportHeight / viewportScale;
  
  // Convert to minimap coordinates
  const minimapViewportX = viewportLeft * scale;
  const minimapViewportY = viewportTop * scale;
  const minimapViewportWidth = visibleWidth * scale;
  const minimapViewportHeight = visibleHeight * scale;

  return (
    <svg
      width={minimapWidth}
      height={minimapHeight}
      viewBox={`0 0 ${minimapWidth} ${minimapHeight}`}
      className="absolute inset-0"
    >
      {/* Layer 1: Background - Gray */}
      <rect
        x="0"
        y="0"
        width={minimapWidth}
        height={minimapHeight}
        fill="#f5f5f5"
        stroke="#e5e5e5"
        strokeWidth="1"
        rx="6"
      />

      {/* Layer 2: Viewport indicator (white solid background) */}
      <rect
        x={Math.max(0, Math.min(minimapViewportX, minimapWidth - minimapViewportWidth))}
        y={Math.max(0, Math.min(minimapViewportY, minimapHeight - minimapViewportHeight))}
        width={Math.min(minimapViewportWidth, minimapWidth)}
        height={Math.min(minimapViewportHeight, minimapHeight)}
        fill="white"
        rx="1"
      />

      {/* Layer 3: Connection lines */}
      {connections.map((connection) => {
        const fromNode = nodePositions[connection.from];
        const toNode = nodePositions[connection.to];
        
        if (!fromNode || !toNode) return null;

        // Calculate line endpoints (from right edge of source to left edge of target)
        const x1 = (fromNode.x + fromNode.width) * scale;
        const y1 = (fromNode.y + fromNode.height / 2) * scale;
        const x2 = toNode.x * scale;
        const y2 = (toNode.y + toNode.height / 2) * scale;

        return (
          <line
            key={connection.id}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D4D4D4"
            strokeWidth="0.8"
          />
        );
      })}

      {/* Layer 4: Nodes (top layer) */}
      {Object.entries(nodePositions).map(([nodeKey, pos]) => (
        <rect
          key={nodeKey}
          x={pos.x * scale}
          y={pos.y * scale}
          width={pos.width * scale}
          height={pos.height * scale}
          fill={getNodeColor(nodeKey)}
          rx="1"
        />
      ))}
    </svg>
  );
}
