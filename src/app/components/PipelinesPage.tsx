import { useState } from 'react';
import { SlidersHorizontal, Search, Plus } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { useTabs } from '../contexts/TabContext';

// SVG paths for status icons
const svgPathsSkip = {
  p3c56d300: "M7.02179 2.83016V0.861352H6.28349V2.11253C5.71991 1.44363 4.85069 1.02526 3.90123 1.02526C2.33751 1.02526 0.9874 2.16076 0.869271 3.68216L0.859427 3.81456H1.59773L1.60856 3.70332C1.7129 2.62294 2.69238 1.76405 3.90025 1.76405C4.75471 1.76405 5.49695 2.19473 5.89366 2.83016H4.50073V3.56846H6.55075L7.02376 3.08856V2.83016H7.02179ZM3.94553 6.89082C4.20661 6.89082 4.457 6.7871 4.64161 6.60249C4.82622 6.41788 4.92993 6.1675 4.92993 5.90642C4.92993 5.64534 4.82622 5.39495 4.64161 5.21034C4.457 5.02573 4.20661 4.92201 3.94553 4.92201C3.68445 4.92201 3.43406 5.02573 3.24945 5.21034C3.06484 5.39495 2.96113 5.64534 2.96113 5.90642C2.96113 6.1675 3.06484 6.41788 3.24945 6.60249C3.43406 6.7871 3.68445 6.89082 3.94553 6.89082Z"
};

const svgPathsRunning = {
  pd0ea5c0: "M3.93761 0.656268V1.96881M3.93761 5.90642V7.21895M1.6177 1.6177L2.54632 2.54632M5.3289 5.3289L6.25752 6.25752M0.656268 3.93761H1.96881M5.90642 3.93761H7.21895M1.6177 6.25752L2.54632 5.3289M5.3289 2.54632L6.25752 1.6177"
};

const svgPathsSuccess = {
  p1713a3c0: "M6.56268 1.96881L2.95321 5.57828L1.31254 3.93761"
};

const svgPathsFailed = {
  p3a124cc0: "M5.90642 1.96881L1.96881 5.90642M1.96881 1.96881L5.90642 5.90642"
};

interface RunStatusData {
  status: 'success' | 'failed' | 'running' | 'skip';
  startTime: string;
  endTime: string;
}

interface PipelineRowData {
  id: string;
  title: string;
  description: string;
  projectName: string;
  lastDevVersion: string;
  createdAt: string;
  lastUpdatedBy: string;
  lastUpdatedDate: string;
  recentRuns: RunStatusData[];
}

const MOCK_PIPELINE_ROWS: PipelineRowData[] = [
  {
    id: '1',
    title: '[PROJ-3296] Buyer Mission & Intent Detection',
    description: 'Buyer mission and intent detection for enhanced customer understanding',
    projectName: 'Project Name',
    lastDevVersion: 'Version 1',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'success', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'skip', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'running', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  },
  {
    id: '2',
    title: '[PROJ-3300] Buyer Situational / contextual history (episodic memory)',
    description: 'Buyer situational and contextual history analysis using episodic memory',
    projectName: 'Project Name',
    lastDevVersion: 'Version 13',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'success', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'skip', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'running', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  },
  {
    id: '3',
    title: '[PROJ-3303] Query : LLM based expansions/ alternate representations',
    description: 'LLM-based query expansions and alternate representations for search',
    projectName: 'Project Name',
    lastDevVersion: 'Version 1',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'success', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'skip', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'running', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  },
  {
    id: '4',
    title: 'Customer Segmentation Analysis',
    description: 'K-means clustering analysis for customer behavior segmentation',
    projectName: 'Project Name',
    lastDevVersion: 'Version 1',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'success', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'skip', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'running', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  }
];

