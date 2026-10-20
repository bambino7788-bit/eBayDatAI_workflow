import svgPaths from "./svg-72mq0zx572";

function Icon1() {
  return (
    <div className="h-[4.656px] relative shrink-0 w-[8.156px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.65625" preserveAspectRatio="none" viewBox="0 0 8.15625 4.65625" width="8.15625">
        <g clipPath="url(#clip0_0_277)" id="Icon">
          <path d={svgPaths.p25d6a880} id="Vector" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16462" />
        </g>
        <defs>
          <clipPath id="clip0_0_277">
            <rect fill="white" height="4.65625" width="8.15625" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.92px] top-[4.67px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon">
      <Container />
    </div>
  );
}

function Button() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[22px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex flex-col items-start pt-[4px] px-[4px] relative rounded-[4px] size-[22px]" data-name="Button">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252525] text-[13px] text-center tracking-[-0.0762px] whitespace-nowrap">New Chat</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Button />
      <Paragraph />
    </div>
  );
}

function IconPlus1() {
  return (
    <div className="absolute contents inset-[20.83%]" data-name="Icon / plus">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.63px_-6.7%]">
          <svg className="block size-full" fill="none" height="1.25" preserveAspectRatio="none" viewBox="0 0 10.5834 1.25" width="10.5834">
            <path d="M0.625 0.625H9.95837" id="Vector" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector_2">
        <div className="absolute inset-[-6.7%_-0.63px]">
          <svg className="block size-full" fill="none" height="10.5834" preserveAspectRatio="none" viewBox="0 0 1.25 10.5834" width="1.25">
            <path d="M0.625 0.625V9.95837" id="Vector_2" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconPlus1 />
    </div>
  );
}

function IconPlus() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="IconPlus">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p150f5b00} id="Vector_2" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Frame1">
      <IconPlus />
      <Container1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="border-[#e5e5e5] border-b border-solid content-stretch flex h-[40px] items-center justify-between px-[12px] py-[8px] relative shrink-0 w-full" data-name="Frame2">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="49" preserveAspectRatio="none" viewBox="0 0 49 49" width="49">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p3f33f800} fill="url(#paint0_linear_0_311)" />
            <path d={svgPaths.p3f33f800} fill="url(#paint1_linear_0_311)" />
            <path d={svgPaths.p3f33f800} stroke="url(#paint2_linear_0_311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </g>
          <path d={svgPaths.p3f33f800} fill="url(#paint3_linear_0_311)" id="Vector_2" stroke="url(#paint4_linear_0_311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          <path d="M40.8333 6.125V14.2917" id="Vector_3" stroke="url(#paint5_linear_0_311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          <path d="M44.9167 10.2088H36.75" id="Vector_4" stroke="url(#paint6_linear_0_311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          <path d="M8.16673 34.7088V38.7922" id="Vector_5" stroke="url(#paint7_linear_0_311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          <path d="M10.2083 36.75H6.125" id="Vector_6" stroke="url(#paint8_linear_0_311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_311" x1="24.5036" x2="24.5036" y1="4.08234" y2="44.9167">
            <stop stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#737373" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_311" x1="24.5036" x2="24.5036" y1="4.08234" y2="44.9167">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_311" x1="12.2499" x2="36.7499" y1="11.0256" y2="40.4256">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_311" x1="12.2499" x2="36.7499" y1="11.0256" y2="40.4256">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_311" x1="12.2499" x2="36.7499" y1="11.0256" y2="40.4256">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_0_311" x1="41.3333" x2="41.3333" y1="6.125" y2="14.2917">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_0_311" x1="40.8333" x2="40.8333" y1="10.2088" y2="11.2088">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_0_311" x1="8.66673" x2="8.66673" y1="34.7088" y2="38.7922">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_0_311" x1="8.16667" x2="8.16667" y1="36.75" y2="37.75">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex h-[49px] items-center justify-center relative rounded-[15.313px] shrink-0 w-[55.125px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[3.063px] items-center relative shrink-0" data-name="Text">
      <Button3 />
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] not-italic relative shrink-0 text-[36.75px] text-[transparent] text-center tracking-[-0.2205px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(150.09601281949256deg, rgb(180, 118, 255) 18.362%, rgb(134, 181, 255) 49.714%, rgb(52, 179, 189) 84.905%), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }}>
        Neo
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[28px] relative size-full">
          <Text />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Run multi-step data and AI tasks</p>
        </div>
      </div>
    </div>
  );
}

