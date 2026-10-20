function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[196.984px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#252525] text-[16px] top-0 tracking-[-0.3125px]">Customer Churn Prediction</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22px] relative rounded-[10px] shrink-0 w-[51.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#252525] text-[12px]">v1.3.0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Container">
      <Heading />
      <Text />
    </div>
  );
}