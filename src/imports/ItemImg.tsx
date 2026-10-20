import svgPaths from "./svg-pee25uw1qq";

function TransactionIconDWeb() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip rounded-[5.875px]" data-name="Transaction icon - dWeb">
      <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[5.875px]" data-name="5% shade" />
    </div>
  );
}

function TransactionImageTile() {
  return (
    <div className="relative shrink-0 size-[36.718px]" data-name="Transaction image tile">
      <TransactionIconDWeb />
    </div>
  );
}

function PipelineType() {
  return (
    <div className="absolute left-[6.01px] size-[24px] top-[6px]" data-name="pipeline type">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_10_28109)" id="pipeline type">
          <g id="Pyspark Yarn">
            <path d={svgPaths.p319f5300} fill="var(--fill-0, #FFD4C0)" id="Star 3" />
            <path clipRule="evenodd" d={svgPaths.p39297980} fill="var(--fill-0, #E25A1C)" fillRule="evenodd" id="Vector" />
            <g id="SPARK">
              <path d={svgPaths.p3ee42000} fill="var(--fill-0, #E25A1C)" id="Vector_2" />
              <path d={svgPaths.p3cec6880} fill="var(--fill-0, #E25A1C)" id="Vector_3" />
              <path d={svgPaths.p3d629900} fill="var(--fill-0, #E25A1C)" id="Vector_4" />
              <path d={svgPaths.p33a8ff80} fill="var(--fill-0, #E25A1C)" id="Vector_5" />
              <path d={svgPaths.p16179880} fill="var(--fill-0, #E25A1C)" id="Vector_6" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_10_28109">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ItemImg() {
  return (
    <div className="content-stretch flex gap-[7.779px] items-center relative size-full" data-name="item img">
      <TransactionImageTile />
      <PipelineType />
    </div>
  );
}