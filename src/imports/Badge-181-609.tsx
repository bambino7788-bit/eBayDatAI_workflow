import svgPaths from "./svg-671u8fz4fc";

export default function Badge() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[8px] size-full" data-name="Badge">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] px-[8px] py-[3px] relative size-full">
          <div className="relative shrink-0 size-[12px]" data-name="Left icon wrapper">
            <div className="absolute inset-[-5.01%_-5.99%_-6.02%_-5.09%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3291 13.3242">
                <g id="Left icon wrapper">
                  <path d={svgPaths.p2a377a00} fill="var(--fill-0, white)" id="Left icon" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.18px] whitespace-nowrap">
            <p className="leading-[1.5]">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}