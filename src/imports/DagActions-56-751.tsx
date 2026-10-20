import svgPaths from "./svg-t4lmp26o27";

interface TooltipButtonProps {
  children: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

function TooltipButton({ children, tooltip, onClick, className, isActive }: TooltipButtonProps) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
      {/* Tooltip - 显示在右侧 */}
      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
        {tooltip}
        {/* Arrow - 指向左边 */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#0a0a0a]" />
      </div>
    </div>
  );
}

function AddPlusCircleNew({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[16px]"} data-name="Add, plus, circle, new">
      <div className="absolute inset-[8.33%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path clipRule="evenodd" d={svgPaths.p19f80800} fill="var(--fill-0, #717182)" fillRule="evenodd" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function EmailMessageAdd({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[16px]"} data-name="email/message-add-1">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.63%_-5.62%_-5.62%_-5.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8333">
            <path d={svgPaths.p16a2e200} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[35.42%] right-[35.42%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.75px_-16.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 1.5">
            <path d="M0.75 0.75H5.41667" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[35.42%] left-1/2 right-1/2 top-[35.42%]" data-name="Vector">
        <div className="absolute inset-[-16.07%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 6.16667">
            <path d="M0.75 5.41667V0.75" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[8px] relative shrink-0 w-[12px]">
      <div className="absolute inset-[0_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 8">
          <g id="Frame 427319466">
            <path d="M0.5 4H12.5" id="Vector 651" stroke="var(--stroke-0, #E5E5E5)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PointerIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pc084c80} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function HandIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_28_2776)" id="Icon">
          <path d={svgPaths.p3ad87100} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pd06b100} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p32664a60} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e686500} id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_28_2776">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OrganizeIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / blocks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / blocks">
          <path d={svgPaths.p2cfdb900} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ce77780} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MinimizeIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Full, screen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Full, screen">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p3b849300} fill="#717182" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2054e600} fill="#717182" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p31522680} fill="#717182" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export default function DagActionsReleased() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center p-[4px] relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" data-name="Dag Actions">
      {/* Pointer Mode (V) - Active */}
      <TooltipButton
        className="bg-[rgba(9,104,246,0.1)] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-[rgba(9,104,246,0.15)] transition-colors"
        tooltip="Pointer Mode (V)"
        isActive={true}
      >
        <PointerIcon />
      </TooltipButton>

      {/* Hand Mode (H) */}
      <TooltipButton
        className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
        tooltip="Hand Mode (H)"
      >
        <HandIcon />
      </TooltipButton>

      <Divider />

      {/* Organize Node (Command O) */}
      <TooltipButton
        className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
        tooltip="Organize Node (⌘O)"
      >
        <OrganizeIcon />
      </TooltipButton>

      {/* Minimize Canvas (F) */}
      <TooltipButton
        className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
        tooltip="Minimize Canvas (F)"
      >
        <MinimizeIcon />
      </TooltipButton>

      {/* Divider */}
      
    <Divider />
      
      {/* More Action */}
      <TooltipButton
        className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
        tooltip="More Action"
      >
        <MoreIcon />
      </TooltipButton>
    </div>
  );
}