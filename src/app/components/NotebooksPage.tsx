import { Book, FileCode, Star, FileText, Search, SlidersHorizontal, Upload, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { StatCard } from './StatCard';
import { SparkIcon } from './SparkIcon';
import { FlinkIcon } from './FlinkIcon';
import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';

interface NotebookRowData {
  id: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  projectName: string;
  releaseSchedule: string;
  type: 'Spark' | 'Flink';
  lastUpdated: string;
  runStatus: 'Success' | 'Failed' | 'Running' | 'Not Scheduled';
  nextRunTime: string;
  starred: boolean;
}

interface FilterState {
  types: string[];
  statuses: string[];
  schedules: string[];
}

const MOCK_NOTEBOOK_ROWS: NotebookRowData[] = [
  {
    id: '1',
    icon: '🔥',
    iconBg: 'bg-orange-100',
    title: '[PROJ-3296] Buyer Mission & Intent Detection',
    description: 'Buyer mission and intent detection for enhanced customer understanding',
    projectName: 'Project Name',
    releaseSchedule: 'Released - Weekly',
    type: 'Spark',
    lastUpdated: 'a day ago',
    runStatus: 'Success',
    nextRunTime: '2021-02-28\n20:07:32',
    starred: true
  },
  {
    id: '2',
    icon: '🔮',
    iconBg: 'bg-pink-100',
    title: '[PROJ-3300] Buyer Situational / contextual history (episodic memory)',
    description: 'Buyer situational and contextual history analysis using episodic memory',
    projectName: 'Project Name',
    releaseSchedule: 'Released - Monthly',
    type: 'Flink',
    lastUpdated: '2 day ago',
    runStatus: 'Success',
    nextRunTime: '2021-02-28\n20:07:32',
    starred: false
  },
  {
    id: '3',
    icon: '🔮',
    iconBg: 'bg-pink-100',
    title: '[PROJ-3303] Query : LLM based expansions/ alternate representations',
    description: 'LLM-based query expansions and alternate representations for search',
    projectName: 'Project Name',
    releaseSchedule: 'Released - Daily',
    type: 'Flink',
    lastUpdated: '2 day ago',
    runStatus: 'Success',
    nextRunTime: '2021-02-28\n20:07:32',
    starred: true
  },
  {
    id: '4',
    icon: '🔥',
    iconBg: 'bg-orange-100',
    title: 'Customer Segmentation Analysis',
    description: 'K-means clustering analysis for customer behavior segmentation',
    projectName: 'Project Name',
    releaseSchedule: 'Not Scheduled',
    type: 'Spark',
    lastUpdated: 'a day ago',
    runStatus: 'Not Scheduled',
    nextRunTime: '-',
    starred: false
  }
];

export function NotebooksPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [notebooks, setNotebooks] = useState(MOCK_NOTEBOOK_ROWS);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    statuses: [],
    schedules: []
  });

  const toggleStar = (id: string) => {
    setNotebooks(notebooks.map(notebook => 
      notebook.id === id ? { ...notebook, starred: !notebook.starred } : notebook
    ));
  };

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      types: [],
      statuses: [],
      schedules: []
    });
  };

  const hasActiveFilters = filters.types.length > 0 || filters.statuses.length > 0 || filters.schedules.length > 0;

  // Filter notebooks based on active tab and filters
  const filteredNotebooks = notebooks.filter(notebook => {
    // Tab filter
    if (activeTab === 'Starred' && !notebook.starred) return false;
    if (activeTab === 'SQL' && notebook.type !== 'Flink') return false;
    if (activeTab === 'Python' && notebook.type !== 'Spark') return false;

    // Type filter
    if (filters.types.length > 0 && !filters.types.includes(notebook.type)) return false;

    // Status filter
    if (filters.statuses.length > 0 && !filters.statuses.includes(notebook.runStatus)) return false;

    // Schedule filter
    if (filters.schedules.length > 0) {
      const scheduleCategory = notebook.releaseSchedule.includes('Released') ? 'Released' : 'Not Scheduled';
      if (!filters.schedules.includes(scheduleCategory)) return false;
    }

    return true;
  });

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Emily's Project" },
          { label: "Notebooks" }
        ]} />
        
        {/* Page Title */}
        <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] leading-[1.5] text-[#0a0a0a] tracking-[0.12px] mb-6">SQL Editor</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Notebooks" 
            value="11" 
            icon={<Book size={20} />} 
            iconBgClass="bg-[rgba(9,104,246,0.1)]"
            iconColorClass="text-[#0968F6]"
          />
          <StatCard 
            title="Python Notebooks" 
            value="8" 
            icon={<FileCode size={20} />} 
            iconBgClass="bg-blue-100"
            iconColorClass="text-blue-600"
          />
          <StatCard 
            title="Starred" 
            value="7" 
            icon={<Star size={20} fill="currentColor" />} 
            iconBgClass="bg-yellow-100"
            iconColorClass="text-yellow-600"
          />
          <StatCard 
            title="Total Cells" 
            value="538" 
            icon={<FileText size={20} />} 
            iconBgClass="bg-blue-50"
            iconColorClass="text-blue-500"
          />
        </div>

        {/* Filter and Actions Row */}
        <div className="flex items-start justify-between mb-6">
          {/* Left: Tabs + Filters + Search */}
          <div className="flex gap-4 items-center">
            {/* Tabs */}
            <div className="bg-[#f5f5f5] flex items-center p-[3px] rounded-[10px]">
              <button 
                onClick={() => setActiveTab('All')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeTab === 'All' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#737373]'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('Starred')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeTab === 'Starred' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#737373]'
                }`}
              >
                Starred
              </button>
              <button 
                onClick={() => setActiveTab('SQL')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeTab === 'SQL' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#737373]'
                }`}
              >
                SQL
              </button>
              <button 
                onClick={() => setActiveTab('Python')}
                className={`px-4 py-[7px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] rounded-[8px] transition-all ${
                  activeTab === 'Python' 
                    ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                    : 'text-[#737373]'
                }`}
              >
                Python
              </button>
            </div>

            {/* Filters Button */}
            <button 
              className="bg-white border border-[#e5e5e5] rounded-[8px] px-4 min-h-[36px] flex items-center gap-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              onClick={() => setShowFilters(!showFilters)}
            >
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
          <button className="bg-[#0968F6] rounded-[8px] px-4 min-h-[36px] flex items-center gap-2">
            <Plus size={13} className="text-[#fafafa]" />
            <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#fafafa] tracking-[0.07px]">New</span>
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-[8px] px-4 py-3 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">Filters</h3>
              <button 
                className="text-[#0968f6] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px]"
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            </div>

            {/* Type Filter */}
            <div className="mb-4">
              <h4 className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase mb-2">Type</h4>
              <div className="flex items-center gap-2">
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.types.includes('Spark') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('types', 'Spark')}
                >
                  Spark
                </button>
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.types.includes('Flink') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('types', 'Flink')}
                >
                  Flink
                </button>
              </div>
            </div>

            {/* Status Filter */}
            <div className="mb-4">
              <h4 className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase mb-2">Status</h4>
              <div className="flex items-center gap-2">
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.statuses.includes('Success') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('statuses', 'Success')}
                >
                  Success
                </button>
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.statuses.includes('Failed') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('statuses', 'Failed')}
                >
                  Failed
                </button>
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.statuses.includes('Running') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('statuses', 'Running')}
                >
                  Running
                </button>
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.statuses.includes('Not Scheduled') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('statuses', 'Not Scheduled')}
                >
                  Not Scheduled
                </button>
              </div>
            </div>

            {/* Schedule Filter */}
            <div className="mb-4">
              <h4 className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase mb-2">Schedule</h4>
              <div className="flex items-center gap-2">
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.schedules.includes('Released') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('schedules', 'Released')}
                >
                  Released
                </button>
                <button 
                  className={`px-2 py-1 bg-[#e5e5e5] rounded-[4px] text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] ${
                    filters.schedules.includes('Not Scheduled') ? 'bg-[#0968f6] text-[#fafafa]' : ''
                  }`}
                  onClick={() => toggleFilter('schedules', 'Not Scheduled')}
                >
                  Not Scheduled
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#fafafa] border-b border-[#e5e5e5]">
            <div className="grid grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 px-6 py-3">
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Type</div>
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Notebook</div>
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Last updated</div>
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Last run status</div>
              <div className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#737373] tracking-[0.48px] uppercase">Next run time</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#e5e5e5]">
            {filteredNotebooks.map((notebook) => (
              <div key={notebook.id} className="px-6 py-4 hover:bg-[#fafafa] transition-colors group">
                <div className="grid grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 items-center">
                  {/* Type Column */}
                  <div>
                    {notebook.type === 'Spark' ? <SparkIcon /> : <FlinkIcon />}
                  </div>

                  {/* Notebook Column */}
                  <div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">{notebook.title}</h3>
                        <button 
                          onClick={() => toggleStar(notebook.id)}
                          className={`flex-shrink-0 hover:scale-110 transition-all ${
                            notebook.starred ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                        >
                          <Star 
                            size={16} 
                            className={notebook.starred ? "text-yellow-500 fill-yellow-500" : "text-[#737373]"}
                          />
                        </button>
                      </div>
                      <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] text-[#737373] tracking-[0.06px] mb-1.5 line-clamp-1">{notebook.description}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] text-[#737373] tracking-[0.06px]">from</span>
                        <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.06px]">{notebook.projectName}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className={`w-2 h-2 rounded-full ${
                          notebook.releaseSchedule === 'Not Scheduled' ? 'bg-gray-400' : 'bg-green-500'
                        }`} />
                        <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] text-[#737373] tracking-[0.06px]">{notebook.releaseSchedule}</span>
                      </div>
                    </div>
                  </div>

                  {/* Last Updated Column */}
                  <div>
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">{notebook.lastUpdated}</span>
                  </div>

                  {/* Last Run Status Column */}
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${
                      notebook.runStatus === 'Success' 
                        ? 'bg-[#d1fae5] text-[#065f46]'
                        : notebook.runStatus === 'Failed'
                        ? 'bg-[#fee2e2] text-[#991b1b]'
                        : notebook.runStatus === 'Running'
                        ? 'bg-[#dbeafe] text-[#1e40af]'
                        : 'bg-transparent border border-[#e5e5e5] text-[#737373]'
                    }`}>
                      {notebook.runStatus === 'Success' && <span className="text-[10px]">✓</span>}
                      {notebook.runStatus === 'Failed' && <span className="text-[10px]">✕</span>}
                      {notebook.runStatus === 'Running' && <span className="text-[10px]">●</span>}
                      <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.06px]">{notebook.runStatus}</span>
                    </span>
                  </div>

                  {/* Next Run Time Column */}
                  <div>
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] whitespace-pre-line">{notebook.nextRunTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">Showing 1-10 of 100 products</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-auto px-3 h-8 flex items-center justify-center border border-[#e5e5e5] rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft size={16} className="text-[#6b7280] mr-1" />
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">Previous</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#f3f4f6] rounded-md">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">1</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#e5e7eb] rounded-md hover:bg-gray-50">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">2</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#e5e7eb] rounded-md hover:bg-gray-50">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">3</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#e5e7eb] rounded-md hover:bg-gray-50">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">4</span>
            </button>
            <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#6b7280] tracking-[0.07px]">...</span>
            <button className="w-8 h-8 flex items-center justify-center border border-[#e5e7eb] rounded-md hover:bg-gray-50">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">10</span>
            </button>
            <button className="w-auto px-3 h-8 flex items-center justify-center border border-[#e5e5e5] rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">Next</span>
              <ChevronRight size={16} className="text-[#6b7280] ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}