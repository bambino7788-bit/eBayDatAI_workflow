import svgPaths from "./svg-5hs18w59im";

function LeftIconWrapper() {
  return (
    <div className="relative shrink-0 size-[13.25px]" data-name="Left icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.25 13.25">
        <g id="Left icon wrapper">
          <path d={svgPaths.p125e98c0} fill="var(--fill-0, #FAFAFA)" id="Left icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0968f6] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[7.5px] relative rounded-[8px] shrink-0" data-name="Button">
      <LeftIconWrapper />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Add Account</p>
      </div>
    </div>
  );
}

export default function Action() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Action">
      <Button />
    </div>
  );
}