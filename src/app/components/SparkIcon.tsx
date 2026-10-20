import svgPaths from "../../imports/svg-pee25uw1qq";

export function SparkIcon() {
  return (
    <div className="relative shrink-0 size-[37px]">
      {/* Background */}
      <div className="absolute bg-white inset-0 overflow-clip rounded-[6px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[6px]" />
      </div>
      
      {/* Icon */}
      <div className="absolute left-[6px] size-[24px] top-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_spark)">
            <g>
              <path d={svgPaths.p319f5300} fill="#FFD4C0" />
              <path clipRule="evenodd" d={svgPaths.p39297980} fill="#E25A1C" fillRule="evenodd" />
              <g>
                <path d={svgPaths.p3ee42000} fill="#E25A1C" />
                <path d={svgPaths.p3cec6880} fill="#E25A1C" />
                <path d={svgPaths.p3d629900} fill="#E25A1C" />
                <path d={svgPaths.p33a8ff80} fill="#E25A1C" />
                <path d={svgPaths.p16179880} fill="#E25A1C" />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_spark">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
