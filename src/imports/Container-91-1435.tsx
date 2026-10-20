import svgPaths from "./svg-vy5tsmic1q";

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-0 top-[10.9px] w-[0.994px]" data-name="Primitive.div" />;
}

function Text() {
  return (
    <div className="absolute h-[16.001px] left-[8.99px] top-[2.9px] w-[37.386px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[0.45px]">Types:</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[47.52px] size-[11.996px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9957 11.9957">
        <g id="Icon">
          <path d={svgPaths.p14cef940} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999645" />
          <path d={svgPaths.p2abf4600} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999645" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#f2f2f5] border-[0.909px] border-[rgba(0,0,0,0)] border-solid h-[21.811px] left-[54.38px] overflow-clip rounded-[10px] top-0 w-[69.332px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#030213] text-[12px] top-[2.45px]">Model</p>
      <Icon />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <PrimitiveDiv />
      <Text />
      <Badge />
    </div>
  );
}