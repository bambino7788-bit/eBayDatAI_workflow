function Tab() {
  return (
    <div className="bg-white content-stretch flex gap-[5.522px] items-center justify-center min-h-[26.689559936523438px] min-w-[26.689559936523438px] px-[7.363px] py-[3.681px] relative rounded-[9.203px] shadow-[0px_0.92px_2.761px_0px_rgba(0,0,0,0.1),0px_0.92px_1.841px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12.885px] tracking-[0.0644px] whitespace-nowrap">
        <p className="leading-[1.5]">All</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex gap-[5.522px] items-center justify-center min-h-[26.689559936523438px] min-w-[26.689559936523438px] px-[7.363px] py-[3.681px] relative rounded-[9.203px] shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12.885px] tracking-[0.0644px] whitespace-nowrap">
        <p className="leading-[1.5]">Starred</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex gap-[5.522px] items-center justify-center min-h-[26.689559936523438px] min-w-[26.689559936523438px] px-[7.363px] py-[3.681px] relative rounded-[9.203px] shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12.885px] tracking-[0.0644px] whitespace-nowrap">
        <p className="leading-[1.5]">SQL</p>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex gap-[5.522px] items-center justify-center min-h-[26.689559936523438px] min-w-[26.689559936523438px] px-[7.363px] py-[3.681px] relative rounded-[9.203px] shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12.885px] tracking-[0.0644px] whitespace-nowrap">
        <p className="leading-[1.5]">Python</p>
      </div>
    </div>
  );
}

export default function Tabs() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[2.761px] relative rounded-[9.203px] size-full" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}