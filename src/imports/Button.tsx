import svgPaths from "./svg-rpgy1npi92";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[122.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[61px] not-italic text-[#252525] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">Project Dashboard</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="shrink-0 size-0" data-name="Container" />;
}

function OptimizedDesign() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[48px] top-[10px] w-[179px]" data-name="OptimizedDesign">
      <Text />
      <Container />
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Button">
      <Icon />
      <OptimizedDesign />
    </div>
  );
}