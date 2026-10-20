import svgPaths from "./svg-60mjrwpb6t";

function MenuItem({ text, isCurrent = false }: { text: string; isCurrent?: boolean }) {
  return (
    <div className={`h-[40px] min-h-[36px] relative rounded-[6px] shrink-0 w-full cursor-pointer ${isCurrent ? 'bg-[#f3f4f6]' : 'hover:bg-[#f5f5f5]'}`} data-name="Menu Item">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[16px] py-[7.5px] relative size-full gap-2">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
            <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] w-full">
              <p className="leading-[1.5] whitespace-pre-wrap">{text}</p>
            </div>
          </div>
          {isCurrent && (
            <div className="relative shrink-0 size-[16px] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#0968F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="content-stretch flex h-[9px] items-center relative shrink-0 w-full" data-name="Separator">
      <div className="bg-[#e5e5e5] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />
    </div>
  );
}

function NewProjectItem() {
  return (
    <div className="h-[40px] min-h-[36px] relative rounded-[6px] shrink-0 w-full hover:bg-[#f5f5f5] cursor-pointer" data-name="Menu Item">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center gap-[8px] min-h-[inherit] px-[16px] py-[7.5px] relative size-full">
          <div className="relative shrink-0 size-[16px] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.33215 7.99716H12.6622" stroke="#0968F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M7.99716 3.33215V12.6622" stroke="#0968F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </svg>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
            <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0968f6] text-[14px] tracking-[0.07px] w-full">
              <p className="leading-[1.5] whitespace-pre-wrap">New Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ManageProjectsItem() {
  return (
    <div className="h-[40px] min-h-[36px] relative rounded-[6px] shrink-0 w-full hover:bg-[#f5f5f5] cursor-pointer" data-name="Menu Item">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center gap-[8px] min-h-[inherit] px-[16px] py-[7.5px] relative size-full">
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3e1b7280} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p28db2b80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
            <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] w-full">
              <p className="leading-[1.5] whitespace-pre-wrap">Manage Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSelection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Team Selection">
      <MenuItem text="Demo Project" />
      <MenuItem text="Emily's Project" isCurrent={true} />
      <MenuItem text="Search Intelligence Project" />
      <MenuItem text="ML Experimentation Lab" />
      <MenuItem text="Data Governance Council" />
      <Separator />
      <NewProjectItem />
      <ManageProjectsItem />
    </div>
  );
}

export default function TopNavigationMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] size-full" data-name="TopNavigation Menu">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <TeamSelection />
    </div>
  );
}