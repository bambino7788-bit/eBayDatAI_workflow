import svgPaths from "./svg-rog9t5t2eb";
import imgContainer from "figma:asset/0e786d92df0c280190ba4bd872695e7b7dc9f876.png";
import imgContainer1 from "figma:asset/41830add74a9cbaba2ab040fc6d7e21e2b6ab044.png";
import imgContainer2 from "figma:asset/248ccc3a032b449a0d01237213956c2a8bbfcd0b.png";
import imgContainer3 from "figma:asset/ea94f5dfd1a73799aafb0d5fdc704e96c4753155.png";
import imgContainer4 from "figma:asset/0b2df5217e341e95d769b480096441a422b871e5.png";

function IconChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center min-h-[36px] relative shrink-0" data-name="Breadcrumb">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#737373] text-[14px] tracking-[0.07px]">Home</p>
      <IconChevronRight />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">{`Emily's Project`}</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">Search</p>
      </div>
    </div>
  );
}

function IconCalendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="time">
      <IconCalendar />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">
        <span className="leading-[1.5]">{`Updated `}</span>
        <span className="leading-[1.5]">2026-06-01 00:00:00</span>
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Row">
      <Badge />
      <Time />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="title">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.48px]">{`Emily's Project`}</p>
      <Row />
    </div>
  );
}

function Action() {
  return <div className="content-stretch flex items-start shrink-0" data-name="Action" />;
}

function TitleAction() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title+Action">
      <Title />
      <Action />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[29px] min-w-[29px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" data-name="Tab">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-nowrap">
            <p className="leading-[1.5]">Pool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="flex-[1_0_0] min-h-[29px] min-w-[29px] relative rounded-[10px]" data-name="Tab">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-nowrap">
            <p className="leading-[1.5]">Pipeline Variables</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="flex-[1_0_0] min-h-[29px] min-w-[29px] relative rounded-[10px]" data-name="Tab">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-nowrap">
            <p className="leading-[1.5]">Notebook Environment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="flex-[1_0_0] min-h-[29px] min-w-[29px] relative rounded-[10px]" data-name="Tab">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-nowrap">
            <p className="leading-[1.5]">Alert Method Template</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div className="flex-[1_0_0] min-h-[29px] min-w-[29px] relative rounded-[10px]" data-name="Tab">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-nowrap">
            <p className="leading-[1.5]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full" data-name="Tabs">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Tab />
          <Tab1 />
          <Tab2 />
          <Tab3 />
          <Tab4 />
        </div>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="CardHeader">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Pool Settings</p>
      </div>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#737373] text-[14px] tracking-[0.07px]">Accounts used by the project to access systems in specific environments.</p>
    </div>
  );
}

function DecorationLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Decoration left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Decoration left">
          <g id="1" />
          <path d={svgPaths.p10eeed00} fill="var(--fill-0, #737373)" id="Pixel override hack" />
        </g>
      </svg>
    </div>
  );
}

function Al1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="AL">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Search</p>
      </div>
    </div>
  );
}

function Al() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[21px] items-center min-h-px min-w-px overflow-clip relative" data-name="AL">
      <DecorationLeft />
      <Al1 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white min-h-[36px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div className="content-stretch flex items-center min-h-[inherit] overflow-clip px-[12px] py-[7.5px] relative rounded-[inherit] w-full">
        <Al />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Filter">
      <Input />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[7.5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Change Log</p>
      </div>
    </div>
  );
}

function LeftIconWrapper() {
  return (
    <div className="relative shrink-0 size-[13.25px]" data-name="Left icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.25 13.25">
        <g id="Left icon wrapper">
          <path d={svgPaths.p125e98c0} fill="var(--fill-0, #FAFAFA)" id="Left icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0968f6] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[7.5px] relative rounded-[8px] shrink-0" data-name="Button">
      <LeftIconWrapper />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Configure</p>
      </div>
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Action">
      <Button />
      <Button1 />
    </div>
  );
}

function FilterAction() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Filter+Action">
      <Filter />
      <Action1 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative w-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox1 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox2 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox3 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox4 />
        </div>
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox5 />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[38px]" data-name="column">
      <TableHeader />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Pool Name</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Spark A</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">MySQL B</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Spark B</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">MySQL A</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">MySQL C</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="column">
      <TableHeader1 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Maximum Slot</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">100</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">30</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">20</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">11</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">21</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="column">
      <TableHeader2 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Comments</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Market_Sans:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#191919] text-[14px] whitespace-pre-wrap">Request overtime</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="column">
      <TableHeader3 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function IconArrowUpDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / arrow-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / arrow-up-down" opacity="0.5">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Last Updated</p>
          <IconArrowUpDown />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="column">
      <TableHeader4 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Updated by</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer} width="32" />
      </div>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Olivia Brown</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer1} width="32" />
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar1 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Emily Chen</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer2} width="32" />
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar2 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Mia Davis</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer3} width="32" />
      </div>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar3 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Isabella Wilson</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer4} width="32" />
      </div>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar4 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Emma Carter</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="column">
      <TableHeader5 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Actions</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper />
    </div>
  );
}

function Al2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al2 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper1 />
    </div>
  );
}

function Al3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon1 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al3 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper2 />
    </div>
  );
}

function Al4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon2 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al4 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper3 />
    </div>
  );
}

function Al5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon3 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al5 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper4 />
    </div>
  );
}

