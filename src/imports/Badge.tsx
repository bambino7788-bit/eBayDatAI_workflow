export default function Badge() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[3px] relative rounded-[8px] size-full" data-name="Badge">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">Version1.0.0</p>
      </div>
    </div>
  );
}