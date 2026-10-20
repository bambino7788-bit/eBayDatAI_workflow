import svgPaths from "./svg-ef9zwrkraq";

function Icon() {
  return (
    <div className="absolute left-[83.74px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9943 15.9943">
        <g id="Icon">
          <path d={svgPaths.p139f1200} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pc092300} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[31.996px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[162.23px] not-italic text-[#252525] text-[14px] text-center top-[6.37px] tracking-[-0.1504px]">Clear All Filters</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12.905px] px-[11.996px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-solid border-t-[0.909px] inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}