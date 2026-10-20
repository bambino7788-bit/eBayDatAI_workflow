import { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Search, 
  MoreVertical, 
  Clock,
  FileText,
  Folder,
  FolderOpen,
  Plus,
  PlayCircle,
  Settings,
  Share2,
  Star,
  Database,
  RefreshCw,
  ArrowUpDown
} from 'lucide-react';
import svgPaths from '../../imports/svg-4md9ngldf1';
import svgPathsToolbar from '../../imports/svg-wxbkhnarvv';
import { TopWindowTab } from '../../imports/Container-52-240550'; // Import TopWindowTab from new location
import { WorkflowContent } from '../../imports/Container-25-12509'; // Import WorkflowContent
import PipelineDetailsDrawer from '../../imports/Frame427319469'; // Import Pipeline Details Drawer
import TopNavigationMenu from '../../imports/TopNavigationMenu'; // Import Project Switcher Menu

// File tree node type
interface FileNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  icon?: 'folder' | 'notebook';
  children?: FileNode[];
  isExpanded?: boolean;
}

// Pipeline node type
interface PipelineNode {
  id: string;
  title: string;
  type: string;
  source?: string;
  sink?: string;
  color: 'orange' | 'blue' | 'red' | 'yellow';
  position: { x: number; y: number };
}

// Mock file tree data
const FILE_TREE: FileNode[] = [
  {
    id: 'pipeline-bike',
    name: 'pipeline-bike',
    type: 'folder',
    isExpanded: true,
    children: [
      {
        id: '1-dbo-sql',
        name: '1-dbo-sql',
        type: 'folder',
        isExpanded: true,
        children: [
          { id: 'explorations', name: 'explorations', type: 'folder' },
          { id: '02-pipeline-event', name: '02-Pipeline-event-c...', type: 'file', icon: 'notebook' },
          { id: 'transformations', name: 'transformations', type: 'folder' }
        ]
      },
      {
        id: '2-step-python',
        name: '2-step-python',
        type: 'folder',
        isExpanded: true,
        children: [
          { id: 'dashboards', name: '_dashboards', type: 'folder' },
          { id: 'resources', name: '_resources', type: 'folder' },
          { id: 'deployment', name: 'deployment', type: 'folder' },
          { id: '00-sdp-intro', name: '00-SDP-Introduction', type: 'file', icon: 'notebook' },
          { id: '01-pipeline-tut', name: '01-pipeline-tutorial', type: 'file', icon: 'notebook' }
        ]
      }
    ]
  }
];

// Mock pipeline nodes data
const PIPELINE_NODES: PipelineNode[] = [
  {
    id: 'node1',
    title: 'NodalBEI_context__ROOT...',
    type: 'Type: Dependency Check',
    source: 'Source: Raw',
    sink: 'Sink: Bronze',
    color: 'orange',
    position: { x: 450, y: 180 }
  },
  {
    id: 'node2',
    title: 'NodalBEI_context__ROOT...',
    type: 'Type: Ingest Notebook',
    source: 'Source: data_read',
    sink: 'Sink: data_prep',
    color: 'blue',
    position: { x: 280, y: 340 }
  },
  {
    id: 'node3',
    title: 'NodalBEI_context__ROOT...',
    type: 'Type: Spark SQL Notebook',
    source: 'Source: data_prep',
    sink: 'Sink: Bronze',
    color: 'blue',
    position: { x: 600, y: 260 }
  },
  {
    id: 'node4',
    title: 'NodalBEI_context__ROOT...',
    type: 'Type: Ingest Notebook',
    source: 'Source: Bronze Reads',
    sink: 'Sink: data_prep',
    color: 'red',
    position: { x: 740, y: 260 }
  },
  {
    id: 'node5',
    title: 'NodalBEI_context__ROOT...',
    type: 'Type: Spark SQL',
    source: 'Source: data_prep',
    sink: 'Sink: SQL Writes',
    color: 'blue',
    position: { x: 450, y: 320 }
  },
  {
    id: 'node6',
    title: 'NodalBEI_context__ROOT...',
    type: 'Type: Data Quality',
    source: 'Sink: Type: SQL Writes',
    color: 'yellow',
    position: { x: 460, y: 400 }
  }
];

