import { useState } from 'react';
import { SlidersHorizontal, Search, Plus, Edit2, Archive, Users, Box, Copy } from 'lucide-react';
import svgPaths from "../../imports/svg-gl5y7adfji";
import IconBookMarked from "../../imports/IconBookMarked";
import { Breadcrumb } from './Breadcrumb';

// Type definitions
interface ArtifactData {
  id: string;
  type: 'pyspark' | 'flink';
  title: string;
  description: string;
  sourceRepo: string;
  owner: {
    name: string;
    avatar: string;
    initials: string;
    color: string;
  };
  principal: string;
  principalType: 'batch' | 'namespace';
  createdAt: string;
  updatedAt: string;
  lastImageBuildingTime: string;
  status: 'active' | 'inactive';
}

// Mock data
const MOCK_ARTIFACTS: ArtifactData[] = [
  {
    id: '1',
    type: 'pyspark',
    title: '[PROJ-3296] Buyer Mission & Intent Detection',
    description: 'Buyer mission and intent detection for enhanced customer understanding',
    sourceRepo: 'https://github.corp.ebay.com/frliu/frliu3/',
    owner: {
      name: 'JianZhong Chen',
      avatar: '',
      initials: 'J',
      color: '#84B4FB'
    },
    principal: 'b_dls_sub',
    principalType: 'batch',
    createdAt: 'a day ago',
    updatedAt: '2021-02-28 20:07:32',
    lastImageBuildingTime: '2025-02-25 01:26:00 GMT-7',
    status: 'active'
  },
  {
    id: '2',
    type: 'flink',
    title: '[PROJ-3300] Buyer Situational / contextual history (episodic memory)',
    description: 'Buyer situational and contextual history analysis using episodic memory',
    sourceRepo: 'https://github.corp.ebay.com/frliu/frliu3/',
    owner: {
      name: 'JianZhong Chen',
      avatar: '',
      initials: 'J',
      color: '#84B4FB'
    },
    principal: 'b_dls_sub',
    principalType: 'batch',
    createdAt: '2 day ago',
    updatedAt: '2021-02-28 20:07:32',
    lastImageBuildingTime: '2025-01-23 21:02:59 GMT-7',
    status: 'active'
  },
  {
    id: '3',
    type: 'flink',
    title: '[PROJ-3303] Query : LLM based expansions/ alternate representations',
    description: 'LLM-based query expansions and alternate representations for search',
    sourceRepo: 'https://github.corp.ebay.com/frliu/frliu3/',
    owner: {
      name: 'Sandy Wang',
      avatar: '',
      initials: 'S',
      color: '#FFB4D1'
    },
    principal: 'b_dls_sub',
    principalType: 'namespace',
    createdAt: '2 day ago',
    updatedAt: '2021-02-28 20:07:32',
    lastImageBuildingTime: '2026-01-29 20:04:40 GMT-7',
    status: 'active'
  },
  {
    id: '4',
    type: 'pyspark',
    title: 'Customer Segmentation Analysis',
    description: 'K-means clustering analysis for customer behavior segmentation',
    sourceRepo: 'https://github.corp.ebay.com/frliu/frliu3/',
    owner: {
      name: 'Sandy Wang',
      avatar: '',
      initials: 'S',
      color: '#FFB4D1'
    },
    principal: 'b_dls_sub',
    principalType: 'namespace',
    createdAt: 'a day ago',
    updatedAt: '2021-02-28 20:07:32',
    lastImageBuildingTime: '2025-11-17 18:18:19 GMT-7',
    status: 'active'
  }
];