const MOCK_RELEASED_PIPELINE_ROWS: PipelineRowData[] = [
  {
    id: '1',
    title: '[PROJ-3296] Buyer Mission & Intent Detection',
    description: 'Buyer mission and intent detection for enhanced customer understanding',
    projectName: 'Project Name',
    lastDevVersion: '',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'running', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'success', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'success', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  },
  {
    id: '2',
    title: '[PROJ-3300] Buyer Situational / contextual history (episodic memory)',
    description: 'Buyer situational and contextual history analysis using episodic memory',
    projectName: 'Project Name',
    lastDevVersion: '',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'running', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'success', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'success', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  },
  {
    id: '3',
    title: '[PROJ-3303] Query : LLM based expansions/ alternate representations',
    description: 'LLM-based query expansions and alternate representations for search',
    projectName: 'Project Name',
    lastDevVersion: '',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'running', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'success', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'success', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  },
  {
    id: '4',
    title: 'Customer Segmentation Analysis',
    description: 'K-means clustering analysis for customer behavior segmentation',
    projectName: 'Project Name',
    lastDevVersion: '',
    createdAt: '2021-02-28 20:07:32',
    lastUpdatedBy: 'Sandy Wang',
    lastUpdatedDate: '2021-02-28 20:07:32',
    recentRuns: [
      { status: 'skip', startTime: '2021-02-28 19:00:00', endTime: '2021-02-28 19:30:00' },
      { status: 'running', startTime: '2021-02-28 18:00:00', endTime: '2021-02-28 18:45:00' },
      { status: 'success', startTime: '2021-02-28 17:00:00', endTime: '2021-02-28 17:15:00' },
      { status: 'success', startTime: '2021-02-28 16:00:00', endTime: '2021-02-28 16:50:00' },
      { status: 'success', startTime: '2021-02-28 15:00:00', endTime: '2021-02-28 15:40:00' },
      { status: 'success', startTime: '2021-02-28 14:00:00', endTime: '2021-02-28 14:35:00' },
      { status: 'success', startTime: '2021-02-28 13:00:00', endTime: '2021-02-28 13:25:00' },
      { status: 'success', startTime: '2021-02-28 12:00:00', endTime: '2021-02-28 12:40:00' },
      { status: 'failed', startTime: '2021-02-28 11:00:00', endTime: '2021-02-28 11:20:00' }
    ]
  }
];

