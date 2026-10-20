import svgPaths from "./svg-a10285garl";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[36px] relative shrink-0" data-name="Breadcrumb">
      <Icon />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#737373] text-[14px] tracking-[0.07px]">{`Emily's Project`}</p>
      <IconChevronRight />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Notebook</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[7.363px] items-center relative shrink-0">
      <p className="font-['Market_Sans:Bold',sans-serif] leading-[25.769px] not-italic relative shrink-0 text-[#161616] text-[18.407px]">SQL Editor</p>
    </div>
  );
}

export default function PageTitleInfoAddOn() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Page Title/ Info Add-on">
      <Breadcrumb />
      <Frame />
    </div>
  );
}