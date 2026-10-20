export default function Badge() {
  return (
    <div className="bg-[#171717] relative rounded-[8px] size-full" data-name="Badge">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] px-[8px] py-[3px] relative size-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
            <p className="leading-[1.5]">Badge</p>
          </div>
        </div>
      </div>
    </div>
  );
}