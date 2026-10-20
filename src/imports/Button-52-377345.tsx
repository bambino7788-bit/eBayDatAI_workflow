import svgPaths from "./svg-53885me4bc";

function IconInfo() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon / info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_38_16165)" id="Icon / info">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d="M9 12V9" id="Vector_2" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d="M9 6H9.0075" id="Vector_3" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
        </g>
        <defs>
          <clipPath id="clip0_38_16165">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(9,104,246,0.1)] content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[8px] size-full" data-name="Button">
      <IconInfo />
    </div>
  );
}