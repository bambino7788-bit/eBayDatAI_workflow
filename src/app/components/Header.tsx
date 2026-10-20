import { useState } from 'react';
import { Search, Bell, LayoutGrid, Sparkles } from 'lucide-react';

const projects = ["Demo Project", "Emily's Project", "Search Intelligence Project", "ML Experimentation Lab", "Data Governance Council"];

const PackageIcon = ({ color = "#155DFC" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33073 14.4815C7.53335 14.5985 7.76319 14.6601 7.99716 14.6601C8.23112 14.6601 8.46097 14.5985 8.66359 14.4815L13.3286 11.8158C13.531 11.6989 13.6991 11.5309 13.8161 11.3285C13.9331 11.1262 13.9948 10.8966 13.995 10.6629V5.33144C13.9948 5.09771 13.9331 4.86814 13.8161 4.66578C13.6991 4.46342 13.531 4.29538 13.3286 4.17852L8.66359 1.5128C8.46097 1.39581 8.23112 1.33423 7.99716 1.33423C7.76319 1.33423 7.53335 1.39581 7.33073 1.5128L2.66572 4.17852C2.4633 4.29538 2.29517 4.46342 2.1782 4.66578C2.06123 4.86814 1.99953 5.09771 1.99929 5.33144V10.6629C1.99953 10.8966 2.06123 11.1262 2.1782 11.3285C2.29517 11.5309 2.4633 11.6989 2.66572 11.8158L7.33073 14.4815Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
    <path d="M7.99716 14.6615V7.99716" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
    <path d="M2.19255 4.66501L7.99716 7.99716L13.8018 4.66501" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
    <path d="M4.99822 2.84566L10.9961 6.27777" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
  </svg>
);

export function Header({ aiActive = false, onAiClick }: { aiActive?: boolean; onAiClick?: () => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Emily's Project");

  return (
    <div className="h-16 bg-white border-b border-[rgba(0,0,0,0.1)] flex items-center px-6 flex-shrink-0 gap-4 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative z-50">

      {/* Project Switcher */}
      <div className="relative shrink-0">
        <button
          onClick={() => setIsDropdownOpen(v => !v)}
          className="flex items-center gap-3 h-9 px-3 border border-[rgba(0,0,0,0.1)] rounded-lg hover:bg-gray-50 transition-colors"
        >
          <PackageIcon />
          <span className="text-[14px] font-medium text-[#252525] whitespace-nowrap tracking-[-0.15px]">
            {selectedProject}
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`text-[#717182] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isDropdownOpen && (
          <>
            <div className="fixed inset-0 z-[9998]" onClick={() => setIsDropdownOpen(false)} />
            <div className="absolute left-0 top-[calc(100%+6px)] w-[220px] z-[9999] bg-white border border-[#e5e5e5] rounded-lg shadow-[0px_4px_16px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="py-1">
                {projects.map(project => (
                  <button
                    key={project}
                    onClick={() => { setSelectedProject(project); setIsDropdownOpen(false); }}
                    className="w-full px-4 py-[10px] text-[14px] text-left text-[#252525] hover:bg-[#f5f5f5] transition-colors leading-[1.4] tracking-[-0.1px]"
                  >
                    {project}
                  </button>
                ))}
              </div>
              <div className="border-t border-[#e5e5e5]">
                <button className="w-full flex items-center gap-2 px-4 py-[10px] text-[14px] text-[#155DFC] hover:bg-[#f5f5f5] transition-colors leading-[1.4]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  New Project
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-[10px] text-[14px] text-[#252525] hover:bg-[#f5f5f5] transition-colors leading-[1.4]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d="M11.3 4.7C11.5 5.1 11.6 5.5 11.6 6L13 6.8V7.2L11.6 8C11.5 8.5 11.3 8.9 11 9.3L11.1 10.8L10.7 11L9.4 10.2C9 10.4 8.5 10.5 8 10.6L7.2 12H6.8L6 10.6C5.5 10.5 5.1 10.3 4.7 10L3.2 10.1L3 9.7L3.8 8.4C3.6 8 3.5 7.5 3.4 7L2 6.2V5.8L3.4 5C3.5 4.5 3.7 4.1 4 3.7L3.9 2.2L4.3 2L5.6 2.8C6 2.6 6.5 2.5 7 2.4L7.8 1H8.2L9 2.4C9.5 2.5 9.9 2.7 10.3 3L11.8 2.9L12 3.3L11.2 4.6" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                  Manage Projects
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Search Bar — centered */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-[672px]">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#717182]" />
          </div>
          <input
            type="text"
            placeholder="Search or ask AI..."
            className="w-full h-9 pl-10 pr-10 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-lg text-sm text-[#252525] placeholder-[#717182] focus:outline-none focus:ring-1 focus:ring-blue-500 tracking-[-0.15px]"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <Sparkles className="h-4 w-4 text-[#717182]" />
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1 shrink-0">
        <button type="button" aria-label="Toggle AI drawer" aria-pressed={aiActive} onClick={onAiClick} className={`group relative flex items-center justify-center w-9 h-8 rounded-lg transition-colors ${onAiClick ? 'cursor-pointer' : ''} ${aiActive ? 'bg-[#e6f0ff] text-[#0968F6] hover:bg-[#dbeafe]' : 'text-[#717182] hover:text-[#252525] hover:bg-gray-100'}`}>
          <Sparkles size={16} />
          <span role="tooltip" className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-[4px] bg-[#0a0a0a] px-2 py-2 text-[12px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">{aiActive ? 'Close AI drawer' : 'Open AI drawer'}</span>
        </button>
        <button className="flex items-center justify-center w-9 h-8 rounded-lg text-[#717182] hover:text-[#252525] hover:bg-gray-100 transition-colors relative">
          <Bell size={16} />
          <span className="absolute top-0.5 right-0.5 w-[18px] h-[18px] bg-red-500 text-white text-[11px] font-medium flex items-center justify-center rounded-full leading-none">3</span>
        </button>
        <button className="flex items-center justify-center w-9 h-8 rounded-lg text-[#717182] hover:text-[#252525] hover:bg-gray-100 transition-colors">
          <LayoutGrid size={16} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-200 ml-1">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
