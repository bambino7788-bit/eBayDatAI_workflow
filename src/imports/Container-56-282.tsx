import svgPaths from "./svg-4fyykcxenq";

export default function RunOnlyActions() {
  return (
    <div className="h-[30px] rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[61px]" data-name="Container">
      <div className="bg-white h-full overflow-clip relative rounded-[inherit] w-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center px-[2px] relative">
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative cursor-pointer hover:bg-[#f5f5f5] rounded-[6px] transition-colors">
              <div className="relative shrink-0 size-[16px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Icon">
                    <path d={svgPaths.p3c8fdd80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
              <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Run</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