function Al6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon4 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al6 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-name="column">
      <TableHeader6 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Table">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Table">
      <Table1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="container">
      <FilterAction />
      <Table />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <CardHeader />
      <Container2 />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="CardHeader">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Pipeline Variables</p>
      </div>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#737373] text-[14px] tracking-[0.07px]">Accounts used by the project to access systems in specific environments.</p>
    </div>
  );
}

function DecorationLeft1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Decoration left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Decoration left">
          <g id="1" />
          <path d={svgPaths.p10eeed00} fill="var(--fill-0, #737373)" id="Pixel override hack" />
        </g>
      </svg>
    </div>
  );
}

function Al8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="AL">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Search</p>
      </div>
    </div>
  );
}

function Al7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[21px] items-center min-h-px min-w-px overflow-clip relative" data-name="AL">
      <DecorationLeft1 />
      <Al8 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white min-h-[36px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div className="content-stretch flex items-center min-h-[inherit] overflow-clip px-[12px] py-[7.5px] relative rounded-[inherit] w-full">
        <Al7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Filter1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Filter">
      <Input1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[7.5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Change Log</p>
      </div>
    </div>
  );
}

function LeftIconWrapper1() {
  return (
    <div className="relative shrink-0 size-[13.25px]" data-name="Left icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.25 13.25">
        <g id="Left icon wrapper">
          <path d={svgPaths.p125e98c0} fill="var(--fill-0, #FAFAFA)" id="Left icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0968f6] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[7.5px] relative rounded-[8px] shrink-0" data-name="Button">
      <LeftIconWrapper1 />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
        <p className="leading-[1.5]">Configure</p>
      </div>
    </div>
  );
}

function Action2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Action">
      <Button2 />
      <Button3 />
    </div>
  );
}

function FilterAction1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Filter+Action">
      <Filter1 />
      <Action2 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative w-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox6 />
        </div>
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox7 />
        </div>
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox8 />
        </div>
      </div>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox9 />
        </div>
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox10 />
        </div>
      </div>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative size-[16px] shrink-0" data-name="Checkbox">
      <div className="absolute bg-white left-px rounded-[4px] size-[14px] top-px" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[10px] relative size-full">
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
          <Checkbox11 />
        </div>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[38px]" data-name="column">
      <TableHeader7 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Key</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Spark</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">MySQL</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Spark</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">MySQL</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">MySQL</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="column">
      <TableHeader8 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
    </div>
  );
}

function TableHeader9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Value</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Prod</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Test</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Test</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Test</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">Test</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="column">
      <TableHeader9 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function TableHeader10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Comments</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Market_Sans:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#191919] text-[14px] whitespace-pre-wrap">Request overtime</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">&nbsp;</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="column">
      <TableHeader10 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
    </div>
  );
}

function IconArrowUpDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / arrow-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / arrow-up-down" opacity="0.5">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TableHeader11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Last Updated</p>
          <IconArrowUpDown1 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#0a0a0a] text-[14px] tracking-[0.07px] whitespace-pre-wrap">2026-06-01 00:00:00</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="column">
      <TableHeader11 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
    </div>
  );
}

function TableHeader12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Updated by</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer} width="32" />
      </div>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar5 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Olivia Brown</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer1} width="32" />
      </div>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar6 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Emily Chen</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer2} width="32" />
      </div>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar7 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Mia Davis</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer3} width="32" />
      </div>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar8 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Isabella Wilson</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[16px] shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[32px]" data-name="Container">
        <img alt="" className="block max-w-none size-full" height="32" src={imgContainer4} width="32" />
      </div>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
          <Avatar9 />
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Emma Carter</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="column">
      <TableHeader12 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
    </div>
  );
}

function TableHeader13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] py-[7.5px] relative w-full">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Actions</p>
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper5 />
    </div>
  );
}

function Al9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon5 />
    </div>
  );
}

function TableCell65() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al9 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper6 />
    </div>
  );
}

function Al10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon6 />
    </div>
  );
}

function TableCell66() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al10 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper7 />
    </div>
  );
}

function Al11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon7 />
    </div>
  );
}

function TableCell67() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al11 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper8 />
    </div>
  );
}

function Al12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon8 />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al12 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function IconWrapper9() {
  return (
    <div className="relative shrink-0 size-[16.25px]" data-name="Icon wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
        <g id="Icon wrapper">
          <path d={svgPaths.p365e6b00} fill="var(--fill-0, #0A0A0A)" id="Pixel color override hack" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon 1">
      <IconWrapper9 />
    </div>
  );
}

function Al13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AL">
      <Icon9 />
    </div>
  );
}

function TableCell69() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <Al13 />
          <div className="absolute bg-[#e5e5e5] bottom-0 h-px left-0 right-0" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-name="column">
      <TableHeader13 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
    </div>
  );
}

function Table3() {
  return (
    <div className="content-stretch flex items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Table">
      <Column7 />
      <Column8 />
      <Column9 />
      <Column10 />
      <Column11 />
      <Column12 />
      <Column13 />
    </div>
  );
}

function Table2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Table">
      <Table3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="container">
      <FilterAction1 />
      <Table2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <CardHeader1 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <TitleAction />
      <Tabs />
      <Content />
      <Content1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[8px] px-[24px] relative size-full" data-name="Container">
      <Breadcrumb />
      <Container1 />
    </div>
  );
}