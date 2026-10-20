import svgPaths from "./svg-skecc0svnm";
import { useNodeSelection } from './NodeSelectionContext';

export function TaskSelector() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_24_14911)" id="task selector">
          <g id="pipeline type">
            <path d={svgPaths.pdad6a00} fill="var(--fill-0, #60DAFF)" id="Vector" />
            <path d={svgPaths.p2ef1f700} fill="var(--fill-0, #65BEE7)" id="Vector_2" />
            <path d={svgPaths.p2ecda780} fill="var(--fill-0, #599CDA)" id="Vector_3" />
            <path d={svgPaths.p130ec80} fill="var(--fill-0, #C7C7C7)" id="Vector_4" />
            <path d={svgPaths.p69a8000} fill="var(--fill-0, #65BEE7)" id="Vector_5" />
            <path d={svgPaths.p241b18c0} fill="var(--fill-0, #599CDA)" id="Vector_6" />
            <path d={svgPaths.p15a84100} fill="var(--fill-0, #C7C7C7)" id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_24_14911">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function JobActions() {
  return (
    <div className="h-[15.059px] relative shrink-0 w-[16px]" data-name="job actions">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.0588">
        <g id="job actions">
          <rect fill="var(--fill-0, white)" height="15.0588" rx="2" width="16" />
          <path clipRule="evenodd" d={svgPaths.p3f6f7280} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 233">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[13px] px-[8px] relative w-full">
          <TaskSelector />
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal h-full leading-[19.5px] min-h-px min-w-px relative text-[#0a0a0a] text-[13px] whitespace-pre-wrap">NudataEL_extract___ROOT_...</p>
          <JobActions />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#a2a2a2] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[8px] px-[8px] relative w-full">
        <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#737373] text-[12px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">
            <span className="leading-[18px]">{`Type: `}</span>
            <span className="font-['Geist:Regular',sans-serif] font-normal leading-[18px]">Pipeline Template</span>
          </p>
          <p className="leading-[18px]">Version: 3</p>
        </div>
      </div>
    </div>
  );
}

function TaskNode() {
  const isSelected = useNodeSelection();
  return (
    <div className="absolute bg-white left-0 rounded-[12px] top-0 w-[260px]" data-name="Task Node">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Component />
        <Frame />
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[13px] transition-colors ${isSelected ? 'border-[#0968F6] shadow-none' : 'border-[#e5e5e5] shadow-[0px_0px_6.3px_0px_rgba(0,0,0,0.1)]'}`} />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path d={svgPaths.p3b397100} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#0968f6] content-stretch flex gap-[8px] items-start -left-7 p-[6px] rounded-bl-[8px] rounded-tl-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] top-0" data-name="Button">
      <Plus />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <TaskNode />
      <Button />
    </div>
  );
}