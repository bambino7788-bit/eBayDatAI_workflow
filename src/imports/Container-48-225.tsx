import svgPaths from "./svg-i517831occ";
import { imgGroup } from "./svg-rv0pt";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33215 7.99716H12.6622" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M7.99716 3.33215V12.6622" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">New</p>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[8px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text />
      <Text1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.32%_8.36%_8.36%_8.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.331px_-1.331px] mask-size-[16px_16px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-4.99%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6618 14.6618">
          <g id="Group">
            <path d={svgPaths.p191f7300} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            <path d="M12.6623 0.6666V3.33232" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            <path d="M13.9952 1.99946H11.3294" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            <path d={svgPaths.p1724ae80} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function SvgIcon1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Ask Neo</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[52px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2e627100} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p34fdb600} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon2 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Home</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[96px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.99716 4.66501V13.995" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.pd5f2f00} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon3 />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon3 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Catalog</p>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[140px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p8cf8380} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M2.06793 4.02124H13.9264" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p35edb600} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon4 />
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon4 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Data Product</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[184px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon5 />
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon5 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[19.5px] left-0 text-[#0a0a0a] text-[13px] top-0">{`Emily's Project`}</p>
      </div>
    </div>
  );
}

function IconArrowUpDown() {
  return (
    <div className="relative size-[16px]" data-name="Icon / arrow-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / arrow-up-down">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function NavItem5() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="NavItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Text10 />
          <Text11 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconArrowUpDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_14583)" id="Icon">
          <path d={svgPaths.p1d8ada00} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p196b2a00} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M7.99716 14.6615V13.3286" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M7.99716 1.33286V2.66572" id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M9.33002 7.99716H14.6615" id="Vector_5" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p32cc7300} id="Vector_6" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p341b3600} id="Vector_7" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M1.33286 7.99716H2.66572" id="Vector_8" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p224a3a65} id="Vector_9" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2b2cc500} id="Vector_10" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p22cb6080} id="Vector_11" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p199c5580} id="Vector_12" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p6135000} id="Vector_13" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p65ed680} id="Vector_14" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_24_14583">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgIcon6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon6 />
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon6 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Data Engineering</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.66%_22.25%_13.36%_11.11%]" data-name="Vector">
        <div className="absolute inset-[-8.32%_-16.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32858 9.32716">
            <path d={svgPaths.p32971880} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function NavItem6() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(235,235,235,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Text12 />
          <Text13 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_14885)" id="Icon">
          <path d="M7.99716 11.9957V3.33215" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p307ff100} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p93e5780} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p33dd0700} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p90bb700} id="Vector_5" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p192c4b00} id="Vector_6" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1550f540} id="Vector_7" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.pa1e7380} id="Vector_8" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_24_14885">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgIcon7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon8 />
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon7 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">AI Engineering</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.66%_22.25%_13.36%_11.11%]" data-name="Vector">
        <div className="absolute inset-[-8.32%_-16.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32858 9.32716">
            <path d={svgPaths.p32971880} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function NavItem7() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(235,235,235,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Text15 />
          <Text16 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_14676)" id="Icon">
          <path d={svgPaths.p2497b400} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p3d85e372} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p35152900} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.pb37b980} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M7.99716 7.99716V5.33144" id="Vector_5" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_24_14676">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgIcon8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon10 />
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon8 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Knowledge Graphs</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.66%_22.25%_13.36%_11.11%]" data-name="Vector">
        <div className="absolute inset-[-8.32%_-16.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32858 9.32716">
            <path d={svgPaths.p32971880} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function NavItem8() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(235,235,235,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Text18 />
          <Text19 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_14578)" id="Icon">
          <path d={svgPaths.p5826000} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1ef25100} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.peefc100} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_24_14578">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgIcon9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon12 />
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon9 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Shared Tools</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[6px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="-translate-x-1/2 absolute bottom-[13.36%] left-[calc(50%-0.4px)] top-[6.66%] w-[2.399px]" data-name="Vector">
        <div className="absolute inset-[-8.32%_-16.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.19715 5.5963">
            <path d={svgPaths.p250d1900} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.798" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[6px] relative w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function NavItem9() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(235,235,235,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[13px] pr-[11px] py-px relative size-full">
          <Text21 />
          <Text22 />
          <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[6px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Text23 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SubMenuItem() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="SubMenuItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Icon14 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252525] text-[13px] text-center tracking-[-0.0762px]">Notebooks</p>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14020580} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28fb3b80} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4448ef0} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SubMenuItem1() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="SubMenuItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Icon15 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252525] text-[13px] text-center tracking-[-0.0762px]">Pipelines</p>
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2bb95e00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14df0fc0} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 2.84666L11 6.27999" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SubMenuItem2() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="SubMenuItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Icon16 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252525] text-[13px] text-center tracking-[-0.0762px]">Artifacts</p>
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SubMenuItem3() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="SubMenuItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Icon17 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252525] text-[13px] text-center tracking-[-0.0762px]">UDFs</p>
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12ab1a00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2daff3c0} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SubMenuItem4() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="SubMenuItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
          <Icon18 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252525] text-[13px] text-center tracking-[-0.0762px]">Golden Docker Images</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[176px] items-start relative shrink-0 w-[202px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(235,235,235,0)] border-solid inset-0 pointer-events-none" />
      <SubMenuItem />
      <SubMenuItem1 />
      <SubMenuItem2 />
      <SubMenuItem3 />
      <SubMenuItem4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f6f6f6] content-stretch flex flex-col gap-[4px] items-end left-[8px] py-[8px] rounded-[16px] top-[233px] w-[238px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <NavItem5 />
      <NavItem6 />
      <NavItem7 />
      <NavItem8 />
      <NavItem9 />
      <Container1 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_16082)" id="Icon">
          <path d={svgPaths.p21404e00} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p395b7a00} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M3.99858 3.99858H4.00524" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M3.99858 11.9957H4.00524" id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_24_16082">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgIcon10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon19 />
    </div>
  );
}

function Text24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon10 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Data Serving</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.66%_22.25%_13.36%_11.11%]" data-name="Vector">
        <div className="absolute inset-[-8.32%_-16.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32858 9.32716">
            <path d={svgPaths.p32971880} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function NavItem10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[654px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text24 />
      <Text25 />
      <Text26 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2545c340} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1f301500} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon21 />
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon11 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Operations</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.66%_22.25%_13.36%_11.11%]" data-name="Vector">
        <div className="absolute inset-[-8.32%_-16.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32858 9.32716">
            <path d={svgPaths.p32971880} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function NavItem11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[698px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text27 />
      <Text28 />
      <Text29 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p239e0700} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p35d35500} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon23 />
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon12 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Alerts</p>
      </div>
    </div>
  );
}

function NavItem12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[742px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text30 />
      <Text31 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_16157)" id="Icon">
          <path d={svgPaths.p2e209400} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p284f1000} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M7.99716 11.3293H8.00382" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_24_16157">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgIcon13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="SvgIcon">
      <Icon24 />
    </div>
  );
}

function Text32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SvgIcon13 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">Support</p>
      </div>
    </div>
  );
}

function NavItem13() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[786px] w-[238px]" data-name="NavItem">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text32 />
      <Text33 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
      <Frame />
      <NavItem10 />
      <NavItem11 />
      <NavItem12 />
      <NavItem13 />
    </div>
  );
}