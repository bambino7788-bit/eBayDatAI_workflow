import svgPaths from "./svg-w6haj0ex8k";
import { useNodeSelection } from './NodeSelectionContext';

export function TaskSelector() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="task selector">
          <path d={svgPaths.p321d0500} fill="var(--fill-0, #C1D737)" id="Vector" />
          <path d={svgPaths.p1e31bb40} fill="var(--fill-0, #68770D)" id="Vector_2" />
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
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#51a755] border-solid border-t-2 inset-0 pointer-events-none" />
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
            <span className="font-['Geist:Regular',sans-serif] font-normal leading-[18px]">Data Quality</span>
          </p>
          <p className="leading-[18px]">Rule Type: SQL Metric</p>
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

function IconCircleCheck() {
  return (
    <div className="absolute left-[232px] size-[20px] top-[14px]" data-name="Icon / circle-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_29_5539)" id="Icon / circle-check">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #51A755)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #51A755)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_29_5539">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <TaskNode />
      <IconCircleCheck />
    </div>
  );
}