import svgPaths from "./svg-wzxzbjnmcd";
import { useNodeSelection } from './NodeSelectionContext';

export function TaskSelector() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="task selector">
          <path d={svgPaths.pc0f0100} fill="var(--fill-0, #F9BBB8)" id="Vector" />
          <path d={svgPaths.p2c4af080} fill="var(--fill-0, #F55E55)" id="Vector_2" />
          <path d={svgPaths.p2bfe0100} fill="var(--fill-0, #FFDEAD)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p13c96600} fill="var(--fill-0, #3D3D63)" fillRule="evenodd" id="Vector_4" />
        </g>
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
            <span className="font-['Geist:Regular',sans-serif] font-normal leading-[18px]">Depende Touch</span>
          </p>
          <p className="leading-[18px] mb-0">Source: Hive</p>
          <p className="leading-[18px]">Sink: Pronto</p>
        </div>
      </div>
    </div>
  );
}

export default function TaskNode() {
  const isSelected = useNodeSelection();
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Task Node">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component />
        <Frame />
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[13px] transition-colors ${isSelected ? 'border-[#0968F6] shadow-none' : 'border-[#e5e5e5] shadow-[0px_0px_6.3px_0px_rgba(0,0,0,0.1)]'}`} />
    </div>
  );
}