function Al1() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="AL">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">What can Neo do in pipeline creating</p>
    </div>
  );
}

function Al() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center overflow-clip relative shrink-0" data-name="AL">
      <div className="relative shrink-0 size-[20px]" data-name="Decoration left">
        <div className="absolute left-[2px] size-[15.417px] top-[2px]" data-name="Pixel override hack">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.7498" preserveAspectRatio="none" viewBox="0 0 14.7498 14.7498" width="14.7498">
            <path d={svgPaths.p51cc100} fill="#737373" id="Pixel override hack" />
          </svg>
        </div>
      </div>
      <Al1 />
    </div>
  );
}

function Al3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-w-px relative" data-name="AL">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Summarize and interpret the query results</p>
    </div>
  );
}

function Al2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center overflow-clip relative shrink-0 w-[296px]" data-name="AL">
      <div className="relative shrink-0 size-[20px]" data-name="Decoration left">
        <div className="absolute left-[2px] size-[15.417px] top-[2px]" data-name="Pixel override hack">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.7498" preserveAspectRatio="none" viewBox="0 0 14.7498 14.7498" width="14.7498">
            <path d={svgPaths.p51cc100} fill="#737373" id="Pixel override hack" />
          </svg>
        </div>
      </div>
      <Al3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[187px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#f5f5f5] min-h-[36px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0" data-name="Input">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[7.5px] relative size-full">
            <Al />
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] min-h-[36px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0" data-name="Input">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[7.5px] relative size-full">
            <Al2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[12px] py-[2px] relative size-full">
          <Heading />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container4 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / plus">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.75px_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Vector" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.04%_-0.75px]">
            <svg className="block size-full" fill="none" height="10.8333" preserveAspectRatio="none" viewBox="0 0 1.5 10.8333" width="1.5">
              <path d="M0.75 0.75V10.0833" id="Vector" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <Button4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-[322px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Frame4 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="1">
      <div className="max-w-[320px] min-w-[80px] relative rounded-[48px] shrink-0" data-name="Button 2">
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Qyn_Flavor_Grotesk_CHS:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">GPT-5.6</p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-name="Trailing icon">
              <div className="absolute inset-[31.25%_6.25%_18.75%_6.25%]" data-name="vector-shape">
                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
                  <path d={svgPaths.p1aafc500} fill="#707070" id="vector-shape" />
                </svg>
              </div>
            </div>
            <div className="absolute cursor-pointer inset-0 rounded-[999px]" data-name="State layer">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="relative shrink-0 size-[14.75px]" data-name="Icon wrapper">
      <div className="absolute inset-[-5.08%_0]">
        <svg className="block size-full" fill="none" height="16.25" preserveAspectRatio="none" viewBox="0 0 14.75 16.25" width="14.75">
          <g id="Icon wrapper">
            <path d={svgPaths.p2f27a700} fill="#737373" id="Pixel color override hack" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="relative shrink-0 size-[14.75px]" data-name="Icon wrapper">
      <div className="absolute inset-[-5.1%_-5.1%_-5.08%_-5.09%]">
        <svg className="block size-full" fill="none" height="16.2512" preserveAspectRatio="none" viewBox="0 0 16.2522 16.2512" width="16.2522">
          <g id="Icon wrapper">
            <path d={svgPaths.p2dd67630} fill="white" id="Pixel color override hack" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Component />
        <div className="bg-[rgba(255,255,255,0)] min-h-[32px] min-w-[32px] relative rounded-[8px] shrink-0" data-name="Icon Button">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[7px] relative size-full">
              <IconWrapper />
            </div>
          </div>
        </div>
        <div className="bg-[#737373] min-h-[32px] min-w-[32px] relative rounded-[8px] shrink-0" data-name="Icon Button">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[7px] relative size-full">
              <IconWrapper1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f5f5f5] h-[122px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[12px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a2a2a2] text-[14px] w-full">Ask me anything or search for resources... (Use @ to reference resources)</p>
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Chat">
      <div className="relative shrink-0 w-full" data-name="Chat">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px p-[12px] relative w-[438px]" data-name="Container">
      <Container3 />
      <Chat />
    </div>
  );
}

export default function InstancePanel() {
  return (
    <div className="bg-white border-[#e5e5e5] border-l border-solid content-stretch flex flex-col items-start relative size-full" data-name="InstancePanel">
      <Frame2 />
      <Container2 />
    </div>
  );
}