// Pipeline type icon component
function PipelineTypeIcon({ type }: { type: 'pyspark' | 'flink' }) {
  if (type === 'pyspark') {
    return (
      <div className="absolute left-[6px] size-[24px] top-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_pyspark)">
            <g>
              <path d={svgPaths.p319f5300} fill="#FFD4C0" />
              <path clipRule="evenodd" d={svgPaths.p39297980} fill="#E25A1C" fillRule="evenodd" />
              <g>
                <path d={svgPaths.p3ee42000} fill="#E25A1C" />
                <path d={svgPaths.p3cec6880} fill="#E25A1C" />
                <path d={svgPaths.p3d629900} fill="#E25A1C" />
                <path d={svgPaths.p33a8ff80} fill="#E25A1C" />
                <path d={svgPaths.p16179880} fill="#E25A1C" />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_pyspark">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute left-[6px] size-[24px] top-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p116ebb00} fill="#FFCEE8" fillOpacity="0.5" />
          <path clipRule="evenodd" d={svgPaths.p1e418c00} fill="#E04D9D" fillRule="evenodd" />
          <g>
            <path d={svgPaths.p35181800} fill="#E04D9D" />
            <path d={svgPaths.p274d1170} fill="#E04D9D" />
            <path d={svgPaths.p2ca33f71} fill="#E04D9D" />
            <path d={svgPaths.pc655100} fill="#E04D9D" />
            <path d={svgPaths.p38f34b00} fill="#E04D9D" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Artifact row component
function ArtifactRow({ artifact }: { artifact: ArtifactData }) {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(artifact.sourceRepo);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      } else {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = artifact.sourceRepo;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1000);
        } finally {
          textArea.remove();
        }
      }
    } catch (err) {
      // If clipboard API fails, use fallback method
      const textArea = document.createElement('textarea');
      textArea.value = artifact.sourceRepo;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1000);
        }
      } catch (fallbackErr) {
        console.error('Copy failed:', fallbackErr);
      } finally {
        textArea.remove();
      }
    }
  };

  return (
    <div className="bg-white hover:bg-[#fafafa] transition-colors border-b border-[#e5e5e5]">
      <div className="flex gap-[10px] items-start px-6 py-4">
        {/* Type Icon */}
        <div className="relative shrink-0 size-[37px]">
          <div className="absolute bg-white inset-0 overflow-clip rounded-[6px]">
            <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[6px]" />
          </div>
          <PipelineTypeIcon type={artifact.type} />
        </div>

        {/* Application Info */}
        <div 
          className="flex flex-col gap-[3px] overflow-clip shrink-0 w-[417px]"
          onMouseEnter={() => setIsLinkHovered(true)}
          onMouseLeave={() => setIsLinkHovered(false)}
        >
          <h3 className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
            {artifact.title}
          </h3>
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] text-[#737373] tracking-[0.06px]">
            {artifact.description}
          </p>
          <div className="flex gap-[4px] items-center font-['Geist:Regular',sans-serif] text-[12px] leading-[1.5] tracking-[0.06px]">
            <div className="relative group">
              <div className="size-[14px] text-[#737373]">
                <IconBookMarked />
              </div>
              {/* Tooltip for icon */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-[100]">
                Source Repository
                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
              </div>
            </div>
            <a 
              href={artifact.sourceRepo} 
              className="text-[#0968F6] underline hover:no-underline flex items-center gap-1"
            >
              {artifact.sourceRepo}
              {isLinkHovered && (
                <div className="relative group/copy">
                  <button 
                    className="inline-flex items-center justify-center text-[#737373] hover:text-[#0a0a0a] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopyLink();
                    }}
                  >
                    <Copy size={12} />
                  </button>
                  {/* Copied tooltip */}
                  {isCopied && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none z-[100]">
                      Link copied!
                      {/* Arrow pointing down */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
                    </div>
                  )}
                </div>
              )}
            </a>
          </div>
        </div>

        {/* Owner */}
        <div className="flex-1 flex gap-2 items-center">
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" fill={artifact.owner.color} r="12" />
              </svg>
            </div>
            <div className="absolute flex flex-col inset-0 justify-center font-['Geist:SemiBold',sans-serif] font-semibold text-[12px] text-[#002a69] text-center">
              <p className="leading-none">{artifact.owner.initials}</p>
            </div>
          </div>
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
            {artifact.owner.name}
          </p>
        </div>

        {/* Principal */}
        <div className="flex-1 flex items-center gap-1.5">
          <div className="relative group">
            {artifact.principalType === 'batch' ? (
              <Users size={14} className="text-[#737373]" strokeWidth={2} />
            ) : (
              <Box size={14} className="text-[#737373]" strokeWidth={2} />
            )}
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
              {artifact.principalType === 'batch' ? 'Batch Account' : 'Namespace'}
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
            </div>
          </div>
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
            {artifact.principal}
          </p>
        </div>

        {/* Create at */}
        <div className="flex-1 flex justify-end">
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] text-right">
            {artifact.createdAt}
          </p>
        </div>

        {/* Updated */}
        <div className="flex-1 flex justify-end">
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] text-right">
            {artifact.updatedAt}
          </p>
        </div>

        {/* Last Image-building Time */}
        <div className="flex-1 flex justify-end">
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] text-right">
            {artifact.lastImageBuildingTime}
          </p>
        </div>

        {/* Status */}
        <div className="flex-1 flex justify-end">
          <span className="bg-[#d1fae5] text-[#065f46] px-[10px] py-[4px] rounded-full font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.06px]">
            Active
          </span>
        </div>

        {/* Action */}
        <div className="flex-1 flex justify-end gap-0">
          <button className="p-[10px] rounded-[32px] hover:bg-[#f5f5f5] transition-colors">
            <Edit2 size={16} className="text-[#0a0a0a]" />
          </button>
          <button className="p-[10px] rounded-[32px] hover:bg-[#f5f5f5] transition-colors">
            <Archive size={16} className="text-[#0a0a0a]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ArtifactsPage() {
  const [activeTypeTab, setActiveTypeTab] = useState<'Application' | 'Python Environment'>('Application');
  const [activeScopeTab, setActiveScopeTab] = useState<'My' | 'All' | 'Archived'>('My');

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Emily's Project" },
          { label: "Artifacts" }
        ]} />
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] leading-[1.5] text-[#0a0a0a] tracking-[0.12px]">Artifacts</h1>
        </div>

        {/* Filter and Actions Row */}
        <div className="flex items-start justify-between mb-6">
          {/* Left: Tabs + Filters + Search */}
          <div className="flex gap-4 items-center">
            {/* Type Tabs (Application/Python Environment) */}
            <div className="bg-[#f5f5f5] flex items-center p-[3px] rounded-[10px]">
              <button 
                onClick={() => setActiveTypeTab('Application')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${ 
                  activeTypeTab === 'Application' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                Application
              </button>
              <button 
                onClick={() => setActiveTypeTab('Python Environment')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${ 
                  activeTypeTab === 'Python Environment' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                Python Environment
              </button>
            </div>

            {/* Scope Tabs (My/All/Archived) */}
            <div className="bg-[#f5f5f5] flex items-center p-[3px] rounded-[10px]">
              <button 
                onClick={() => setActiveScopeTab('My')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${ 
                  activeScopeTab === 'My' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                My
              </button>
              <button 
                onClick={() => setActiveScopeTab('All')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${ 
                  activeScopeTab === 'All' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveScopeTab('Archived')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${ 
                  activeScopeTab === 'Archived' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                Archived
              </button>
            </div>

            {/* Filters Button */}
            <button className="bg-white border border-[#e5e5e5] rounded-[8px] px-4 min-h-[36px] flex items-center gap-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              <SlidersHorizontal size={14} className="text-[#0a0a0a]" />
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">Filters</span>
            </button>

            {/* Search Input */}
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[320px] min-h-[36px] flex items-center px-3 py-[7.5px]">
              <Search size={20} className="text-[#737373] mr-2" />
              <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] bg-transparent border-none outline-none placeholder:text-[#0a0a0a]"
              />
            </div>
          </div>

          {/* Right: New Button */}
          <div className="flex gap-4 items-center">
            <button className="bg-[#0968F6] rounded-[8px] px-4 min-h-[36px] flex items-center gap-2">
              <Plus size={13} className="text-[#fafafa]" />
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#fafafa] tracking-[0.07px]">New</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#fafafa] border-b border-[#e5e5e5]">
            <div className="flex gap-[10px] px-6 py-3">
              <div className="shrink-0 w-[37px] font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Type</div>
              <div className="shrink-0 w-[417px] font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Application</div>
              <div className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Owner</div>
              <div className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Principal</div>
              <div className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase text-right">Create at</div>
              <div className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase text-right">Updated</div>
              <div className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase text-right">Last Image-building Time</div>
              <div className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase text-right">Status</div>
              <div className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase text-right">Action</div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {MOCK_ARTIFACTS.map((artifact) => (
              <ArtifactRow key={artifact.id} artifact={artifact} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">Results per page:</span>
            <select className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] bg-white border border-[#e5e5e5] rounded-[8px] px-3 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-auto px-3 h-8 flex items-center justify-center border border-[#e5e5e5] rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">&lt;</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#f3f4f6] rounded-md">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">1</span>
            </button>
            <button className="w-auto px-3 h-8 flex items-center justify-center border border-[#e5e5e5] rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}