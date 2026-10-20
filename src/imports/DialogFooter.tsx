function Button() {
  return (
    <button className="bg-white content-stretch cursor-pointer flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[7.5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Cancel</p>
      </div>
    </button>
  );
}

function Button1() {
  return (
    <div className="bg-[#0968f6] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[7.5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Create</p>
      </div>
    </div>
  );
}

function Al() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="AL">
      <Button />
      <Button1 />
    </div>
  );
}

export default function DialogFooter() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative size-full" data-name="Dialog Footer">
      <Al />
    </div>
  );
}