// File tree node component
function FileTreeNode({ node, level = 0 }: { node: FileNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(node.isExpanded || false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div 
        className="flex items-center gap-1 px-2 py-1 hover:bg-[#f5f5f5] cursor-pointer rounded group"
        style={{ paddingLeft: `${8 + level * 16}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren && (
          <div className="w-4 h-4 flex items-center justify-center">
            {isExpanded ? (
              <ChevronDown size={14} className="text-[#737373]" />
            ) : (
              <ChevronRight size={14} className="text-[#737373]" />
            )}
          </div>
        )}
        {!hasChildren && <div className="w-4" />}
        
        <div className="w-4 h-4 flex items-center justify-center">
          {node.type === 'folder' ? (
            isExpanded ? (
              <FolderOpen size={14} className="text-[#0968F6]" />
            ) : (
              <Folder size={14} className="text-[#0968F6]" />
            )
          ) : (
            <span className="text-[12px]">{node.icon || '📄'}</span>
          )}
        </div>

        <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] flex-1">
          {node.name}
        </span>

        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[#e5e5e5] rounded">
          <MoreVertical size={12} className="text-[#737373]" />
        </button>
      </div>

      {hasChildren && isExpanded && node.children?.map((child) => (
        <FileTreeNode key={child.id} node={child} level={level + 1} />
      ))}
    </div>
  );
}

export function ProjectDashboardPage() {
  const [activeTab, setActiveTab] = useState<'manage' | 'content'>('content');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);

  return (
    <div className="flex flex-1 h-full overflow-hidden bg-white relative">
      {/* Left Sidebar - File Tree */}
      <div className="w-[260px] border-r border-[#e5e5e5] flex flex-col bg-white">
        {/* File Tree Content */}
        <div className="flex-1 overflow-y-auto pt-2 px-2">
          {/* Folder Header with Actions */}
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[18px] text-[#252525] tracking-[-0.0762px]">Folder</p>
              <button className="w-[22px] h-[22px] flex items-center justify-center rounded hover:bg-[#f5f5f5]">
                <svg width="14" height="14" viewBox="0 0 8.16667 4.66667" fill="none">
                  <path d={svgPaths.p1d8d0700} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-4 h-4 hover:opacity-70">
                <RefreshCw size={16} className="text-[#525252]" />
              </button>
              <button className="w-4 h-4 hover:opacity-70">
                <ArrowUpDown size={16} className="text-[#525252]" />
              </button>
              <button className="w-4 h-4 hover:opacity-70">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33215 7.99716H12.6622" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M7.99716 3.33215V12.6622" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </svg>
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="mb-2">
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg h-[32px] flex items-center px-[9px] gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d={svgPaths.p8cdb700} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M12.25 12.25L9.74167 9.74167" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search..."
                className="flex-1 bg-transparent border-none outline-none font-['Geist:Regular',sans-serif] text-[12px] text-[#0a0a0a] placeholder:text-[#737373] h-[18px]"
              />
            </div>
          </div>

          {/* File Tree Nodes */}
          <div className="space-y-0">
            {/* pipeline-bike */}
            <div className="h-[28px] rounded flex items-center pl-2 pr-8 gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p3dcafc80} stroke="#0968F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">pipeline-bike</p>
            </div>

            {/* 1-dbo-sql */}
            <div className="h-[28px] rounded flex items-center pl-6 pr-8 gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p3dcafc80} stroke="#0968F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">1-dbo-sql</p>
            </div>

            {/* explorations */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 4.66667V14" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p8c8fb00} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">explorations</p>
            </div>

            {/* 02-Pipeline-event-c... */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p14020580} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p28fb3b80} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p4448ef0} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">02-Pipeline-event-c...</p>
            </div>

            {/* transformations */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 4.66667V14" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p8c8fb00} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">transformations</p>
            </div>

            {/* 2-step-python */}
            <div className="h-[28px] rounded flex items-center pl-6 pr-8 gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p3dcafc80} stroke="#0968F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">2-step-python</p>
            </div>

            {/* _dashboards */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 4.66667V14" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p8c8fb00} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">_dashboards</p>
            </div>

            {/* _resources */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 4.66667V14" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p8c8fb00} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">_resources</p>
            </div>

            {/* deployment */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={svgPaths.p65bd5f0} stroke="#0968F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">deployment</p>
            </div>

            {/* 00-SDP-Introduction */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p14020580} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p28fb3b80} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p4448ef0} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">00-SDP-Introduction</p>
            </div>

            {/* 01-pipeline-tutorial */}
            <div className="h-[28px] rounded flex items-center pl-10 pr-8 gap-1">
              <div className="w-4 h-0" />
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p14020580} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p28fb3b80} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p4448ef0} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] leading-[19.5px] text-[#0a0a0a] flex-1">01-pipeline-tutorial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Use Figma Flow Diagram Component */}
        <TopWindowTab />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <WorkflowContent isDrawerOpen={isDrawerOpen} />
          </div>
          {/* Pipeline Details Drawer */}
          <PipelineDetailsDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[48px] border-l border-[#e5e5e5] bg-white flex flex-col items-center pt-4 gap-4">
        {/* Information */}
        <button 
          className={`w-[34px] h-[34px] flex items-center justify-center rounded transition-colors ${
            isDrawerOpen 
              ? 'bg-[rgba(9,104,246,0.1)]' 
              : 'hover:bg-[#f5f5f5]'
          }`}
          title="Information"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path 
              d={svgPathsToolbar.p3dc49580} 
              stroke={isDrawerOpen ? '#0968F6' : '#737373'} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.4375" 
            />
            <path 
              d="M9 12V9" 
              stroke={isDrawerOpen ? '#0968F6' : '#737373'} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.4375" 
            />
            <path 
              d="M9 6H9.0075" 
              stroke={isDrawerOpen ? '#0968F6' : '#737373'} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.4375" 
            />
          </svg>
        </button>

        {/* Alert Rules */}
        <button className="w-[34px] h-[34px] flex items-center justify-center rounded hover:bg-[#f5f5f5]" title="Alert Rules">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d={svgPathsToolbar.p9e52100} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPathsToolbar.p12923b80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M15.75 9H16.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M13.875 3.375L13.5 3.75" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M1.5 9H2.25" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9 1.5V2.25" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M3.69675 3.69675L4.227 4.227" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9 9V13.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Instances */}
        <button className="w-[34px] h-[34px] flex items-center justify-center rounded hover:bg-[#f5f5f5]" title="Instances">
          <div className="h-[18px] overflow-clip relative w-[18px]">
            <div className="absolute inset-[8.33%_16.67%]">
              <div className="absolute inset-[-5%_-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5">
                  <path d={svgPathsToolbar.p3fd2d700} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]">
              <div className="absolute inset-[-16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                  <path d={svgPathsToolbar.p28bf0de0} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]">
              <div className="absolute inset-[-0.75px_-50%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1.5">
                  <path d="M2.25 0.75H0.75" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]">
              <div className="absolute inset-[-0.75px_-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.5">
                  <path d="M6.75 0.75H0.75" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]">
              <div className="absolute inset-[-0.75px_-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.5">
                  <path d="M6.75 0.75H0.75" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Version History */}
        <button className="w-[34px] h-[34px] flex items-center justify-center rounded hover:bg-[#f5f5f5]" title="Version History">
          <div className="h-[18px] overflow-clip relative w-[18px]">
            <div className="absolute inset-[8.33%]">
              <div className="absolute inset-[-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                  <path d={svgPathsToolbar.p37c15d80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4">
              <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.50016 7.50016">
                  <path d="M0.75 0.75V5.25L3.75 6.75" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Variables */}
        <button className="w-[34px] h-[34px] flex items-center justify-center rounded hover:bg-[#f5f5f5]" title="Variables">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d={svgPathsToolbar.p10f0d600} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
            <path d={svgPathsToolbar.p4c81e00} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
            <path d="M11.25 6.75L6.75 11.25" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
            <path d="M6.75 6.75L11.25 11.25" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          </svg>
        </button>

        {/* Auto-Retry */}
        <button className="w-[34px] h-[34px] flex items-center justify-center rounded hover:bg-[#f5f5f5]" title="Auto-Retry">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1.5 6.75L3.75 4.5L6 6.75" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
            <path d={svgPathsToolbar.p28337b16} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
            <path d={svgPathsToolbar.p17f84600} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
            <path d={svgPathsToolbar.p30888780} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          </svg>
        </button>
      </div>
    </div>
  );
}