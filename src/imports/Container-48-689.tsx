import svgPaths from "./svg-oi13yogo94";

function IconPlay() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / play">
          <path d="M4 2L13.3333 8L4 14V2Z" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative">
        <IconPlay />
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Test Run</p>
      </div>
    </div>
  );
}

function IconSquareChartGantt() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / square-chart-gantt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / square-chart-gantt">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.33333 8H9.33333" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.33333 10.6667H10.6667" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative">
        <IconSquareChartGantt />
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Review</p>
      </div>
    </div>
  );
}

function IconRocket() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / rocket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_48_693)" id="Icon / rocket">
          <path d={svgPaths.p26265d80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2bf2d100} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pd918280} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pcbc4a80} id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_48_693">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative">
        <IconRocket />
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Deploy</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[30px] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center px-[2px] relative">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Container1 />
    </div>
  );
}