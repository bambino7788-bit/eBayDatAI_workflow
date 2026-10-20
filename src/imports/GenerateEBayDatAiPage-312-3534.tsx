import clsx from "clsx";
import svgPaths from "./svg-dpeookoe11";
import imgImageProfile from "figma:asset/e3c82af98b515dc7991b0ac4a9116276afeceb94.png";
import imgImage from "figma:asset/0e786d92df0c280190ba4bd872695e7b7dc9f876.png";
import imgImage1 from "figma:asset/41830add74a9cbaba2ab040fc6d7e21e2b6ab044.png";
import imgImage2 from "figma:asset/248ccc3a032b449a0d01237213956c2a8bbfcd0b.png";
import imgImage3 from "figma:asset/ea94f5dfd1a73799aafb0d5fdc704e96c4753155.png";
import imgImage4 from "figma:asset/0b2df5217e341e95d769b480096441a422b871e5.png";
import { imgGroup } from "./svg-gpgpt";
type GroupProps = {
  additionalClassNames?: string;
};

function Group({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupProps>) {
  return (
    <div style={{ maskImage: `url('${imgGroup}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[16px_16px]", additionalClassNames)}>
      <div className="absolute inset-[-4.99%]">{children}</div>
    </div>
  );
}
type TitleVectorProps = {
  additionalClassNames?: string;
};

function TitleVector({ children, additionalClassNames = "" }: React.PropsWithChildren<TitleVectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.11245 7.94055">
        {children}
      </svg>
    </div>
  );
}
type Container2Props = {
  additionalClassNames?: string;
};

function Container2({ children, additionalClassNames = "" }: React.PropsWithChildren<Container2Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper7Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return <Wrapper7 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper7>;
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return <Wrapper7 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper7>;
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[6.25px] overflow-clip relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.68958 6.25">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[4.531px] overflow-clip relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36375 4.53125">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper2>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type IconArrowLeftRightVectorProps = {
  additionalClassNames?: string;
};

function IconArrowLeftRightVector({ children, additionalClassNames = "" }: React.PropsWithChildren<IconArrowLeftRightVectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.63px_-5.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9166 1.25">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Icon11({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}
type IconArrowUpDownVectorProps = {
  additionalClassNames?: string;
};

function IconArrowUpDownVector({ children, additionalClassNames = "" }: React.PropsWithChildren<IconArrowUpDownVectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-5.86%_-0.63px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.25 11.9166">
          {children}
        </svg>
      </div>
    </div>
  );
}
type IconRefreshCwVectorProps = {
  additionalClassNames?: string;
};

function IconRefreshCwVector({ children, additionalClassNames = "" }: React.PropsWithChildren<IconRefreshCwVectorProps>) {
  return (
    <div className={clsx("absolute left-[12.5%] right-[12.5%]", additionalClassNames)}>
      <div className="absolute inset-[-8.33%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          {children}
        </svg>
      </div>
    </div>
  );
}
type Vector1Props = {
  additionalClassNames?: string;
};

function Vector1({ children, additionalClassNames = "" }: React.PropsWithChildren<Vector1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66666 6.66666">
          {children}
        </svg>
      </div>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorProps>) {
  return (
    <div className={clsx("absolute opacity-50", additionalClassNames)}>
      <div className="absolute inset-[-7.03%_-0.75px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12.1666">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[6.66%_22.25%_13.36%_11.11%]" data-name="Vector">
        <div className="absolute inset-[-8.32%_-16.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32858 9.32716">
            <path d={svgPaths.p32971880} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("absolute h-[18px] left-[41px] overflow-clip top-[7px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#252525] text-[13px] top-0 tracking-[-0.0762px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute h-[20px] left-[40px] overflow-clip top-[9px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper1 additionalClassNames="h-[20px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#252525] text-[14px] top-0 tracking-[-0.1504px]">{text}</p>
    </Wrapper1>
  );
}

function Icon9() {
  return (
    <Wrapper3>
      <path d={svgPaths.p73ed900} fill="url(#paint0_linear_312_3632)" id="Vector" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_312_3632" x1="2.45068" x2="4.78364" y1="0.83454" y2="4.56726">
          <stop stopColor="#92C821" />
          <stop offset="1" stopColor="#A3DE27" />
        </linearGradient>
      </defs>
    </Wrapper3>
  );
}

function Icon8() {
  return (
    <Wrapper4>
      <path d={svgPaths.p1f5ad400} fill="var(--fill-0, #92C821)" id="Vector" />
    </Wrapper4>
  );
}

function Icon7() {
  return (
    <div className="h-[4.531px] overflow-clip relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53125 4.53125">
        <path d={svgPaths.p10252780} fill="url(#paint0_linear_312_3636)" id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_312_3636" x1="1.32771" x2="3.89684" y1="0.83454" y2="3.06155">
            <stop stopColor="#FFBD14" />
            <stop offset="1" stopColor="#FFD976" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[6.25px] overflow-clip relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
        <path d={svgPaths.p17141370} fill="var(--fill-0, #FFBD14)" id="Vector" />
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <Wrapper3>
      <path d={svgPaths.p73ed900} fill="url(#paint0_linear_312_3714)" id="Vector" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_312_3714" x1="2.45068" x2="4.78364" y1="0.83454" y2="4.56726">
          <stop stopColor="#6AA4FA" />
          <stop offset="1" stopColor="#0968F6" />
        </linearGradient>
      </defs>
    </Wrapper3>
  );
}

function Icon4() {
  return (
    <Wrapper4>
      <path d={svgPaths.p1f5ad400} fill="var(--fill-0, #0968F6)" id="Vector" />
    </Wrapper4>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ additionalClassNames = "" }: Container1Props) {
  return (
    <div className="absolute h-[19.5px] left-[20px] rounded-[2px] top-0 w-[158.297px]">
      <Text1 text="dbdemos_pipeline_bike..." additionalClassNames="left-[4px] top-0 w-[150.297px]" />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="absolute contents inset-[41.03%_5.13%_41.02%_5.13%]">
      <div className="absolute inset-[41.03%_5.13%_41.02%_5.13%]" data-name="Pixel color override hack">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.584 2.91699">
          <path d={svgPaths.p14307980} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </svg>
      </div>
    </div>
  );
}

function ImageImage4() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function ImageImage3() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function ImageImage2() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function ImageImage1() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function ImageImage() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function IconArrowUpDown() {
  return (
    <div className="absolute contents inset-[16.67%_12.5%]">
      <div className="absolute inset-[66.67%_12.5%_16.67%_54.17%] opacity-50" data-name="Vector">
        <div className="absolute inset-[-28.13%_-14.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 4.1666">
            <path d={svgPaths.p19ff3080} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Vector additionalClassNames="inset-[16.67%_29.17%_16.67%_70.83%]">
        <path d="M0.75 11.4166V0.75" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </Vector>
      <div className="absolute inset-[16.67%_54.17%_66.67%_12.5%] opacity-50" data-name="Vector_3">
        <div className="absolute inset-[-28.13%_-14.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 4.16666">
            <path d={svgPaths.pdd63400} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Vector additionalClassNames="inset-[16.67%_70.83%_16.67%_29.17%]">
        <path d="M0.75 0.75V11.4166" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </Vector>
    </div>
  );
}
type ParagraphText7Props = {
  text: string;
};

function ParagraphText7({ text }: ParagraphText7Props) {
  return (
    <div className="absolute h-[20px] left-[8px] top-[12px] w-[457px]">
      <p className="absolute font-['Market_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#191919] text-[14px] top-0">{text}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[16px] relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
type ParagraphText6Props = {
  text: string;
};

function ParagraphText6({ text }: ParagraphText6Props) {
  return (
    <Wrapper5 additionalClassNames="h-[21px] w-[66.328px]">
      <p className="-translate-x-1/2 absolute font-['Geist:Medium',sans-serif] font-medium leading-[21px] left-[33px] text-[#fafafa] text-[14px] text-center top-px tracking-[0.07px]">{text}</p>
    </Wrapper5>
  );
}

function LeftIconWrapper() {
  return (
    <div className="absolute contents inset-[10.06%_10.07%_10.07%_10.06%]">
      <div className="absolute inset-[10.06%_10.07%_10.07%_10.06%]" data-name="Left icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.583 10.583">
          <path d={svgPaths.p3c4a9c00} fill="var(--fill-0, #FAFAFA)" id="Left icon" />
        </svg>
      </div>
    </div>
  );
}
type ParagraphText5Props = {
  text: string;
};

function ParagraphText5({ text }: ParagraphText5Props) {
  return (
    <Wrapper5 additionalClassNames="h-[21px] w-[79.359px]">
      <p className="-translate-x-1/2 absolute font-['Geist:Medium',sans-serif] font-medium leading-[21px] left-[40.5px] text-[#171717] text-[14px] text-center top-px tracking-[0.07px]">{text}</p>
    </Wrapper5>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("absolute h-[21px] top-[7.5px]", additionalClassNames)}>
      <p className="absolute font-['Geist:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#0a0a0a] text-[14px] top-px tracking-[0.07px]">{text}</p>
    </div>
  );
}
type ParagraphText4Props = {
  text: string;
};

function ParagraphText4({ text }: ParagraphText4Props) {
  return (
    <Wrapper5 additionalClassNames="h-[21px] w-[46.953px]">
      <p className="absolute font-['Geist:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#0a0a0a] text-[14px] top-px tracking-[0.07px]">{text}</p>
    </Wrapper5>
  );
}

function DecorationLeft() {
  return (
    <div className="absolute contents inset-[10%_16.25%_16.25%_10%]">
      <div className="absolute inset-[10%_16.25%_16.25%_10%]" data-name="Pixel override hack">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7498 14.7498">
          <path d={svgPaths.p27c67a00} fill="var(--fill-0, #737373)" id="Pixel override hack" />
        </svg>
      </div>
    </div>
  );
}
type ParagraphText3Props = {
  text: string;
};

function ParagraphText3({ text }: ParagraphText3Props) {
  return (
    <div className="absolute h-[21px] left-0 top-[28px] w-[481.016px]">
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#737373] text-[14px] top-px tracking-[0.07px]">{text}</p>
    </div>
  );
}
type ParagraphText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText2({ text, additionalClassNames = "" }: ParagraphText2Props) {
  return (
    <Wrapper7 additionalClassNames={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Geist:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0">{text}</p>
    </Wrapper7>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center py-[4px] relative w-full", additionalClassNames)}>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.07px]">{text}</p>
    </div>
  );
}
type ParagraphText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText1({ text, additionalClassNames = "" }: ParagraphText1Props) {
  return (
    <div className={clsx("absolute h-[21px]", additionalClassNames)}>
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#0a0a0a] text-[14px] top-px tracking-[0.07px]">{text}</p>
    </div>
  );
}
type IconCalendarVectorProps = {
  additionalClassNames?: string;
};

function IconCalendarVector({ additionalClassNames = "" }: IconCalendarVectorProps) {
  return (
    <div className={clsx("absolute bottom-3/4 top-[8.33%]", additionalClassNames)}>
      <div className="absolute inset-[-28.12%_-0.75px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 4.16667">
          <path d="M0.75 0.75V3.41667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute contents inset-[12.5%]">
      <Vector1 additionalClassNames="inset-[12.5%_54.17%_54.17%_12.5%]">
        <path d={svgPaths.p6af6e00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </Vector1>
      <div className="absolute inset-[45.83%_45.83%_29.17%_29.17%]" data-name="Vector_2">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.3333">
            <path d={svgPaths.p224e4900} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <Vector1 additionalClassNames="inset-[54.17%_12.5%_12.5%_54.17%]">
        <path d={svgPaths.p3c092a80} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </Vector1>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[12.5%_8.33%]">
      <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 10.6667">
            <path d="M0.666665 0.666665V10" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector_2">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.3333">
            <path d={svgPaths.p2bed6600} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute h-[19.5px] overflow-clip", additionalClassNames)}>
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#0a0a0a] text-[13px] top-px">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full">
      <p className="absolute font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#0a0a0a] text-[13px] top-px">{text}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents inset-[12.5%_8.32%_16.67%_8.33%]">
      <div className="absolute inset-[12.5%_8.32%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8354 11.0835">
            <path d={svgPaths.p32f72e80} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bottom-[37.5%] contents left-1/4 right-1/4 top-[37.5%]">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.66667">
            <path d={svgPaths.p1a05d700} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconPlus() {
  return (
    <div className="absolute contents inset-[20.83%]">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.63px_-6.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5834 1.25">
            <path d="M0.625 0.625H9.95837" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector_2">
        <div className="absolute inset-[-6.7%_-0.63px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.25 10.5834">
            <path d="M0.625 0.625V9.95837" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type Icon1VectorProps = {
  additionalClassNames?: string;
};

function Icon1Vector({ additionalClassNames = "" }: Icon1VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-14.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
          <path d={svgPaths.p318f4680} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}

export default function GenerateEBayDatAiPage() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Generate eBay DatAI Page">
      <div className="absolute content-stretch flex flex-col h-[1218px] items-start left-[255px] top-0 w-[2324px]" data-name="Container">
        <div className="bg-white h-[64px] relative shrink-0 w-[2324px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute h-[32px] left-[2160px] top-[15.5px] w-[140px]" data-name="Container">
              <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[6px]" data-name="Button">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3338 18.3337">
                        <path d={svgPaths.p35ea4980} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
                    <div className="absolute inset-[-25%_-0.83px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 5">
                        <path d="M0.833333 0.833333V4.16667" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
                    <div className="absolute inset-[-0.83px_-25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1.66667">
                        <path d="M4.16667 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
                    <div className="absolute inset-[-50%_-0.83px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 3.33333">
                        <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
                    <div className="absolute inset-[-0.83px_-50%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 1.66667">
                        <path d="M2.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[72px] size-[20px] top-[6px]" data-name="Button">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <Icon1Vector additionalClassNames="inset-[12.5%_58.33%_58.33%_12.5%]" />
                  <Icon1Vector additionalClassNames="inset-[12.5%_12.5%_58.33%_58.33%]" />
                  <Icon1Vector additionalClassNames="inset-[58.33%_12.5%_12.5%_58.33%]" />
                  <Icon1Vector additionalClassNames="inset-[58.33%_58.33%_12.5%_12.5%]" />
                </div>
              </div>
              <div className="absolute bg-[#e5e7eb] left-[108px] rounded-[33554400px] size-[32px] top-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
                  <div className="h-[30px] relative shrink-0 w-full" data-name="Image (Profile)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageProfile} />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
              </div>
              <div className="absolute left-[36px] size-[20px] top-[6px]" data-name="Button">
                <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Icon">
                      <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
                <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[8px] rounded-[33554400px] size-[16px] top-[-4px]" data-name="Text">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.1172px]">3</p>
                </div>
              </div>
            </div>
            <div className="absolute h-[36px] left-[756px] top-[13.5px] w-[672px]" data-name="Container">
              <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[10px] top-0 w-[672px]" data-name="Text Input">
                <div className="content-stretch flex items-center overflow-clip px-[40px] relative rounded-[inherit] size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">Search or ask AI...</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
              <div className="absolute content-stretch flex h-[36px] items-center left-[12px] top-0 w-[16px]" data-name="Container">
                <Wrapper1 additionalClassNames="h-[16px]">
                  <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                    <div className="absolute inset-[-6.25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p1b38bb40} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
                    <div className="absolute inset-[-23.26%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 4.2">
                        <path d={svgPaths.p3195c6c0} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                </Wrapper1>
              </div>
              <div className="absolute content-stretch flex h-[36px] items-center left-[644px] top-0 w-[16px]" data-name="Container">
                <Wrapper1 additionalClassNames="h-[16px]">
                  <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.667 14.667">
                        <path d={svgPaths.p2ae0b200} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
                    <div className="absolute inset-[-25%_-0.67px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                        <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
                    <div className="absolute inset-[-0.67px_-25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1.33333">
                        <path d="M3.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
                    <div className="absolute inset-[-50%_-0.67px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 2.66667">
                        <path d="M0.666667 0.666667V2" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
                    <div className="absolute inset-[-0.67px_-50%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                        <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                </Wrapper1>
              </div>
            </div>
          </div>
        </div>
        <Wrapper1 additionalClassNames="bg-white w-[2324px]">
          <div className="absolute bg-white h-[1154px] left-0 top-0 w-[259px]" data-name="Container">
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute border-[#e5e5e5] border-b border-solid h-[46px] left-0 top-0 w-[259px]" data-name="Container" />
                <div className="absolute h-[22px] left-[16px] top-[12px] w-[227px]" data-name="Container">
                  <div className="absolute h-[22px] left-0 top-0 w-[59.984px]" data-name="Container">
                    <div className="absolute h-[18px] left-0 top-[2px] w-[37.984px]" data-name="Paragraph">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[19.5px] not-italic text-[#252525] text-[13px] text-center top-0 tracking-[-0.0762px]">Folder</p>
                    </div>
                    <div className="absolute left-[37.98px] rounded-[4px] size-[22px] top-0" data-name="Container">
                      <div className="absolute content-stretch flex flex-col items-start left-[4px] overflow-clip pt-[4.672px] px-[2.922px] size-[14px] top-[4px]" data-name="Container">
                        <div className="content-stretch flex flex-col h-[4.656px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="h-[4.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <div className="absolute inset-[12.5%_7.14%]" data-name="Vector">
                              <div className="absolute inset-[-16.67%_-8.33%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.15569 4.65681">
                                  <path d={svgPaths.p1a90ad00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16462" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[16px] left-[163px] top-[3px] w-[64px]" data-name="Container">
                    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-0" data-name="Container">
                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <div className="absolute contents inset-[12.5%]" data-name="Icon / refresh-cw">
                          <IconRefreshCwVector additionalClassNames="bottom-1/2 top-[12.5%]">
                            <path d={svgPaths.p112ae700} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" />
                          </IconRefreshCwVector>
                          <div className="absolute inset-[12.5%_12.5%_66.67%_66.67%]" data-name="Vector_2">
                            <div className="absolute inset-[-15%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.3333 4.33333">
                                <path d="M3.8333 0.5V3.83333H0.5" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <IconRefreshCwVector additionalClassNames="bottom-[12.5%] top-1/2">
                            <path d={svgPaths.p2a835800} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" />
                          </IconRefreshCwVector>
                          <div className="absolute inset-[66.67%_66.67%_12.5%_12.5%]" data-name="Vector_4">
                            <div className="absolute inset-[-15%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.3333">
                                <path d="M3.83333 0.5H0.5V3.8333" id="Vector_4" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[16px] top-0" data-name="Container">
                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <div className="absolute contents inset-[16.67%_12.5%]" data-name="Icon / arrow-up-down">
                          <div className="absolute inset-[66.67%_12.5%_16.67%_54.17%]" data-name="Vector">
                            <div className="absolute inset-[-23.44%_-11.72%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.58333 3.9166">
                                <path d={svgPaths.p2821eb80} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                              </svg>
                            </div>
                          </div>
                          <IconArrowUpDownVector additionalClassNames="inset-[16.67%_29.17%_16.67%_70.83%]">
                            <path d="M0.625 11.2916V0.625" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                          </IconArrowUpDownVector>
                          <div className="absolute inset-[16.67%_54.17%_66.67%_12.5%]" data-name="Vector_3">
                            <div className="absolute inset-[-23.44%_-11.72%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.58333 3.91666">
                                <path d={svgPaths.p2c837840} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                              </svg>
                            </div>
                          </div>
                          <IconArrowUpDownVector additionalClassNames="inset-[16.67%_70.83%_16.67%_29.17%]">
                            <path d="M0.625 0.625V11.2916" id="Vector_4" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                          </IconArrowUpDownVector>
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[48px] size-[16px] top-0" data-name="Container">
                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <IconPlus />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1071px] overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="absolute bg-[#f5f5f5] h-[32px] left-[8px] rounded-[8px] top-[8px] w-[243px]" data-name="Container">
                  <div className="absolute h-[32px] left-0 top-0 w-[243px]" data-name="Container">
                    <div className="absolute h-[32px] left-0 top-0 w-[243px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[9px]" data-name="Container">
                        <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                          <div className="absolute contents inset-[12.5%]" data-name="Icon">
                            <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                              <div className="absolute inset-[-6.25%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                                  <path d={svgPaths.p12ea9c80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector_2">
                              <div className="absolute inset-[-23.26%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.675 3.675">
                                  <path d={svgPaths.p9c9faa0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-[18px] left-[31px] overflow-clip top-[7px] w-[203px]" data-name="Container">
                        <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[1.5px] w-[89.438px]" data-name="Paragraph">
                          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[12px]">Type to search...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-[#e5e5e5] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[243px]" data-name="Container" />
                </div>
                <div className="absolute h-[308px] left-[8px] top-[40px] w-[243px]" data-name="Container">
                  <div className="absolute h-[28px] left-0 rounded-[4px] top-0 w-[243px]" data-name="Container">
                    <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                      <div className="absolute left-[8px] size-[16px] top-[6px]" data-name="Container">
                        <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Container">
                          <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon />
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-[28px] size-[16px] top-[6px]" data-name="Container">
                        <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Container">
                          <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon1 />
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[48px] pr-[109.688px] top-[4.25px] w-[187px]" data-name="Container">
                        <ParagraphText text="pipeline-bike" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[112px] items-start left-0 top-[28px] w-[243px]" data-name="Container">
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute left-[24px] size-[16px] top-[6px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Container">
                            <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                              <Icon />
                            </div>
                          </div>
                        </div>
                        <div className="absolute left-[44px] size-[16px] top-[6px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Container">
                            <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                              <Icon1 />
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[64px] pr-[113.969px] top-[4.25px] w-[171px]" data-name="Container">
                          <ParagraphText text="1-dbo-sql" />
                        </div>
                      </div>
                    </Wrapper5>
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute content-stretch flex flex-col items-start left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon2 />
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[80px] pr-[80.781px] top-[4.25px] w-[155px]" data-name="Container">
                          <ParagraphText text="explorations" />
                        </div>
                      </div>
                    </Wrapper5>
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute content-stretch flex flex-col items-start left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon3 />
                          </div>
                        </div>
                        <Text1 text="dbdemos_pipeline_bike_main_db..." additionalClassNames="left-[80px] top-[4.25px] w-[155px]" />
                      </div>
                    </Wrapper5>
                    <Wrapper6 additionalClassNames="rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute content-stretch flex flex-col items-start left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon2 />
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[80px] pr-[59px] top-[4.25px] w-[155px]" data-name="Container">
                          <ParagraphText text="transformations" />
                        </div>
                      </div>
                    </Wrapper6>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[168px] items-start left-0 top-[140px] w-[243px]" data-name="Container">
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute left-[24px] size-[16px] top-[6px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Container">
                            <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                              <Icon />
                            </div>
                          </div>
                        </div>
                        <div className="absolute left-[44px] size-[16px] top-[6px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Container">
                            <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                              <Icon1 />
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[64px] pr-[83.828px] top-[4.25px] w-[171px]" data-name="Container">
                          <ParagraphText text="2-step-python" />
                        </div>
                      </div>
                    </Wrapper5>
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute content-stretch flex flex-col items-start left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon2 />
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[80px] pr-[76.609px] top-[4.25px] w-[155px]" data-name="Container">
                          <ParagraphText text="_dashboards" />
                        </div>
                      </div>
                    </Wrapper5>
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute content-stretch flex flex-col items-start left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon2 />
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[80px] pr-[88.219px] top-[4.25px] w-[155px]" data-name="Container">
                          <ParagraphText text="_resources" />
                        </div>
                      </div>
                    </Wrapper5>
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Container">
                            <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                              <div className="absolute contents inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Icon">
                                <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
                                  <div className="absolute inset-[-5.88%_-5%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0834">
                                      <path d={svgPaths.p37b54500} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[80px] pr-[83.641px] top-[4.25px] w-[155px]" data-name="Container">
                          <ParagraphText text="deployment" />
                        </div>
                      </div>
                    </Wrapper5>
                    <Wrapper5 additionalClassNames="h-[28px] rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute content-stretch flex flex-col items-start left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon3 />
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[80px] pr-[28.531px] top-[4.25px] w-[155px]" data-name="Container">
                          <ParagraphText text="00-SDP-Introduction" />
                        </div>
                      </div>
                    </Wrapper5>
                    <Wrapper6 additionalClassNames="rounded-[4px] w-[243px]">
                      <div className="absolute h-[28px] left-0 top-0 w-[243px]" data-name="Container">
                        <div className="absolute h-0 left-[40px] top-[14px] w-[16px]" data-name="Container" />
                        <div className="absolute content-stretch flex flex-col items-start left-[60px] size-[16px] top-[6px]" data-name="Container">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <Icon3 />
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[19.5px] items-start left-[80px] pr-[39.641px] top-[4.25px] w-[155px]" data-name="Container">
                          <ParagraphText text="01-pipeline-tutorial" />
                        </div>
                      </div>
                    </Wrapper6>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
          </div>
          <div className="absolute content-stretch flex h-[1154px] items-start left-[259px] overflow-clip top-0 w-[2065px]" data-name="Container">
            <Wrapper1 additionalClassNames="h-[1154px]">
              <div className="absolute content-stretch flex flex-col h-[1108px] items-start left-0 overflow-clip top-[46px] w-[2065px]" data-name="Container">
                <div className="h-[1013.797px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[937.797px] left-[24px] top-[52px] w-[2017px]" data-name="Container">
                    <div className="absolute h-[68.797px] left-0 top-0 w-[2017px]" data-name="Container">
                      <div className="absolute left-[2017px] size-0 top-0" data-name="Container" />
                      <div className="absolute h-[68.797px] left-0 top-0 w-[313.547px]" data-name="Container">
                        <div className="absolute content-stretch flex h-[28.797px] items-start left-0 top-0 w-[239.375px]" data-name="Paragraph">
                          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[28.8px] relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.48px]">{`Emily's Project`}</p>
                        </div>
                        <div className="absolute h-[24px] left-0 top-[44.8px] w-[313.547px]" data-name="Container">
                          <div className="absolute bg-[#f5f5f5] h-[24px] left-0 rounded-[8px] top-0 w-[56.953px]" data-name="Container">
                            <div className="absolute content-stretch flex flex-col h-[18px] items-start justify-center left-[8px] top-[3px] w-[40.953px]" data-name="Container">
                              <Wrapper5 additionalClassNames="h-[18px] w-[40.953px]">
                                <p className="-translate-x-1/2 absolute font-['Geist:Medium',sans-serif] font-medium leading-[18px] left-[20.5px] text-[#171717] text-[12px] text-center top-px tracking-[0.18px]">Search</p>
                              </Wrapper5>
                            </div>
                          </div>
                          <div className="absolute h-[21px] left-[80.95px] top-[1.5px] w-[232.594px]" data-name="Container">
                            <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[2.5px]" data-name="Container">
                              <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                <div className="absolute contents inset-[8.33%_12.5%]" data-name="Icon / calendar">
                                  <IconCalendarVector additionalClassNames="left-[33.33%] right-[66.67%]" />
                                  <IconCalendarVector additionalClassNames="left-[66.67%] right-[33.33%]" />
                                  <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector_3">
                                    <div className="absolute inset-[-6.25%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                                        <path d={svgPaths.p17bd9300} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector_4">
                                    <div className="absolute inset-[-0.75px_-6.25%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 1.5">
                                        <path d="M0.75 0.75H12.75" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ParagraphText1 text="Updated 2026-06-01 00:00:00" additionalClassNames="left-[24px] top-0 w-[208.594px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-[#f5f5f5] h-[35px] left-0 rounded-[10px] top-[92.8px] w-[2017px]" data-name="Container">
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[3px] top-0 w-[2017px]" data-name="Container">
                        <Container2>
                          <div className="relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-row items-center justify-center size-full">
                              <Text2 text="Analysis" additionalClassNames="px-[186px]" />
                            </div>
                          </div>
                        </Container2>
                        <Container2 additionalClassNames="bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
                          <div className="relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[141px] py-[4px] relative w-full">
                                <p className="font-['Geist:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Configuration</p>
                              </div>
                            </div>
                          </div>
                        </Container2>
                        <Container2>
                          <div className="relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-row items-center justify-center size-full">
                              <Text2 text="Settings" additionalClassNames="px-[173px]" />
                            </div>
                          </div>
                        </Container2>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[151.8px] w-[2017px]">
                      <div className="h-[381px] relative shrink-0 w-full" data-name="Container">
                        <div className="absolute h-[49px] left-0 top-0 w-[481.016px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-0 w-[100.109px]" data-name="Container">
                            <ParagraphText2 text="Pool Settings" additionalClassNames="w-[100.109px]" />
                          </div>
                          <ParagraphText3 text="Accounts used by the project to access systems in specific environments." />
                        </div>
                        <div className="absolute h-[316px] left-0 top-[65px] w-[2017px]" data-name="Container">
                          <div className="absolute h-[36px] left-0 top-0 w-[2017px]" data-name="Container">
                            <div className="absolute h-[36px] left-0 top-0 w-[320px]" data-name="Container">
                              <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-0 w-[320px]" data-name="Container">
                                <div className="absolute h-[36px] left-0 overflow-clip rounded-[8px] top-0 w-[320px]" data-name="Container">
                                  <div className="absolute h-[21px] left-[12px] overflow-clip top-[7.5px] w-[296px]" data-name="Container">
                                    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[0.5px]" data-name="Container">
                                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                        <DecorationLeft />
                                      </div>
                                    </div>
                                    <div className="absolute h-[21px] left-[28px] top-0 w-[268px]" data-name="Container">
                                      <div className="absolute content-stretch flex flex-col h-[21px] items-start justify-center left-0 top-0 w-[46.953px]" data-name="Container">
                                        <ParagraphText4 text="Search" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-[rgba(255,255,255,0)] border border-[#e5e5e5] border-solid h-[38px] left-[-1px] rounded-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[-1px] w-[322px]" data-name="Container" />
                              </div>
                            </div>
                            <div className="absolute h-[36px] left-[1770.06px] top-0 w-[246.938px]" data-name="Container">
                              <div className="absolute bg-[#f5f5f5] h-[36px] left-0 rounded-[8px] top-0 w-[111.359px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col h-[21px] items-start justify-center left-[16px] top-[7.5px] w-[79.359px]" data-name="Container">
                                  <ParagraphText5 text="Change Log" />
                                </div>
                              </div>
                              <div className="absolute bg-[#0968f6] h-[36px] left-[127.36px] rounded-[8px] top-0 w-[119.578px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[13.25px] top-[11.38px]" data-name="Container">
                                  <div className="h-[13.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                    <LeftIconWrapper />
                                  </div>
                                </div>
                                <div className="absolute content-stretch flex flex-col h-[21px] items-start justify-center left-[37.25px] top-[7.5px] w-[66.328px]" data-name="Container">
                                  <ParagraphText6 text="Configure" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[256px] left-0 top-[60px] w-[2017px]" data-name="Container">
                            <div className="absolute h-[256px] left-0 overflow-clip top-0 w-[2017px]" data-name="Container">
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-0 top-0 w-[38px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[38px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[11px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[38px] top-0 w-[473px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[473px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[473px]" data-name="Container">
                                    <Text3 text="Pool Name" additionalClassNames="left-[8px] w-[72.406px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Spark A" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="MySQL B" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Spark B" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="MySQL A" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="MySQL C" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[511px] top-0 w-[473px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[473px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[473px]" data-name="Container">
                                    <Text3 text="Maximum Slot" additionalClassNames="left-[8px] w-[96.125px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="100" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="30" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="20" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="11" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="21" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[984px] top-0 w-[473px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[473px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[473px]" data-name="Container">
                                    <Text3 text="Comments" additionalClassNames="left-[8px] w-[72.266px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText7 text="Request overtime" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[1457px] top-0 w-[240px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[240px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[240px]" data-name="Container">
                                    <Text3 text="Last Updated" additionalClassNames="left-[8px] w-[89.891px]" />
                                    <div className="absolute content-stretch flex flex-col items-start left-[105.89px] size-[16px] top-[10px]" data-name="Container">
                                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                        <IconArrowUpDown />
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[1697px] top-0 w-[200px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[200px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[200px]" data-name="Container">
                                    <Text3 text="Updated by" additionalClassNames="left-[8px] w-[76.484px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage />
                                    </div>
                                    <ParagraphText1 text="Olivia Brown" additionalClassNames="left-[48px] top-[11.5px] w-[82.906px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage1 />
                                    </div>
                                    <ParagraphText1 text="Emily Chen" additionalClassNames="left-[48px] top-[11.5px] w-[73.375px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage2 />
                                    </div>
                                    <ParagraphText1 text="Mia Davis" additionalClassNames="left-[48px] top-[11.5px] w-[63.266px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage3 />
                                    </div>
                                    <ParagraphText1 text="Isabella Wilson" additionalClassNames="left-[48px] top-[11.5px] w-[99.219px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage4 />
                                    </div>
                                    <ParagraphText1 text="Emma Carter" additionalClassNames="left-[48px] top-[11.5px] w-[86.375px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[1897px] top-0 w-[120px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[120px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[120px]" data-name="Container">
                                    <Text3 text="Actions" additionalClassNames="left-[61.2px] w-[50.797px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[381px] relative shrink-0 w-full" data-name="Container">
                        <div className="absolute h-[49px] left-0 top-0 w-[481.016px]" data-name="Container">
                          <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-0 w-[135.719px]" data-name="Container">
                            <ParagraphText2 text="Pipeline Variables" additionalClassNames="w-[135.719px]" />
                          </div>
                          <ParagraphText3 text="Accounts used by the project to access systems in specific environments." />
                        </div>
                        <div className="absolute h-[316px] left-0 top-[65px] w-[2017px]" data-name="Container">
                          <div className="absolute h-[36px] left-0 top-0 w-[2017px]" data-name="Container">
                            <div className="absolute h-[36px] left-0 top-0 w-[320px]" data-name="Container">
                              <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-0 w-[320px]" data-name="Container">
                                <div className="absolute h-[36px] left-0 overflow-clip rounded-[8px] top-0 w-[320px]" data-name="Container">
                                  <div className="absolute h-[21px] left-[12px] overflow-clip top-[7.5px] w-[296px]" data-name="Container">
                                    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[0.5px]" data-name="Container">
                                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                        <DecorationLeft />
                                      </div>
                                    </div>
                                    <div className="absolute h-[21px] left-[28px] top-0 w-[268px]" data-name="Container">
                                      <div className="absolute content-stretch flex flex-col h-[21px] items-start justify-center left-0 top-0 w-[46.953px]" data-name="Container">
                                        <ParagraphText4 text="Search" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-[rgba(255,255,255,0)] border border-[#e5e5e5] border-solid h-[38px] left-[-1px] rounded-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[-1px] w-[322px]" data-name="Container" />
                              </div>
                            </div>
                            <div className="absolute h-[36px] left-[1770.06px] top-0 w-[246.938px]" data-name="Container">
                              <div className="absolute bg-[#f5f5f5] h-[36px] left-0 rounded-[8px] top-0 w-[111.359px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col h-[21px] items-start justify-center left-[16px] top-[7.5px] w-[79.359px]" data-name="Container">
                                  <ParagraphText5 text="Change Log" />
                                </div>
                              </div>
                              <div className="absolute bg-[#0968f6] h-[36px] left-[127.36px] rounded-[8px] top-0 w-[119.578px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[13.25px] top-[11.38px]" data-name="Container">
                                  <div className="h-[13.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                    <LeftIconWrapper />
                                  </div>
                                </div>
                                <div className="absolute content-stretch flex flex-col h-[21px] items-start justify-center left-[37.25px] top-[7.5px] w-[66.328px]" data-name="Container">
                                  <ParagraphText6 text="Configure" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[256px] left-0 top-[60px] w-[2017px]" data-name="Container">
                            <div className="absolute h-[256px] left-0 overflow-clip top-0 w-[2017px]" data-name="Container">
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-0 top-0 w-[38px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[38px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[11px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[38px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[38px]" data-name="Container">
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[38px]" data-name="Container" />
                                    <div className="absolute bg-white content-stretch flex flex-col items-start left-[9px] pt-[-1px] px-[-1px] rounded-[4px] size-[14px] top-[15px]" data-name="Container">
                                      <Container />
                                    </div>
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[38px] top-0 w-[473px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[473px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[473px]" data-name="Container">
                                    <Text3 text="Key" additionalClassNames="left-[8px] w-[24.359px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Spark" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="MySQL" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Spark" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="MySQL" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="MySQL" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[511px] top-0 w-[473px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[473px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[473px]" data-name="Container">
                                    <Text3 text="Value" additionalClassNames="left-[8px] w-[37.594px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Prod" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Test" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Test" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Test" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="Test" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[984px] top-0 w-[473px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[473px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[473px]" data-name="Container">
                                    <Text3 text="Comments" additionalClassNames="left-[8px] w-[72.266px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText7 text="Request overtime" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[473px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[473px]" data-name="Container">
                                    <ParagraphText1 text="&nbsp;" additionalClassNames="left-[8px] top-[11.5px] w-[457px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[473px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[1457px] top-0 w-[240px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[240px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[240px]" data-name="Container">
                                    <Text3 text="Last Updated" additionalClassNames="left-[8px] w-[89.891px]" />
                                    <div className="absolute content-stretch flex flex-col items-start left-[105.89px] size-[16px] top-[10px]" data-name="Container">
                                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                        <IconArrowUpDown />
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[240px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[240px]" data-name="Container">
                                    <ParagraphText1 text="2026-06-01 00:00:00" additionalClassNames="left-[8px] top-[11.5px] w-[224px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[240px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[1697px] top-0 w-[200px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[200px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[200px]" data-name="Container">
                                    <Text3 text="Updated by" additionalClassNames="left-[8px] w-[76.484px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage />
                                    </div>
                                    <ParagraphText1 text="Olivia Brown" additionalClassNames="left-[48px] top-[11.5px] w-[82.906px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage1 />
                                    </div>
                                    <ParagraphText1 text="Emily Chen" additionalClassNames="left-[48px] top-[11.5px] w-[73.375px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage2 />
                                    </div>
                                    <ParagraphText1 text="Mia Davis" additionalClassNames="left-[48px] top-[11.5px] w-[63.266px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage3 />
                                    </div>
                                    <ParagraphText1 text="Isabella Wilson" additionalClassNames="left-[48px] top-[11.5px] w-[99.219px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[200px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[200px]" data-name="Container">
                                    <div className="absolute bg-white content-stretch flex items-center left-[8px] rounded-[16px] size-[32px] top-[6px]" data-name="Container">
                                      <ImageImage4 />
                                    </div>
                                    <ParagraphText1 text="Emma Carter" additionalClassNames="left-[48px] top-[11.5px] w-[86.375px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[200px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[256px] items-start left-[1897px] top-0 w-[120px]" data-name="Container">
                                <Wrapper5 additionalClassNames="h-[36px] w-[120px]">
                                  <div className="absolute h-[36px] left-0 top-0 w-[120px]" data-name="Container">
                                    <Text3 text="Actions" additionalClassNames="left-[61.2px] w-[50.797px]" />
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[35px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper5 additionalClassNames="h-[44px] w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper5>
                                <Wrapper6 additionalClassNames="w-[120px]">
                                  <div className="absolute h-[44px] left-0 top-0 w-[120px]" data-name="Container">
                                    <div className="absolute left-[76px] size-[36px] top-[4px]" data-name="Container">
                                      <div className="absolute bg-white left-0 overflow-clip rounded-[8px] size-[36px] top-0" data-name="Container">
                                        <div className="absolute content-stretch flex flex-col items-start left-[9.88px] size-[16.25px] top-[9.88px]" data-name="Container">
                                          <div className="h-[16.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                            <IconWrapper />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-[#e5e5e5] h-px left-0 top-[43px] w-[120px]" data-name="Container" />
                                  </div>
                                </Wrapper6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-[24px] min-h-[36px] top-[8px]" data-name="Breadcrumb">
                    <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#737373] text-[14px] tracking-[0.07px]">Home</p>
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
                      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                        <div className="absolute inset-[-7.03%_-14.06%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.125 9.125">
                            <path d={svgPaths.p18610000} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">{`Emily's Project`}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#fafafa] h-[46px] left-0 top-0 w-[2065px]" data-name="Container">
                <div className="absolute bg-white h-[46px] left-0 top-0 w-[40px]" data-name="Container">
                  <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[15px]" data-name="Container">
                    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute contents inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Icon / house">
                        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
                          <div className="absolute inset-[-12.5%_-18.75%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 7.5">
                              <path d={svgPaths.p2a010680} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector_2">
                          <div className="absolute inset-[-5.92%_-6.25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 14.1663">
                              <path d={svgPaths.p30584800} id="Vector_2" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[46px] left-[40px] opacity-60 top-0 w-[220px]" data-name="Container">
                  <div className="absolute border-[#e5e5e5] border-r border-solid h-[46px] left-0 top-0 w-[220px]" data-name="Container" />
                  <div className="absolute h-[19.5px] left-[8px] top-[13.25px] w-[204px]" data-name="Container">
                    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[1.75px]" data-name="Container">
                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <Icon3 />
                      </div>
                    </div>
                    <div className="absolute h-[19.5px] left-[20px] rounded-[2px] top-0 w-[160px]" data-name="Container">
                      <Text1 text="dbdemos_pipeline_bike_main_db..." additionalClassNames="left-[4px] top-0 w-[152px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[46px] left-[260px] opacity-60 top-0 w-[218.297px]" data-name="Container">
                  <div className="absolute border-[#e5e5e5] border-r border-solid h-[46px] left-0 top-0 w-[218.297px]" data-name="Container" />
                  <div className="absolute h-[19.5px] left-[8px] top-[13.25px] w-[202.297px]" data-name="Container">
                    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[1.75px]" data-name="Container">
                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <Icon2 />
                      </div>
                    </div>
                    <Container1 />
                  </div>
                </div>
                <div className="absolute h-[46px] left-[478.3px] opacity-60 top-0 w-[218.297px]" data-name="Container">
                  <div className="absolute border-[#e5e5e5] border-r border-solid h-[46px] left-0 top-0 w-[218.297px]" data-name="Container" />
                  <div className="absolute h-[19.5px] left-[8px] top-[13.25px] w-[202.297px]" data-name="Container">
                    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[1.75px]" data-name="Container">
                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <Icon2 />
                      </div>
                    </div>
                    <Container1 />
                  </div>
                </div>
                <div className="absolute h-[46px] left-[696.59px] opacity-60 top-0 w-[218.297px]" data-name="Container">
                  <div className="absolute border-[#e5e5e5] border-r border-solid h-[46px] left-0 top-0 w-[218.297px]" data-name="Container" />
                  <div className="absolute h-[19.5px] left-[8px] top-[13.25px] w-[202.297px]" data-name="Container">
                    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[1.75px]" data-name="Container">
                      <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <Icon2 />
                      </div>
                    </div>
                    <Container1 />
                  </div>
                </div>
                <div className="absolute h-[46px] left-[2025px] top-0 w-[40px]" data-name="Container">
                  <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[15px]" data-name="Container">
                    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <IconPlus />
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper1>
          </div>
        </Wrapper1>
      </div>
      <div className="absolute bg-[#fafafa] border-[#ebebeb] border-r border-solid h-[1218px] left-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[255px]" data-name="Container">
        <div className="absolute content-stretch flex h-[64px] items-center justify-center left-0 pt-px top-[1154px] w-[254px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
          <Wrapper5 additionalClassNames="rounded-[33554400px] size-[32px]">
            <div className="absolute content-stretch flex items-center justify-center left-[8px] size-[16px] top-[8px]" data-name="Container">
              <Icon11>
                <path d={svgPaths.p3cc8d400} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d="M5.99786 1.99929V13.995" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </Icon11>
            </div>
          </Wrapper5>
        </div>
        <div className="absolute border-[#ebebeb] border-b border-solid h-[64px] left-0 top-0 w-[254px]" data-name="Container">
          <div className="absolute h-[24px] left-[24px] top-[20px] w-[108px]" data-name="Container">
            <div className="absolute h-0 left-0 top-0 w-[108px]" data-name="Container" />
            <div className="absolute left-0 size-[24px] top-0" data-name="Container">
              <div className="absolute content-stretch flex flex-col h-[6.281px] items-start left-[6.48px] top-[0.64px] w-[7.484px]" data-name="Container">
                <div className="h-[6.281px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.48438 6.28125">
                    <path d={svgPaths.pdbd8f70} fill="var(--fill-0, #F02D2D)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[4.547px] items-start left-[6.67px] top-[2.36px] w-[7.313px]" data-name="Container">
                <div className="h-[4.547px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.3125 4.54688">
                    <path d={svgPaths.p2d468f00} fill="url(#paint0_linear_312_3646)" id="Vector" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_312_3646" x1="2.14266" x2="4.6096" y1="0.837418" y2="4.27655">
                        <stop stopColor="#F02D2D" />
                        <stop offset="1" stopColor="#FF8888" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute h-[9.734px] left-0 top-[2.59px] w-[9.719px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[0.26px] size-[9.69px] top-[5.21px]" data-name="Container">
                  <Icon4 />
                </div>
              </div>
              <div className="absolute left-[1.33px] size-[8.391px] top-[3.8px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[-0.05px] size-[8.364px] top-[4.89px]" data-name="Container">
                  <Icon5 />
                </div>
              </div>
              <div className="absolute h-[7.484px] left-[0.64px] top-[10.02px] w-[6.281px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[7.453px] items-start left-[0.15px] top-[7.23px] w-[6.25px]" data-name="Container">
                  <Icon6 />
                </div>
              </div>
              <div className="absolute h-[7.328px] left-[2.36px] top-[10px] w-[4.547px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[7.297px] items-start left-[-0.23px] top-[7.16px] w-[4.531px]" data-name="Container">
                  <Icon7 />
                </div>
              </div>
              <div className="absolute h-[9.719px] left-[2.78px] top-[14.28px] w-[9.734px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[5.22px] size-[9.69px] top-[9.46px]" data-name="Container">
                  <Icon8 />
                </div>
              </div>
              <div className="absolute left-[3.98px] size-[8.391px] top-[14.28px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[4.9px] size-[8.364px] top-[8.43px]" data-name="Container">
                  <Icon9 />
                </div>
              </div>
              <div className="absolute h-[6.266px] left-[10.11px] top-[17.06px] w-[7.484px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[6.25px] items-start left-[0.02px] top-0 w-[7.453px]" data-name="Container">
                  <div className="h-[6.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.45313 6.25">
                      <path d={svgPaths.p2ad6c560} fill="var(--fill-0, #F02D2D)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute h-[4.547px] left-[10.09px] top-[17.08px] w-[7.328px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[4.531px] items-start left-[0.02px] top-0 w-[7.297px]" data-name="Container">
                  <div className="h-[4.531px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.29688 4.53125">
                      <path d={svgPaths.p2cc43d00} fill="url(#paint0_linear_312_3628)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_312_3628" x1="2.13808" x2="4.59552" y1="0.83454" y2="4.26489">
                          <stop stopColor="#F02D2D" />
                          <stop offset="1" stopColor="#FF8888" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute h-[9.734px] left-[14.28px] top-[11.48px] w-[9.719px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[9.45px] size-[9.69px] top-[4.51px]" data-name="Container">
                  <Icon4 />
                </div>
              </div>
              <div className="absolute left-[14.28px] size-[8.391px] top-[11.63px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[8.44px] size-[8.364px] top-[3.48px]" data-name="Container">
                  <Icon5 />
                </div>
              </div>
              <div className="absolute h-[7.484px] left-[17.06px] top-[6.3px] w-[6.266px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[7.453px] items-start left-[6.13px] top-[0.23px] w-[6.25px]" data-name="Container">
                  <Icon6 />
                </div>
              </div>
              <div className="absolute h-[7.313px] left-[17.08px] top-[6.48px] w-[4.547px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[7.297px] items-start left-[4.77px] top-[0.16px] w-[4.531px]" data-name="Container">
                  <Icon7 />
                </div>
              </div>
              <div className="absolute h-[9.719px] left-[11.77px] top-0 w-[9.734px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[4.51px] size-[9.69px] top-[0.26px]" data-name="Container">
                  <Icon8 />
                </div>
              </div>
              <div className="absolute left-[11.91px] size-[8.391px] top-[1.33px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[3.49px] size-[8.364px] top-[-0.06px]" data-name="Container">
                  <Icon9 />
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[13.188px] items-start left-[32px] top-[4.98px] w-[74.938px]" data-name="Container">
              <div className="h-[13.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <div className="absolute contents inset-0" data-name="Title">
                  <div className="absolute inset-[0_0_20.74%_97.09%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18414 10.4518">
                      <path d={svgPaths.p4a7dd00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[0_4.37%_20.74%_82.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96862 10.4518">
                      <path d={svgPaths.p33959180} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[0.21%_18.28%_19.36%_75.07%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98431 10.6061">
                      <path d={svgPaths.p6f0c900} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                    </svg>
                  </div>
                  <TitleVector additionalClassNames="inset-[20.43%_26.16%_19.36%_64.35%]">
                    <path d={svgPaths.p33ace900} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                  </TitleVector>
                  <div className="absolute inset-[0_36.96%_20.74%_50.58%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33859 10.4518">
                      <path d={svgPaths.p1f52d670} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[22.02%_54.75%_0_34.71%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.89649 10.2834">
                      <path d={svgPaths.pd783cc0} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                    </svg>
                  </div>
                  <TitleVector additionalClassNames="inset-[20.43%_66.21%_19.36%_24.3%]">
                    <path d={svgPaths.p32392200} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                  </TitleVector>
                  <div className="absolute inset-[0_76.9%_20.74%_12.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.06455 10.4518">
                      <path d={svgPaths.p1dc96680} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[20.64%_89.57%_19.36%_0]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.81679 7.91249">
                      <path d={svgPaths.p32668e00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[1090px] left-0 overflow-clip top-[64px] w-[254px]" data-name="Container">
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[8px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Icon11>
                  <path d="M3.33215 7.99716H12.6622" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M7.99716 3.33215V12.6622" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </Icon11>
              </div>
            </Wrapper5>
            <TextText text="New" />
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[52px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Wrapper2 additionalClassNames="relative shrink-0 size-[16px]">
                  <div className="absolute contents inset-0" data-name="Clip path group">
                    <Group additionalClassNames="inset-[8.32%_8.36%_8.36%_8.32%] mask-position-[-1.331px_-1.331px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6618 14.6618">
                        <g id="Group">
                          <path d={svgPaths.p191f7300} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          <path d="M12.6623 0.6666V3.33232" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          <path d="M13.9952 1.99946H11.3294" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          <path d={svgPaths.p1724ae80} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                        </g>
                      </svg>
                    </Group>
                  </div>
                </Wrapper2>
              </div>
            </Wrapper5>
            <TextText text="Ask Neo" />
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[96px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Icon11>
                  <path d={svgPaths.p2e627100} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p34fdb600} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </Icon11>
              </div>
            </Wrapper5>
            <TextText text="Home" />
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[140px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Icon11>
                  <path d="M7.99716 4.66501V13.995" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.pd5f2f00} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </Icon11>
              </div>
            </Wrapper5>
            <TextText text="Catalog" />
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[184px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Icon11>
                  <path d={svgPaths.p8cf8380} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M2.06793 4.02124H13.9264" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p35edb600} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </Icon11>
              </div>
            </Wrapper5>
            <TextText text="Data Product" />
          </div>
          <div className="absolute bg-[#f6f6f6] border border-[rgba(0,0,0,0.05)] border-solid h-[402px] left-[8px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[232px] w-[238px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[4px] h-[176px] items-start left-[32px] top-[216px] w-[200px]" data-name="Container">
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex flex-col items-start left-[13px] size-[16px] top-[8px]" data-name="Container">
                  <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Icon2 />
                  </div>
                </div>
                <TextText1 text="Notebooks" additionalClassNames="w-[66.531px]" />
              </div>
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex items-center justify-center left-[13px] size-[16px] top-[8px]" data-name="Container">
                  <Icon11>
                    <path d={svgPaths.p14020580} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p28fb3b80} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p4448ef0} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon11>
                </div>
                <TextText1 text="Pipelines" additionalClassNames="w-[54.297px]" />
              </div>
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex items-center justify-center left-[13px] size-[16px] top-[8px]" data-name="Container">
                  <Icon11>
                    <path d={svgPaths.p2bb95e00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M8 14.6667V8" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p14df0fc0} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M5 2.84666L11 6.27999" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon11>
                </div>
                <TextText1 text="Artifacts" additionalClassNames="w-[51.672px]" />
              </div>
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex items-center justify-center left-[13px] size-[16px] top-[8px]" data-name="Container">
                  <Icon11>
                    <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon11>
                </div>
                <TextText1 text="UDFs" additionalClassNames="w-[33.109px]" />
              </div>
              <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex items-center justify-center left-[13px] size-[16px] top-[8px]" data-name="Container">
                  <Icon11>
                    <path d={svgPaths.p12ab1a00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p2daff3c0} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M8 14.6667V8" id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon11>
                </div>
                <TextText1 text="Golden Docker Images" additionalClassNames="w-[137.438px]" />
              </div>
            </div>
            <div className="absolute h-[40px] left-[4px] rounded-[10px] top-[8px] w-[228px]" data-name="Container">
              <div className="absolute bg-[#ebebeb] h-[35.5px] left-0 rounded-[10px] top-[2.25px] w-[200px]" data-name="Container">
                <div className="absolute h-[19.5px] left-[40px] top-[8px] w-[148px]" data-name="Text">
                  <p className="absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[19.5px] left-0 text-[#0a0a0a] text-[13px] top-px">{`Emily's Project`}</p>
                </div>
                <div className="absolute content-stretch flex items-center justify-center left-[12px] size-[16px] top-[9.75px]" data-name="Container">
                  <Icon11>
                    <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </Icon11>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[200px] size-[16px] top-[12px]" data-name="Container">
                <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute contents inset-[12.5%_16.67%]" data-name="Icon / arrow-left-right">
                    <div className="absolute inset-[12.5%_66.67%_54.17%_16.67%]" data-name="Vector">
                      <div className="absolute inset-[-11.72%_-23.44%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91666 6.58333">
                          <path d={svgPaths.p3f688b00} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                        </svg>
                      </div>
                    </div>
                    <IconArrowLeftRightVector additionalClassNames="inset-[29.17%_16.67%_70.83%_16.67%]">
                      <path d="M0.625 0.625H11.2916" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    </IconArrowLeftRightVector>
                    <div className="absolute inset-[54.17%_16.67%_12.5%_66.67%]" data-name="Vector_3">
                      <div className="absolute inset-[-11.72%_-23.44%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.9166 6.58333">
                          <path d={svgPaths.pe5f6900} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                        </svg>
                      </div>
                    </div>
                    <IconArrowLeftRightVector additionalClassNames="inset-[70.83%_16.67%_29.17%_16.67%]">
                      <path d="M11.2916 0.625H0.625" id="Vector_4" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    </IconArrowLeftRightVector>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[40px] left-[4px] rounded-[10px] top-[52px] w-[228px]" data-name="Button">
              <div className="absolute left-[12px] size-[16px] top-[11px]" data-name="Text">
                <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                  <Wrapper>
                    <g clipPath="url(#clip0_312_3799)" id="Icon">
                      <path d={svgPaths.p1d8ada00} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p196b2a00} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d="M7.99716 14.6615V13.3286" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d="M7.99716 1.33286V2.66572" id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d="M9.33002 7.99716H14.6615" id="Vector_5" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p32cc7300} id="Vector_6" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p341b3600} id="Vector_7" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d="M1.33286 7.99716H2.66572" id="Vector_8" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p224a3a65} id="Vector_9" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p2b2cc500} id="Vector_10" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p22cb6080} id="Vector_11" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p199c5580} id="Vector_12" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p6135000} id="Vector_13" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p65ed680} id="Vector_14" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </g>
                    <defs>
                      <clipPath id="clip0_312_3799">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </Wrapper>
                </div>
              </div>
              <Text text="Data Engineering" additionalClassNames="w-[168px]" />
              <div className="absolute content-stretch flex flex-col h-[10px] items-start left-[208px] top-[14px] w-[6px]" data-name="Text">
                <Icon10 />
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[40px] left-[4px] rounded-[10px] top-[92px] w-[228px]" data-name="Button">
              <div className="absolute left-[12px] size-[16px] top-[11px]" data-name="Text">
                <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                  <Wrapper>
                    <g clipPath="url(#clip0_312_3682)" id="Icon">
                      <path d="M7.99716 11.9957V3.33215" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p307ff100} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p93e5780} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p33dd0700} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p90bb700} id="Vector_5" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p192c4b00} id="Vector_6" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p1550f540} id="Vector_7" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.pa1e7380} id="Vector_8" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </g>
                    <defs>
                      <clipPath id="clip0_312_3682">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </Wrapper>
                </div>
              </div>
              <Text text="AI Engineering" additionalClassNames="w-[168px]" />
              <div className="absolute content-stretch flex flex-col h-[10px] items-start left-[208px] top-[14px] w-[6px]" data-name="Text">
                <Icon10 />
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[40px] left-[4px] rounded-[10px] top-[132px] w-[228px]" data-name="Button">
              <div className="absolute left-[12px] size-[16px] top-[11px]" data-name="Text">
                <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                  <Wrapper>
                    <g clipPath="url(#clip0_312_3551)" id="Icon">
                      <path d={svgPaths.p2497b400} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p3d85e372} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.p35152900} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d={svgPaths.pb37b980} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                      <path d="M7.99716 7.99716V5.33144" id="Vector_5" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </g>
                    <defs>
                      <clipPath id="clip0_312_3551">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </Wrapper>
                </div>
              </div>
              <Text text="Knowledge Graphs" additionalClassNames="w-[168px]" />
              <div className="absolute content-stretch flex flex-col h-[10px] items-start left-[208px] top-[14px] w-[6px]" data-name="Text">
                <Icon10 />
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[40px] left-[4px] rounded-[10px] top-[172px] w-[228px]" data-name="Button">
              <div className="absolute left-[12px] size-[16px] top-[11px]" data-name="Text">
                <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                  <Wrapper2 additionalClassNames="relative shrink-0 size-[16px]">
                    <div className="absolute contents inset-0" data-name="Clip path group">
                      <Group additionalClassNames="inset-[8.33%_8.3%_8.37%_8.33%] mask-position-[-1.333px_-1.333px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6696 14.6576">
                          <g id="Group">
                            <path d={svgPaths.p18ea38f0} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                            <path d={svgPaths.pdadd180} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                            <path d={svgPaths.p243ef680} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          </g>
                        </svg>
                      </Group>
                    </div>
                  </Wrapper2>
                </div>
              </div>
              <Text text="Shared Tools" additionalClassNames="w-[168px]" />
              <div className="absolute flex h-[6px] items-center justify-center left-[206px] top-[16px] w-[10px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
                <div className="flex-none rotate-90">
                  <div className="content-stretch flex flex-col h-[10px] items-start relative w-[6px]" data-name="Text">
                    <Icon10 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[642px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Icon11>
                  <path d={svgPaths.p3cc8d400} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M5.99787 4.66501H9.99645" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M5.99787 7.99716H9.99645" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M5.99787 11.3293H9.99645" id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </Icon11>
              </div>
            </Wrapper5>
            <TextText text="Data Model" />
          </div>
          <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[40px] left-[8px] rounded-[10px] top-[686px] w-[238px]" data-name="Button">
            <div className="absolute left-[12px] size-[16px] top-[11px]" data-name="Text">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Wrapper>
                  <g clipPath="url(#clip0_312_3545)" id="Icon">
                    <path d={svgPaths.p21404e00} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d={svgPaths.p395b7a00} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d="M3.99858 3.99858H4.00524" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d="M3.99858 11.9957H4.00524" id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </g>
                  <defs>
                    <clipPath id="clip0_312_3545">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </Wrapper>
              </div>
            </div>
            <Text text="Data Serving" additionalClassNames="w-[178px]" />
            <div className="absolute content-stretch flex flex-col h-[10px] items-start left-[218px] top-[14px] w-[6px]" data-name="Text">
              <Icon10 />
            </div>
          </div>
          <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[40px] left-[8px] rounded-[10px] top-[730px] w-[238px]" data-name="Button">
            <div className="absolute left-[12px] size-[16px] top-[11px]" data-name="Text">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Icon11>
                  <path d={svgPaths.p2545c340} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p1f301500} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </Icon11>
              </div>
            </div>
            <Text text="Operations" additionalClassNames="w-[178px]" />
            <div className="absolute content-stretch flex flex-col h-[10px] items-start left-[218px] top-[14px] w-[6px]" data-name="Text">
              <Icon10 />
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[774px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Icon11>
                  <path d={svgPaths.p239e0700} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p35d35500} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </Icon11>
              </div>
            </Wrapper5>
            <TextText text="Alerts" />
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[8px] px-[13px] py-px rounded-[10px] top-[818px] w-[238px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <Wrapper5 additionalClassNames="size-[16px]">
              <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-0" data-name="Container">
                <Wrapper>
                  <g clipPath="url(#clip0_312_3726)" id="Icon">
                    <path d={svgPaths.p2e209400} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d={svgPaths.p284f1000} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d="M7.99716 11.3293H8.00382" id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </g>
                  <defs>
                    <clipPath id="clip0_312_3726">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </Wrapper>
              </div>
            </Wrapper5>
            <TextText text="Support" />
          </div>
        </div>
      </div>
    </div>
  );
}