function RunStatusIcon({ status, startTime, endTime }: { status: 'success' | 'failed' | 'running' | 'skip'; startTime: string; endTime: string }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getStatusConfig = () => {
    switch (status) {
      case 'success':
        return {
          bgColor: '#e0fae0',
          svgPath: svgPathsSuccess.p1713a3c0,
          strokeColor: '#3CC14E',
          strokeWidth: '0.984403',
          label: 'Success'
        };
      case 'failed':
        return {
          bgColor: '#ffdede',
          svgPath: svgPathsFailed.p3a124cc0,
          strokeColor: '#F02D2D',
          strokeWidth: '0.984403',
          label: 'Failed'
        };
      case 'running':
        return {
          bgColor: '#d3effe',
          svgPath: svgPathsRunning.pd0ea5c0,
          strokeColor: '#0099F0',
          strokeWidth: '1.05003',
          label: 'Running'
        };
      case 'skip':
        return {
          bgColor: '#c7c7c7',
          svgPath: svgPathsSkip.p3c56d300,
          fillColor: '#363636',
          strokeColor: '#363636',
          strokeWidth: '0.328134',
          label: 'Skip'
        };
      default:
        return {
          bgColor: '#c7c7c7',
          svgPath: svgPathsSkip.p3c56d300,
          fillColor: '#363636',
          strokeColor: '#363636',
          strokeWidth: '0.328134',
          label: 'Skip'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="relative">
      <div
        className="w-[24px] h-[24px] flex items-center justify-center rounded-[8px] cursor-pointer"
        style={{ backgroundColor: config.bgColor }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="w-[12px] h-[12px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.87522 7.87522">
            {status === 'skip' ? (
              <g clipPath="url(#clip0_12_232)">
                <path
                  clipRule="evenodd"
                  d={config.svgPath}
                  fill={config.fillColor}
                  fillRule="evenodd"
                  stroke={config.strokeColor}
                  strokeWidth={config.strokeWidth}
                />
                <defs>
                  <clipPath id="clip0_12_232">
                    <rect fill="white" height="7.87522" width="7.87522" />
                  </clipPath>
                </defs>
              </g>
            ) : status === 'running' ? (
              <g clipPath="url(#clip0_12_238)">
                <path
                  d={config.svgPath}
                  stroke={config.strokeColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={config.strokeWidth}
                />
                <defs>
                  <clipPath id="clip0_12_238">
                    <rect fill="white" height="7.87522" width="7.87522" />
                  </clipPath>
                </defs>
              </g>
            ) : (
              <g clipPath={`url(#clip0_${status})`}>
                <path
                  d={config.svgPath}
                  stroke={config.strokeColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={config.strokeWidth}
                />
                <defs>
                  <clipPath id={`clip0_${status}`}>
                    <rect fill="white" height="7.87522" width="7.87522" />
                  </clipPath>
                </defs>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#0a0a0a] text-white rounded-[6px] whitespace-nowrap z-10 shadow-lg">
          <div className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] tracking-[0.06px]">
            <div className="font-['Geist:Medium',sans-serif] font-medium mb-1">{config.label}</div>
            <div>Start: {startTime}</div>
            <div>End: {endTime}</div>
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#0a0a0a]" />
        </div>
      )}
    </div>
  );
}

export function PipelinesPage() {
  const [activeTab, setActiveTab] = useState<'Batch' | 'Streaming'>('Batch');
  const [activeStatusTab, setActiveStatusTab] = useState<'Released' | 'Developing'>('Developing');
  const { openTab } = useTabs();

  const handlePipelineClick = (pipeline: PipelineRowData) => {
    // Open a new DAG tab for this pipeline
    // Truncate title to fit in tab bar nicely
    const maxLength = 25;
    const truncatedTitle = pipeline.title.length > maxLength 
      ? pipeline.title.substring(0, maxLength) + '...' 
      : pipeline.title;
    
    openTab({
      type: 'pipeline-dag',
      title: truncatedTitle,
      closable: true,
      data: { pipelineId: pipeline.id }
    });
  };

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Emily's Project" },
          { label: "Pipelines" }
        ]} />
        
        {/* Page Title */}
        <div className="mb-2">
          <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] leading-[1.5] text-[#0a0a0a] tracking-[0.12px]">Pipeline</h1>
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] text-[#737373] tracking-[0.06px]">Manage pipelines under your project</p>
        </div>

        {/* Filter and Actions Row */}
        <div className="flex items-start justify-between mb-6 mt-8">
          {/* Left: Tabs + Filters + Search */}
          <div className="flex gap-4 items-center">
            {/* Batch/Streaming Tabs */}
            <div className="bg-[#f5f5f5] flex items-center p-[3px] rounded-[10px]">
              <button 
                onClick={() => setActiveTab('Batch')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeTab === 'Batch' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                Batch
              </button>
              <button 
                onClick={() => setActiveTab('Streaming')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeTab === 'Streaming' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                Streaming
              </button>
            </div>

            {/* Released/Developing Tabs */}
            <div className="bg-[#f5f5f5] flex items-center p-[3px] rounded-[10px]">
              <button 
                onClick={() => setActiveStatusTab('Released')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeStatusTab === 'Released' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                Released
              </button>
              <button 
                onClick={() => setActiveStatusTab('Developing')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeStatusTab === 'Developing' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#0a0a0a]'
                }`}
              >
                Developing
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

          {/* Right: Import and New Buttons */}
          <div className="flex gap-4 items-center">
            <button className="bg-[#f5f5f5] rounded-[8px] px-4 min-h-[36px] flex items-center">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#171717] tracking-[0.07px]">Import</span>
            </button>
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
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 px-6 py-3">
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Pipeline</div>
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Created at</div>
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">
                {activeStatusTab === 'Released' ? 'Last Released' : 'Last Updated'}
              </div>
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Recent Runs (Newest on left)</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#e5e5e5]">
            {(activeStatusTab === 'Developing' ? MOCK_PIPELINE_ROWS : MOCK_RELEASED_PIPELINE_ROWS).map((pipeline) => (
              <div 
                key={pipeline.id} 
                className="px-6 py-4 hover:bg-[#fafafa] transition-colors cursor-pointer" 
                onClick={() => handlePipelineClick(pipeline)}
              >
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 items-start">
                  {/* Pipeline Column */}
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">{pipeline.title}</h3>
                      {activeStatusTab === 'Developing' && pipeline.lastDevVersion && (
                        <div className="relative group">
                          <div className="h-[22px] rounded-[10px] px-[9px] py-[3px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center">
                            <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] text-[#252525] text-[12px]">
                              {`V ${pipeline.lastDevVersion.replace('Version', '').trim()}.0.0`}
                            </p>
                          </div>
                          {/* Tooltip */}
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                            Last Dev Version
                            {/* Arrow */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-[#0a0a0a]" />
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px] mb-1">{pipeline.description}</p>
                  </div>

                  {/* Created at Column */}
                  <div className="pt-1">
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">{pipeline.createdAt}</span>
                  </div>

                  {/* Last Updated/Released Column */}
                  <div className="pt-1">
                    <div className="flex flex-col gap-1">
                      <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                        <span className="text-[#737373]">by</span> {pipeline.lastUpdatedBy}
                      </p>
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">{pipeline.lastUpdatedDate}</span>
                    </div>
                  </div>

                  {/* Recent Runs Column */}
                  <div className="pt-1">
                    <div className="flex items-center gap-1.5">
                      {pipeline.recentRuns.map((status, index) => (
                        <RunStatusIcon key={index} status={status.status} startTime={status.startTime} endTime={status.endTime} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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