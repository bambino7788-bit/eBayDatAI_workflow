import svgPaths from "./svg-q2z4uo4p49";

function JobActions() {
  return (
    <div className="relative shrink-0 size-[7.875px]" data-name="job actions">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.87522 7.87522">
        <g clipPath="url(#clip0_12_232)" id="job actions">
          <path clipRule="evenodd" d={svgPaths.p3c56d300} fill="var(--fill-0, #363636)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #363636)" strokeWidth="0.328134" />
        </g>
        <defs>
          <clipPath id="clip0_12_232">
            <rect fill="white" height="7.87522" width="7.87522" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeBase() {
  return (
    <div className="bg-[#c7c7c7] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[2.625px]" data-name="_Badge base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[2.625px] items-center justify-center px-[5.25px] py-[2.625px] relative size-full">
          <JobActions />
        </div>
      </div>
    </div>
  );
}

export default function SucessFailedStatus() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="SUCESS-FAILED STATUS">
      <BadgeBase />
    </div>
  );
}