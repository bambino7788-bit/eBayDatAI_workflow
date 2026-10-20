import svgPaths2 from "./svg-oi13yogo94";

function Button7() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative">
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d="M4 2L13.3333 8L4 14V2Z" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Test Run</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative">
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths2.p19d57600} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M6 5.33333H10.6667" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M5.33333 8H9.33333" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M7.33333 10.6667H10.6667" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Review</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative">
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g clipPath="url(#clip0_rocket)">
              <path d={svgPaths2.p26265d80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths2.p2bf2d100} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths2.pd918280} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths2.pcbc4a80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <defs>
              <clipPath id="clip0_rocket">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Deploy</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center px-[2px] relative">
        <Button7 />
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

export default function Container6() {
  return (
    <div className="h-[30px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container7 />
      </div>
    </div>
  );
}
